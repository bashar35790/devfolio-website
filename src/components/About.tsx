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
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import Magnetic from "./Magnetic";

const About = () => {
  const infoItems = [
    { label: "Name", value: "Abul Bashar", icon: <FaUser className="text-primary" /> },
    { label: "Age", value: "24 Years", icon: <FaCalendarAlt className="text-primary" /> },
    { label: "Location", value: "Dhaka, Bangladesh", icon: <FaMapMarkerAlt className="text-primary" /> },
    { label: "Phone", value: "+8801833487526", icon: <FaPhoneAlt className="text-primary" /> },
    { label: "Email", value: "bashar35790@gmail.com", icon: <FaEnvelope className="text-primary" /> },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-[#0A0A0C]">
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
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

                <div className="relative h-full w-full bg-[#111] rounded-3xl overflow-hidden border border-white/10">
                  <Image
                    src="/1.png"
                    alt="Abul Bashar"
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  {/* Glassmorphism Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent opacity-60" />
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
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                  Hello, I am <span className="text-gradient bg-gradient-to-r from-primary via-primary/80 to-white">Abul Bashar</span>
                </h2>
                <h3 className="text-xl md:text-2xl font-bold text-white/80">
                  Full Stack Web Developer
                </h3>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                I am a passionate Full Stack Developer with expertise in building modern, scalable web applications.
                With a strong focus on the MERN stack and Next.js, I create high-performance digital experiences
                that combine elegant design with robust engineering. My goal is to deliver user-centric
                solutions that solve real-world problems efficiently.
              </p>
            </ScrollReveal>

            {/* Glassmorphism Info Card */}
            <ScrollReveal direction="blur" delay={0.2}>
              <div className="glass p-8 rounded-3xl border border-white/10 grid md:grid-cols-2 gap-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {infoItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 relative z-10 cursor-pointer group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-lg border border-white/5 group-hover:border-primary/30 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{item.label}</p>
                      <p className="text-white font-medium group-hover:text-primary transition-colors">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* CTA Buttons with Magnetic pull */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="flex flex-wrap gap-4 pt-4">
                <Magnetic>
                  <Link href="/resume.pdf" download className="btn btn-primary group relative overflow-hidden px-8 py-4">
                    <span className="relative z-10 flex items-center gap-2">
                      Download CV <FaDownload className="group-hover:translate-y-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                  </Link>
                </Magnetic>

                <Magnetic>
                  <Link href="tel:+8801833487526" className="btn btn-secondary group hover:bg-white/5 transition-all cursor-pointer px-8 py-4">
                    Call Now <FaPhone className="text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Link>
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
