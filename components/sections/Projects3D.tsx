"use client";

import React from "react";
import {
  Download,
  Globe,
  Server,
  Sparkles,
  ArrowUpRight
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
  previewGraphic: "worddrop" | "offerpilot" | "cds" | "anotherlife";
}

export function Projects3D() {
  const projects: Project[] = [
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
            Consumer mobile apps, immersive WebGL experiences, and high-concurrency enterprise services.
          </p>
        </div>

        {/* 3D Pin Container Grid (2x2 Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between rounded-3xl bg-[#0e101f]/90 border border-white/[0.1] hover:border-[#00ff99]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00ff99]/15 overflow-hidden"
            >
              {/* Top Graphic Showcase */}
              <div className="relative h-48 sm:h-56 w-full bg-gradient-to-br from-white/[0.04] to-transparent p-4 flex items-center justify-center overflow-hidden border-b border-white/[0.08]">
                {/* Background Ambient Glow */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-40 group-hover:opacity-80 transition-opacity duration-500`} />

                {/* Simulated Graphic Content */}
                {project.previewGraphic === "worddrop" && (
                  <div className="relative z-10 w-44 h-36 rounded-2xl bg-black/80 border border-[#00ff99]/30 p-3 shadow-2xl flex flex-col justify-between transform group-hover:scale-105 transition-transform duration-500">
                    <div className="flex items-center justify-between text-[10px] font-mono text-white/60">
                      <span className="text-[#00ff99]">WORDDROP</span>
                      <span>LOCK SCREEN</span>
                    </div>
                    <div className="my-auto text-center">
                      <div className="text-lg font-bold text-white tracking-wide">Ephemeral</div>
                      <div className="text-[10px] text-white/70 italic mt-0.5">&quot;lasting for a very short time&quot;</div>
                    </div>
                    <div className="flex items-center justify-between text-[9px] font-mono text-[#00ff99]/80 border-t border-white/[0.1] pt-1">
                      <span>SWIPE TO UNLOCK</span>
                      <span>12:00</span>
                    </div>
                  </div>
                )}

                {project.previewGraphic === "offerpilot" && (
                  <div className="relative z-10 w-48 h-36 rounded-2xl bg-black/80 border border-sky-400/30 p-3 shadow-2xl flex flex-col justify-between transform group-hover:scale-105 transition-transform duration-500">
                    <div className="flex items-center justify-between text-[10px] font-mono text-sky-400">
                      <span>OFFERPILOT</span>
                      <span>REDIS · JWT</span>
                    </div>
                    <div className="my-auto text-center">
                      <div className="text-sm font-bold text-white tracking-wide">Compensation Engine</div>
                      <div className="text-[10px] text-white/60 mt-0.5">REST APIs · Pagination · Filters</div>
                    </div>
                    <div className="flex items-center justify-between text-[9px] font-mono text-sky-300 border-t border-white/[0.1] pt-1">
                      <span>SPRING BOOT</span>
                      <span>POSTGRESQL</span>
                    </div>
                  </div>
                )}

                {project.previewGraphic === "cds" && (
                  <div className="relative z-10 w-48 h-36 rounded-2xl bg-black/80 border border-indigo-400/30 p-3 shadow-2xl flex flex-col justify-between transform group-hover:scale-105 transition-transform duration-500">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-indigo-300">
                      <Server className="w-3.5 h-3.5" />
                      <span>CDS ENTERPRISE</span>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 text-[9px] font-mono text-center">
                      <div className="p-1.5 rounded bg-white/[0.04] border border-white/[0.08] text-[#00ff99]">LAYERED MVC</div>
                      <div className="p-1.5 rounded bg-white/[0.04] border border-white/[0.08] text-sky-400">JWT AUTH</div>
                      <div className="p-1.5 rounded bg-white/[0.04] border border-white/[0.08] text-white/80">JUNIT 5</div>
                      <div className="p-1.5 rounded bg-white/[0.04] border border-white/[0.08] text-amber-400">DOCKER</div>
                    </div>
                  </div>
                )}

                {project.previewGraphic === "anotherlife" && (
                  <div className="relative z-10 w-48 h-36 rounded-2xl bg-black/80 border border-purple-400/30 p-3 shadow-2xl flex flex-col justify-center items-center text-center transform group-hover:scale-105 transition-transform duration-500">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 mb-2">
                      <Globe className="w-5 h-5 animate-pulse" />
                    </div>
                    <div className="text-sm font-bold text-white tracking-wider">ANOTHER LIFE</div>
                    <div className="text-[10px] font-mono text-purple-300 mt-1">WebGL 3D Storytelling</div>
                  </div>
                )}

                {/* 3D Pin Badge (Floating upward on hover) */}
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
                    <a
                      href={project.primaryLink.url}
                      target={project.primaryLink.url.startsWith("#") ? "_self" : "_blank"}
                      rel="noreferrer"
                      download={project.primaryLink.isDownload}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#00ff99] hover:underline"
                    >
                      {project.primaryLink.isDownload ? (
                        <Download className="w-4 h-4" />
                      ) : (
                        <ArrowUpRight className="w-4 h-4" />
                      )}
                      <span>{project.primaryLink.label}</span>
                    </a>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] flex items-center justify-center text-white/80 hover:text-white transition-colors"
                        aria-label="GitHub Source Code"
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
    </section>
  );
}
