"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Layers,
  Copy,
  Check,
  Globe2,
  Award,
  Server
} from "lucide-react";

export function BentoGrid() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("narendra.kumarvg2@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const languages = [
    { text: "Hello", x: "right-[24%]", y: "bottom-[10%]", size: "text-2xl lg:text-4xl" },
    { text: "नमस्ते", x: "left-[55%]", y: "bottom-[27%]", size: "text-xl lg:text-3xl" },
    { text: "こんにちは", x: "right-[6%]", y: "top-[14%]", size: "text-xl lg:text-3xl" },
    { text: "Bonjour", x: "right-[9%]", y: "bottom-[32%]", size: "text-lg lg:text-2xl" },
    { text: "Hola", x: "right-[39%]", y: "top-[42%]", size: "text-sm lg:text-lg" },
    { text: "Ciao", x: "right-[4%]", y: "top-[54%]", size: "text-sm lg:text-lg" },
    { text: "Hallo", x: "left-[9%]", y: "top-[42%]", size: "text-base lg:text-xl" }
  ];

  return (
    <section id="about" className="py-20 relative bg-[#000319] overflow-hidden">
      {/* Subtle Background Radial Fade */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-[#00ff99] mb-3">
            <Layers className="w-3.5 h-3.5 text-[#00ff99]" />
            <span>ENGINEERING FOUNDATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Short <span className="text-[#00ff99]">Profile</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/60 max-w-xl mx-auto">
            Architectural thinking, verified credentials, and high-concurrency systems delivery.
          </p>
        </div>

        {/* 6-Card Bento Grid Layout (Matching radnaabazar.com) */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-5 lg:gap-6 auto-rows-fr">
          
          {/* Card 1 (Large 3-col): Developer building clean, reliable backend & full-stack systems */}
          <div className="group relative overflow-hidden rounded-3xl bento-card p-6 sm:p-8 lg:p-10 flex flex-col justify-between lg:col-span-3 md:col-span-6 min-h-[320px] lg:min-h-[360px]">
            {/* Background Decorative Mesh */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#00ff99]/10 via-sky-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-4 right-4 opacity-10 pointer-events-none">
              <Server className="w-64 h-64 text-white" />
            </div>

            <div className="relative z-10">
              <span className="text-xs font-mono uppercase tracking-wider text-[#00ff99] font-semibold">
                Architecture &amp; Reliability
              </span>
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white max-w-md leading-tight group-hover:translate-x-1 transition-transform duration-300">
                Building clean, reliable enterprise backend &amp; full-stack systems
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-white/70 max-w-lg leading-relaxed">
                Specialized in layered Spring Boot architectures, stateless JWT security, PostgreSQL relational persistence, automated JUnit/Mockito testing, and Docker containerization.
              </p>
            </div>
          </div>

          {/* Card 2 (2-col): Fluent in English, Hindi & Technical Collaboration */}
          <div className="group relative overflow-hidden rounded-3xl bento-card p-6 sm:p-8 flex flex-col justify-between lg:col-span-2 md:col-span-3 min-h-[280px]">
            {/* Floating Background Greetings */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden select-none">
              <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-white/[0.03] blur-2xl" />
              <div className="absolute -bottom-12 left-1/4 h-44 w-44 rounded-full bg-[#00ff99]/[0.05] blur-2xl" />
              {languages.map((lang, idx) => (
                <span
                  key={idx}
                  className={`absolute font-sans font-medium text-white/[0.08] ${lang.x} ${lang.y} ${lang.size}`}
                >
                  {lang.text}
                </span>
              ))}
            </div>

            <div className="relative z-10">
              <span className="text-xs font-mono uppercase tracking-wider text-[#00ff99] font-semibold flex items-center gap-1.5">
                <Globe2 className="w-3.5 h-3.5" />
                Global Communication
              </span>
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug group-hover:translate-x-1 transition-transform duration-300">
                Fluent in English, Hindi &amp; cross-functional engineering collaboration
              </h3>
            </div>
          </div>

          {/* Card 3 (2-col): Primary Tech Stack with Animated Flowing Connectors */}
          <div className="group relative overflow-hidden rounded-3xl bento-card p-6 sm:p-8 flex flex-col justify-between lg:col-span-2 md:col-span-3 min-h-[300px]">
            <div className="relative z-10">
              <span className="text-xs font-mono uppercase tracking-wider text-[#00ff99] font-semibold">
                Core Tech Stack
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Java, Spring Boot &amp; React
              </h3>
            </div>

            {/* Stack Columns with Circuit Connectors */}
            <div className="flex gap-2 sm:gap-3 mt-5 relative z-10 justify-start min-[420px]:justify-end">
              {/* Column 1 */}
              <div className="flex flex-col gap-2">
                {["Java 21", "Spring Boot", "Spring Security", "React.js"].map((tech, i) => (
                  <div
                    key={i}
                    className="relative px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/[0.1] text-xs font-mono text-white/90 text-center backdrop-blur-sm"
                  >
                    {tech}
                    <span className="pointer-events-none absolute left-1/2 top-full h-2 w-px -translate-x-1/2 bg-[#00ff99]/40" />
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-2">
                {["PostgreSQL", "REST APIs", "Docker", "Redis"].map((tech, i) => (
                  <div
                    key={i}
                    className="relative px-3 py-1.5 rounded-lg bg-white/[0.06] border border-[#00ff99]/30 text-xs font-mono text-[#00ff99] text-center backdrop-blur-sm"
                  >
                    {tech}
                    <span className="pointer-events-none absolute left-1/2 top-full h-2 w-px -translate-x-1/2 bg-sky-400/40" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 4 (2-col): Enterprise Honors & Scholarships */}
          <div className="group relative overflow-hidden rounded-3xl bento-card p-6 sm:p-8 flex flex-col justify-between lg:col-span-2 md:col-span-3 min-h-[260px]">
            <div className="absolute right-6 top-6 z-0">
              <div className="relative">
                <div className="absolute inset-0 scale-125 rounded-full bg-[#00ff99]/20 blur-xl" />
                <div className="w-16 h-16 rounded-2xl bg-white/[0.05] border border-[#00ff99]/40 flex items-center justify-center text-[#00ff99]">
                  <Award className="w-9 h-9" />
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <span className="text-xs font-mono uppercase tracking-wider text-[#00ff99] font-semibold flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                Verified Honors
              </span>
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:translate-x-1 transition-transform duration-300">
                Innovative Champion Award &amp; 100% Scholarship
              </h3>
              <p className="text-xs text-white/60 mt-1">
                Awarded by Hexaware Technologies &amp; Shiv Nadar Foundation for academic and engineering merit.
              </p>
            </div>
          </div>

          {/* Card 5 (3-col): The Inside Scoop */}
          <div className="group relative overflow-hidden rounded-3xl bento-card p-6 sm:p-8 flex flex-col justify-between md:col-span-3 min-h-[260px]">
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-[#00ff99] font-semibold">
                Current Role · The Inside Scoop
              </span>
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#00ff99]/40 shadow-lg shadow-[#00ff99]/20 shrink-0">
                <Image
                  src="/narendra.jpg"
                  alt="Narendra"
                  fill
                  className="object-cover object-[center_15%]"
                />
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:translate-x-1 transition-transform duration-300">
                Associate Software Engineer at Hexaware Technologies
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-white/70 leading-relaxed">
                Developing and maintaining enterprise backend applications with Java, Spring Boot, and PostgreSQL. Enforcing strict separation of Controller, Service, and Repository layers, SOLID principles, and Docker containerization.
              </p>
            </div>
          </div>

          {/* Card 6 (2-col): Do you want to collaborate? With Spinning Conic-Gradient Button */}
          <div className="group relative overflow-hidden rounded-3xl bento-card p-6 sm:p-8 flex flex-col justify-between items-center text-center lg:col-span-2 md:col-span-3 min-h-[260px]">
            <div className="relative z-10 w-full">
              <span className="text-xs font-mono uppercase tracking-wider text-[#00ff99] font-semibold">
                Direct Collaboration
              </span>
              <h3 className="text-lg sm:text-2xl font-bold text-white mt-1">
                Do you want to ask a question?
              </h3>
            </div>

            {/* Signature radnaabazar Spinning Conic Gradient Button */}
            <div className="mt-4 sm:mt-6 w-full relative z-10 flex justify-center">
              <button
                onClick={copyEmail}
                className="relative inline-flex h-12 w-full max-w-[280px] overflow-hidden rounded-full p-[1px] focus:outline-none transition-transform active:scale-95 cursor-pointer shadow-xl shadow-[#00ff99]/15"
              >
                <span className="absolute inset-[-1000%] animate-spin-conic bg-[conic-gradient(from_90deg_at_50%_50%,#00ff99_0%,#38bdf8_50%,#00ff99_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#000319] px-6 text-xs sm:text-sm font-semibold text-white backdrop-blur-3xl gap-2 hover:bg-[#000319]/90 transition-colors">
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#00ff99]" />
                      <span className="text-[#00ff99]">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#00ff99]" />
                      <span>Copy my email address</span>
                    </>
                  )}
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
