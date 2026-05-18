"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHome, FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-bg-page text-text-main overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[30%] h-[30%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-blue-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Animated 404 Text */}
          <motion.h1
            animate={{ 
              textShadow: [
                "0 0 20px rgba(255, 95, 56, 0.2)",
                "0 0 40px rgba(255, 95, 56, 0.4)",
                "0 0 20px rgba(255, 95, 56, 0.2)"
              ] 
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-[12rem] md:text-[18rem] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/20 select-none"
          >
            404
          </motion.h1>

          <div className="space-y-4 max-w-lg mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-text-main tracking-tight">
              Page Not Found
            </h2>
            <p className="text-text-muted text-lg leading-relaxed">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <Link href="/" className="btn btn-primary group">
              <FaHome className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Go Back Home
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="btn btn-secondary group flex items-center gap-2"
            >
               <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Previous Page
            </button>
          </motion.div>
        </motion.div>

        {/* Floating Decorative Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-10 w-24 h-24 border border-border-subtle rounded-full hidden md:block"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -left-10 w-32 h-32 border border-border-subtle rounded-2xl hidden md:block"
        />
      </div>
    </div>
  );
}
