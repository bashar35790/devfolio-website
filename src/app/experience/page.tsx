"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaTools,
  FaBriefcase,
  FaCalendarAlt,
  FaCheckCircle,
  FaFilePdf,
  FaAws,
  FaArrowRight,
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
  SiPostgresql,
} from "react-icons/si";
import { experiences } from "@/contents/experience";
import { WorkProof } from "@/types";
import Section from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";
import Magnetic from "@/components/Magnetic";
import DocumentModal from "@/components/DocumentModal";

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
    ],
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
    ],
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
    ],
  },
];

const ExperiencePage = () => {
  const [activeProof, setActiveProof] = useState<WorkProof | null>(null);

  return (
    <div className="bg-bg-page text-text-main">
      {/* Header */}
      <Section variant="page" className="pb-10 md:pb-14">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[5%] left-[-10%] w-[50%] h-[50%] bg-[#00A8FF]/5 blur-[140px] rounded-full" />
          <div className="absolute bottom-[20%] right-[-10%] w-[45%] h-[45%] bg-[#00D2FF]/5 blur-[130px] rounded-full" />
        </div>

        <div className="text-center">
          <ScrollReveal direction="up" stagger staggerDelay={0.12}>
            <div className="space-y-4">
              <span className="text-primary font-semibold tracking-widest uppercase text-sm block">
                Career Journey
              </span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-text-main">
                Experience &{" "}
                <span className="text-gradient bg-gradient-to-r from-primary via-primary/80 to-text-main">
                  Skills
                </span>
              </h1>
              <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
              <p className="text-lg md:text-xl text-text-muted leading-relaxed font-light max-w-3xl mx-auto">
                A summary of my professional experience and the technologies I
                use to design and engineer modern web applications.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Work Experience */}
      <Section variant="muted">
        <ScrollReveal direction="up" stagger staggerDelay={0.15}>
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <span className="text-primary font-semibold tracking-widest uppercase text-sm block">
              Career Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main">
              Work Experience
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-3" />
          </div>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group md:pl-6">
              <ScrollReveal direction="up" delay={0.1}>
                <div className="relative glass rounded-3xl border border-border-subtle hover:border-primary/25 transition-all duration-500 overflow-hidden shadow-xl group/card">
                  {/* Animated top gradient line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-transparent to-primary bg-[length:200%_100%] group-hover/card:animate-[shimmer_1.5s_linear_infinite]" />

                  <div className="absolute -right-20 -top-20 w-56 h-56 bg-primary/10 rounded-full blur-3xl group-hover/card:bg-primary/15 transition-colors duration-500" />

                  <div className="p-8 sm:p-10 relative z-10">
                    {/* Card Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8 pb-6 border-b border-border-subtle">
                      <div className="flex items-center gap-5">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="hidden sm:flex w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 items-center justify-center text-primary"
                        >
                          <FaBriefcase className="w-6 h-6" />
                        </motion.div>
                        <div>
                          <div className="flex items-center gap-3">
                            <h3 className="text-2xl font-bold text-text-main group-hover/card:text-primary transition-colors">
                              {exp.role}
                            </h3>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/25">
                              <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                              </span>
                              Current
                            </span>
                          </div>
                          <p className="text-primary font-semibold mt-1">{exp.company}</p>
                        </div>
                      </div>

                      <div className="flex flex-col items-start sm:items-end gap-3 sm:self-center">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider text-text-muted bg-bg-section/60 border border-border-subtle">
                          <FaCalendarAlt className="text-primary" />
                          {exp.period}
                        </span>
                        {exp.workProof && (
                          <Magnetic range={20} strength={0.3}>
                            <button
                              type="button"
                              onClick={() => setActiveProof(exp.workProof ?? null)}
                              className="btn btn-primary py-2 px-4 text-xs cursor-pointer"
                            >
                              <FaFilePdf className="w-3.5 h-3.5" />
                              View Work Proof
                            </button>
                          </Magnetic>
                        )}
                      </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-text-muted leading-relaxed mb-8 italic">
                      &ldquo;{exp.tagline}&rdquo;
                    </p>

                    {/* Responsibility Checkpoints */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      {exp.checklist.map((item, idx) => (
                        <div
                          key={idx}
                          className={`group/check relative flex items-start gap-4 p-5 rounded-2xl border border-border-subtle bg-bg-section/40 hover:border-primary/30 hover:bg-bg-section/70 transition-all duration-300 ${idx === exp.checklist.length - 1 ? "sm:col-span-2" : ""}`}
                        >
                          <span className="relative flex items-center justify-center w-8 h-8 shrink-0 rounded-xl bg-primary/10 border border-primary/25 text-xs font-bold text-primary group-hover/check:scale-110 transition-transform duration-300">
                            {idx + 1}
                          </span>
                          <p className="text-sm text-text-main leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section variant="page">
        <ScrollReveal direction="up" stagger staggerDelay={0.15}>
          <div className="text-center mb-12 space-y-4">
            <span className="text-primary font-semibold tracking-widest uppercase text-sm block">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main">
              My Core Expertise
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-3" />
          </div>
        </ScrollReveal>

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
      </Section>

      {/* CTA */}
      <Section variant="muted">
        <ScrollReveal direction="up">
          <div className="glass rounded-3xl p-10 md:p-14 border border-border-subtle text-center space-y-8">
            <div className="flex items-center justify-center gap-3">
              <FaBriefcase className="w-8 h-8 text-primary" />
              <FaCheckCircle className="w-6 h-6 text-primary" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-text-main tracking-tight">
                See the work behind the experience
              </h2>
              <p className="text-text-muted max-w-xl mx-auto">
                Explore the projects I have designed and engineered end to end.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Magnetic range={20} strength={0.3}>
                <Link href="/projects" className="btn btn-primary px-8 py-3 text-sm">
                  View Projects
                  <FaArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Magnetic>
              <Magnetic range={20} strength={0.3}>
                <Link href="/about" className="btn btn-secondary px-8 py-3 text-sm">
                  Back to About
                </Link>
              </Magnetic>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {activeProof && (
        <DocumentModal
          open={Boolean(activeProof)}
          onClose={() => setActiveProof(null)}
          title={activeProof.label}
          previewUrl={activeProof.previewUrl}
          viewUrl={activeProof.viewUrl}
          downloadUrl={activeProof.downloadUrl}
        />
      )}
    </div>
  );
};

export default ExperiencePage;
