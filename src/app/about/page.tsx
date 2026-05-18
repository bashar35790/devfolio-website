"use client";

import {
  FaCode,
  FaLaptopCode,
  FaTools,
  FaBriefcase,
  FaGraduationCap,
  FaDownload,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaAws
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiDocker,
  SiPostgresql
} from "react-icons/si";
import Link from "next/link";
import { motion } from "framer-motion";
import TextReveal from "@/components/TextReveal";
import ScrollReveal from "@/components/ScrollReveal";
import Magnetic from "@/components/Magnetic";

const AboutPage = () => {
  const skills = [
    {
      category: "Frontend Architecture",
      icon: <FaCode className="w-6 h-6 text-[#00A8FF]" />,
      glowColor: "group-hover:shadow-[0_0_30px_rgba(0,168,255,0.15)]",
      borderColor: "group-hover:border-[#00A8FF]/30",
      items: [
        { name: "React 19 / Next.js 16 (App Router)", icon: <SiReact /> },
        { name: "TypeScript & ES6+", icon: <SiTypescript /> },
        { name: "Tailwind CSS v4 & Sass", icon: <SiTailwindcss /> },
        { name: "HTML5 / Responsive Design", icon: <FaCode /> },
        { name: "State Management (Redux, Zustand)", icon: <SiReact /> },
      ]
    },
    {
      category: "Backend & Systems",
      icon: <FaLaptopCode className="w-6 h-6 text-[#00D2FF]" />,
      glowColor: "group-hover:shadow-[0_0_30px_rgba(0,210,255,0.15)]",
      borderColor: "group-hover:border-[#00D2FF]/30",
      items: [
        { name: "Node.js & Express.js", icon: <SiNodedotjs /> },
        { name: "PostgreSQL & Prisma ORM", icon: <SiPostgresql /> },
        { name: "MongoDB & Mongoose", icon: <SiMongodb /> },
        { name: "RESTful & GraphQL API Design", icon: <SiExpress /> },
        { name: "Microservices & Serverless", icon: <SiNodedotjs /> },
      ]
    },
    {
      category: "DevOps & Cloud Tools",
      icon: <FaTools className="w-6 h-6 text-white" />,
      glowColor: "group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]",
      borderColor: "group-hover:border-white/20",
      items: [
        { name: "Git & Advanced Workflows", icon: <SiGit /> },
        { name: "Docker Containerization", icon: <SiDocker /> },
        { name: "AWS (S3, EC2, CloudFront)", icon: <FaAws /> },
        { name: "CI/CD (GitHub Actions)", icon: <SiGit /> },
        { name: "Vercel / Netlify Deployment", icon: <SiNextdotjs /> },
      ]
    }
  ];

  const experience = [
    {
      role: "WordPress Developer",
      company: "Softvence Agency",
      period: "Jan 2025 - April 2025",
      description: [
        "Built high-performance WordPress websites using Elementor, Gutenberg, and custom themes tailored for client needs.",
        "Optimized website speed and SEO performance, improving Lighthouse scores up to 90+ across multiple projects.",
        "Integrated advanced plugins for eCommerce (WooCommerce), forms, and automation workflows.",
        "Customized PHP-based themes and REST API integrations for dynamic content management systems."
      ]
    },
    {
      role: "Webflow Developer",
      company: "Softvence Agency",
      period: "April 2025 - June 2025",
      description: [
        "Developed responsive and visually appealing websites using Webflow with pixel-perfect design execution.",
        "Built CMS-driven websites for blogs, portfolios, and business platforms with dynamic content structures.",
        "Integrated third-party tools such as Zapier, analytics, and custom scripts for enhanced functionality.",
        "Optimized performance, accessibility, and SEO for production-ready client websites."
      ]
    },
    {
      role: "Framer Designer & Developer",
      company: "Softvence Agency",
      period: "Jun 2025 - Present",
      description: [
        "Designed and developed modern, interactive websites using Framer with a focus on motion-rich UI and clean UX.",
        "Created responsive landing pages with advanced animations, scroll interactions, and micro-interactions.",
        "Implemented brand-aligned design systems ensuring consistency across typography, colors, and spacing.",
        "Collaborated with startups to rapidly prototype and deploy high-converting marketing websites."
      ]
    },


  ];

  return (
    <div className="relative min-h-screen bg-bg-page text-text-main pt-10 pb-24 overflow-hidden">
      {/* Decorative Ambient Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[5%] left-[-10%] w-[50%] h-[50%] bg-[#00A8FF]/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-10%] w-[45%] h-[45%] bg-[#00D2FF]/5 blur-[130px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">

        {/* Header Title Section */}
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm block mb-3">
            Get To Know Me
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-text-main">
            About <span className="text-gradient">Abul Bashar</span>
          </h1>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-6" />
          <div className="max-w-3xl mx-auto">
            <TextReveal
              text="An engineering-driven Full Stack Web Developer passionate about merging elegant typography and high-end aesthetics with fast, secure, and robust system architectures."
              className="text-lg md:text-xl text-text-muted leading-relaxed font-light"
              staggerDelay={0.015}
            />
          </div>
        </div>

        {/* Core Profile Narrative & Quick Info */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">

          {/* Narrative - Column 7 */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="left">
              <h2 className="text-2xl md:text-3xl font-bold text-text-main tracking-tight mb-4">
                My Professional Philosophy
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed text-base md:text-lg">
                <p>
                  As a software engineer, I don&apos;t just build websites; I design responsive, highly-interactive, and secure digital landscapes. My background is rooted in the MERN ecosystem and Next.js. I specialize in building custom, type-safe full-stack platforms from the ground up, utilizing modern component architectures and microservices.
                </p>
                <p>
                  I believe that true excellence lies at the intersection of design precision and structural integrity. Every pixel, every animation transition, and every API route should work in perfect harmony to provide the user with an unforgettable, elite digital experience.
                </p>
                <p>
                  In my spare time, I love researching state-of-the-art web developments, diving deep into system performance optimizations, database normalization practices, and playing with microservices.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Quick Info - Column 5 */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right" delay={0.1}>
              <div className="glass p-8 rounded-3xl border border-border-subtle hover:border-primary/20 transition-all duration-300 relative overflow-hidden group shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <h3 className="text-xl font-bold text-text-main mb-6 border-b border-border-subtle pb-4">
                  Quick Details
                </h3>

                <div className="space-y-6">
                  {[
                    { label: "Role", value: "Senior Full Stack Developer", icon: <FaBriefcase className="text-primary" /> },
                    { label: "Location", value: "Dhaka, Bangladesh", icon: <FaMapMarkerAlt className="text-primary" /> },
                    { label: "Email", value: "bashar35790@gmail.com", icon: <FaEnvelope className="text-primary" /> },
                    { label: "Age", value: "24 Years", icon: <FaCalendarAlt className="text-primary" /> }
                  ].map((info, index) => (
                    <div key={index} className="flex items-center gap-4 group/item">
                      <div className="w-10 h-10 rounded-xl bg-bg-section/60 flex items-center justify-center border border-border-subtle group-hover/item:border-primary/30 group-hover/item:bg-primary/5 transition-all duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-xs text-text-muted uppercase tracking-wider font-semibold">{info.label}</p>
                        <p className="text-text-main font-medium group-hover/item:text-primary transition-colors">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Magnetic>
                    <Link href="/resume.pdf" download className="btn btn-primary w-full group relative overflow-hidden px-6 py-3.5">
                      <span className="relative z-10 flex items-center justify-center gap-2 font-semibold">
                        Download Complete CV <FaDownload className="group-hover:translate-y-1 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                    </Link>
                  </Magnetic>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Skills Section Grid */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold tracking-widest uppercase text-sm block mb-2">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main">
              My Core Expertise
            </h2>
            <div className="h-1 w-16 bg-primary mx-auto rounded-full mt-3" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <div className={`glass p-8 rounded-3xl border border-border-subtle hover:border-primary/20 transition-all duration-500 relative overflow-hidden group flex flex-col h-full shadow-xl ${skillGroup.borderColor} ${skillGroup.glowColor}`}>
                  <div className="absolute -inset-px bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                  {/* Skill Category Header */}
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-bg-section/60 border border-border-subtle flex items-center justify-center transition-all duration-300">
                      {skillGroup.icon}
                    </div>
                    <h3 className="text-lg font-bold text-text-main group-hover:text-primary transition-colors">
                      {skillGroup.category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <ul className="space-y-4 relative z-10 flex-grow">
                    {skillGroup.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-text-muted group/li">
                        <span className="text-primary text-sm shrink-0 group-hover/li:scale-125 transition-transform duration-300">
                          {item.icon}
                        </span>
                        <span className="text-sm font-medium hover:text-text-main transition-colors duration-200">
                          {item.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Experience timeline section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-widest uppercase text-sm block mb-2">
              Career Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main">
              Work Experience
            </h2>
            <div className="h-1 w-16 bg-primary mx-auto rounded-full mt-3" />
          </div>

          <div className="relative border-l border-border-subtle max-w-4xl mx-auto pl-8 sm:pl-10 space-y-12">
            {experience.map((exp, index) => (
              <div key={index} className="relative group">

                {/* Timeline node */}
                <span className="absolute -left-[41px] sm:-left-[49px] top-1.5 flex items-center justify-center bg-bg-page w-6 h-6 rounded-full border-2 border-primary group-hover:bg-primary transition-colors duration-300 shadow-[0_0_10px_rgba(0,168,255,0.3)]" />

                <ScrollReveal direction="up" delay={index * 0.15}>
                  <div className="glass p-8 rounded-3xl border border-border-subtle hover:border-primary/20 transition-all duration-500 relative overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6 pb-4 border-b border-border-subtle relative z-10">
                      <div>
                        <h3 className="text-xl font-bold text-text-main group-hover:text-primary transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <p className="text-primary font-semibold text-sm mt-1">
                          {exp.company}
                        </p>
                      </div>
                      <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-text-muted bg-bg-section/60 border border-border-subtle sm:self-center">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-3 relative z-10">
                      {exp.description.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-text-muted text-sm leading-relaxed group/bullet">
                          <FaCheckCircle className="text-primary text-xs shrink-0 mt-1 transition-transform group-hover/bullet:scale-125 duration-300" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>

        {/* Education section */}
        <div>
          <div className="text-center mb-12">
            <span className="text-primary font-semibold tracking-widest uppercase text-sm block mb-2">
              Education
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main">
              Academic Background
            </h2>
            <div className="h-1 w-16 bg-primary mx-auto rounded-full mt-3" />
          </div>

          <div className="max-w-4xl mx-auto">
            <ScrollReveal direction="up">
              <div className="glass p-8 rounded-3xl border border-border-subtle hover:border-primary/20 transition-all duration-500 relative overflow-hidden group shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-4 border-b border-border-subtle relative z-10">
                  <div className="flex items-center gap-4 ">
                    <div className="w-12 h-12 rounded-2xl bg-bg-section/60 border border-border-subtle flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      <FaGraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-main group-hover:text-primary transition-colors">
                        Bachelor of Science in Computer Science and Engineering
                      </h3>
                      <p className="text-primary font-semibold text-sm mt-1">
                        ZNRF University of Management Sciences (ZUMS)
                      </p>
                      <p className="text-primary font-semibold text-sm mt-1">
                        Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                  <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-text-muted bg-bg-section/60 border border-border-subtle">
                    2024 - 2028
                  </span>
                </div>

                <div className="text-text-muted text-sm leading-relaxed max-w-3xl relative z-10 space-y-4">
                  <p>
                    Completed a comprehensive curriculum centered around deep computational theory, structural database design, advanced algorithms, and systems engineering. Throughout my academic career, I placed consistent emphasis on utilizing modern design patterns and mastering the complexities of scalable distributed applications.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 pt-2 text-xs">
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-primary shrink-0" />
                      <span>Data Structures & Advanced Algorithms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-primary shrink-0" />
                      <span>Database Systems & Normalization Practices</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-primary shrink-0" />
                      <span>Software Architecture & Object Oriented Design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-primary shrink-0" />
                      <span>Distributed Cloud Architectures</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
