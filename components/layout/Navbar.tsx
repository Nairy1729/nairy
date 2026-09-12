"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Command, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionList = [
        { id: "work", href: "#work" },
        { id: "architecture", href: "#architecture" },
        { id: "philosophy", href: "#philosophy" },
        { id: "experience", href: "#experience" },
        { id: "achievements", href: "#achievements" },
        { id: "contact", href: "#contact" }
      ];
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      let current = "";
      for (let i = sectionList.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionList[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          current = sectionList[i].href;
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Architecture", href: "#architecture" },
    { name: "Philosophy", href: "#philosophy" },
    { name: "Experience", href: "#experience" },
    { name: "Credentials", href: "#achievements" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-[#090a0f]/80 backdrop-blur-md border-b border-slate-800/80 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Understated Wordmark */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-slate-200 hover:text-white transition-colors"
        >
          <span className="font-mono font-bold text-sm text-slate-100 tracking-tight">
            NARENDRA
          </span>
          <span className="text-slate-600 font-mono text-xs hidden sm:inline">/</span>
          <span className="text-xs font-mono text-slate-400 hidden sm:inline">
            Software Engineer
          </span>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all ${
                  isActive
                    ? "text-blue-400 bg-slate-900/90 font-semibold border border-slate-800/80"
                    : "text-slate-400 hover:text-white hover:bg-slate-900/60"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right: Cmd+K & CTA */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenCommandPalette}
            className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-900/60 hover:bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 text-xs font-mono transition-colors cursor-pointer"
            title="Command Palette (Ctrl+K / Cmd+K)"
          >
            <Command className="w-3 h-3" />
            <span>Search</span>
            <kbd className="text-[10px] text-slate-500">⌘K</kbd>
          </button>

          <a
            href="#contact"
            className="hidden xs:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-white text-slate-950 text-xs font-medium transition-colors"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-700" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090a0f]/98 backdrop-blur-2xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-1 animate-in slide-in-from-top-2 duration-200 shadow-2xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between min-h-[44px] text-sm font-medium px-3.5 py-2.5 rounded-xl transition-all ${
                  isActive
                    ? "text-cyan-300 bg-slate-900 border border-cyan-500/30 font-semibold"
                    : "text-slate-300 hover:text-white hover:bg-slate-900/60"
                }`}
              >
                <span>{link.name}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />}
              </Link>
            );
          })}

          <div className="pt-3 mt-2 border-t border-slate-800/80 flex flex-col gap-2.5">
            <a
              href="/Narendra_Resume.pdf"
              download
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full min-h-[44px] py-2.5 rounded-xl bg-cyan-950/60 text-cyan-300 text-xs font-mono font-semibold border border-cyan-500/40 hover:bg-cyan-900/50 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download Resume (PDF)</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="flex items-center justify-center gap-2 w-full min-h-[44px] py-2.5 rounded-xl bg-slate-900 text-slate-300 text-xs font-mono border border-slate-800 hover:bg-slate-800 transition-colors"
            >
              <Command className="w-3.5 h-3.5" />
              <span>Open Command Palette (⌘K)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
