"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaUser,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaDownload,
  FaPhone
} from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import Magnetic from "./Magnetic";
import { siteConfig } from "@/config/site";

const About = () => {
  const infoItems = [
    { label: "Name", value: siteConfig.name, icon: <FaUser className="text-primary" /> },
    { label: "Age", value: siteConfig.age, icon: <FaCalendarAlt className="text-primary" /> },
    { label: "Location", value: siteConfig.location, icon: <FaMapMarkerAlt className="text-primary" /> },
    { label: "Phone", value: siteConfig.phone, icon: <FaPhoneAlt className="text-primary" /> },
    { label: "Email", value: siteConfig.email, icon: <FaEnvelope className="text-primary" /> },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-bg-section">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] -left-[10%] w-[30%] h-[30%] bg-primary/5 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] -right-[5%] w-[40%] h-[40%] bg-blue-500/5 blur-[100px] rounded-full"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Side: Image with Magnetic Float Effect */}
          <ScrollReveal direction="right" duration={1}>
            <div className="relative flex justify-center lg:justify-start">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
              >
                {/* Soft Shadow Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-500/20 blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

                <div className="relative h-full w-full bg-bg-page rounded-3xl overflow-hidden border border-border-subtle">
                  <Image
                    src="/unnamed.png"
                    alt="Abul Bashar"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  {/* Glassmorphism Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-section via-transparent to-transparent opacity-60" />
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Right Side: Content */}
          <div className="space-y-8">
            <ScrollReveal direction="up" stagger staggerDelay={0.15}>
              <div className="space-y-4">
                <span className="text-primary font-semibold tracking-widest uppercase text-sm block">
                  About Me
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-text-main tracking-tight leading-tight">
                  Hello, I am <span className="text-gradient bg-gradient-to-r from-primary via-primary/80 to-text-main">Abul Bashar</span>
                </h2>
                <h3 className="text-xl md:text-2xl font-bold text-text-main/80">
                  Full Stack Web Developer
                </h3>
              </div>

              <p className="text-text-muted text-lg leading-relaxed max-w-xl">
                I am a passionate Full Stack Developer with expertise in building modern, scalable web applications.
                With a strong focus on the MERN stack and Next.js, I create high-performance digital experiences
                that combine elegant design with robust engineering. My goal is to deliver user-centric
                solutions that solve real-world problems efficiently.
              </p>
            </ScrollReveal>

            {/* Glassmorphism Info Card */}
            <ScrollReveal direction="blur" delay={0.2}>
              <div className="glass p-8 rounded-3xl grid md:grid-cols-2 gap-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {infoItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 relative z-10 cursor-pointer group">
                    <div className="w-10 h-10 rounded-xl bg-bg-section/60 flex items-center justify-center text-lg border border-border-subtle group-hover:border-primary/30 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-text-muted uppercase tracking-wider font-semibold">{item.label}</p>
                      <p className="text-text-main font-medium group-hover:text-primary transition-colors">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* CTA Buttons with Magnetic pull */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="flex flex-wrap gap-4 pt-4">
                <Magnetic>
                  <a href={siteConfig.resumeUrl} download className="btn btn-primary group relative overflow-hidden px-8 py-4 inline-flex">
                    <span className="relative z-10 flex items-center gap-2">
                      Download CV <FaDownload className="group-hover:translate-y-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                  </a>
                </Magnetic>

                <Magnetic>
                  <a href={`tel:${siteConfig.phone}`} className="btn btn-secondary group hover:bg-card-bg transition-all cursor-pointer px-8 py-4 inline-flex">
                    Call Now <FaPhone className="text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </a>
                </Magnetic>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
