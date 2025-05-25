"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
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

        <div className="flex justify-center space-x-4 mb-8">
          <Link
            href="https://github.com/bashar35790"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors mt-8 duration-300"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/feed/"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors mt-8 duration-300"
          >
            <FaLinkedin />
          </Link>

          <Link
            href="https://www.facebook.com/bashar35790"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors mt-8 duration-300"
          >
            <FaFacebook />
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            href="/projects"
            className="bg-primary inline-block w-full md:w-auto text-white py-3 px-8 rounded-lg hover:bg-primary/70 transition-colors"
          >
            View Project
          </Link>
          <Link
            href="/contract"
            className="bg-gray-500 inline-block w-full md:w-auto text-white py-3 px-8 rounded-lg hover:bg-gray-30 transition-colors hover:text-gray-800"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Herro;
