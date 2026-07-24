"use client";

import React from "react";
import { blogs } from "@/contents/blogs";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaCalendarAlt, FaClock, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

const BlogDetailPage = () => {
  const params = useParams();
  const slug = params.slug as string;

  const blog = blogs.find((post) => post.slug === slug);

  if (!blog) {
    notFound();
  }

  const paragraphs = blog.description.split("\n\n");

  return (
    <div className="bg-bg-page min-h-screen py-32 text-text-main">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm font-semibold uppercase tracking-widest group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </Link>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="glass p-10 md:p-14 rounded-3xl border border-border-subtle">
            <div className="flex items-center gap-6 text-xs text-text-muted mb-8 uppercase tracking-wider font-semibold">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-primary" />
                <span>{new Date(blog.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-primary" />
                <span>{blog.readTime}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-text-main tracking-tight mb-6">
              {blog.title}
            </h1>

            <p className="text-lg text-text-muted mb-10 border-l-4 border-primary/50 pl-4 italic">
              {blog.excerpt}
            </p>

            <div className="space-y-6 text-text-muted leading-relaxed text-base md:text-lg">
              {paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default BlogDetailPage;
