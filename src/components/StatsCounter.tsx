"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 48, suffix: "+", label: "Happy Clients" },
  { value: 99, suffix: "%", label: "Success Rate" },
];

export default function StatsCounter() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const counters = el.querySelectorAll(".stat-number");
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-target") || "0", 10);

      gsap.fromTo(
        counter,
        { textContent: "0" },
        {
          textContent: target,
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: counter,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-border-subtle bg-bg-page/20 backdrop-blur-sm relative z-10">
      {statsData.map((stat, i) => (
        <div key={i} className="text-center space-y-2">
          <div className="text-4xl md:text-5xl font-extrabold text-primary flex justify-center items-baseline tracking-tight">
            <span className="stat-number" data-target={stat.value}>0</span>
            <span>{stat.suffix}</span>
          </div>
          <p className="text-text-muted text-sm md:text-base font-medium">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
