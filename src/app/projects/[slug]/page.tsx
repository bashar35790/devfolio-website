"use client";

import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowLeft,
  FaArrowRight,
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaLayerGroup,
  FaDesktop,
  FaServer,
} from "react-icons/fa";
import { projects } from "@/contents/projects";
import Section from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";
import Magnetic from "@/components/Magnetic";

const ProjectDetailPage = () => {
  const params = useParams();
  const slug = params.slug as string;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const primaryLink = project.liveLink || project.demoLink;
  const clientLink = project.clientLink || project.githubLink;
  const backendTech = project.backendTech ?? [];
  const hasBackend = backendTech.length > 0;

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
            href="/projects"
            className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm font-semibold uppercase tracking-widest group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-8 md:mt-12">
          <ScrollReveal direction="up" stagger staggerDelay={0.12}>
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest font-semibold text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full">
                <FaLayerGroup className="w-3 h-3" />
                {project.category}
              </span>

              <h1 className="text-3xl md:text-5xl font-bold text-text-main tracking-tight leading-tight">
                {project.title}
              </h1>

              <p className="text-lg text-text-muted border-l-4 border-primary/50 pl-4 italic leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 6 && (
                  <span className="text-[10px] text-text-muted font-medium px-2 py-1">
                    +{project.technologies.length - 6} more
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                {primaryLink && (
                  <Magnetic range={20} strength={0.3}>
                    <a
                      href={primaryLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary py-3 px-6 text-sm"
                    >
                      <FaExternalLinkAlt className="w-3.5 h-3.5" />
                      Live Preview
                    </a>
                  </Magnetic>
                )}
                {clientLink && (
                  <Magnetic range={20} strength={0.3}>
                    <a
                      href={clientLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary py-3 px-6 text-sm"
                    >
                      <FaGithub className="w-4 h-4" />
                      Client Code
                    </a>
                  </Magnetic>
                )}
                {project.serverLink && (
                  <Magnetic range={20} strength={0.3}>
                    <a
                      href={project.serverLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary py-3 px-6 text-sm"
                    >
                      <FaGithub className="w-4 h-4" />
                      Server Code
                    </a>
                  </Magnetic>
                )}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="scale" delay={0.1}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-700" />
              <div className="relative glass rounded-3xl overflow-hidden border border-border-subtle shadow-2xl">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-page/60 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Overview */}
      <Section variant="muted">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
          <ScrollReveal direction="up">
            <div className="lg:sticky lg:top-28 space-y-4">
              <h4 className="text-primary font-semibold tracking-widest uppercase text-sm">
                The Project
              </h4>
              <h2 className="text-3xl md:text-4xl font-bold text-text-main tracking-tight">
                Project{" "}
                <span className="text-gradient bg-gradient-to-r from-primary via-primary/80 to-text-main">
                  Overview
                </span>
              </h2>
              <div className="h-1 bg-primary rounded-full w-20" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1} className="lg:col-span-2">
            <div className="space-y-6 text-text-muted text-base md:text-lg leading-relaxed">
              {project.overview.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* How It Was Built */}
      {project.buildSteps && project.buildSteps.length > 0 && (
        <Section variant="page">
          <ScrollReveal direction="up" stagger staggerDelay={0.15}>
            <div className="text-center mb-12 md:mb-16 space-y-4">
              <h4 className="text-primary font-semibold tracking-widest uppercase text-sm">
                Behind the Build
              </h4>
              <h2 className="text-3xl md:text-5xl font-bold text-text-main tracking-tight">
                How It Was{" "}
                <span className="text-gradient bg-gradient-to-r from-primary via-primary/80 to-text-main">
                  Built
                </span>
              </h2>
              <div className="h-1 bg-primary mx-auto rounded-full w-20 mt-4" />
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2">
            {project.buildSteps.map((step, idx) => (
              <ScrollReveal key={step.title} direction="up" delay={idx * 0.05}>
                <div className="group relative h-full glass rounded-3xl p-8 border border-border-subtle hover:border-primary/30 transition-all duration-500">
                  <div className="flex items-start gap-5">
                    <span className="shrink-0 w-11 h-11 rounded-2xl bg-primary/10 border border-primary/20 text-primary font-bold flex items-center justify-center">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-text-main group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Section>
      )}

      {/* Tech Stack */}
      <Section variant="muted">
        <ScrollReveal direction="up" stagger staggerDelay={0.15}>
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h4 className="text-primary font-semibold tracking-widest uppercase text-sm">
              The Toolkit
            </h4>
            <h2 className="text-3xl md:text-5xl font-bold text-text-main tracking-tight">
              Technology{" "}
              <span className="text-gradient bg-gradient-to-r from-primary via-primary/80 to-text-main">
                Stack
              </span>
            </h2>
            <div className="h-1 bg-primary mx-auto rounded-full w-20 mt-4" />
          </div>
        </ScrollReveal>

        <div
          className={`grid gap-8 ${hasBackend ? "lg:grid-cols-2" : "max-w-3xl mx-auto"}`}
        >
          <ScrollReveal direction="up">
            <div className="h-full glass rounded-3xl p-8 md:p-10 border border-border-subtle">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <FaDesktop className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-main">Frontend</h3>
                  <p className="text-text-muted text-xs uppercase tracking-widest">
                    Interface & Experience
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.frontendTech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-semibold text-text-main bg-bg-section px-3 py-1.5 rounded-full border border-border-subtle"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {hasBackend && (
            <ScrollReveal direction="up" delay={0.1}>
              <div className="h-full glass rounded-3xl p-8 md:p-10 border border-border-subtle">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <FaServer className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-main">Backend</h3>
                    <p className="text-text-muted text-xs uppercase tracking-widest">
                      Data & Logic
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {backendTech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-semibold text-text-main bg-bg-section px-3 py-1.5 rounded-full border border-border-subtle"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </Section>

      {/* Key Features */}
      {project.features.length > 0 && (
        <Section variant="page">
          <ScrollReveal direction="up" stagger staggerDelay={0.15}>
            <div className="text-center mb-12 md:mb-16 space-y-4">
              <h4 className="text-primary font-semibold tracking-widest uppercase text-sm">
                What It Does
              </h4>
              <h2 className="text-3xl md:text-5xl font-bold text-text-main tracking-tight">
                Key{" "}
                <span className="text-gradient bg-gradient-to-r from-primary via-primary/80 to-text-main">
                  Features
                </span>
              </h2>
              <div className="h-1 bg-primary mx-auto rounded-full w-20 mt-4" />
            </div>
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature, idx) => (
              <ScrollReveal key={feature} direction="up" delay={idx * 0.04}>
                <div className="group h-full glass rounded-2xl p-6 border border-border-subtle hover:border-primary/30 transition-all duration-500 flex items-start gap-4">
                  <FaCheckCircle className="shrink-0 w-5 h-5 text-primary mt-0.5" />
                  <p className="text-text-main text-sm leading-relaxed">
                    {feature}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Section>
      )}

      {/* CTA + Navigation */}
      <Section variant="muted">
        <ScrollReveal direction="up">
          <div className="glass rounded-3xl p-10 md:p-14 border border-border-subtle text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-text-main tracking-tight">
                Want to see more work?
              </h2>
              <p className="text-text-muted max-w-xl mx-auto">
                Explore the full portfolio of projects I have designed and
                engineered.
              </p>
            </div>

            <Magnetic range={20} strength={0.3}>
              <Link href="/projects" className="btn btn-primary px-10 py-3 text-sm">
                View All Projects
              </Link>
            </Magnetic>

            <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-border-subtle">
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex items-center gap-4 text-left p-4 rounded-2xl hover:bg-card-bg transition-colors"
              >
                <FaArrowLeft className="text-primary group-hover:-translate-x-1 transition-transform" />
                <span>
                  <span className="block text-[10px] uppercase tracking-widest text-text-muted">
                    Previous
                  </span>
                  <span className="block text-sm font-semibold text-text-main group-hover:text-primary transition-colors line-clamp-1">
                    {prevProject.title}
                  </span>
                </span>
              </Link>
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex items-center justify-end gap-4 text-right p-4 rounded-2xl hover:bg-card-bg transition-colors"
              >
                <span>
                  <span className="block text-[10px] uppercase tracking-widest text-text-muted">
                    Next
                  </span>
                  <span className="block text-sm font-semibold text-text-main group-hover:text-primary transition-colors line-clamp-1">
                    {nextProject.title}
                  </span>
                </span>
                <FaArrowRight className="text-primary group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </div>
  );
};

export default ProjectDetailPage;
