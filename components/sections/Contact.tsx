"use client";

import React, { useState } from "react";
import { Mail, ArrowUpRight, Copy, Check, Terminal, ShieldCheck, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("narendra.kumarvg2@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="pt-10 pb-20 md:pt-14 md:pb-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Final Journey Resolution Card with Milestone 06 Anchor */}
        <div id="path-anchor-contact" className="rounded-3xl border border-slate-800 bg-slate-900/40 p-5 sm:p-10 lg:p-16 backdrop-blur-xl relative overflow-hidden shadow-2xl scroll-mt-28">
          {/* Ambient Lighting Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl relative z-10 space-y-8">
            {/* System Status Pill & Milestone 06 */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2.5">
                <div
                  id="path-anchor-milestone-06"
                  className="relative flex items-center justify-center w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/60 shadow-sm shadow-cyan-500/50 shrink-0"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs tracking-wider uppercase">
                  <Mail className="w-3.5 h-3.5" />
                  <span>MILESTONE 06 · DIALOGUE & COLLABORATION TERMINAL</span>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>ACTIVE · OPEN FOR SOFTWARE ENGINEERING ROLES</span>
              </div>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Let&apos;s build something enduring.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Whether you are architecting a high-throughput enterprise backend, securing distributed REST APIs, or creating a refined full-stack digital product—I bring production discipline, clean architecture, and product taste to the table.
            </p>

            {/* Direct Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="mailto:narendra.kumarvg2@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all shadow-lg shadow-blue-600/25 cursor-pointer"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>Email Narendra</span>
              </a>

              <a
                href="/Narendra_Resume.pdf"
                download
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-cyan-950/80 hover:bg-cyan-900/90 text-cyan-300 border border-cyan-500/50 text-sm font-mono font-semibold transition-all shadow-lg shadow-cyan-950/50 cursor-pointer"
                title="Download Verified Resume PDF"
              >
                <FileDown className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Download Resume (PDF)</span>
              </a>

              <button
                onClick={copyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-sm font-mono text-slate-300 hover:text-white transition-all cursor-pointer shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-emerald-400 font-semibold">Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="truncate">narendra.kumarvg2@gmail.com</span>
                  </>
                )}
              </button>
            </div>

            {/* Verified External Profiles */}
            <div className="flex items-center gap-6 pt-2 text-sm font-mono text-slate-400">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-slate-500" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-600" />
              </a>
              <span>•</span>
              <a
                href="https://github.com/Nairy1729"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-slate-500" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-600" />
              </a>
            </div>

            {/* Operational System Docket */}
            <div className="pt-8 border-t border-slate-800/80">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                <span>Operational System Status Docket</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                  <div className="text-slate-500 text-[10px] uppercase mb-1">Status</div>
                  <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Available for Impact
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                  <div className="text-slate-500 text-[10px] uppercase mb-1">Primary Core</div>
                  <div className="text-slate-200 font-semibold">Java • Spring Boot</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                  <div className="text-slate-500 text-[10px] uppercase mb-1">Client Tier</div>
                  <div className="text-slate-200 font-semibold">React.js • Next.js</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                  <div className="text-slate-500 text-[10px] uppercase mb-1">Location</div>
                  <div className="text-slate-200 font-semibold">India (Remote/Hybrid)</div>
                </div>
              </div>

              {/* System Checksum Bar */}
              <div className="mt-4 p-3 rounded-xl bg-slate-950/40 border border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-mono text-slate-500 gap-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>SYSTEM_INTEGRITY: 100% • 0 INVARIANT BREACHES</span>
                </div>
                <div className="text-slate-400">
                  MILESTONES 01 ──► 06 RESOLVED
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
