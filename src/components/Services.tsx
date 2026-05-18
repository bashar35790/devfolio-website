"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FaLaptopCode, 
  FaServer, 
  FaPencilRuler, 
  FaTasks, 
  FaArrowRight 
} from "react-icons/fa";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import Magnetic from "./Magnetic";

const servicesList = [
  {
    id: 1,
    title: "Frontend Develop",
    description: "Greetings, fellow digital explorers! I am Abul Bashar, a passionate frontend engineer building responsive, highly interactive, and pixel-perfect user interfaces.",
    icon: <FaLaptopCode className="w-8 h-8 text-primary" />,
  },
  {
    id: 2,
    title: "Backend Develop",
    description: "Greetings, fellow digital explorers! I am Abul Bashar, a passionate backend specialist designing robust, secure, and highly scalable APIs and system architectures.",
    icon: <FaServer className="w-8 h-8 text-primary" />,
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Greetings, fellow digital explorers! I am Abul Bashar, a passionate designer crafting intuitive user journeys, wireframes, and gorgeous, modern visual designs.",
    icon: <FaPencilRuler className="w-8 h-8 text-primary" />,
  },
  {
    id: 4,
    title: "Project Management",
    description: "Greetings, fellow digital explorers! I am Abul Bashar, a passionate manager streamlining agile workflows, coordinating goals, and ensuring elite delivery.",
    icon: <FaTasks className="w-8 h-8 text-primary" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-bg-section overflow-hidden">
      {/* Premium Background Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] -right-[10%] w-[35%] h-[35%] bg-primary/5 blur-[130px] rounded-full" 
        />
        <motion.div 
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] -left-[10%] w-[35%] h-[35%] bg-blue-500/5 blur-[120px] rounded-full" 
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Title, Description, and CTA */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal direction="left" stagger staggerDelay={0.15}>
              <div className="space-y-4">
                <span className="text-primary font-semibold tracking-widest uppercase text-sm block">
                  What I Offer
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-text-main tracking-tight leading-tight">
                  My <span className="text-gradient bg-gradient-to-r from-primary via-primary/80 to-text-main">Services</span>
                </h2>
                <div className="h-1 w-20 bg-primary rounded-full mt-4" />
              </div>

              <div className="space-y-4 text-text-muted text-lg leading-relaxed">
                <p>
                  Greetings, fellow digital explorers! I am <span className="text-text-main font-medium">Abul Bashar</span>, a passionate and innovative developer dedicated to crafting immersive digital experiences. Welcome to my online abode.
                </p>
                <p>
                  Greetings, fellow digital explorers! I am <span className="text-text-main font-medium">Abul Bashar</span>, a passionate and innovative developer dedicated to turning challenging problems into beautiful web solutions.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="pt-4">
                <Magnetic>
                  <Link href="#newsletter" className="btn btn-primary group inline-flex relative overflow-hidden px-8 py-4">
                    <span className="relative z-10 flex items-center gap-2">
                      Read More <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                  </Link>
                </Magnetic>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 2x2 Grid of Premium Glassmorphism Cards */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right" stagger staggerDelay={0.12} className="grid md:grid-cols-2 gap-6">
              {servicesList.map((service) => (
                <div key={service.id} className="relative group">
                  <div className="glass p-8 rounded-3xl hover:border-primary/30 transition-all duration-300 relative overflow-hidden flex flex-col justify-between shadow-xl cursor-pointer">
                    {/* Neon glow effect behind card */}
                    <div className="absolute -inset-px bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                    
                    <div className="space-y-6 relative z-10">
                      {/* Glowing Icon Container */}
                      <div className="w-14 h-14 rounded-2xl bg-bg-section/60 border border-border-subtle group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-500 relative">
                        <div className="absolute inset-0 bg-primary/20 blur-md rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-text-main group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-text-muted text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Decorative border line */}
                    <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>
                </div>
              ))}
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
