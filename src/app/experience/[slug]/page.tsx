"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaDownload,
  FaBriefcase,
  FaCalendarAlt,
  FaCheckCircle,
  FaFilePdf,
} from "react-icons/fa";
import { experiences } from "@/contents/experience";
import Section from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";
import Magnetic from "@/components/Magnetic";
import PdfPreview from "@/components/PdfPreview";

const ExperienceDetailPage = () => {
  const params = useParams();
  const slug = params.slug as string;

  const experience = experiences.find((item) => item.slug === slug);

  if (!experience) {
    notFound();
  }

  const workProof = experience.workProof;

  return (
    <div className="bg-bg-page">
      {/* Hero */}
      <Section variant="page" className="pb-10 md:pb-14">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[5%] right-[5%] w-[35%] h-[35%] bg-primary/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] left-[5%] w-[40%] h-[40%] bg-blue-500/5 blur-[100px] rounded-full" />
        </div>

        <ScrollReveal direction="up">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm font-semibold uppercase tracking-widest group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to About
          </Link>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto text-center mt-8 md:mt-12 space-y-6">
          <ScrollReveal direction="up" stagger staggerDelay={0.12}>
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest font-semibold text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full">
                <FaFilePdf className="w-3 h-3" />
                {workProof?.label ?? "Work Proof"}
              </span>

              <h1 className="text-3xl md:text-5xl font-bold text-text-main tracking-tight leading-tight">
                {experience.role}
              </h1>

              <p className="text-xl md:text-2xl font-bold text-gradient bg-gradient-to-r from-primary via-primary/80 to-text-main">
                {experience.company}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider text-text-muted bg-bg-section/60 border border-border-subtle">
                  <FaCalendarAlt className="text-primary" />
                  {experience.period}
                </span>
              </div>

              <p className="text-lg text-text-muted border-l-4 border-primary/50 pl-4 italic text-left leading-relaxed max-w-2xl mx-auto">
                {experience.tagline}
              </p>

              {workProof && (
                <div className="flex flex-wrap justify-center gap-4 pt-2">
                  <Magnetic range={20} strength={0.3}>
                    <a
                      href={workProof.viewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary py-3 px-6 text-sm"
                    >
                      <FaExternalLinkAlt className="w-3.5 h-3.5" />
                      Open in Drive
                    </a>
                  </Magnetic>
                  <Magnetic range={20} strength={0.3}>
                    <a
                      href={workProof.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary py-3 px-6 text-sm"
                    >
                      <FaDownload className="w-3.5 h-3.5" />
                      Download PDF
                    </a>
                  </Magnetic>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* PDF Previewer */}
      {workProof && (
        <Section variant="muted">
          <ScrollReveal direction="up">
            <div className="text-center mb-10 md:mb-14 space-y-4">
              <h4 className="text-primary font-semibold tracking-widest uppercase text-sm">
                Official Document
              </h4>
              <h2 className="text-3xl md:text-4xl font-bold text-text-main tracking-tight">
                Work Experience{" "}
                <span className="text-gradient bg-gradient-to-r from-primary via-primary/80 to-text-main">
                  Proof
                </span>
              </h2>
              <div className="h-1 bg-primary mx-auto rounded-full w-20 mt-4" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="scale" delay={0.1}>
            <PdfPreview
              previewUrl={workProof.previewUrl}
              viewUrl={workProof.viewUrl}
              downloadUrl={workProof.downloadUrl}
              title={`${experience.company} — ${experience.role}`}
            />
          </ScrollReveal>
        </Section>
      )}

      {/* Responsibilities */}
      <Section variant="page">
        <ScrollReveal direction="up" stagger staggerDelay={0.15}>
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h4 className="text-primary font-semibold tracking-widest uppercase text-sm">
              My Role
            </h4>
            <h2 className="text-3xl md:text-5xl font-bold text-text-main tracking-tight">
              Key{" "}
              <span className="text-gradient bg-gradient-to-r from-primary via-primary/80 to-text-main">
                Responsibilities
              </span>
            </h2>
            <div className="h-1 bg-primary mx-auto rounded-full w-20 mt-4" />
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
          {experience.checklist.map((item, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              delay={idx * 0.05}
              className={idx === experience.checklist.length - 1 ? "sm:col-span-2" : ""}
            >
              <div className="group h-full flex items-start gap-4 p-5 rounded-2xl border border-border-subtle bg-bg-section/40 hover:border-primary/30 hover:bg-bg-section/70 transition-all duration-300">
                <span className="relative flex items-center justify-center w-8 h-8 shrink-0 rounded-xl bg-primary/10 border border-primary/25 text-xs font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                  {idx + 1}
                </span>
                <p className="text-sm text-text-main leading-relaxed">{item}</p>
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
                Explore more of my journey
              </h2>
              <p className="text-text-muted max-w-xl mx-auto">
                Learn more about my background, skills, and the work I have
                delivered.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Magnetic range={20} strength={0.3}>
                <Link href="/about" className="btn btn-primary px-8 py-3 text-sm">
                  Back to About
                </Link>
              </Magnetic>
              <Magnetic range={20} strength={0.3}>
                <Link href="/projects" className="btn btn-secondary px-8 py-3 text-sm">
                  View Projects
                </Link>
              </Magnetic>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </div>
  );
};

export default ExperienceDetailPage;
