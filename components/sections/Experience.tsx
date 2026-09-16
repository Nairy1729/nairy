"use client";

import React, { useState } from "react";
import { Building2, Calendar, MapPin, Cpu, ArrowRight, Briefcase } from "lucide-react";

export function Experience() {
  const [activeCapability, setActiveCapability] = useState<number>(0);
  const [activeYearIndex, setActiveYearIndex] = useState<number>(2);

  const careerMilestones = [
    {
      year: "2020 – 2024",
      label: "VIT VELLORE",
      sublabel: "Academic Foundation",
      role: "B.Tech in Electronics and Communication Engineering",
      highlight: "Object-oriented programming, data structures, algorithms, and computing fundamentals."
    },
    {
      year: "2024",
      label: "FULL-STACK RIGOR",
      sublabel: "Systems & Apps",
      role: "Published Applications & Enterprise Platforms",
      highlight: "Built WordDrop, Another Life, OfferPilot, and high-throughput REST APIs."
    },
    {
      year: "2025 – PRESENT",
      label: "HEXAWARE TECH",
      sublabel: "Active Production",
      role: "Associate Software Engineer",
      highlight: "Developing enterprise backend applications using Java, Spring Boot, REST APIs, and PostgreSQL."
    }
  ];

  const capabilities = [
    {
      id: "layered-apis",
      number: "01",
      label: "Spring Boot & REST APIs",
      title: "Layered Enterprise REST Services",
      deliverable:
        "Designed and implemented production RESTful APIs using Spring Boot with strict separation of Controller, Service, and Repository layers. Enforced transactional boundaries, input validation, and domain invariants.",
      tech: ["Java", "Spring Boot", "Spring MVC", "REST APIs", "SOLID"],
      metrics: "Clean decoupled architecture • Strict domain invariants"
    },
    {
      id: "security",
      number: "02",
      label: "Security & JWT Auth",
      title: "Stateless Security & Route-Level RBAC",
      deliverable:
        "Implemented authentication and role-based authorization using Spring Security and JWT. Built stateless filter chains that validate token signatures and bind authenticated security contexts across all endpoints.",
      tech: ["Spring Security", "JWT", "RBAC", "Stateless Auth"],
      metrics: "Sub-millisecond token verification • Zero session leakage"
    },
    {
      id: "fullstack",
      number: "03",
      label: "React & Database Integration",
      title: "Full-Stack Integration & Relational Persistence",
      deliverable:
        "Integrated backend APIs with dynamic React.js frontend applications to deliver production-ready features backed by PostgreSQL. Designed clean relational schemas and optimized indexed queries.",
      tech: ["React.js", "PostgreSQL", "Spring Data JPA", "TypeScript"],
      metrics: "ACID consistency • Seamless API-to-UI data binding"
    },
    {
      id: "quality",
      number: "04",
      label: "Testing & Containerization",
      title: "Regression-Resistant Verification & Container Parity",
      deliverable:
        "Developed comprehensive unit and integration test suites using JUnit 5 and Mockito to verify service logic. Containerized backend applications using Docker for reproducible deployment environments.",
      tech: ["JUnit 5", "Mockito", "Docker", "CI/CD"],
      metrics: "Robust automated test coverage • Uniform dev/prod runtime"
    }
  ];

  const activeCap = capabilities[activeCapability];
  const activeMilestone = careerMilestones[activeYearIndex];

  return (
    <section id="experience" className="py-20 relative bg-[#000319] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-[#00ff99] mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#00ff99]" />
            <span>JOURNEY REPORT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Where I&apos;ve <span className="text-[#00ff99]">Built &amp; Scaled</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/60 max-w-xl mx-auto">
            Associate Software Engineer at Hexaware Technologies with 1+ years of professional experience delivering enterprise backend systems and resilient full-stack applications.
          </p>
        </div>

        {/* Spatial Career Timeline & Operational Node */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/30 p-4 sm:p-10 backdrop-blur-xl mb-10">
          {/* Interactive Career Timeline Progression Axis */}
          <div className="mb-8 p-3.5 sm:p-6 rounded-2xl border border-slate-800/80 bg-slate-950/70">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-4 flex items-center justify-between">
              <span>CAREER PROGRESSION TIMELINE</span>
              <span className="text-cyan-400">Select waypoint to inspect trajectory</span>
            </div>

            {/* 3 Interactive Milestones Along the Axis */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
              {careerMilestones.map((m, idx) => {
                const isSelected = activeYearIndex === idx;
                return (
                  <button
                    key={m.year}
                    onClick={() => setActiveYearIndex(idx)}
                    className={`p-3.5 rounded-xl border text-left transition-all duration-150 cursor-pointer flex flex-col justify-between relative ${
                      isSelected
                        ? "bg-slate-800/95 border-blue-500/70 shadow-md shadow-blue-500/10 scale-101"
                        : "bg-slate-900/40 border-slate-800/70 hover:border-slate-700 hover:bg-slate-900/80"
                    }`}
                  >
                    {m.year === "2026" && (
                      <div id="path-anchor-experience-2026-dock" className="absolute top-2 right-2 w-2 h-2 opacity-0 pointer-events-none" />
                    )}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-cyan-400 font-semibold">{m.year}</span>
                      {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white tracking-tight">{m.label}</div>
                      <div className="text-[10px] font-mono text-slate-400">{m.sublabel}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Continuous Timeline Gradient Bar */}
            <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden relative mb-4">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-400 rounded-full transition-all duration-500"
                style={{ width: activeYearIndex === 0 ? "33%" : activeYearIndex === 1 ? "66%" : "100%" }}
              />
            </div>

            {/* Dynamic Milestone Highlight */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/60 text-xs font-mono flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
              <span className="text-slate-200 font-semibold">{activeMilestone.role}</span>
              <span className="text-slate-400 text-[11px] leading-snug">{activeMilestone.highlight}</span>
            </div>
          </div>

          {/* Primary Operational Role: Hexaware Technologies */}
          <div className="mb-8 p-4 sm:p-6 rounded-2xl border border-slate-800/80 bg-slate-950/60">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-800/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      Hexaware Technologies
                    </h3>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-[10px] font-mono text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active Production Deployment
                    </span>
                  </div>
                  <div className="text-xs font-mono text-slate-400 mt-0.5">
                    Associate Software Engineer • Full-Time
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>Mar 2025 – Present</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>India</span>
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Developing and maintaining enterprise backend applications using Java, Spring Boot, REST APIs, and PostgreSQL. Adhering to layered design patterns, transactional boundaries, and SOLID principles to deliver resilient software systems.
            </p>
          </div>

          {/* Branching Production Capabilities Interactive Matrix */}
          <div>
            <div className="text-xs font-mono uppercase text-slate-400 font-semibold mb-4 flex items-center justify-between">
              <span>Branching System Capabilities (Select to inspect):</span>
              <span className="text-[11px] text-blue-400">0{activeCapability + 1} / 04 Selected</span>
            </div>

            {/* Capability Branch Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
              {capabilities.map((cap, idx) => {
                const isSelected = activeCapability === idx;
                return (
                  <button
                    key={cap.id}
                    onClick={() => setActiveCapability(idx)}
                    className={`p-3 rounded-xl border text-left transition-all duration-150 cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? "bg-slate-800/90 border-blue-500/60 shadow-md translate-y-[-1px]"
                        : "bg-slate-950/50 border-slate-800/70 hover:border-slate-700 hover:bg-slate-900/40"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono text-slate-500">{cap.number}</span>
                      {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />}
                    </div>
                    <div className="text-[11px] sm:text-xs font-semibold text-white tracking-tight line-clamp-2 min-h-[32px]">
                      {cap.label}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Expanded Capability Detail Inspector */}
            <div className="p-5 sm:p-6 rounded-2xl border border-slate-800/80 bg-slate-950/70">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-4 border-b border-slate-800/80 gap-3">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-blue-400 shrink-0" />
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                    {activeCap.title}
                  </h4>
                </div>
                <div className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-900/50 px-2.5 py-0.5 rounded-md self-start sm:self-auto">
                  {activeCap.metrics}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-normal">
                {activeCap.deliverable}
              </p>

              {/* Technologies Applied */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
                {activeCap.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Seamless Transformation into Verified Credentials & Education */}
        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-6 sm:p-8 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider mb-1">
                TRANSFORMATION · ENTERPRISE PRACTICE ──► VERIFIED FOUNDATIONS
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Professional engineering backed by academic distinction and certified skill.
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Inspect degree credentials, academic honors from VIT Vellore, and industry certifications.
              </p>
            </div>

            <a
              href="#achievements"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:border-slate-700 transition-all self-start md:self-auto cursor-pointer"
            >
              <span>Inspect Credentials & Education</span>
              <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
