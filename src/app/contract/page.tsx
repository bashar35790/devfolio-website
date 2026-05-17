"use client";
import { motion } from "framer-motion";
import { formDate } from "@/types";
import Link from "next/link";
import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane } from "react-icons/fa";
import ScrollReveal from "@/components/ScrollReveal";
import Magnetic from "@/components/Magnetic";

type FormStatus = "idle" | "loading" | "success" | "error";

const Contract = () => {
  const [formData, setFormData] = useState<formDate>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/contract", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      setStatus("error");
      console.log(error);
    }
  };

  return (
    <div className="container max-w-7xl mx-auto py-20 px-4">
      <ScrollReveal direction="up" stagger staggerDelay={0.15}>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-white tracking-tight">
          Contact <span className="text-gradient bg-gradient-to-r from-primary via-primary/80 to-white">Me</span>
        </h1>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mt-12">
        {/* Left Info Column */}
        <div className="space-y-8">
          <ScrollReveal direction="left" stagger staggerDelay={0.1}>
            <h2 className="text-2xl font-bold text-white tracking-tight">Get in Touch</h2>
            <p className="text-gray-400 text-base leading-relaxed max-w-md">
              I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:border-primary/30 transition-colors">
                  <FaEnvelope className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-300">Email</h3>
                  <Link
                    href="mailto:bashar35790@gmail.com"
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    bashar35790@gmail.com
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.3}>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:border-primary/30 transition-colors">
                  <FaPhone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-300">Phone</h3>
                  <Link
                    href="tel:+8801833487526"
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    +8801833487526
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.4}>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:border-primary/30 transition-colors">
                  <FaMapMarkerAlt className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-300">Location</h3>
                  <span className="text-gray-400 text-sm">
                    Dhaka, Bangladesh
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Right Form Column */}
        <ScrollReveal direction="scale" delay={0.2}>
          <div className="glass p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  value={formData.name}
                  onChange={handleChange}
                  required
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:bg-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  value={formData.email}
                  onChange={handleChange}
                  required
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:bg-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:bg-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-all resize-none"
                />
              </div>
              
              <Magnetic>
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full btn btn-primary py-4 rounded-xl flex items-center justify-center gap-2 group cursor-pointer relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {status === "loading" ? "Sending..." : "Send Message"}
                    <FaPaperPlane className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                </button>
              </Magnetic>

              {status === "success" && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center text-sm font-medium mt-2"
                >
                  Message sent successfully!
                </motion.p>
              )}
              {status === "error" && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-center text-sm font-medium mt-2"
                >
                  Failed to send message, please try again.
                </motion.p>
              )}
            </form>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Contract;
