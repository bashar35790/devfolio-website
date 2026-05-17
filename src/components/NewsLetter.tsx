"use client";

import React from "react";
import { FaPaperPlane, FaEnvelopeOpenText } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import Magnetic from "./Magnetic";

const NewsLetter = () => {
  return (
    <section id="newsletter" className="relative py-24 bg-[#0A0A0C] overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] max-w-4xl bg-primary/5 blur-[150px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <ScrollReveal direction="scale" duration={1}>
          <div className="relative max-w-5xl mx-auto glass rounded-[2.5rem] p-8 md:p-16 border border-white/10 overflow-hidden group shadow-2xl">
            {/* Inner Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-2 mx-auto lg:mx-0">
                  <FaEnvelopeOpenText className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                  Stay Ahead of the <br className="hidden lg:block" />
                  <span className="text-gradient bg-gradient-to-r from-primary via-primary/80 to-white">Curve.</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                  Subscribe to my newsletter for the latest insights on web development, design trends, and exclusive content delivered straight to your inbox.
                </p>
              </div>

              {/* Right Content - Form */}
              <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
                <form className="relative" onSubmit={(e) => e.preventDefault()}>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
                  <div className="relative flex flex-col sm:flex-row gap-4 p-2 bg-[#111] rounded-2xl border border-white/5 shadow-2xl">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      required
                      className="flex-1 px-6 py-4 bg-transparent text-white placeholder-gray-500 focus:outline-none w-full"
                    />
                    <Magnetic>
                      <button
                        type="submit"
                        className="btn btn-primary py-4 px-8 flex items-center justify-center gap-2 group/btn shrink-0 rounded-xl cursor-pointer"
                      >
                        Subscribe
                        <FaPaperPlane className="w-4 h-4 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </Magnetic>
                  </div>
                  <p className="text-xs text-gray-500 text-center mt-4 flex items-center justify-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500/50" /> No spam. Unsubscribe anytime.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default NewsLetter;