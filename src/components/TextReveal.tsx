"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  staggerDelay?: number;
}

export default function TextReveal({
  text,
  className = "",
  delay = 0,
  duration = 0.8,
  direction = "up",
  staggerDelay = 0.02,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const words = text.split(" ");

  const getDirectionOffset = () => {
    switch (direction) {
      case "up": return { y: "100%" };
      case "down": return { y: "-100%" };
      case "left": return { x: "100%" };
      case "right": return { x: "-100%" };
      default: return { y: "100%" };
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      ...getDirectionOffset(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: duration,
        ease: [0.25, 0.1, 0.25, 1], // Luxury premium bezier easing
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`inline-block ${className}`}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-[0.25em] py-[0.1em]">
          <motion.span
            variants={wordVariants}
            className="inline-block"
          >
            {word === "" ? "\u00A0" : word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}
