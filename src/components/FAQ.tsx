"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    id: 1,
    question: "How do you approach a new project?",
    answer:
      "Every project starts with understanding your goals, audience, and constraints. I research, wireframe, and prototype the core experience before writing a single line of production code, ensuring the foundation is solid and aligned with your vision.",
  },
  {
    id: 2,
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in modern frontend and backend development — React, Next.js, TypeScript, Node.js, and scalable API design — paired with a strong eye for UI/UX and pixel-perfect responsive interfaces.",
  },
  {
    id: 3,
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on scope. A focused landing page might take 1–2 weeks, while a full-stack web application usually spans 4–8 weeks. I provide a clear roadmap with milestones so you always know what's happening and when.",
  },
  {
    id: 4,
    question: "How do you handle revisions and feedback?",
    answer:
      "I build in structured revision rounds at every milestone. Feedback is collected and prioritized, then implemented in tight iterations so the project stays on schedule without sacrificing quality.",
  },
  {
    id: 5,
    question: "Do you provide support after launch?",
    answer:
      "Absolutely. Every delivery includes a post-launch support window for bug fixes and tweaks, and I offer ongoing maintenance plans for monitoring, updates, and future feature development.",
  },
  {
    id: 6,
    question: "How is project pricing determined?",
    answer:
      "Pricing is based on the scope, complexity, and timeline of your project. After our initial conversation I provide a transparent, fixed quote — no hidden fees, so you know exactly what you're investing in.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 bg-bg-page overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] right-[5%] w-[30%] h-[30%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[15%] left-[5%] w-[35%] h-[35%] bg-blue-500/5 blur-[110px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-4 mb-16 text-center">
        <ScrollReveal direction="up" stagger staggerDelay={0.15}>
          <h4 className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
            Got Questions?
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-text-main tracking-tight">
            Frequently Asked <span className="text-gradient bg-gradient-to-r from-primary via-primary/80 to-text-main">Questions</span>
          </h2>
          <div className="h-1 bg-primary mx-auto rounded-full w-20 mt-6" />
        </ScrollReveal>
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-3xl">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.id}
                  className={`glass rounded-2xl border transition-all duration-500 overflow-hidden ${
                    isOpen
                      ? "border-primary/30 shadow-xl"
                      : "border-border-subtle hover:border-primary/30"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center gap-4 p-6 text-left cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-border-subtle group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300 shrink-0">
                      <FaQuestionCircle />
                    </div>
                    <span className="flex-1 text-base md:text-lg font-semibold text-text-main group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 rounded-full bg-bg-section border border-border-subtle flex items-center justify-center text-primary shrink-0"
                    >
                      <FaChevronDown className="w-4 h-4" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 md:pl-20">
                          <p className="text-text-muted text-sm md:text-base leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQ;
