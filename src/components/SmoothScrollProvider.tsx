"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const scrollProgressRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
    });

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // 2. Scroll Progress Bar Animation via GSAP ScrollTrigger
    if (scrollProgressRef.current) {
      gsap.to(scrollProgressRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });
    }

    // 3. Custom Spotlight Follower Effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // Select hoverable elements
      const target = e.target as HTMLElement;
      const isHovered = target.closest("a, button, [role='button'], .clickable");

      gsap.to(spotlightRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.2,
        ease: "power2.out",
        scale: isHovered ? 2.5 : 1,
        borderColor: isHovered ? "rgba(255, 95, 56, 0.6)" : "rgba(255, 95, 56, 0.2)",
        backgroundColor: isHovered ? "rgba(255, 95, 56, 0.05)" : "transparent",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 4. Section Appear Animations (GSAP ScrollTrigger)
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      gsap.fromTo(
        section.querySelectorAll(".section-animate-in"),
        { opacity: 0, y: 50, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Cleanup functions
    return () => {
      lenis.destroy();
      window.removeEventListener("mousemove", handleMouseMove);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Premium Scroll Progress Indicator */}
      <div
        ref={scrollProgressRef}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-[#ff8466] to-primary z-[9999] origin-left scale-x-0"
      />

      {/* Luxury Spotlight/Cursor Follower (only visible on large screens) */}
      <div
        ref={spotlightRef}
        className="hidden lg:block fixed w-8 h-8 rounded-full border border-primary/20 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen bg-transparent transition-all duration-300"
        style={{ left: 0, top: 0 }}
      />

      {children}
    </>
  );
}
