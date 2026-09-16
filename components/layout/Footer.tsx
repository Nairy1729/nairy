"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Mail, Clock } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Footer() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit"
      });
      setCurrentTime(istTime + " IST");
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#000319] relative z-10 overflow-hidden">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          {/* Identity */}
          <div className="md:col-span-6 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 text-white hover:opacity-90 transition-opacity">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#00ff99]/50 ring-2 ring-[#00ff99]/20 shrink-0">
                <Image
                  src="/narendra.jpg"
                  alt="Narendra"
                  fill
                  className="object-cover object-[center_15%]"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Narendra</span>
              <span className="text-xl font-bold text-[#00ff99] -ml-2">.</span>
            </Link>
            <p className="text-sm text-white/60 max-w-sm leading-relaxed font-normal">
              Full-Stack &amp; Systems Software Engineer. Building high-concurrency microservices, cloud architectures, and engaging web applications.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-white/40 pt-1">
              <Clock className="w-3.5 h-3.5 text-[#00ff99]" />
              <span suppressHydrationWarning>{currentTime || "19:00 IST"}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white/50 font-semibold mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5 text-xs font-medium text-white/60">
              <li>
                <Link href="#about" className="hover:text-[#00ff99] transition-colors">
                  About &amp; Profile
                </Link>
              </li>
              <li>
                <Link href="#work" className="hover:text-[#00ff99] transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-[#00ff99] transition-colors">
                  Journey Report
                </Link>
              </li>
              <li>
                <Link href="#achievements" className="hover:text-[#00ff99] transition-colors">
                  Credentials &amp; Education
                </Link>
              </li>
              <li>
                <a
                  href="/Narendra_Resume.pdf"
                  download
                  className="inline-flex items-center gap-1.5 text-[#00ff99] hover:underline font-mono transition-colors"
                >
                  <span>Resume (PDF)</span>
                  <span>↓</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Reach */}
          <div className="md:col-span-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4">
              Connect
            </div>
            <ul className="space-y-3 text-xs font-medium text-slate-400">
              <li>
                <a
                  href="mailto:narendra.kumarvg2@gmail.com"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <span className="font-mono">narendra.kumarvg2@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/nairykumar"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-slate-500" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Nairy1729"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-slate-500" />
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div suppressHydrationWarning>
            © {new Date().getFullYear()} Narendra. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="hover:text-slate-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
