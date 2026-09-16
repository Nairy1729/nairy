"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
        { id: "about", href: "#about" },
        { id: "work", href: "#work" },
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
    { name: "About", href: "#about" },
    { name: "Projects", href: "#work" },
    { name: "Experience", href: "#experience" },
    { name: "Credentials", href: "#achievements" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-[#000319]/85 backdrop-blur-xl border-b border-white/[0.08] py-4 shadow-lg shadow-black/40"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Radnaabazar-style Signature Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-white hover:opacity-90 transition-opacity"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#00ff99]/50 ring-2 ring-[#00ff99]/20 shrink-0">
            <Image
              src="/narendra.jpg"
              alt="Narendra"
              fill
              className="object-cover object-[center_15%]"
            />
          </div>
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Narendra
          </span>
          <span className="text-2xl font-bold text-[#00ff99] -ml-2">.</span>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-all py-1 border-b-2 ${
                  isActive
                    ? "text-[#00ff99] border-[#00ff99] font-semibold"
                    : "text-white/70 hover:text-[#00ff99] border-transparent"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right: Cmd+K & Resume CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCommandPalette}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-white/70 hover:text-white text-xs font-mono transition-colors cursor-pointer"
            title="Command Palette (Ctrl+K / Cmd+K)"
          >
            <Command className="w-3.5 h-3.5 text-[#00ff99]" />
            <span>Search</span>
            <kbd className="text-[10px] text-white/40 bg-white/[0.08] px-1.5 py-0.5 rounded">⌘K</kbd>
          </button>

          <a
            href="/Narendra_Resume.pdf"
            download
            className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00ff99] text-[#000319] hover:bg-[#00e68a] text-xs font-semibold tracking-wide transition-all shadow-md shadow-[#00ff99]/20 cursor-pointer"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.1] text-[#00ff99] hover:bg-white/[0.1] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#000319]/98 backdrop-blur-2xl border-b border-white/[0.1] px-4 pt-3 pb-6 space-y-1 animate-in slide-in-from-top-2 duration-200 shadow-2xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between min-h-[44px] text-sm font-medium px-3.5 py-2.5 rounded-xl transition-all ${
                  isActive
                    ? "text-[#00ff99] bg-white/[0.06] border border-[#00ff99]/30 font-semibold"
                    : "text-white/70 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                <span>{link.name}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#00ff99] animate-pulse" />}
              </Link>
            );
          })}

          <div className="pt-3 mt-2 border-t border-white/[0.1] flex flex-col gap-2.5">
            <a
              href="/Narendra_Resume.pdf"
              download
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full min-h-[44px] py-2.5 rounded-full bg-[#00ff99] text-[#000319] text-xs font-semibold tracking-wide hover:bg-[#00e68a] transition-colors"
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
