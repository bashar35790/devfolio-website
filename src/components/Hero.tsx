"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
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
import Magnetic from "./Magnetic";
import gsap from "gsap";
import GradientCursor from "./GradientCursor";
import { siteConfig } from "@/config/site";

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

const titles = ["Full Stack Developer", "MERN Stack Specialist", "UI/UX Designer", "Problem Solver"];

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const profileImageRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    const fullText = titles[currentTitleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));

        if (currentText === fullText) {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => {
      clearTimeout(timer);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [isDeleting, currentTitleIndex, currentText]);

  // Premium Reveal Effect for profile image
  useEffect(() => {
    if (profileImageRef.current) {
      gsap.fromTo(
        profileImageRef.current,
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          delay: 0.5,
        }
      );
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
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
    <section id="home" className="relative flex flex-col justify-center overflow-hidden bg-bg-page pt-20 min-h-screen">
      {/* Background Decorative Gradients & Custom Fluid Physics Cursor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-primary/5 dark:bg-primary/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-5%] w-[35%] h-[35%] bg-primary/5 dark:bg-primary/5 blur-[120px] rounded-full" />
        <GradientCursor />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-12">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <div className="space-y-3">
            <motion.h4
              variants={itemVariants}
              className="text-primary font-semibold tracking-widest text-md"
            >
              Hello There!
            </motion.h4>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-text-main leading-none"
            >
              I&apos;m <span className="text-gradient">Abul Bashar</span>
            </motion.h1>
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-4xl font-semibold text-text-main/85 min-h-[1.5em] flex items-center"
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
            className="text-text-muted text-lg md:text-xl max-w-lg leading-relaxed"
          >
            Crafting premium digital experiences that seamlessly unite bespoke designs with robust, scalable engineering solutions. Specialized in MERN Stack and modern tech ecosystems.
          </motion.p>

          {/* Magnetic Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <Magnetic>
              <button className="btn btn-primary group cursor-pointer relative overflow-hidden px-8 py-4">
                <span className="relative z-10 flex items-center gap-2">
                  Hire Me
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
              </button>
            </Magnetic>

            <Magnetic>
              <a
                href={siteConfig.resumeUrl}
                download
                className="btn btn-secondary group cursor-pointer px-8 py-4 inline-flex"
              >
                Download Resume
                <FaDownload className="w-4 h-4 group-hover:translate-y-1 transition-transform text-primary" />
              </a>
            </Magnetic>
          </motion.div>

          {/* Magnetic Social Icons */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6 pt-4"
          >
            {[
              { icon: <FaGithub />, href: siteConfig.social.github },
              { icon: <FaLinkedin />, href: siteConfig.social.linkedin },
              { icon: <FaFacebook />, href: siteConfig.social.facebook },
            ].map((social, i) => (
              <Magnetic key={i} range={30} strength={0.4}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-primary text-2xl transition-colors duration-300 p-2 block"
                >
                  {social.icon}
                </a>
              </Magnetic>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Showcase (Morphing Shape Behind Image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.6, 0.05, 0.2, 0.9] }}
          className="relative flex justify-center items-center w-full max-w-md mx-auto aspect-square"
        >
          {/* Animated Morphing Blur Blob */}
          <div className="absolute w-[95%] aspect-square bg-gradient-to-tr from-primary via-primary/20 to-transparent blur-3xl opacity-50 morphing-blob pointer-events-none" />

          {/* Glowing Animated Outer Border Ring */}
          <div className="absolute w-[90%] aspect-square border border-primary/30 shadow-[0_0_50px_rgba(0,168,255,0.25)] morphing-blob-border pointer-events-none" />

          {/* Floating Element 1 */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-6 right-6 glass p-4 rounded-2xl hidden md:block z-20 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <p className="text-xs font-semibold text-text-main/80">Available for Work</p>
            </div>
          </motion.div>

          {/* Floating Element 2 */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 -left-5 glass p-4 rounded-2xl hidden md:block z-20 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                <SiReact className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-text-muted">Main Stack</p>
                <p className="text-sm font-bold text-text-main">MERN Specialist</p>
              </div>
            </div>
          </motion.div>

          {/* Morphing Profile Image Frame Container */}
          <div
            ref={profileImageRef}
            className="relative w-[82%] aspect-square overflow-hidden shadow-2xl z-10 border border-border-subtle bg-bg-section morphing-blob transition-all duration-300"
          >
            <Image
              src="/unnamed.png"
              alt="Bashar - Full Stack Developer"
              fill
              className="object-cover scale-110 -translate-y-2"
              priority
            />
            {/* Overlay Gradient to blend with deep navy background */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-page/60 via-transparent to-transparent opacity-60" />
          </div>
        </motion.div>
      </div>

      {/* Tech Stack Strip with Infinite Marquee */}
      <div className="mt-16 w-full border-y border-border-subtle bg-bg-section/10 backdrop-blur-sm py-8 overflow-hidden relative">
        <div className="flex whitespace-nowrap gap-16 items-center px-16 w-max animate-[scroll_45s_linear_infinite] hover:[animation-play-state:paused] cursor-pointer">
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="flex items-center gap-4 text-text-muted hover:text-text-main transition-colors duration-300 group">
              <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <span className="text-lg font-semibold tracking-wide">{tech.name}</span>
            </div>
          ))}
        </div>
        {/* Soft edge masks */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-bg-page to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-bg-page to-transparent z-10 pointer-events-none" />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-80 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted cursor-pointer hidden md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-text-muted">Scroll</span>
        <FaChevronDown className="w-4 h-4 text-primary" />
      </motion.div>
    </section>
  );
};

export default Hero;
