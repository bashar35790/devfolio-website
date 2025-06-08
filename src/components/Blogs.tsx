"use client";

import Blog from "../../utility/Blog";
import { motion } from "@/lib/motion"; // ✅ named import

const Blogs = () => {
  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Latest Blog Posts
        </motion.h2>

        <Blog />
      </div>
    </section>
  );
};

export default Blogs;
