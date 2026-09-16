"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ChevronRight,
  Mail,
  Check
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const [greetingIndex, setGreetingIndex] = useState(0);

  const greetings = [
    "glad you’re here 🌌",
    "systems architect ⚙️",
    "full-stack builder 🚀",
    "open for collaboration 🤝"
  ];

  const copyEmail = () => {
    navigator.clipboard.writeText("narendra.kumarvg2@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const cycleGreeting = () => {
    setGreetingIndex((prev) => (prev + 1) % greetings.length);
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16">
      {/* Background Grid with Radial Gradient Mask */}
      <div className="absolute inset-0 bg-[#000319] bg-grid-pattern pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#000319] via-transparent to-[#000319] pointer-events-none z-0" />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#000319] [mask-image:radial-gradient(ellipse_at_center,transparent_25%,black)] z-0" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-16 pt-8 pb-12">
          
          {/* Left Column: Typography & CTAs */}
          <div className="text-center xl:text-left order-2 xl:order-none max-w-2xl">
            {/* Tagline / Subtitle */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-[#00ff99] mb-6 tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#00ff99] animate-pulse" />
              <span>Java Full Stack Developer · Associate Software Engineer</span>
            </div>

            {/* Headline with Signature Hover Reveal */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              <span>Hello I&apos;m</span>{" "}
              <br />
              <span
                onClick={cycleGreeting}
                title="Click to cycle status"
                className="text-[#00ff99] relative inline-block group cursor-pointer overflow-hidden rounded-md px-1 -mx-1"
              >
                <span className="relative z-10 inline-block transition-colors duration-500 group-hover:text-[#000319]">
                  Narendra
                </span>
                <span className="absolute inset-0 bg-[#00ff99] z-0 transition-transform duration-500 ease-out scale-x-0 group-hover:scale-x-100 origin-left" />
              </span>
            </h1>

            {/* Value Proposition */}
            <p className="max-w-xl text-base sm:text-lg text-white/75 leading-relaxed mb-8">
              Associate Software Engineer at Hexaware Technologies with 1+ years of professional experience designing robust enterprise REST APIs, Spring Boot microservices, secure JWT auth, and dynamic React frontends.
            </p>

            {/* CTAs & Social Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4 sm:gap-5 mb-6 w-full">
              {/* View CV / Resume Button */}
              <a
                href="/Narendra_Resume.pdf"
                download
                className="group w-full sm:w-auto h-[52px] px-8 rounded-full border border-[#00ff99] text-[#00ff99] hover:bg-[#00ff99] hover:text-[#000319] text-xs sm:text-sm font-semibold uppercase tracking-[2px] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#00ff99]/15 cursor-pointer"
              >
                <span>View CV (PDF)</span>
                <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              {/* Social Buttons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Nairy1729"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full border border-white/[0.15] hover:border-[#00ff99] flex items-center justify-center text-white/80 hover:text-[#00ff99] hover:bg-white/[0.05] transition-all duration-300"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/in/nairykumar"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full border border-white/[0.15] hover:border-[#00ff99] flex items-center justify-center text-white/80 hover:text-[#00ff99] hover:bg-white/[0.05] transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <button
                  onClick={copyEmail}
                  className="w-11 h-11 rounded-full border border-white/[0.15] hover:border-[#00ff99] flex items-center justify-center text-white/80 hover:text-[#00ff99] hover:bg-white/[0.05] transition-all duration-300 cursor-pointer relative group"
                  aria-label="Copy Email"
                  title={copied ? "Email Copied!" : "Copy Email"}
                >
                  {copied ? <Check className="w-4 h-4 text-[#00ff99]" /> : <Mail className="w-4 h-4" />}
                  <span className="absolute -top-8 px-2 py-0.5 rounded bg-black/80 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {copied ? "Copied!" : "Copy Email"}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Orbital Dashed Ring & Interactive Centerpiece */}
          <div className="order-1 xl:order-none flex items-center justify-center">
            <div className="relative w-[240px] h-[240px] min-[360px]:w-[280px] min-[360px]:h-[280px] sm:w-[360px] sm:h-[360px] xl:w-[460px] xl:h-[460px] flex items-center justify-center">
              {/* Rotating Dashed SVG Orbit Ring */}
              <svg
                className="w-full h-full animate-spin-slow absolute inset-0 pointer-events-none"
                viewBox="0 0 506 506"
                fill="transparent"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="253"
                  cy="253"
                  r="248"
                  stroke="#00ff99"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="24 12 0 0"
                />
              </svg>

              {/* Inner Avatar Photo Container (radnaabazar style) */}
              <div
                onClick={cycleGreeting}
                className="group relative cursor-pointer w-[190px] h-[190px] min-[360px]:w-[220px] min-[360px]:h-[220px] sm:w-[280px] sm:h-[280px] xl:w-[360px] xl:h-[360px] rounded-full p-2 sm:p-2.5 bg-gradient-to-tr from-[#00ff99]/30 via-white/[0.08] to-transparent border border-[#00ff99]/30 shadow-[0_0_50px_rgba(0,255,153,0.18)] flex items-center justify-center overflow-hidden transition-transform duration-500 hover:scale-105"
              >
                <div className="w-full h-full rounded-full relative overflow-hidden border border-white/[0.15] bg-[#0b0c16]">
                  {/* Photo of Narendra */}
                  <Image
                    src="/narendra.jpg"
                    alt="Narendra - Java Full Stack Developer"
                    fill
                    sizes="(max-width: 640px) 220px, (max-width: 1280px) 280px, 360px"
                    className="object-cover object-[center_18%] filter contrast-[1.05] brightness-[1.02] group-hover:scale-105 transition-transform duration-700"
                    priority
                  />

                  {/* Futuristic Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000319]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Interactive Greeting Pill (Hover/Tap) */}
                  <div className="pointer-events-none absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full bg-[#000319]/85 border border-[#00ff99]/40 backdrop-blur-md text-[10px] sm:text-[11px] font-mono text-[#00ff99] shadow-lg shadow-black/60 transition-all duration-300 whitespace-nowrap flex items-center gap-1.5 z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00ff99] animate-pulse" />
                    <span>{greetings[greetingIndex]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metric Stats Banner */}
        <div className="pt-8 sm:pt-10 pb-6 border-t border-white/[0.08] mt-6">
          <div className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="flex items-center gap-4">
              <span className="text-3xl min-[420px]:text-4xl sm:text-5xl font-extrabold text-white tracking-tight shrink-0">
                1<span className="text-[#00ff99]">+</span>
              </span>
              <p className="text-xs sm:text-sm font-medium text-white/70 leading-snug">
                Years of professional experience at Hexaware
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl min-[420px]:text-4xl sm:text-5xl font-extrabold text-white tracking-tight shrink-0">
                5<span className="text-[#00ff99]">+</span>
              </span>
              <p className="text-xs sm:text-sm font-medium text-white/70 leading-snug">
                Production &amp; full-stack applications built
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-2xl min-[420px]:text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono text-[#00ff99] shrink-0">
                SOLID
              </span>
              <p className="text-xs sm:text-sm font-medium text-white/70 leading-snug">
                Layered backend &amp; RESTful architecture
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-2xl min-[420px]:text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono text-[#00ff99] shrink-0">
                Award
              </span>
              <p className="text-xs sm:text-sm font-medium text-white/70 leading-snug">
                Hexaware Innovative Champion &amp; Scholar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
