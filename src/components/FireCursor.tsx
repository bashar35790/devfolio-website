"use client";

import React, { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
  life: number;
  maxLife: number;
  type: "flame" | "ember" | "burst";
}

export default function FireCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Mouse coordinate trackers
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const prevMouse = useRef({ x: 0, y: 0 });
  const speed = useRef(0);
  const isHovered = useRef(false);
  const isClicked = useRef(false);
  
  // Animation properties
  const particles = useRef<Particle[]>([]);
  const lerpFactor = 0.15; // Smoothness factor
  const angle = useRef(0);

  useEffect(() => {
    // 1. Check if device is mobile or touch-enabled
    const checkDevice = () => {
      const mobileCheck = 
        window.matchMedia("(pointer: coarse)").matches || 
        window.innerWidth < 768;
      setIsMobile(mobileCheck);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    if (isMobile) return () => window.removeEventListener("resize", checkDevice);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // 2. Event Listeners for Mouse Tracking
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseDown = () => {
      isClicked.current = true;
      // Trigger a click burst immediately at the current cursor location
      createClickBurst(target.current.x, target.current.y);
    };

    const handleMouseUp = () => {
      isClicked.current = false;
    };

    // Track Hover over interactive tags
    const handleMouseOver = (e: MouseEvent) => {
      const targetEl = e.target as HTMLElement;
      if (
        targetEl && 
        (targetEl.closest("a") || 
         targetEl.closest("button") || 
         targetEl.closest("[role='button']") || 
         targetEl.closest("input") || 
         targetEl.closest("textarea") || 
         targetEl.closest("select") || 
         targetEl.classList.contains("btn") || 
         targetEl.classList.contains("clickable"))
      ) {
        isHovered.current = true;
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const targetEl = e.target as HTMLElement;
      if (
        targetEl && 
        (targetEl.closest("a") || 
         targetEl.closest("button") || 
         targetEl.closest("[role='button']") || 
         targetEl.closest("input") || 
         targetEl.closest("textarea") || 
         targetEl.closest("select") || 
         targetEl.classList.contains("btn") || 
         targetEl.classList.contains("clickable"))
      ) {
        isHovered.current = false;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    // 3. Spawners for Cosmic Cyan Fire Particles
    const colors = {
      flame: ["#00D2FF", "#0084FF", "#00F5D4", "#E0F7FA", "#FFFFFF"],
      ember: ["#00F5D4", "#00D2FF", "#0084FF"],
      burst: ["#FFFFFF", "#00D2FF", "#0084FF", "#00F5D4", "#E0F7FA"],
    };

    const createFlameParticle = (x: number, y: number, isHoverState: boolean) => {
      const pCount = isHoverState ? 3 : 1;
      for (let i = 0; i < pCount; i++) {
        const spread = isHoverState ? 12 : 6;
        const sizeSpread = isHoverState ? 1.5 : 1;
        
        particles.current.push({
          x: x + (Math.random() - 0.5) * spread,
          y: y + (Math.random() - 0.5) * spread,
          vx: (Math.random() - 0.5) * 1.5,
          vy: -Math.random() * 2.5 - 0.5,
          size: (Math.random() * 8 + 4) * sizeSpread,
          color: colors.flame[Math.floor(Math.random() * colors.flame.length)],
          opacity: 0.8,
          life: 0,
          maxLife: Math.random() * 20 + 20,
          type: "flame",
        });
      }
    };

    const createEmberParticle = (x: number, y: number, speedVal: number) => {
      // Spawn sparks when moving fast
      if (Math.random() > 0.4 - Math.min(speedVal * 0.01, 0.3)) {
        particles.current.push({
          x,
          y,
          vx: (Math.random() - 0.5) * (2 + speedVal * 0.1),
          vy: -Math.random() * 3 - 1,
          size: Math.random() * 3 + 1.5,
          color: colors.ember[Math.floor(Math.random() * colors.ember.length)],
          opacity: 1.0,
          life: 0,
          maxLife: Math.random() * 30 + 15,
          type: "ember",
        });
      }
    };

    const createClickBurst = (x: number, y: number) => {
      const burstCount = 24;
      for (let i = 0; i < burstCount; i++) {
        const angleVal = (i / burstCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
        const velocity = Math.random() * 6 + 3;
        
        particles.current.push({
          x,
          y,
          vx: Math.cos(angleVal) * velocity,
          vy: Math.sin(angleVal) * velocity - 1, // slight upward float
          size: Math.random() * 4 + 2,
          color: colors.burst[Math.floor(Math.random() * colors.burst.length)],
          opacity: 1.0,
          life: 0,
          maxLife: Math.random() * 25 + 15,
          type: "burst",
        });
      }
    };

    // 4. Main 60fps RequestAnimationFrame Render Loop
    let animationFrameId: number;

    const renderLoop = () => {
      // Clear canvas with translucent black overlay for a premium trailing blend/glow
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isVisible) {
        // Linear Interpolation (lerp) for smooth follower motion
        target.current.x += (mouse.current.x - target.current.x) * lerpFactor;
        target.current.y += (mouse.current.y - target.current.y) * lerpFactor;

        // Calculate velocity metrics
        const dx = target.current.x - prevMouse.current.x;
        const dy = target.current.y - prevMouse.current.y;
        speed.current = Math.hypot(dx, dy);
        angle.current = Math.atan2(dy, dx);

        prevMouse.current.x = target.current.x;
        prevMouse.current.y = target.current.y;

        // Spawn particles based on motion
        createFlameParticle(target.current.x, target.current.y, isHovered.current);
        if (speed.current > 1) {
          createEmberParticle(target.current.x, target.current.y, speed.current);
        }

        // Draw Custom Cinematic Fire Core Head (Cyan/Blue Theme)
        ctx.save();
        ctx.translate(target.current.x, target.current.y);

        // Core stretch and squash factor based on speed
        const maxStretch = 1.6;
        const stretchAmount = 1 + Math.min(speed.current * 0.02, maxStretch - 1);
        const squashAmount = 1 / stretchAmount;

        // Rotate to point in direction of movement
        if (speed.current > 0.5) {
          ctx.rotate(angle.current);
        }

        // Set high-end glowing properties (Cyan glow)
        ctx.shadowBlur = isHovered.current ? 45 : 25;
        ctx.shadowColor = "rgba(0, 168, 255, 0.75)";
        ctx.globalCompositeOperation = "screen";

        // Create glowing radial core gradient
        const coreRadius = isHovered.current ? 16 : 8;
        const gradient = ctx.createRadialGradient(0, 0, 1, 0, 0, coreRadius);
        gradient.addColorStop(0, "#FFFFFF");
        gradient.addColorStop(0.3, "#00F5D4");
        gradient.addColorStop(0.6, "#00A8FF");
        gradient.addColorStop(1.0, "rgba(0, 168, 255, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        
        // Render squashed/stretched core ellipse
        ctx.ellipse(0, 0, coreRadius * stretchAmount, coreRadius * squashAmount, 0, 0, Math.PI * 2);
        ctx.fill();

        // If hovered, draw a thin elegant outer glowing border
        if (isHovered.current) {
          ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.ellipse(0, 0, coreRadius * 1.5 * stretchAmount, coreRadius * 1.5 * squashAmount, 0, 0, Math.PI * 2);
          ctx.stroke();
        }

        ctx.restore();
      }

      // 5. Update & Draw Flame Particles Trail
      ctx.save();
      ctx.globalCompositeOperation = "screen";

      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.life++;

        if (p.life >= p.maxLife) {
          particles.current.splice(i, 1);
          continue;
        }

        // Apply physics forces
        p.x += p.vx;
        p.y += p.vy;

        // Thermal gravity: flame particles drift upwards and horizontally wobble
        if (p.type === "flame") {
          p.vy *= 0.98; // terminal upward velocity
          p.vx += Math.sin(p.life * 0.2) * 0.15; // horizontal fire lick wave
          p.opacity = 1 - p.life / p.maxLife;
          p.size *= 0.95; // burn out and shrink
        } else if (p.type === "ember") {
          p.vy += 0.05; // slight falling gravity over time
          p.vx *= 0.98;
          p.opacity = 1 - p.life / p.maxLife;
        } else if (p.type === "burst") {
          p.vx *= 0.92;
          p.vy *= 0.92;
          p.vy += 0.05; // gravity pulls burst fragments down slightly
          p.opacity = 1 - p.life / p.maxLife;
          p.size *= 0.96;
        }

        // Draw particle
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.shadowBlur = p.type === "flame" ? p.size * 1.5 : 5;
        ctx.shadowColor = p.color;

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.1, p.size), 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    animationFrameId = requestAnimationFrame(renderLoop);

    // Clean up events
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isVisible, isMobile]);

  // Touch screens fallback: do not render custom cursor element
  if (isMobile) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[999999] mix-blend-screen"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.4s ease",
      }}
    />
  );
}
