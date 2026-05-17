"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from "react-icons/fa";
import { projects } from "@/contents/projects";
import ScrollReveal from "./ScrollReveal";
import Magnetic from "./Magnetic";

const categories = ["All Projects", "Full Stack", "Frontend", "Backend", "UI/UX", "Mobile Apps"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = projects.filter((project) => 
    activeCategory === "All Projects" || project.category === activeCategory
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.2, 0.9],
      },
    },
  };

  return (
    <section id="projects" className="relative py-24 bg-[#0A0A0C] overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-[30%] h-[30%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] left-[5%] w-[40%] h-[40%] bg-blue-500/5 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <ScrollReveal direction="up" stagger staggerDelay={0.15}>
            <h4 className="text-primary font-semibold tracking-widest uppercase text-sm">
              My Portfolio
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Featured <span className="text-gradient bg-gradient-to-r from-primary via-primary/80 to-white">Projects</span>
            </h2>
            <div className="h-1 bg-primary mx-auto rounded-full w-20 mt-4" />
          </ScrollReveal>
        </div>

        {/* Filter Tabs */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border cursor-pointer ${
                  activeCategory === category
                    ? "border-primary text-white"
                    : "border-white/10 text-gray-400 hover:border-white/20 hover:text-white"
                }`}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-full -z-10 shadow-[0_0_20px_rgba(255,95,56,0.4)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group relative"
                >
                  {/* Card Container */}
                  <div className="relative h-full glass rounded-3xl overflow-hidden border border-white/10 group-hover:border-primary/30 transition-all duration-500 shadow-xl cursor-pointer">
                    {/* Image Section */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Content Section */}
                    <div className="p-8 space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <span className="text-[10px] uppercase tracking-wider bg-white/5 px-2 py-1 rounded-md text-gray-400">
                            {project.category}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-[10px] text-gray-500 font-medium px-2 py-1">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Action Buttons with Magnetic pull */}
                      <div className="flex gap-4 pt-2">
                        <Magnetic range={20} strength={0.3}>
                          <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 btn btn-primary py-2 text-xs"
                          >
                            <FaExternalLinkAlt className="w-3 h-3" />
                            Live Demo
                          </a>
                        </Magnetic>
                        <Magnetic range={20} strength={0.3}>
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary py-2 px-4 text-xs"
                          >
                            <FaGithub className="w-4 h-4" />
                          </a>
                        </Magnetic>
                      </div>
                    </div>

                    {/* Gradient Border Glow */}
                    <div className="absolute -inset-px rounded-3xl border border-transparent group-hover:border-primary/50 pointer-events-none transition-all duration-500" />
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="col-span-full py-20 text-center space-y-4"
              >
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaFolderOpen className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-2xl font-bold text-white">No Projects Found</h3>
                <p className="text-gray-400 max-w-md mx-auto">
                  I haven&apos;t added any projects in the <span className="text-primary font-semibold">{activeCategory}</span> category yet. Stay tuned!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
