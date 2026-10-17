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
  FaCertificate,
  FaShieldAlt,
  FaExternalLinkAlt,
  FaExpand,
  FaStar,
  FaEye,
  FaLayerGroup,
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
import { certificates, experiences } from "@/contents/experience";
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

const totalTechnologies = skills.reduce(
  (total, group) => total + group.items.length,
  0
);

const stats = [
  { label: "Certifications", value: certificates.length, icon: <FaCertificate /> },
  { label: "Skill Areas", value: skills.length, icon: <FaLayerGroup /> },
  { label: "Technologies", value: totalTechnologies, icon: <FaCode /> },
];

const anchors = [
  { href: "#certifications", label: "Certifications" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
];

const ExperiencePage = () => {
  const [activeDoc, setActiveDoc] = useState<WorkProof | null>(null);

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
                A summary of my professional experience, my certifications, and
                the technologies I use to design and engineer modern web
                applications.
              </p>
            </div>
          </ScrollReveal>

          {/* Anchor jump nav */}
          <ScrollReveal direction="up" delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
              {anchors.map((anchor) => (
                <a
                  key={anchor.href}
                  href={anchor.href}
                  className="px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-text-muted bg-bg-section/60 border border-border-subtle hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                >
                  {anchor.label}
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Stats strip */}
          <ScrollReveal direction="up" delay={0.4}>
            <div className="grid grid-cols-3 gap-3 sm:gap-5 max-w-2xl mx-auto mt-10">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-2xl border border-border-subtle px-3 py-5 text-center hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="flex justify-center text-primary text-lg mb-1.5">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-text-main">
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-text-muted mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Certifications */}
      <Section id="certifications" variant="muted" className="scroll-mt-24">
        <ScrollReveal direction="up" stagger staggerDelay={0.15}>
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <span className="text-primary font-semibold tracking-widest uppercase text-sm block">
              Credentials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main">
              Certifications
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-3" />
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto space-y-10">
          {certificates.map((cert, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.1}>
              <div className="relative group">
                {/* Ambient glow */}
                <div className="absolute -inset-1 rounded-[34px] bg-gradient-to-r from-primary/40 via-[#00D2FF]/30 to-primary/40 opacity-25 blur-2xl group-hover:opacity-60 transition-opacity duration-700" />

                {/* Award frame */}
                <div className="relative glass rounded-[32px] border border-border-subtle overflow-hidden shadow-2xl group-hover:border-primary/30 transition-colors duration-500">
                  {/* CERTIFIED ribbon */}
                  <div className="pointer-events-none absolute -right-14 top-7 z-20 rotate-45 bg-gradient-to-r from-primary to-[#00D2FF] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-16 py-1.5 shadow-lg shadow-primary/40">
                    Certified
                  </div>

                  {/* Corner flourishes */}
                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-xl" />
                    <div className="absolute top-5 right-5 w-8 h-8 border-t-2 border-r-2 border-primary/40 rounded-tr-xl" />
                    <div className="absolute bottom-5 left-5 w-8 h-8 border-b-2 border-l-2 border-primary/40 rounded-bl-xl" />
                    <div className="absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-primary/40 rounded-br-xl" />
                  </div>

                  {/* Shine sweep */}
                  <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[220%] group-hover:animate-[shimmer_1.8s_ease-in-out_infinite]" />
                  </div>

                  <div className="relative z-10 grid md:grid-cols-5 gap-8 md:gap-10 items-center p-8 sm:p-10 md:p-12">
                    {/* Left: seal + preview panel */}
                    <div className="md:col-span-2 flex flex-col items-center gap-8">
                      {/* Medal seal */}
                      <div className="relative w-24 h-24">
                        <span className="absolute inset-0 rounded-full bg-primary/25 animate-ping" />
                        <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary to-[#00D2FF] text-white shadow-[0_0_35px_rgba(0,168,255,0.45)]">
                          <FaCertificate className="w-10 h-10" />
                        </div>
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          <span className="w-3 h-8 bg-primary/70 rounded-b-md rotate-6" />
                          <span className="w-3 h-8 bg-[#00D2FF]/70 rounded-b-md -rotate-6" />
                        </div>
                      </div>

                      {/* Stylized preview panel */}
                      <button
                        type="button"
                        onClick={() => setActiveDoc(cert.document)}
                        className="group/preview relative w-full rounded-2xl border border-border-subtle bg-bg-section/50 p-5 text-left hover:border-primary/30 transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 shrink-0 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                            <FaFilePdf className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs font-semibold text-text-main truncate">
                              {cert.title}
                            </p>
                            <p className="text-[10px] uppercase tracking-widest text-text-muted">
                              PDF Certificate
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 h-1.5 rounded-full bg-gradient-to-r from-primary/60 via-[#00D2FF]/60 to-primary/30" />
                        <div className="mt-3 space-y-2 opacity-60">
                          <div className="h-2 rounded bg-bg-page/70 w-full" />
                          <div className="h-2 rounded bg-bg-page/70 w-5/6" />
                          <div className="h-2 rounded bg-bg-page/70 w-2/3" />
                        </div>
                        <span className="absolute inset-0 rounded-2xl flex items-center justify-center bg-bg-page/60 backdrop-blur-[2px] opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300">
                          <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary">
                            <FaExpand className="w-3.5 h-3.5" /> Preview
                          </span>
                        </span>
                      </button>
                    </div>

                    {/* Right: details */}
                    <div className="md:col-span-3 text-center md:text-left">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest bg-primary/10 text-primary border border-primary/25">
                        <FaShieldAlt className="w-3 h-3" /> Verified Credential
                      </span>

                      <h3 className="mt-5 text-2xl md:text-3xl font-bold text-text-main">
                        {cert.title}
                      </h3>

                      <div className="flex items-center justify-center md:justify-start gap-1.5 mt-4 text-primary">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="w-3 h-3" />
                        ))}
                      </div>

                      <p className="mt-5 text-text-muted leading-relaxed">
                        {cert.description}
                      </p>

                      {/* Skill chips */}
                      <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-6">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-full text-[10px] font-medium text-text-muted bg-bg-section/60 border border-border-subtle hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-colors duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center justify-center md:justify-start gap-4 mt-10">
                        <Magnetic range={24} strength={0.3}>
                          <button
                            type="button"
                            onClick={() => setActiveDoc(cert.document)}
                            className="relative inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full px-10 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary to-[#00D2FF] shadow-[0_0_30px_rgba(0,168,255,0.5)] hover:shadow-[0_0_45px_rgba(0,168,255,0.75)] hover:scale-[1.03] active:scale-95 transition-all duration-300 cursor-pointer"
                          >
                            <span className="pointer-events-none absolute inset-0 rounded-full border border-primary/60 animate-ping" />
                            <FaEye className="w-5 h-5" />
                            View Certificate
                          </button>
                        </Magnetic>
                        <Magnetic range={20} strength={0.3}>
                          <a
                            href={cert.document.viewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary w-full sm:w-auto px-8 py-4 text-base rounded-full"
                          >
                            <FaExternalLinkAlt className="w-4 h-4" />
                            Open in Drive
                          </a>
                        </Magnetic>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Work Experience */}
      <Section id="experience" variant="page" className="scroll-mt-24">
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
                              onClick={() => setActiveDoc(exp.workProof ?? null)}
                              className="btn btn-primary w-full sm:w-auto px-6 py-3 text-sm cursor-pointer"
                            >
                              <FaFilePdf className="w-4 h-4" />
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
      <Section id="skills" variant="muted" className="scroll-mt-24">
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
      <Section variant="page">
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
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <Magnetic range={24} strength={0.3}>
                <Link
                  href="/projects"
                  className="btn btn-primary w-full sm:w-auto px-10 py-4 text-base rounded-full"
                >
                  View Projects
                  <FaArrowRight className="w-4 h-4" />
                </Link>
              </Magnetic>
              <Magnetic range={20} strength={0.3}>
                <Link
                  href="/about"
                  className="btn btn-secondary w-full sm:w-auto px-10 py-4 text-base rounded-full"
                >
                  Back to About
                </Link>
              </Magnetic>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {activeDoc && (
        <DocumentModal
          open={Boolean(activeDoc)}
          onClose={() => setActiveDoc(null)}
          title={activeDoc.label}
          previewUrl={activeDoc.previewUrl}
          viewUrl={activeDoc.viewUrl}
          downloadUrl={activeDoc.downloadUrl}
        />
      )}
    </div>
  );
};

export default ExperiencePage;
