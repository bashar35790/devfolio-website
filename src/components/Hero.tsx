"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaDownload,
  FaArrowRight,
  FaChevronDown
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub
} from "react-icons/si";

const techStack = [
  { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6" /> },
  { name: "TypeScript", icon: <SiTypescript className="w-6 h-6" /> },
  { name: "React", icon: <SiReact className="w-6 h-6" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6" /> },
  { name: "Node.js", icon: <SiNodedotjs className="w-6 h-6" /> },
  { name: "Express.js", icon: <SiExpress className="w-6 h-6" /> },
  { name: "MongoDB", icon: <SiMongodb className="w-6 h-6" /> },
  { name: "Git", icon: <SiGit className="w-6 h-6" /> },
  { name: "GitHub", icon: <SiGithub className="w-6 h-6" /> },
];

const Hero = () => {
  const titles = ["Full Stack Developer", "MERN Stack Specialist", "UI/UX Designer", "Problem Solver"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = titles[currentTitleIndex];

      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex, titles, typingSpeed]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="relative flex flex-col justify-center overflow-hidden bg-[#0A0A0C] pt-20">
      {/* Background Decorative Gradients */}
      <div className="absolute -top-100 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-primary/5 blur-[100px] rounded-full" />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <div className="space-y-2">
            <motion.h4
              variants={itemVariants}
              className="text-primary font-medium tracking-widest uppercase text-sm"
            >
              Hello.
            </motion.h4>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold tracking-tight text-white"
            >
              I&apos;m <span className="text-gradient">Bashar</span>
            </motion.h1>
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-4xl font-semibold text-white/80 min-h-[1.5em] flex items-center"
            >
              <span className="mr-2">I am a</span>
              <span className="text-primary">{currentText}</span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-[3px] h-8 md:h-10 bg-primary ml-1"
              />
            </motion.h2>
          </div>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed"
          >
            Crafting digital experiences that combine innovative design with robust, scalable code. Specialized in the MERN stack and modern web ecosystems.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <button className="btn btn-primary group">
              Hire Me
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn btn-secondary group">
              Download Resume
              <FaDownload className="w-4 h-4 group-hover:translate-y-1 transition-transform text-primary" />
            </button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6 pt-4"
          >
            {[
              { icon: <FaGithub />, href: "#" },
              { icon: <FaLinkedin />, href: "#" },
              { icon: <FaTwitter />, href: "#" },
              { icon: <FaFacebook />, href: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="text-gray-400 hover:text-primary text-2xl transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          {/* Glowing Background Rings */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-[80%] aspect-square rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-[90%] aspect-square rounded-full border border-primary/10 animate-[spin_30s_linear_infinite_reverse]" />
            <div className="absolute w-[100%] aspect-square rounded-full border border-primary/5 animate-[spin_40s_linear_infinite]" />
            <div className="absolute w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-10 right-10 glass p-4 rounded-2xl hidden md:block z-100"
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <p className="text-xs font-medium text-white/80">Available for Work</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 -left-5 glass p-4 rounded-2xl hidden md:block z-100"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                <SiReact className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Main Stack</p>
                <p className="text-sm font-bold text-white">MERN Specialist</p>
              </div>
            </div>
          </motion.div>

          {/* Profile Image */}
          <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden shadow-2xl glow-ring z-0">
            <Image
              src="/2.png"
              alt="Bashar - Full Stack Developer"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent opacity-40" />
          </div>
        </motion.div>
      </div>

      {/* Tech Stack Strip */}
      <div className="mt-24 w-full border-y border-white/5 bg-white/[0.02] backdrop-blur-sm py-10 overflow-hidden ">
        <div className="flex animate-[scroll_40s_linear_infinite] whitespace-nowrap gap-16 items-center px-16 ">
          {[...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors cursor-default group z-100">
              <div className="text-primary group-hover:scale-110 transition-transform">
                {tech.icon}
              </div>
              <span className="text-lg font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-40 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <FaChevronDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
};

export default Hero;
