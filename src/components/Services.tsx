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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
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
    <section id="services" className="relative py-24 bg-[#0A0A0C] overflow-hidden">
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
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-primary font-medium tracking-widest uppercase text-sm block">
                What I Offer
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                My <span className="text-gradient bg-gradient-to-r from-primary via-primary/80 to-white">Services</span>
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full mt-4" />
            </div>

            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                Greetings, fellow digital explorers! I am <span className="text-white font-medium">Abul Bashar</span>, a passionate and innovative developer dedicated to crafting immersive digital experiences. Welcome to my online abode.
              </p>
              <p>
                Greetings, fellow digital explorers! I am <span className="text-white font-medium">Abul Bashar</span>, a passionate and innovative developer dedicated to turning challenging problems into beautiful web solutions.
              </p>
            </div>

            <div className="pt-4">
              <Link href="#contact" className="btn btn-primary group inline-flex relative overflow-hidden px-8 py-4">
                <span className="relative z-10 flex items-center gap-2">
                  Read More <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: 2x2 Grid of Premium Glassmorphism Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 grid md:grid-cols-2 gap-6"
          >
            {servicesList.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass p-8 rounded-3xl border border-white/10 hover:border-primary/30 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between shadow-xl"
              >
                {/* Neon glow effect behind card */}
                <div className="absolute -inset-px bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                
                <div className="space-y-6 relative z-10">
                  {/* Glowing Icon Container */}
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-500 relative">
                    <div className="absolute inset-0 bg-primary/20 blur-md rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Decorative border line */}
                <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Services;
