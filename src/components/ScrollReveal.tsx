"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import gsap from "gsap";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "scale" | "blur";
  duration?: number;
  delay?: number;
  stagger?: boolean;
  staggerDelay?: number;
  parallax?: boolean;
  parallaxSpeed?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = "up",
  duration = 0.8,
  delay = 0,
  stagger = false,
  staggerDelay = 0.1,
  parallax = false,
  parallaxSpeed = 50,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const controls = useAnimation();

  // 1. Framer Motion reveal configs
  const getDirectionOffset = () => {
    switch (direction) {
      case "up": return { y: 40 };
      case "down": return { y: -40 };
      case "left": return { x: 40 };
      case "right": return { x: -40 };
      case "scale": return { scale: 0.9 };
      case "blur": return { filter: "blur(10px)" };
      default: return { y: 40 };
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  // 2. Parallax effect with GSAP (ScrollTrigger)
  useEffect(() => {
    if (parallax && ref.current) {
      const element = ref.current;
      gsap.to(element, {
        yPercent: parallaxSpeed,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, [parallax, parallaxSpeed]);

  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger ? staggerDelay : 0,
      },
    },
  };

  const childVariants: Variants = {
    hidden: {
      opacity: 0,
      ...getDirectionOffset(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: duration,
        ease: [0.25, 0.1, 0.25, 1], // Luxury motion curve
        delay: delay,
      },
    },
  };

  if (stagger) {
    return (
      <motion.div
        ref={ref}
        variants={parentVariants}
        initial="hidden"
        animate={controls}
        className={className}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return (
              <motion.div variants={childVariants}>
                {child}
              </motion.div>
            );
          }
          return child;
        })}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      variants={childVariants}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
}
