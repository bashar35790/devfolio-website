import { blogs } from "@/contents/blogs";
import Link from "next/link";
import React from "react";
import { FaCalendar, FaClock } from "react-icons/fa";

const Blog = () => {
    return (
        <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <article
            key={blog.slug}
            className="p-6 bg-white dark:bg-dark/50 rounded-lg shadow-md"
          >
            <Link href={`/blogs/${blog.slug}`}>
              <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                {blog.title}
              </h3>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {blog.excerpt}
            </p>
            <div className="flex items-center text-sm text-gray-500 sm:text-gray-400 space-x-4">
              <span className="flex items-center">
                <FaCalendar />
                {new Date(blog.date).toLocaleDateString()}
              </span>
              <span className="flex items-center">
                <FaClock />
                {new Date(blog.date).toLocaleDateString()}
              </span>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/blogs"
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          View All Posts
        </Link>
      </div>
        </div>
    );
};

export default Blog;