"use client";

import React, { useState, useEffect } from "react";
import {
  Download,
  Globe,
  Server,
  Sparkles,
  ArrowUpRight,
  X,
  FileText,
  Cpu,
  Database,
  ShieldCheck,
  Workflow,
  Smartphone,
  CheckCircle2
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  stats: string;
  tech: string[];
  primaryLink: {
    label: string;
    url: string;
    isDownload?: boolean;
  };
  githubUrl?: string;
  gradient: string;
  previewGraphic: "jobhunter" | "lexora" | "worddrop" | "offerpilot" | "cds" | "anotherlife";
  featured?: boolean;
}

export function Projects3D() {
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string | null>(null);

  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    if (activeCaseStudyId) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setActiveCaseStudyId(null);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [activeCaseStudyId]);

  const projects: Project[] = [
    {
      id: "jobhunter",
      title: "JobHunter",
      category: "Full-Stack / AI / Dev Tools",
      tagline: "AI-Powered Job Discovery Platform",
      description:
        "An AI-powered job discovery platform built to help developers find jobs worth applying to based on their profile, skills, experience and career preferences. Features intelligent candidate-job matching, factual resume tailoring, and a dedicated Indian government recruitment engine.",
      stats: "Production · Spring Boot · React · pgvector · Gemini",
      tech: [
        "React",
        "TypeScript",
        "Spring Boot",
        "PostgreSQL",
        "pgvector",
        "Google Gemini",
        "Firecrawl",
        "Tailwind CSS",
        "TanStack Query",
        "JWT Auth"
      ],
      primaryLink: {
        label: "Live Demo",
        url: "https://jobhunterfrontend.vercel.app"
      },
      githubUrl: "https://github.com/Nairy1729",
      gradient: "from-[#00ff99]/20 via-teal-900/30 to-[#000319]",
      previewGraphic: "jobhunter",
      featured: true
    },
    {
      id: "lexora",
      title: "Lexora — Word Puzzle",
      category: "React Native & Android",
      tagline: "Think it. Find it. Lexora.",
      description:
        "A luxury, offline-first five-letter daily word puzzle app built with React Native, Expo SDK 52, and TypeScript. Features an offline 12,947-word dictionary, deterministic 00:00 UTC daily sync across 6.3+ years, dual-session daily and practice isolation, and an Android build shrunk by 55% from 80.8 MB to 36.15 MB.",
      stats: "v1.0.0 Release · React Native · Expo 52 · 152 Tests",
      tech: [
        "React Native",
        "Expo SDK 52",
        "TypeScript",
        "Android",
        "Hermes",
        "ProGuard / R8",
        "Offline Engine",
        "WCAG AAA"
      ],
      primaryLink: {
        label: "Download APK (v1.0.0)",
        url: "https://github.com/Nairy1729/Lexora/releases/tag/v1.0.0",
        isDownload: true
      },
      githubUrl: "https://github.com/Nairy1729/Lexora",
      gradient: "from-amber-500/20 via-orange-950/30 to-[#000319]",
      previewGraphic: "lexora",
      featured: true
    },
    {
      id: "worddrop",
      title: "WordDrop — Daily Word App",
      category: "Android & Microservices",
      tagline: "Learn one beautiful English word every day, without trying.",
      description:
        "An effortless vocabulary expansion Android app integrating curated vocabulary directly into phone lock screens, notification shade, and home screen widgets.",
      stats: "v1.0.0 Release · Kotlin + Python Backend",
      tech: ["Kotlin", "Android SDK", "Room DB", "Lock Screen API", "Python"],
      primaryLink: {
        label: "Download APK (v1.0.0)",
        url: "https://github.com/Nairy1729/WordDrop/releases/download/v1.0.0/worddrop.apk",
        isDownload: true
      },
      githubUrl: "https://github.com/Nairy1729/WordDrop",
      gradient: "from-[#00ff99]/20 via-emerald-900/30 to-[#000319]",
      previewGraphic: "worddrop"
    },
    {
      id: "offerpilot",
      title: "OfferPilot — Offer Platform",
      category: "Full-Stack Web Application",
      tagline: "Centralized compensation & offer management platform.",
      description:
        "Engineered RESTful APIs with validation, pagination, filtering, and global exception handling. Integrated Redis caching, stateless JWT authentication, and Docker containerization.",
      stats: "Java · Spring Boot · Redis · React",
      tech: ["Java", "Spring Boot", "PostgreSQL", "React.js", "Redis", "Docker"],
      primaryLink: {
        label: "View Source Code",
        url: "https://github.com/Nairy1729"
      },
      githubUrl: "https://github.com/Nairy1729",
      gradient: "from-sky-500/20 via-cyan-900/30 to-[#000319]",
      previewGraphic: "offerpilot"
    },
    {
      id: "cds-enterprise",
      title: "CDS — Enterprise System",
      category: "Layered Backend Architecture",
      tagline: "Production-grade enterprise system with strict layered separation.",
      description:
        "Developed modular REST APIs with clear Controller-Service-Repository tiers. Implemented Spring Security JWT authentication, automated JUnit 5/Mockito testing, and Docker deployment.",
      stats: "Hexaware Tech · Enterprise Application",
      tech: ["Java 21", "Spring Boot", "PostgreSQL", "JPA/Hibernate", "Docker", "JUnit 5"],
      primaryLink: {
        label: "View Repository",
        url: "https://github.com/Nairy1729"
      },
      githubUrl: "https://github.com/Nairy1729",
      gradient: "from-indigo-500/20 via-purple-900/30 to-[#000319]",
      previewGraphic: "cds"
    },
    {
      id: "another-life",
      title: "What If: Another Life",
      category: "WebGL Interactive Storytelling",
      tagline: "Atmospheric alternate lifelines narrative simulation.",
      description:
        "A cinematic 3D digital journey exploring divergent life paths with smooth Lenis inertia scrolling, custom shaders, and rich reactive typography.",
      stats: "Interactive Three.js · 60fps Experience",
      tech: ["React", "Three.js", "Lenis", "WebGL", "TypeScript", "Tailwind CSS"],
      primaryLink: {
        label: "Visit Live Site",
        url: "https://what-if-another-life.netlify.app/"
      },
      githubUrl: "https://github.com/Nairy1729",
      gradient: "from-purple-500/20 via-fuchsia-900/30 to-[#000319]",
      previewGraphic: "anotherlife"
    }
  ];

  const activeProject = projects.find((p) => p.id === activeCaseStudyId);

  return (
    <section id="work" className="py-24 relative bg-[#000319] overflow-hidden">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-[#00ff99] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#00ff99]" />
            <span>SELECTED WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            A small selection of <span className="text-[#00ff99]">recent projects</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/60 max-w-2xl mx-auto">
            AI discovery platforms, offline mobile architectures, WebGL simulations, and high-concurrency enterprise services.
          </p>
        </div>

        {/* 3D Pin Container Grid (2-Column Balanced Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              id={project.id}
              className="group relative flex flex-col justify-between rounded-3xl bg-[#0e101f]/90 border border-white/[0.1] hover:border-[#00ff99]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00ff99]/15 overflow-hidden"
            >
              {/* Top Graphic Showcase */}
              <div className="relative h-48 sm:h-56 w-full bg-gradient-to-br from-white/[0.04] to-transparent p-4 flex items-center justify-center overflow-hidden border-b border-white/[0.08]">
                {/* Background Ambient Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-40 group-hover:opacity-80 transition-opacity duration-500`}
                />

                {/* Simulated Graphic Content for JobHunter */}
                {project.previewGraphic === "jobhunter" && (
                  <div className="relative z-10 w-52 sm:w-60 h-36 rounded-2xl bg-black/85 border border-[#00ff99]/30 p-3 shadow-2xl flex flex-col justify-between transform group-hover:scale-105 transition-transform duration-500">
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-[#00ff99] font-bold flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-[#00ff99]" />
                        JOBHUNTER
                      </span>
                      <span className="text-white/50 text-[9px] uppercase tracking-wider">
                        AI MATCH ENGINE
                      </span>
                    </div>

                    {/* Center Pipeline / Relevance Badge */}
                    <div className="my-auto space-y-1.5">
                      <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                        <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/90">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff99] animate-pulse" />
                          <span>Profile ⇄ JD Vector</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-[#00ff99]">pgvector</span>
                      </div>
                      <div className="flex items-center justify-between px-2 py-0.5 text-[9px] font-mono text-white/60">
                        <span>Dual Pipeline</span>
                        <span className="text-teal-300">Private Tech + Govt Jobs</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[9px] font-mono text-white/50 border-t border-white/[0.08] pt-1">
                      <span className="text-emerald-400">SPRING BOOT 3</span>
                      <span className="text-cyan-400">GEMINI AI</span>
                    </div>
                  </div>
                )}

                {/* Simulated Graphic Content for Lexora */}
                {project.previewGraphic === "lexora" && (
                  <div className="relative z-10 w-52 sm:w-60 h-36 rounded-2xl bg-black/85 border border-amber-500/30 p-3 shadow-2xl flex flex-col justify-between transform group-hover:scale-105 transition-transform duration-500">
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-amber-400 font-bold flex items-center gap-1.5">
                        <Smartphone className="w-3 h-3 text-amber-400" />
                        LEXORA
                      </span>
                      <span className="text-white/50 text-[9px] uppercase tracking-wider">
                        100% OFFLINE
                      </span>
                    </div>

                    {/* Luxury 5-Letter Tile Preview */}
                    <div className="my-auto">
                      <div className="flex items-center justify-center gap-1.5 mb-1.5">
                        {[
                          { letter: "L", state: "correct" },
                          { letter: "E", state: "correct" },
                          { letter: "X", state: "present" },
                          { letter: "O", state: "correct" },
                          { letter: "R", state: "absent" }
                        ].map((t, idx) => (
                          <div
                            key={idx}
                            className={`w-7 h-8 rounded-lg flex items-center justify-center font-bold text-xs font-mono shadow-sm ${
                              t.state === "correct"
                                ? "bg-emerald-600/90 text-white border border-emerald-400/50"
                                : t.state === "present"
                                ? "bg-amber-600/90 text-white border border-amber-400/50"
                                : "bg-[#292019] text-white/60 border border-white/10"
                            }`}
                          >
                            {t.letter}
                          </div>
                        ))}
                      </div>
                      <div className="text-center text-[9px] font-mono text-amber-200/70">
                        12,947-Word Dictionary · 00:00 UTC Sync
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[9px] font-mono text-white/50 border-t border-white/[0.08] pt-1">
                      <span className="text-amber-400 font-mono">EXPO 52 · 36.15 MB</span>
                      <span className="text-emerald-400 font-mono">152 TESTS PASSING</span>
                    </div>
                  </div>
                )}

                {/* WordDrop Graphic */}
                {project.previewGraphic === "worddrop" && (
                  <div className="relative z-10 w-44 h-36 rounded-2xl bg-black/80 border border-[#00ff99]/30 p-3 shadow-2xl flex flex-col justify-between transform group-hover:scale-105 transition-transform duration-500">
                    <div className="flex items-center justify-between text-[10px] font-mono text-white/60">
                      <span className="text-[#00ff99]">WORDDROP</span>
                      <span>LOCK SCREEN</span>
                    </div>
                    <div className="my-auto text-center">
                      <div className="text-lg font-bold text-white tracking-wide">Ephemeral</div>
                      <div className="text-[10px] text-white/70 italic mt-0.5">
                        &quot;lasting for a very short time&quot;
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-[9px] font-mono text-[#00ff99]/80 border-t border-white/[0.1] pt-1">
                      <span>SWIPE TO UNLOCK</span>
                      <span>12:00</span>
                    </div>
                  </div>
                )}

                {/* OfferPilot Graphic */}
                {project.previewGraphic === "offerpilot" && (
                  <div className="relative z-10 w-48 h-36 rounded-2xl bg-black/80 border border-sky-400/30 p-3 shadow-2xl flex flex-col justify-between transform group-hover:scale-105 transition-transform duration-500">
                    <div className="flex items-center justify-between text-[10px] font-mono text-sky-400">
                      <span>OFFERPILOT</span>
                      <span>REDIS · JWT</span>
                    </div>
                    <div className="my-auto text-center">
                      <div className="text-sm font-bold text-white tracking-wide">Compensation Engine</div>
                      <div className="text-[10px] text-white/60 mt-0.5">
                        REST APIs · Pagination · Filters
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-[9px] font-mono text-sky-300 border-t border-white/[0.1] pt-1">
                      <span>SPRING BOOT</span>
                      <span>POSTGRESQL</span>
                    </div>
                  </div>
                )}

                {/* CDS Enterprise Graphic */}
                {project.previewGraphic === "cds" && (
                  <div className="relative z-10 w-48 h-36 rounded-2xl bg-black/80 border border-indigo-400/30 p-3 shadow-2xl flex flex-col justify-between transform group-hover:scale-105 transition-transform duration-500">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-indigo-300">
                      <Server className="w-3.5 h-3.5" />
                      <span>CDS ENTERPRISE</span>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 text-[9px] font-mono text-center">
                      <div className="p-1.5 rounded bg-white/[0.04] border border-white/[0.08] text-[#00ff99]">
                        LAYERED MVC
                      </div>
                      <div className="p-1.5 rounded bg-white/[0.04] border border-white/[0.08] text-sky-400">
                        JWT AUTH
                      </div>
                      <div className="p-1.5 rounded bg-white/[0.04] border border-white/[0.08] text-white/80">
                        JUNIT 5
                      </div>
                      <div className="p-1.5 rounded bg-white/[0.04] border border-white/[0.08] text-amber-400">
                        DOCKER
                      </div>
                    </div>
                  </div>
                )}

                {/* Another Life Graphic */}
                {project.previewGraphic === "anotherlife" && (
                  <div className="relative z-10 w-48 h-36 rounded-2xl bg-black/80 border border-purple-400/30 p-3 shadow-2xl flex flex-col justify-center items-center text-center transform group-hover:scale-105 transition-transform duration-500">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 mb-2">
                      <Globe className="w-5 h-5 animate-pulse" />
                    </div>
                    <div className="text-sm font-bold text-white tracking-wider">ANOTHER LIFE</div>
                    <div className="text-[10px] font-mono text-purple-300 mt-1">WebGL 3D Storytelling</div>
                  </div>
                )}

                {/* Category Badge */}
                <div className="pointer-events-none absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#00ff99] text-[#000319] text-[10px] font-bold tracking-wider uppercase shadow-lg shadow-[#00ff99]/30">
                  {project.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00ff99] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-[#00ff99] mt-1 font-semibold">
                    {project.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-white/70 mt-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="mt-6 pt-5 border-t border-white/[0.08]">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions Bar */}
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div className="flex items-center gap-3.5 flex-wrap">
                      {/* Primary Link (Live Demo / APK Download / Site) */}
                      <a
                        href={project.primaryLink.url}
                        target={project.primaryLink.url.startsWith("#") ? "_self" : "_blank"}
                        rel="noreferrer"
                        download={project.primaryLink.isDownload}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#00ff99] hover:underline"
                      >
                        {project.primaryLink.isDownload ? (
                          <Download className="w-4 h-4" />
                        ) : (
                          <ArrowUpRight className="w-4 h-4" />
                        )}
                        <span>{project.primaryLink.label}</span>
                      </a>

                      {/* View Case Study / Details Button */}
                      <button
                        onClick={() => setActiveCaseStudyId(project.id)}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-white/70 hover:text-white transition-colors cursor-pointer group/btn"
                      >
                        <FileText className="w-3.5 h-3.5 text-[#00ff99] group-hover/btn:translate-x-0.5 transition-transform" />
                        <span>Case Study</span>
                      </button>
                    </div>

                    {/* GitHub Link */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] flex items-center justify-center text-white/80 hover:text-white transition-colors"
                        aria-label="GitHub Source Code"
                        title="View GitHub Source"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study / Project Inspection Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveCaseStudyId(null)}
        >
          <div
            className="w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl border border-white/[0.12] bg-[#0b0c1a] p-5 sm:p-9 shadow-2xl relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-5 mb-6 border-b border-white/[0.1] gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-[#00ff99] mb-2">
                  <Sparkles className="w-3 h-3 text-[#00ff99]" />
                  <span>CASE STUDY &amp; ARCHITECTURE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {activeProject.title}
                  <span className="text-[#00ff99]">.</span>
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[#00ff99] mt-0.5 font-semibold">
                  {activeProject.tagline}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {/* External Live Link */}
                <a
                  href={activeProject.primaryLink.url}
                  target={activeProject.primaryLink.url.startsWith("#") ? "_self" : "_blank"}
                  rel="noreferrer"
                  download={activeProject.primaryLink.isDownload}
                  className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#00ff99]/10 border border-[#00ff99]/30 text-xs font-mono font-semibold text-[#00ff99] hover:bg-[#00ff99]/20 transition-colors"
                >
                  <span>{activeProject.primaryLink.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                {/* GitHub Link */}
                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-white/[0.05] border border-white/[0.1] text-white/70 hover:text-white transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}

                {/* Close Button */}
                <button
                  onClick={() => setActiveCaseStudyId(null)}
                  className="p-1.5 rounded-lg bg-white/[0.05] border border-white/[0.1] text-white/70 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close Case Study"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* JOBHUNTER DETAILED CASE STUDY */}
            {activeProject.id === "jobhunter" && (
              <div className="space-y-8 text-white/80 text-xs sm:text-sm">
                {/* 1. Problem & 2. Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                    <div className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold mb-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                      1. The Problem
                    </div>
                    <p className="text-white/70 leading-relaxed font-normal">
                      Traditional job boards overwhelm developers with sheer volume: hundreds of irrelevant listings, keyword-stuffed postings, and generic application portals. Candidates spend hours manually parsing complex requirements and tailoring resumes without knowing true role relevance, leading to severe application fatigue.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#00ff99] font-semibold mb-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00ff99]" />
                      2. The Solution
                    </div>
                    <p className="text-white/70 leading-relaxed font-normal">
                      JobHunter is a production-ready discovery engine that pairs candidate profiles directly with job requirements using semantic analysis and pgvector embeddings. Rather than displaying raw listing feeds, it prioritizes high-relevance opportunities, factually tailors resumes without fabrication, and provides a dedicated verified pipeline for Indian government recruitments.
                    </p>
                  </div>
                </div>

                {/* 3. How It Works (Visual Flow) */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#070914] border border-white/[0.08]">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#00ff99] font-semibold mb-4 flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-[#00ff99]" />
                    <span>3. How It Works — End-to-End Discovery Pipeline</span>
                  </div>

                  {/* Flow Diagram */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 pt-2">
                    {[
                      {
                        step: "01",
                        label: "Candidate Profile",
                        desc: "Ingests master skills, experience, and career targets"
                      },
                      {
                        step: "02",
                        label: "Job Discovery",
                        desc: "Dual pipelines for tech jobs & authentic govt recruitment"
                      },
                      {
                        step: "03",
                        label: "JD + Profile Analysis",
                        desc: "Gemini + Firecrawl extract requirements & verify criteria"
                      },
                      {
                        step: "04",
                        label: "Relevance / Match",
                        desc: "pgvector cosine similarity prioritizes high-fit roles"
                      },
                      {
                        step: "05",
                        label: "Tailored Resume",
                        desc: "AI aligns framing while preserving 100% factual truth"
                      },
                      {
                        step: "06",
                        label: "Apply",
                        desc: "Download tailored resume or jump to verified portal"
                      }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="relative p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between text-[10px] font-mono text-[#00ff99] mb-1.5">
                            <span>{item.step}</span>
                            {idx < 5 && (
                              <span className="hidden lg:inline text-white/30 text-xs">→</span>
                            )}
                          </div>
                          <div className="text-xs font-bold text-white leading-snug mb-1">
                            {item.label}
                          </div>
                        </div>
                        <div className="text-[11px] text-white/50 leading-relaxed mt-1">
                          {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Key Engineering Decisions */}
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#00ff99] font-semibold flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#00ff99]" />
                    <span>4. Key Engineering Decisions</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <div className="text-xs font-bold text-white mb-1">Not a CRUD Board</div>
                      <p className="text-[11px] text-white/60 leading-relaxed">
                        Engineered around semantic matching, structured ingestion, and background deduplication instead of standard paginated database listings.
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <div className="text-xs font-bold text-white mb-1">Dual-Track Architecture</div>
                      <p className="text-[11px] text-white/60 leading-relaxed">
                        Clear separation between private tech job discovery and official Indian government recruitment with verified notification links, deadlines, and eligibility rules.
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <div className="text-xs font-bold text-white mb-1">Factual Resume Invariant</div>
                      <p className="text-[11px] text-white/60 leading-relaxed">
                        Strict AI guardrails ensure master resume truth: never fabricates skills, employment history, or credentials while optimizing framing for target JDs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 5. AI Integration & 6. Architecture Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-2.5">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#00ff99] font-semibold flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-[#00ff99]" />
                      <span>5. AI &amp; Data Pipeline</span>
                    </div>
                    <ul className="space-y-2 text-xs text-white/70">
                      <li className="flex items-start gap-2">
                        <span className="text-[#00ff99] font-mono mt-0.5">▹</span>
                        <span>
                          <strong className="text-white">Google Gemini:</strong> Semantic parsing of dense job requirements, profile suitability evaluation, and contextual resume alignment.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#00ff99] font-mono mt-0.5">▹</span>
                        <span>
                          <strong className="text-white">Firecrawl:</strong> High-accuracy web content extraction, converting recruitment notifications and web postings into structured schemas.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#00ff99] font-mono mt-0.5">▹</span>
                        <span>
                          <strong className="text-white">pgvector Embeddings:</strong> High-dimensional vector indexing in PostgreSQL for semantic candidate-to-job similarity scoring.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-2.5">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#00ff99] font-semibold flex items-center gap-2">
                      <Database className="w-4 h-4 text-[#00ff99]" />
                      <span>6. Architecture &amp; Technical Overview</span>
                    </div>
                    <ul className="space-y-2 text-xs text-white/70">
                      <li className="flex items-start gap-2">
                        <span className="text-[#00ff99] font-mono mt-0.5">▹</span>
                        <span>
                          <strong className="text-white">Backend:</strong> Layered Spring Boot REST API (Controller, Service, Repository) with strict domain validation and exception handling.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#00ff99] font-mono mt-0.5">▹</span>
                        <span>
                          <strong className="text-white">Security:</strong> Stateless Spring Security filter chain with JWT tokens, refresh-token rotation, and route-level authorization.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#00ff99] font-mono mt-0.5">▹</span>
                        <span>
                          <strong className="text-white">Frontend:</strong> React + TypeScript with Vite, styled via Tailwind CSS, TanStack Query for server-state caching, and Axios client.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 7. Production Deployment */}
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#00ff99] font-semibold mb-3 flex items-center gap-2">
                    <Server className="w-4 h-4 text-[#00ff99]" />
                    <span>7. Production Deployment</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <div className="font-mono text-[10px] text-white/50 uppercase">Frontend</div>
                      <div className="font-bold text-white mt-0.5">Vercel</div>
                      <div className="text-[11px] text-white/60 mt-1">Edge CDN distribution with automated CI/CD</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <div className="font-mono text-[10px] text-white/50 uppercase">Backend API</div>
                      <div className="font-bold text-white mt-0.5">Render</div>
                      <div className="text-[11px] text-white/60 mt-1">Containerized Spring Boot service &amp; workers</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <div className="font-mono text-[10px] text-white/50 uppercase">Database &amp; Vectors</div>
                      <div className="font-bold text-white mt-0.5">Supabase PostgreSQL</div>
                      <div className="text-[11px] text-white/60 mt-1">Managed PostgreSQL with native pgvector</div>
                    </div>
                  </div>
                </div>

                {/* 8. Tech Stack */}
                <div className="pt-4 border-t border-white/[0.08] space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#00ff99] font-semibold">
                    8. Full Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "TypeScript",
                      "Vite",
                      "Tailwind CSS",
                      "TanStack Query",
                      "Axios",
                      "Java",
                      "Spring Boot",
                      "Spring Security",
                      "JWT",
                      "Maven",
                      "PostgreSQL",
                      "pgvector",
                      "Google Gemini",
                      "Firecrawl",
                      "Vercel",
                      "Render",
                      "Supabase"
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* LEXORA DETAILED CASE STUDY */}
            {activeProject.id === "lexora" && (
              <div className="space-y-8 text-white/80 text-xs sm:text-sm">
                {/* 1. Problem & 2. Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                    <div className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold mb-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                      1. The Problem: Ad Fatigue &amp; Telemetry
                    </div>
                    <p className="text-white/70 leading-relaxed font-normal">
                      Most modern mobile word games have degraded into vehicles for intrusive full-screen video ads, aggressive telemetry tracking, and constant network requirements. Players are forced into dark patterns and noisy popups rather than enjoying pure cognitive deduction.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                    <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold mb-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      2. The Lexora Solution: Luxury Offline Craft
                    </div>
                    <p className="text-white/70 leading-relaxed font-normal">
                      Lexora restores elegance and focus to daily word deduction. Inspired by classical typography restraint and modern dark-glass UI, it delivers a calming, highly polished mobile experience where every player worldwide receives the exact same daily challenge without sending a single byte over the network.
                    </p>
                  </div>
                </div>

                {/* Key Architectural Highlights */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#070914] border border-white/[0.08] space-y-4">
                  <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-amber-400" />
                    <span>Key Architectural Highlights</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                      <div className="text-xs font-bold text-white flex items-center justify-between">
                        <span>100% Offline Engine</span>
                        <span className="text-[10px] font-mono text-amber-400">O(1) SET</span>
                      </div>
                      <p className="text-[11px] text-white/60 leading-relaxed">
                        Bundles 12,947 accepted vocabulary words in a hashed Set for instantaneous lookups. Curates 2,311 canonical solutions spanning 6.3+ years, synchronized deterministically at 00:00 UTC with zero server dependencies.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                      <div className="text-xs font-bold text-white flex items-center justify-between">
                        <span>Dual-Session Isolation</span>
                        <span className="text-[10px] font-mono text-emerald-400">STATE ISOLATION</span>
                      </div>
                      <p className="text-[11px] text-white/60 leading-relaxed">
                        Isolated state-machine completely separating the competitive Daily Puzzle from unlimited Practice Mode. State, guesses, and persistence run in dedicated namespaces with zero streak corruption.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                      <div className="text-xs font-bold text-white flex items-center justify-between">
                        <span>55% Package Reduction</span>
                        <span className="text-[10px] font-mono text-cyan-400">80.8MB → 36.15MB</span>
                      </div>
                      <p className="text-[11px] text-white/60 leading-relaxed">
                        Optimized Android release size using Hermes bytecode compilation, ProGuard/R8 code shrinking and resource stripping, and ABI filtering restricted to arm64-v8a and armeabi-v7a.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Notifications & VAPT Security */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-2.5">
                    <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-2">
                      <Smartphone className="w-4 h-4 text-amber-400" />
                      <span>Smart Daytime Notification Scheduler</span>
                    </div>
                    <ul className="space-y-2 text-xs text-white/70">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-mono mt-0.5">▹</span>
                        <span>
                          <strong className="text-white">Android 13+ Permissions:</strong> Utilizes runtime permission models with gentle educational prompts.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-mono mt-0.5">▹</span>
                        <span>
                          <strong className="text-white">4-Hour Windows:</strong> Dynamically calculates daytime reminder windows (9 AM, 1 PM, 5 PM, 9 PM) only if the current day puzzle is unsolved.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-mono mt-0.5">▹</span>
                        <span>
                          <strong className="text-white">Instant Cancellation:</strong> Idempotent registration with automatic hooks that cancel alerts the millisecond today&apos;s puzzle is completed.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-2.5">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#00ff99] font-semibold flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#00ff99]" />
                      <span>VAPT Security &amp; Data Hardening</span>
                    </div>
                    <ul className="space-y-2 text-xs text-white/70">
                      <li className="flex items-start gap-2">
                        <span className="text-[#00ff99] font-mono mt-0.5">▹</span>
                        <span>
                          <strong className="text-white">Prototype Pollution Defense:</strong> Persistence engine explicitly strips <code className="text-amber-300">__proto__</code> and <code className="text-amber-300">constructor</code> attacks.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#00ff99] font-mono mt-0.5">▹</span>
                        <span>
                          <strong className="text-white">Input Buffer Clamping:</strong> Strict 5-character buffer clamps block overflow, character injection, and malformed state payloads.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#00ff99] font-mono mt-0.5">▹</span>
                        <span>
                          <strong className="text-white">Privacy-Preserving Share:</strong> Social result cards strictly mask secret words and letter guesses to maintain spoiler safety and zero privacy leaks.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Design System & Craftsmanship */}
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Design System &amp; Human-Interface Craftsmanship</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <div className="font-bold text-white mb-1">WCAG 2.1 AAA Contrast</div>
                      <p className="text-[11px] text-white/60 leading-relaxed">
                        Deep espresso (<code className="text-amber-300">#1A100A</code>), dark surface (<code className="text-amber-300">#292019</code>), warm amber (<code className="text-amber-400">#FF7A00</code>), and ivory text (<code className="text-amber-100">#FFF8F0</code>) achieving an ultra-crisp 17.5:1 contrast ratio.
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <div className="font-bold text-white mb-1">Optical Centering</div>
                      <p className="text-[11px] text-white/60 leading-relaxed">
                        Absolute-layer header architecture keeping the LEXORA wordmark centered regardless of asymmetrical flanking buttons, with responsive scaling for viewports &lt;380dp.
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <div className="font-bold text-white mb-1">Zero-Jitter Tile Geometry</div>
                      <p className="text-[11px] text-white/60 leading-relaxed">
                        Uniform 1.5px border widths across all empty, active typing, and evaluated states, eliminating layout jitter during fast typing. Standalone • ENTER button with haptics.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Verification & Testing Suite Table */}
                <div className="p-5 rounded-2xl bg-[#070914] border border-white/[0.08] space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Automated Verification &amp; Testing Suite</span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs font-mono">
                      <thead>
                        <tr className="border-b border-white/[0.08] text-white/50">
                          <th className="pb-2 font-medium">Metric / Check</th>
                          <th className="pb-2 font-medium">Tooling</th>
                          <th className="pb-2 font-medium text-right">Result</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/[0.04] text-white/80">
                        <tr>
                          <td className="py-2 text-white">Automated Unit &amp; Regression Tests</td>
                          <td className="py-2 text-white/60">Node test runner (tsx --test)</td>
                          <td className="py-2 text-right text-emerald-400 font-bold">152 / 152 Passing (21 suites)</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-white">Design System &amp; Contrast Suite</td>
                          <td className="py-2 text-white/60">Custom WCAG automated suite</td>
                          <td className="py-2 text-right text-emerald-400 font-bold">10 / 10 Passing (AAA Compliant)</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-white">Static Type Safety</td>
                          <td className="py-2 text-white/60">TypeScript 5.8 (Strict Mode)</td>
                          <td className="py-2 text-right text-emerald-400 font-bold">0 Errors</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-white">Ecosystem Health &amp; Dependencies</td>
                          <td className="py-2 text-white/60">Expo Doctor</td>
                          <td className="py-2 text-right text-emerald-400 font-bold">21 / 21 Checks Passed</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-white">Historical Dictionary Compatibility</td>
                          <td className="py-2 text-white/60">Python verification engine</td>
                          <td className="py-2 text-right text-emerald-400 font-bold">100% Validated (Days 0..175+)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="pt-4 border-t border-white/[0.08] space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                    Full Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React Native",
                      "Expo SDK 52",
                      "TypeScript 5.8",
                      "Android",
                      "Hermes Engine",
                      "ProGuard / R8",
                      "AsyncStorage",
                      "Expo Notifications",
                      "Node Test Runner",
                      "WCAG 2.1 AAA"
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* OTHER PROJECTS INSPECTION FALLBACK */}
            {activeProject.id !== "jobhunter" && activeProject.id !== "lexora" && (
              <div className="space-y-6 text-white/80 text-xs sm:text-sm">
                <p className="text-sm text-white/70 leading-relaxed font-normal">
                  {activeProject.description}
                </p>

                {/* Architecture Highlights */}
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#00ff99] font-semibold">
                    Architectural Specifications &amp; Invariants:
                  </div>
                  <div className="space-y-2 text-xs text-white/70">
                    {activeProject.id === "worddrop" && (
                      <>
                        <div className="flex items-start gap-2">
                          <span className="text-[#00ff99] font-mono mt-0.5">▹</span>
                          <span>Offline-first local vocabulary cache with Android Room DB and background sync.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#00ff99] font-mono mt-0.5">▹</span>
                          <span>Python linguistic pipeline for curated vocabulary ingestion, phonetic parsing, and etymology.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#00ff99] font-mono mt-0.5">▹</span>
                          <span>Direct integration into Android Lock Screen, notification listener, and home screen widgets.</span>
                        </div>
                      </>
                    )}

                    {activeProject.id === "offerpilot" && (
                      <>
                        <div className="flex items-start gap-2">
                          <span className="text-[#00ff99] font-mono mt-0.5">▹</span>
                          <span>Redis write-through / read-through caching for high-frequency compensation analytics.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#00ff99] font-mono mt-0.5">▹</span>
                          <span>Spring `@ControllerAdvice` global exception handling with uniform RFC-7807 error envelopes.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#00ff99] font-mono mt-0.5">▹</span>
                          <span>Dynamic criteria-based filtering with Spring Data JPA Pageable execution.</span>
                        </div>
                      </>
                    )}

                    {activeProject.id === "cds-enterprise" && (
                      <>
                        <div className="flex items-start gap-2">
                          <span className="text-[#00ff99] font-mono mt-0.5">▹</span>
                          <span>Layered Controller-Service-Repository decoupling for strict separation of concerns.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#00ff99] font-mono mt-0.5">▹</span>
                          <span>Stateless JWT authorization filters with granular role-based endpoints and zero session leakage.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#00ff99] font-mono mt-0.5">▹</span>
                          <span>Automated unit and integration test suites using JUnit 5 and Mockito.</span>
                        </div>
                      </>
                    )}

                    {activeProject.id === "another-life" && (
                      <>
                        <div className="flex items-start gap-2">
                          <span className="text-[#00ff99] font-mono mt-0.5">▹</span>
                          <span>Three.js WebGL canvas rendering dynamic 3D lifelines and particle constellations.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#00ff99] font-mono mt-0.5">▹</span>
                          <span>Lenis smooth inertial scrolling integrated with reactive camera choreography.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#00ff99] font-mono mt-0.5">▹</span>
                          <span>Atmospheric soundscapes and audio cross-fading based on scroll depth.</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="pt-4 border-t border-white/[0.08] space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-white/50 font-semibold">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Modal Bottom Action Footer */}
            <div className="pt-6 mt-8 border-t border-white/[0.1] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <a
                  href={activeProject.primaryLink.url}
                  target={activeProject.primaryLink.url.startsWith("#") ? "_self" : "_blank"}
                  rel="noreferrer"
                  download={activeProject.primaryLink.isDownload}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00ff99] text-[#000319] text-xs font-bold font-mono tracking-wide hover:bg-[#00e68a] transition-all shadow-lg shadow-[#00ff99]/20"
                >
                  {activeProject.primaryLink.isDownload ? (
                    <Download className="w-4 h-4" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4" />
                  )}
                  <span>{activeProject.primaryLink.label}</span>
                </a>

                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-mono font-medium text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View GitHub</span>
                  </a>
                )}
              </div>

              <div className="text-[11px] font-mono text-white/40">
                {activeProject.stats}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
