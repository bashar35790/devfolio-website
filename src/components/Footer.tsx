"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Magnetic from "./Magnetic";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/bashar35790", label: "GitHub" },
    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/bashar35790/", label: "LinkedIn" },
    { icon: <FaFacebookF />, href: "https://www.facebook.com/bashar35790/", label: "Facebook" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Blogs", href: "#blogs" },
  ];

  const services = [
    { name: "Web Development", href: "#" },
    { name: "UI/UX Design", href: "#" },
    { name: "MERN Stack", href: "#" },
    { name: "Consultation", href: "#" },
  ];

  return (
    <footer className="relative bg-[#0A0A0C] pt-24 pb-12 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link href="/" className="text-2xl font-bold text-primary tracking-tighter">
              {"< Abul Bashar >"}
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Crafting premium digital experiences through innovative code and modern design. Building the future of the web, one pixel at a time.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <Magnetic key={i} range={30} strength={0.4}>
                  <motion.a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 border border-white/5 hover:border-primary/30 transition-all duration-300 cursor-pointer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                </Magnetic>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-white font-bold text-lg">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-primary mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-white font-bold text-lg">Services</h4>
            <ul className="space-y-4">
              {services.map((service, i) => (
                <li key={i}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-primary mr-0 group-hover:mr-2 transition-all duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-white font-bold text-lg">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-gray-400 text-sm">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-primary border border-white/5 shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-start gap-4 text-gray-400 text-sm">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-primary border border-white/5 shrink-0">
                  <FaPhoneAlt />
                </div>
                <span>+8801833487526</span>
              </li>
              <li className="flex items-start gap-4 text-gray-400 text-sm">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-primary border border-white/5 shrink-0">
                  <FaEnvelope />
                </div>
                <span className="break-all">bashar35790@gmail.com</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {currentYear} <span className="text-white font-medium">Abul Bashar</span>. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Terms of Service</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
