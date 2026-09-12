"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Copy,
  Check,
  Compass,
  Layers,
  Cpu,
  ShieldCheck,
  Briefcase,
  Award,
  Mail,
  Code2,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("narendra.kumarvg2@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const journeyMilestones = [
    {
      step: "01",
      title: "Products & Experiences",
      desc: "WordDrop (Android) & Another Life (Cinematic)",
      icon: <Layers className="w-3.5 h-3.5 text-cyan-400" />,
      targetId: "work"
    },
    {
      step: "02",
      title: "System Architecture",
      desc: "Spring Boot, JWT & Distributed Persistence",
      icon: <Cpu className="w-3.5 h-3.5 text-blue-400" />,
      targetId: "architecture"
    },
    {
      step: "03",
      title: "Engineering Axioms",
      desc: "Clean Boundaries, Security by Design, Reliability",
      icon: <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />,
      targetId: "about"
    },
    {
      step: "04",
      title: "Professional Experience",
      desc: "Hexaware Enterprise Backend Engineering",
      icon: <Briefcase className="w-3.5 h-3.5 text-emerald-400" />,
      targetId: "experience"
    },
    {
      step: "05",
      title: "Credentials & Foundations",
      desc: "Innovative Champion Award & 100% Scholarship",
      icon: <Award className="w-3.5 h-3.5 text-amber-400" />,
      targetId: "achievements"
    },
    {
      step: "06",
      title: "Resolution & Contact",
      desc: "Direct Technical Collaboration & Ingress",
      icon: <Mail className="w-3.5 h-3.5 text-cyan-300" />,
      targetId: "contact"
    }
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex flex-col justify-center pt-24 sm:pt-28 pb-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Departure Origin Badge */}
        <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-[10px] sm:text-[11px] font-mono text-slate-300 mb-6 backdrop-blur-md max-w-full">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-sm shadow-cyan-400/80 shrink-0" />
          <span className="font-semibold text-white">JOURNEY ORIGIN</span>
          <span className="text-slate-600">·</span>
          <span className="text-cyan-300">Hexaware Technologies</span>
          <span className="text-slate-600 hidden xs:inline">·</span>
          <span className="text-slate-400 hidden xs:inline">Associate Software Engineer</span>
        </div>

        {/* High-Density Editorial Viewport Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left (55%): Typography, Identity & Core Actions */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-800/40 text-[10px] sm:text-[11px] font-mono text-blue-300">
              <Code2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>JAVA FULL STACK DEVELOPER · SOFTWARE ENGINEER</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Engineering real products from backend architecture to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
                polished experiences.
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-400 max-w-xl leading-relaxed font-normal">
              Specializing in <strong className="text-slate-200 font-semibold">Java, Spring Boot, PostgreSQL, and React</strong>. Currently engineering enterprise backend applications at <strong className="text-slate-200 font-semibold">Hexaware Technologies</strong> and publishing consumer digital products.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a href="#work" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto font-medium shadow-lg shadow-blue-600/25 cursor-pointer justify-center"
                >
                  Explore Engineering Journey
                </Button>
              </a>

              <a href="#architecture" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto font-medium text-slate-300 cursor-pointer justify-center"
                >
                  System Architecture
                </Button>
              </a>

              <button
                onClick={copyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs font-mono text-slate-300 hover:text-white transition-all cursor-pointer"
                title="Click to copy verified email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-emerald-400 font-medium">Copied Email</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">narendra.kumarvg2@gmail.com</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-5 border-t border-slate-800/80 max-w-lg text-xs font-mono">
              <div>
                <div className="text-slate-500 text-[10px] uppercase font-medium">Primary Focus</div>
                <div className="text-slate-200 font-semibold mt-0.5">Java & Spring Boot</div>
              </div>
              <div>
                <div className="text-slate-500 text-[10px] uppercase font-medium">Enterprise</div>
                <div className="text-slate-200 font-semibold mt-0.5">Hexaware Tech</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-slate-500 text-[10px] uppercase font-medium">Published Works</div>
                <div className="text-cyan-400 font-semibold mt-0.5">WordDrop + Life</div>
              </div>
            </div>
          </div>

          {/* Right (45%): Authentic Journey Departure Stage & Route Manifest */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-800/90 bg-slate-950/70 p-5 sm:p-7 backdrop-blur-xl shadow-2xl relative overflow-hidden group/manifest select-none">
              {/* Departure Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800/80">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <Compass className="w-4 h-4 text-cyan-400 animate-spin-slow" />
                  <span className="font-bold text-white tracking-wider">
                    JOURNEY MANIFEST
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/50 text-cyan-300 font-semibold">
                  6 MILESTONES
                </span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                A continuous narrative path traversing live products, distributed system architecture, engineering philosophy, and enterprise delivery.
              </p>

              {/* Waypoint Route Manifest List */}
              <div className="space-y-2 mb-6">
                {journeyMilestones.map((m) => (
                  <button
                    key={m.step}
                    onClick={() => scrollToSection(m.targetId)}
                    className="w-full p-2.5 rounded-xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800/70 hover:border-cyan-500/40 text-left transition-all duration-200 flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-[10px] font-mono text-cyan-400 font-bold group-hover:border-cyan-500/60 group-hover:text-cyan-300 transition-colors">
                        {m.step}
                      </span>
                      <div>
                        <div className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors flex items-center gap-1.5">
                          <span>{m.title}</span>
                          <span className="opacity-0 group-hover:opacity-100 text-cyan-400 text-[11px] transition-opacity">
                            →
                          </span>
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono">
                          {m.desc}
                        </div>
                      </div>
                    </div>
                    <span className="p-1 rounded-md bg-slate-950 border border-slate-800/80 text-slate-400 group-hover:text-cyan-300 transition-colors">
                      {m.icon}
                    </span>
                  </button>
                ))}
              </div>

              {/* Journey Launch Anchor - Where the glowing trail originates */}
              <div
                id="path-anchor-hero"
                className="pt-4 border-t border-slate-800/80 flex items-center justify-between"
              >
                <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-400">
                  <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                  <span className="font-semibold">TRAIL ACTIVE</span>
                </div>

                <button
                  onClick={() => scrollToSection("work")}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-colors cursor-pointer group font-medium"
                >
                  <span>Begin Journey</span>
                  <span className="group-hover:translate-x-1 transition-transform">──►</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
