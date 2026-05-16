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
  FaPaperPlane,
  FaPhone
} from "react-icons/fa";
import Link from "next/link";

const About = () => {
  const infoItems = [
    { label: "Name", value: "Abul Bashar", icon: <FaUser className="text-primary" /> },
    { label: "Age", value: "24 Years", icon: <FaCalendarAlt className="text-primary" /> },
    { label: "Location", value: "Dhaka, Bangladesh", icon: <FaMapMarkerAlt className="text-primary" /> },
    { label: "Phone", value: "+8801833487526", icon: <FaPhoneAlt className="text-primary" /> },
    { label: "Email", value: "bashar35790@gmail.com", icon: <FaEnvelope className="text-primary" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.2, 0.9],
      },
    },
  };

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
          {/* Left Side: Image with Floating Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-start"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group"
            >
              {/* Soft Shadow Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-500/20 blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />

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
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h4 variants={itemVariants} className="text-primary font-medium tracking-widest uppercase text-sm">
                About Me
              </motion.h4>
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Hello, I am <span className="text-gradient">Abul Bashar</span>
              </motion.h2>
              <motion.h3 variants={itemVariants} className="text-xl md:text-2xl font-semibold text-white/80">
                Full Stack Web Developer
              </motion.h3>
            </div>

            <motion.p variants={itemVariants} className="text-gray-400 text-lg leading-relaxed max-w-xl">
              I am a passionate Full Stack Developer with expertise in building modern, scalable web applications.
              With a strong focus on the MERN stack and Next.js, I create high-performance digital experiences
              that combine elegant design with robust engineering. My goal is to deliver user-centric
              solutions that solve real-world problems efficiently.
            </motion.p>

            {/* Glassmorphism Info Card */}
            <motion.div
              variants={itemVariants}
              className="glass p-8 rounded-3xl border border-white/10 grid md:grid-cols-2 gap-6 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              {infoItems.map((item, index) => (
                <div key={index} className="flex items-center gap-4 relative z-10 cursor-pointer group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-lg border border-white/5 group-hover:border-primary/30 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <Link href="/resume.pdf" download className="btn btn-primary group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Download CV <FaDownload className="group-hover:translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
              </Link>

              <Link href="tel:+8801833487526" className="btn btn-secondary group hover:bg-white/5 transition-all cursor-pointer">
                Call Now <FaPhone className="text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
