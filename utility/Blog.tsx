"use client"
import { blogs } from "@/contents/blogs";
import Link from "next/link";
import React from "react";
import { FaCalendar, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { cardHoverSmall, fadeInUp, staggerContainer } from "./animation";

const Blog = () => {
  return (
    <div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {blogs.map((blog) => (
          <motion.article
            key={blog.slug}
            className="p-6 bg-white dark:bg-dark/50 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <Link href={`/blogs/${blog.slug}`}>
              <motion.h3
                className="text-xl font-semibold mb-2 hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {blog.title}
              </motion.h3>
            </Link>

            <motion.p
              className="text-gray-600 dark:text-gray-300 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {blog.excerpt}
            </motion.p>
            <motion.div
              className="flex items-center text-sm text-gray-500 sm:text-gray-400 space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.span
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <FaCalendar />
                {new Date(blog.date).toLocaleDateString()}
              </motion.span>
              <motion.span
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <FaClock />
                {new Date(blog.readTime).toLocaleDateString()}
              </motion.span>
            </motion.div>
          </motion.article>
        ))}
      </motion.div>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/blogs"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            View All Posts
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Blog;
