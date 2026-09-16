"use client";

import React from "react";
import { Award, GraduationCap, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

export function Credentials() {
  const honors = [
    {
      title: "Innovative Champion Award",
      issuer: "Hexaware Technologies",
      badge: "Enterprise Innovation",
      status: "VERIFIED · ENTERPRISE EXCELLENCE",
      note: "Awarded for high-impact contributions to enterprise innovation, engineering rigor, and technology initiatives."
    },
    {
      title: "100% Tuition Scholarship",
      issuer: "Shiv Nadar Foundation",
      badge: "Academic Merit",
      status: "VERIFIED · MERIT SCHOLAR",
      note: "Full merit scholarship awarded for academic excellence, character, and demonstrated leadership."
    }
  ];

  const education = [
    {
      institution: "Vellore Institute of Technology, Vellore",
      degree: "B.Tech in Electronics and Communication Engineering",
      period: "2020 – 2024",
      tag: "Computing & Architecture",
      status: "GRADUATED · 2020 – 2024",
      note: "Coursework in computing systems, object-oriented programming (OOP), data structures & algorithms (DSA), and software architecture."
    },
    {
      institution: "VidyaGyan School, Sitapur",
      degree: "Senior Secondary (Class XII) — PCM + Fine Arts",
      period: "2019 – 2020",
      tag: "95.2% Aggregate",
      status: "ACADEMIC EXCELLENCE · 95.2%",
      note: "Graduated with 95.2% aggregate under the prestigious Shiv Nadar Foundation leadership initiative."
    }
  ];

  return (
    <section id="achievements" className="py-20 relative bg-[#000319] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-[#00ff99] mb-3">
            <Award className="w-3.5 h-3.5 text-[#00ff99]" />
            <span>ACADEMIC & ENTERPRISE MERIT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Honors &amp; <span className="text-[#00ff99]">Education</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/60 max-w-xl mx-auto">
            Enterprise innovation awards, full merit scholarship, and foundational engineering education.
          </p>
        </div>

        {/* 2-Column High-Density Verification Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-10">
          {/* Column 1: Honors & Scholarships */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                <Award className="w-4 h-4 text-blue-400" />
                <span>Enterprise Honors & Scholarships</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-900/50 px-2 py-0.5 rounded">
                Verified
              </span>
            </div>

            <div className="space-y-4">
              {honors.map((h, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4 sm:p-7 backdrop-blur-xl hover:border-slate-700 transition-all group"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                      {h.title}
                    </h3>
                    <span className="text-xs font-mono text-blue-400 font-semibold px-2 py-0.5 rounded bg-blue-950/40 border border-blue-900/40">
                      {h.issuer}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-slate-400 mb-3 flex items-center gap-2">
                    <span>{h.badge}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-emerald-400/90 text-[11px] flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      {h.status}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {h.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Formal Education */}
          <div id="education" className="space-y-4 relative">
            <div id="path-anchor-credentials-dock" className="absolute top-0 right-0 w-2 h-2 opacity-0 pointer-events-none" />
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                <span>Academic Engineering Foundation</span>
              </div>
              <span className="text-[10px] font-mono text-blue-400 bg-blue-950/40 border border-blue-900/50 px-2 py-0.5 rounded">
                Formal Education
              </span>
            </div>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4 sm:p-7 backdrop-blur-xl hover:border-slate-700 transition-all group"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                      {edu.institution}
                    </h3>
                    <span className="text-xs font-mono text-slate-400">
                      {edu.period}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-slate-200 mb-2 flex items-center gap-2">
                    <span className="text-indigo-300">{edu.degree}</span>
                  </div>

                  <div className="text-[11px] font-mono text-emerald-400/90 mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{edu.status}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {edu.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Seamless Structural Dock into Milestone 06 (Contact) */}
        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-6 sm:p-8 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                <span>STAGE RESOLUTION · FOUNDATIONS VERIFIED</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                From verified foundations to production impact.
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Equipped with architecture discipline, product taste, and backend engineering rigor.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-medium transition-all shadow-lg shadow-blue-600/20 self-start md:self-auto cursor-pointer"
            >
              <span>Initialize Engineering Dialogue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
