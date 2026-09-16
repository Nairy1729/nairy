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
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] text-[#00ff99] font-mono text-xs tracking-wider uppercase shrink-0">
                <Mail className="w-3.5 h-3.5 text-[#00ff99]" />
                <span>DIRECT REACH</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-2xl sm:rounded-full bg-[#00ff99]/10 border border-[#00ff99]/30 text-[10px] min-[420px]:text-xs font-mono text-[#00ff99] max-w-full">
                <span className="w-2 h-2 rounded-full bg-[#00ff99] animate-ping shrink-0" />
                <span className="leading-snug">OPEN FOR HIGH-IMPACT SOFTWARE ENGINEERING ROLES</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Ready to take your <span className="text-[#00ff99]">digital presence</span> &amp; architecture to the next level?
            </h2>

            <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal max-w-2xl">
              Whether you are architecting a high-throughput enterprise backend, securing distributed REST APIs, or creating a refined full-stack digital product—I bring production discipline, clean architecture, and product taste to the table.
            </p>

            {/* Direct Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="mailto:narendra.kumarvg2@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#00ff99] hover:bg-[#00e68a] text-[#000319] text-sm font-semibold tracking-wide transition-all shadow-lg shadow-[#00ff99]/20 cursor-pointer"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>Let&apos;s get in touch</span>
              </a>

              <a
                href="/Narendra_Resume.pdf"
                download
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.15] hover:border-[#00ff99]/50 text-sm font-semibold transition-all cursor-pointer"
                title="Download Verified Resume PDF"
              >
                <FileDown className="w-4 h-4 text-[#00ff99] shrink-0" />
                <span>Download Resume (PDF)</span>
              </a>

              <button
                onClick={copyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white/[0.03] border border-white/[0.1] hover:border-[#00ff99]/50 text-sm font-mono text-white/80 hover:text-white transition-all cursor-pointer shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#00ff99] shrink-0" />
                    <span className="text-[#00ff99] font-semibold">Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#00ff99] shrink-0" />
                    <span className="truncate">narendra.kumarvg2@gmail.com</span>
                  </>
                )}
              </button>
            </div>

            {/* Verified External Profiles */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-sm font-mono text-slate-400">
              <a
                href="https://www.linkedin.com/in/nairykumar"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-slate-500" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-600" />
              </a>
              <span className="hidden min-[360px]:inline text-slate-600">•</span>
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

              <div className="grid grid-cols-1 min-[420px]:grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-xs font-mono">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                  <div className="text-slate-500 text-[10px] uppercase mb-1">Status</div>
                  <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Available for Impact
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                  <div className="text-slate-500 text-[10px] uppercase mb-1">Primary Core</div>
                  <div className="text-slate-200 font-semibold">Java • Spring Boot</div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                  <div className="text-slate-500 text-[10px] uppercase mb-1">Client Tier</div>
                  <div className="text-slate-200 font-semibold">React.js • Next.js</div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
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
