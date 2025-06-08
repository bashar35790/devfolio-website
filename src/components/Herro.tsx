"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "@/lib/motion";
import { fadeInUp, scaleIn } from "../../utility/animation";

const Herro = () => {
  return (
    <section className="py-24 container px-4 mx-auto max-w-7xl">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          {...scaleIn}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center mb-4"
        >
          <Image
            src="/profile.avif"
            alt="profile img"
            width={100}
            height={100}
            className="rounded-full object-cover ring-2 ring-primary h-32 w-32 mb-4"
          />
        </motion.div>

        <motion.h1
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Hi, I&apos;m <span className="text-primary">Bashar</span>
        </motion.h1>
        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4"
        >
          Front End Developer | UI/UX Enthusiast | Open Source Contributor
        </motion.p>

        <motion.div
          className="flex justify-center space-x-4 mb-8"
          {...fadeInUp}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="https://github.com/bashar35790"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="https://www.facebook.com/bashar35790"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaFacebook />
          </motion.a>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row justify-center gap-4"
          {...fadeInUp}
          transition={{ delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/projects"
              className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              View Projects
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className=" inline-block w-full bg-gray-500  md:w-auto text-gray-800 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Herro;
