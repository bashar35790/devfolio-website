"use client";

import {
  FaBriefcase,
  FaGraduationCap,
  FaDownload,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaArrowRight
} from "react-icons/fa";
import Link from "next/link";
import TextReveal from "@/components/TextReveal";
import ScrollReveal from "@/components/ScrollReveal";
import Magnetic from "@/components/Magnetic";
import Container from "@/components/Container";
import { siteConfig } from "@/config/site";

const AboutPage = () => {
  return (
    <div className="relative bg-bg-page text-text-main py-16 md:py-24 overflow-hidden">
      {/* Decorative Ambient Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[5%] left-[-10%] w-[50%] h-[50%] bg-[#00A8FF]/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-10%] w-[45%] h-[45%] bg-[#00D2FF]/5 blur-[130px] rounded-full" />
      </div>

      <Container className="relative z-10">

        {/* Header Title Section */}
        <div className="text-center mb-12 md:mb-16">
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
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-16 md:mb-24">

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
                    { label: "Role", value: siteConfig.role, icon: <FaBriefcase className="text-primary" /> },
                    { label: "Location", value: siteConfig.location, icon: <FaMapMarkerAlt className="text-primary" /> },
                    { label: "Email", value: siteConfig.email, icon: <FaEnvelope className="text-primary" /> },
                    { label: "Age", value: siteConfig.age, icon: <FaCalendarAlt className="text-primary" /> }
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

                <div className="mt-8 space-y-3">
                  <Magnetic>
                    <Link href={siteConfig.resumeUrl} download className="btn btn-primary w-full group relative overflow-hidden px-6 py-3.5">
                      <span className="relative z-10 flex items-center justify-center gap-2 font-semibold">
                        Download Complete CV <FaDownload className="group-hover:translate-y-1 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                    </Link>
                  </Magnetic>
                  <Magnetic>
                    <Link href="/experience" className="btn btn-secondary w-full group px-6 py-3.5">
                      <span className="flex items-center justify-center gap-2 font-semibold">
                        View Full Experience <FaArrowRight className="text-primary group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Link>
                  </Magnetic>
                </div>
              </div>
            </ScrollReveal>
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

      </Container>
    </div>
  );
};

export default AboutPage;
