"use client";

import React from "react";
import { motion } from "framer-motion";
import { blogs } from "@/contents/blogs";
import Link from "next/link";
import { FaCalendarAlt, FaClock, FaArrowRight } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import Magnetic from "./Magnetic";

const Blogs = () => {
  // Duplicate blogs for infinite scroll effect
  const duplicatedBlogs = [...blogs, ...blogs, ...blogs];

  return (
    <section id="blogs" className="relative py-24 bg-[#0A0A0C] overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[5%] w-[30%] h-[30%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-[5%] w-[40%] h-[40%] bg-blue-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-4 mb-16 text-center">
        <ScrollReveal direction="up" stagger staggerDelay={0.15}>
          <h4 className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
            Insights & Articles
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Latest <span className="text-gradient bg-gradient-to-r from-primary via-primary/80 to-white">Blog Posts</span>
          </h2>
          <div className="h-1 bg-primary mx-auto rounded-full w-20 mt-6" />
        </ScrollReveal>
      </div>

      {/* Infinite Ticker */}
      <ScrollReveal direction="up" delay={0.2}>
        <div className="relative w-full overflow-hidden py-10">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-8 px-4 w-max"
            style={{ cursor: "pointer" }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {duplicatedBlogs.map((blog, index) => (
              <div
                key={`${blog.slug}-${index}`}
                className="w-[350px] md:w-[450px] shrink-0 group"
              >
                <div className="relative h-full glass p-8 rounded-3xl border border-white/10 group-hover:border-primary/30 transition-all duration-500 hover:bg-white/[0.04] shadow-lg cursor-pointer">
                  {/* Meta Info */}
                  <div className="flex items-center gap-6 text-xs text-gray-500 mb-6 uppercase tracking-wider font-semibold">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-primary" />
                      <span>{new Date(blog.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock className="text-primary" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <div className="pt-8">
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="inline-flex items-center gap-2 text-primary text-sm font-bold group/link uppercase tracking-widest"
                    >
                      Read Article
                      <FaArrowRight className="group-hover/link:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Edge Fades */}
          <div className="absolute top-0 left-0 h-full w-20 md:w-40 bg-gradient-to-r from-[#0A0A0C] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-20 md:w-40 bg-gradient-to-l from-[#0A0A0C] to-transparent z-10 pointer-events-none" />
        </div>
      </ScrollReveal>

      <div className="container mx-auto px-4 mt-16 text-center">
        <ScrollReveal direction="up" delay={0.3}>
          <Magnetic>
            <Link href="/blogs" className="inline-block">
              <button className="btn btn-secondary text-sm px-10 py-4 cursor-pointer">
                Explore All Insights
              </button>
            </Link>
          </Magnetic>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Blogs;
