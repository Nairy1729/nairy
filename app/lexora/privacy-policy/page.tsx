"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUp,
  ShieldCheck,
  Smartphone,
  Database,
  Lock,
  EyeOff,
  Bell,
  HardDrive,
  Cpu,
  Mail,
  Calendar,
  ExternalLink,
  CheckCircle2,
  XCircle,
  Copy,
  Check,
  ChevronRight,
  Menu,
  X
} from "lucide-react";

interface SectionItem {
  id: string;
  number: string;
  title: string;
}

const SECTIONS: SectionItem[] = [
  { id: "introduction", number: "01", title: "Privacy Policy – Introduction" },
  { id: "about-lexora", number: "02", title: "About Lexora" },
  { id: "information-we-collect", number: "03", title: "Information We Collect" },
  { id: "information-we-do-not-collect", number: "04", title: "Information We Do Not Collect" },
  { id: "how-we-use-information", number: "05", title: "How We Use Information" },
  { id: "local-data-storage", number: "06", title: "Local Data Storage" },
  { id: "third-party-services", number: "07", title: "Third-Party Services & SDKs" },
  { id: "advertising-and-analytics", number: "08", title: "Advertising & Analytics" },
  { id: "data-sharing", number: "09", title: "Data Sharing & Disclosure" },
  { id: "data-retention", number: "10", title: "Data Retention & Deletion" },
  { id: "data-security", number: "11", title: "Data Security" },
  { id: "childrens-privacy", number: "12", title: "Children's Privacy" },
  { id: "user-privacy-rights", number: "13", title: "User Privacy Rights" },
  { id: "policy-changes", number: "14", title: "Changes to This Privacy Policy" },
  { id: "contact-information", number: "15", title: "Contact Information" }
];

export default function LexoraPrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState<string>("introduction");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      // Active section scroll spy
      const scrollPosition = window.scrollY + 160;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("narendra.kumarvg2@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#000319] text-white selection:bg-[#FF7A00]/30 selection:text-white relative">
      {/* Subtle Background Grid Texture */}
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none z-0" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#FF7A00]/10 via-[#FF7A00]/5 to-transparent blur-[120px] pointer-events-none z-0" />

      {/* Top Header / Nav */}
      <header className="sticky top-0 z-40 bg-[#000319]/90 backdrop-blur-xl border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Left: Back to Portfolio */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-white/70 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#FF7A00]" />
            <span>Back to Portfolio</span>
            <span className="hidden sm:inline text-white/30 font-mono text-xs">(knairy.ink)</span>
          </Link>

          {/* Center: Lexora Branded Tiles */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            {[
              { char: "L", color: "bg-emerald-600/90 border-emerald-400/50" },
              { char: "E", color: "bg-emerald-600/90 border-emerald-400/50" },
              { char: "X", color: "bg-[#FF7A00]/90 border-[#FF7A00]" },
              { char: "O", color: "bg-emerald-600/90 border-emerald-400/50" },
              { char: "R", color: "bg-[#292019] border-white/20" }
            ].map((tile, i) => (
              <span
                key={i}
                className={`w-6 h-6 sm:w-7 sm:h-7 rounded flex items-center justify-center font-mono font-bold text-[10px] sm:text-xs text-white border shadow-sm ${tile.color}`}
              >
                {tile.char}
              </span>
            ))}
            <span className="ml-2 font-mono text-xs sm:text-sm font-bold tracking-wider text-white hidden md:inline">
              LEXORA
            </span>
          </div>

          {/* Right: Platform Badge & Mobile TOC Toggle */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] text-[11px] font-mono text-amber-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FF7A00]" />
              <span>PhonePe Appstore Verified</span>
            </span>

            {/* Mobile TOC Button */}
            <button
              onClick={() => setMobileTocOpen(!mobileTocOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/[0.05] border border-white/[0.1] text-white/80 hover:text-white"
              aria-label="Toggle Table of Contents"
            >
              {mobileTocOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown TOC */}
        {mobileTocOpen && (
          <div className="lg:hidden bg-[#0a0d24] border-b border-white/[0.1] px-4 py-4 max-h-[60vh] overflow-y-auto">
            <div className="text-xs font-mono uppercase tracking-wider text-[#FF7A00] font-semibold mb-3">
              Table of Contents
            </div>
            <nav className="space-y-1">
              {SECTIONS.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={() => setMobileTocOpen(false)}
                  className={`block px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                    activeSection === sec.id
                      ? "bg-[#FF7A00]/20 text-[#FF7A00] font-semibold"
                      : "text-white/70 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <span className="text-white/40 mr-2">{sec.number}.</span>
                  {sec.title}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Header */}
      <section className="relative z-10 pt-12 pb-10 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7A00]/10 border border-[#FF7A00]/30 text-xs font-mono text-[#FF7A00] mb-4">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile Application Privacy Policy</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3">
              Lexora Privacy Policy
            </h1>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal mb-6">
              A comprehensive statement of data privacy, local storage architecture, and compliance standards for the Lexora Android word deduction application published on the PhonePe Appstore.
            </p>

            {/* Document Metadata Bar */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-white/60 pt-2 border-t border-white/[0.08]">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#FF7A00]" />
                <span>Last Updated: <strong className="text-white">October 30, 2026</strong></span>
              </div>
              <div>
                <span>Package: <code className="text-amber-300">com.lexora.wordle</code></span>
              </div>
              <div>
                <span>Platform: <strong className="text-white">Android (PhonePe Appstore)</strong></span>
              </div>
              <div>
                <span>Developer: <strong className="text-white">Narendra Kumar</strong></span>
              </div>
            </div>

            {/* Core Privacy Highlights Card */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { title: "100% Offline", desc: "No internet required", icon: HardDrive },
                { title: "Zero Ads", desc: "No AdMob or tracking", icon: XCircle },
                { title: "No Accounts", desc: "No logins or passwords", icon: Lock },
                { title: "Local Storage Only", desc: "Data stays on device", icon: Database }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex flex-col justify-between"
                >
                  <item.icon className="w-4 h-4 text-[#FF7A00] mb-2" />
                  <div>
                    <div className="text-xs font-bold text-white leading-tight">{item.title}</div>
                    <div className="text-[11px] text-white/50 font-mono mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Desktop Sticky Table of Contents (Sidebar) */}
          <aside className="hidden lg:block w-72 shrink-0 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-4 scrollbar-thin">
            <div className="text-xs font-mono uppercase tracking-wider text-[#FF7A00] font-semibold mb-4 flex items-center gap-2">
              <Menu className="w-3.5 h-3.5" />
              <span>Table of Contents</span>
            </div>
            <nav className="space-y-1">
              {SECTIONS.map((sec) => {
                const isActive = activeSection === sec.id;
                return (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className={`group flex items-start gap-2.5 px-3 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                      isActive
                        ? "bg-[#FF7A00]/15 text-[#FF7A00] font-semibold border-l-2 border-[#FF7A00] pl-2.5"
                        : "text-white/60 hover:text-white hover:bg-white/[0.03]"
                    }`}
                  >
                    <span className={`text-[10px] shrink-0 mt-0.5 ${isActive ? "text-[#FF7A00]" : "text-white/30"}`}>
                      {sec.number}
                    </span>
                    <span className="leading-snug">{sec.title.replace(/^\d+\.\s*/, "")}</span>
                  </a>
                );
              })}
            </nav>

            {/* Quick Contact Card */}
            <div className="mt-8 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
              <div className="text-xs font-bold text-white mb-1">Developer Inquiries</div>
              <p className="text-[11px] text-white/60 mb-3 leading-relaxed">
                Have a privacy question or compliance review?
              </p>
              <button
                onClick={copyEmail}
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FF7A00]/10 border border-[#FF7A00]/30 text-xs font-mono text-[#FF7A00] hover:bg-[#FF7A00]/20 transition-colors cursor-pointer"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? "Email Copied!" : "Copy Developer Email"}</span>
              </button>
            </div>
          </aside>

          {/* Main Document Body */}
          <main className="flex-1 max-w-4xl space-y-16 text-white/85 text-sm sm:text-base leading-relaxed">

            {/* 1. Privacy Policy – Introduction */}
            <section id="introduction" className="scroll-mt-24 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF7A00] uppercase tracking-wider font-semibold">
                <span>01</span>
                <span>/</span>
                <span>Introduction</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                1. Privacy Policy – Introduction
              </h2>
              <p>
                Welcome to <strong>Lexora</strong> (&quot;the App&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), an offline-first word puzzle mobile game created and published by independent software engineer <strong>Narendra Kumar</strong>.
              </p>
              <p>
                We believe that modern mobile software should respect user attention, peace of mind, and data autonomy. Unlike casual puzzle applications that incorporate invasive tracking SDKs, persistent device telemetry, and intrusive full-screen video ads, Lexora was engineered with a strict <strong>privacy-by-design</strong> architecture:
              </p>
              <div className="p-4 sm:p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-200/90 text-sm">
                <div className="font-bold text-white mb-1 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#00ff99]" />
                  <span>The Lexora Privacy Pledge</span>
                </div>
                <span>
                  Lexora does not collect, harvest, store, transmit, monetize, or sell your personal data. The application executes 100% of its puzzle logic, vocabulary evaluations, and streak tracking locally on your physical Android device. No game data ever leaves your device.
                </span>
              </div>
              <p>
                This Privacy Policy outlines how the application operates, the specific technical nature of local on-device data storage, and the complete absence of remote collection or third-party advertising tracking.
              </p>
            </section>

            {/* 2. About Lexora */}
            <section id="about-lexora" className="scroll-mt-24 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF7A00] uppercase tracking-wider font-semibold">
                <span>02</span>
                <span>/</span>
                <span>Application Overview</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                2. About Lexora
              </h2>
              <p>
                <strong>Lexora</strong> is a luxury, five-letter daily word deduction puzzle developed using React Native, Expo SDK 52, and TypeScript. The application is distributed on the <strong>PhonePe Appstore</strong> and standalone Android release channels.
              </p>
              <p>
                Key technical and design characteristics include:
              </p>
              <ul className="space-y-2.5 pl-2">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#FF7A00] font-mono mt-0.5">▹</span>
                  <span><strong>Embedded 12,947-Word Vocabulary:</strong> The accepted word dictionary is bundled entirely inside the application package as a static hashed data structure. Word validations run locally in <code className="text-amber-300">O(1)</code> time without calling remote dictionary APIs.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#FF7A00] font-mono mt-0.5">▹</span>
                  <span><strong>Deterministic 00:00 UTC Global Synchronization:</strong> Daily puzzles are calculated algorithmically through deterministic epoch hashing spanning a curated 6.3-year pool of 2,311 canonical words. Every player worldwide gets the exact same daily puzzle at 00:00 UTC without communicating with a centralized game server.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#FF7A00] font-mono mt-0.5">▹</span>
                  <span><strong>Dual-Session State Machine:</strong> The competitive Daily Puzzle runs in an isolated namespace completely detached from unlimited Practice Mode, preventing experimental plays from leaking into your daily streak or career statistics.</span>
                </li>
              </ul>
            </section>

            {/* 3. Information We Collect */}
            <section id="information-we-collect" className="scroll-mt-24 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF7A00] uppercase tracking-wider font-semibold">
                <span>03</span>
                <span>/</span>
                <span>Data Collection Scope</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                3. Information We Collect
              </h2>
              <p>
                Lexora operates on a <strong>zero-remote-collection principle</strong>. We do not collect or transmit personal information.
              </p>

              {/* Categorical Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                  <div className="text-xs font-mono uppercase tracking-wider text-white/50 mb-1">Personal Identifiers</div>
                  <div className="text-base font-bold text-white mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>None Collected</span>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">
                    No names, email addresses, phone numbers, usernames, government IDs, physical addresses, or biometric data are requested or collected.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                  <div className="text-xs font-mono uppercase tracking-wider text-white/50 mb-1">Accounts &amp; Credentials</div>
                  <div className="text-base font-bold text-white mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>No Accounts Required</span>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Lexora contains no sign-in or authentication system. You do not log in via email, Google, Facebook, Apple, or phone numbers.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                  <div className="text-xs font-mono uppercase tracking-wider text-white/50 mb-1">Financial &amp; Payment Data</div>
                  <div className="text-base font-bold text-white mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>None Collected</span>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Lexora contains no in-app purchases (IAP), microtransactions, paid subscriptions, credit card forms, or billing SDKs.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                  <div className="text-xs font-mono uppercase tracking-wider text-white/50 mb-1">Hardware &amp; Network IDs</div>
                  <div className="text-base font-bold text-white mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>None Harvested</span>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">
                    We do not harvest IMEI numbers, MAC addresses, Android Advertising IDs (AAID), serial numbers, or IP addresses.
                  </p>
                </div>
              </div>

              {/* Android Permissions Breakdown */}
              <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                <div className="text-xs font-mono uppercase tracking-wider text-[#FF7A00] font-semibold mb-2 flex items-center gap-2">
                  <Bell className="w-4 h-4 text-[#FF7A00]" />
                  <span>Android Device Permissions Requested</span>
                </div>
                <p className="text-xs sm:text-sm text-white/70 mb-3">
                  Lexora minimizes OS permission requests to the absolute minimum necessary for optional on-device utility:
                </p>
                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-lg bg-black/40 border border-white/[0.06]">
                    <div className="flex items-center justify-between font-mono mb-1">
                      <span className="text-amber-300 font-bold">android.permission.POST_NOTIFICATIONS</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950/60 border border-amber-900/50 text-amber-300">
                        Optional · User-Controlled
                      </span>
                    </div>
                    <p className="text-white/60">
                      On Android 13+ (API level 33 and higher), this permission is requested only if you explicitly choose to enable daily reminder notifications in the in-app settings. It is used strictly for scheduling local daytime reminders on your device. Denying this permission does not restrict any gameplay features.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Information We Do Not Collect */}
            <section id="information-we-do-not-collect" className="scroll-mt-24 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF7A00] uppercase tracking-wider font-semibold">
                <span>04</span>
                <span>/</span>
                <span>Prohibited Data Practices</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                4. Information We Do Not Collect
              </h2>
              <p>
                For absolute legal and operational clarity, the following data types are <strong>expressly never collected, accessed, or processed</strong> by Lexora:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                {[
                  "No Precise or Approximate Location (GPS/Wi-Fi/Cell)",
                  "No Contacts, Address Books, or Social Graphs",
                  "No Photos, Videos, Audio, or Camera Access",
                  "No Web Browsing History or Search History",
                  "No Background Clipboard Monitoring",
                  "No Device Telemetry, Battery Status, or Wi-Fi SSIDs",
                  "No Advertising Identifier (Google AAID)",
                  "No Facial, Voice, or Biometric Scans"
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-rose-950/20 border border-rose-900/40 text-rose-200/90 flex items-center gap-2.5 font-medium"
                  >
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/50 pt-1">
                Note on Clipboard: When you tap the &quot;Share&quot; button after completing a puzzle, Lexora formats a spoiler-free text grid of emoji blocks (e.g. 🟩 🟨 ⬛) and writes it to your system clipboard once. Lexora never reads from or inspects your clipboard history.
              </p>
            </section>

            {/* 5. How We Use Information */}
            <section id="how-we-use-information" className="scroll-mt-24 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF7A00] uppercase tracking-wider font-semibold">
                <span>05</span>
                <span>/</span>
                <span>Purpose &amp; Scope</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                5. How We Use Information
              </h2>
              <p>
                Because no personal data is transmitted to remote servers, any data generated through gameplay remains strictly on your local device and is used exclusively for the following functional purposes:
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#FF7A00]/10 text-[#FF7A00] shrink-0 mt-0.5">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Maintaining In-Progress Game State</h3>
                    <p className="text-xs text-white/60 mt-1 leading-relaxed">
                      Saves your active board, typed letters, and evaluated row colors locally so you can exit the application and resume your daily puzzle without losing progress.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#FF7A00]/10 text-[#FF7A00] shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Calculating Player Statistics &amp; Streaks</h3>
                    <p className="text-xs text-white/60 mt-1 leading-relaxed">
                      Maintains your aggregate game statistics (games played, win percentage, current streak, max streak, and guess distribution graph) on your device for your personal review.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#FF7A00]/10 text-[#FF7A00] shrink-0 mt-0.5">
                    <Bell className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Local Daytime Reminder Scheduling</h3>
                    <p className="text-xs text-white/60 mt-1 leading-relaxed">
                      If notification reminders are enabled in settings, schedules on-device alarms during daylight hours (9 AM, 1 PM, 5 PM, 9 PM) only if today&apos;s daily challenge is unfinished. Automatically cancels all scheduled reminders the moment you complete the daily puzzle.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#FF7A00]/10 text-[#FF7A00] shrink-0 mt-0.5">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Persisting User Preferences</h3>
                    <p className="text-xs text-white/60 mt-1 leading-relaxed">
                      Stores your interface settings, such as haptic vibration toggles and first-run tutorial dismissal flags.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Local Data Storage */}
            <section id="local-data-storage" className="scroll-mt-24 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF7A00] uppercase tracking-wider font-semibold">
                <span>06</span>
                <span>/</span>
                <span>Technical Architecture</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                6. Local Data Storage
              </h2>
              <p>
                All persistence in Lexora is handled by the open-source library <code className="text-amber-300">@react-native-async-storage/async-storage</code>.
              </p>
              <p>
                AsyncStorage writes directly to private, sandboxed application directory storage managed by Android. Other applications installed on your device cannot access this data without root access or explicit OS-level compromise.
              </p>

              {/* Storage Keys Table */}
              <div className="overflow-x-auto rounded-xl border border-white/[0.08] bg-black/40">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-white/[0.08] text-white/50 bg-white/[0.02]">
                      <th className="py-2.5 px-3 font-semibold">Storage Key Namespace</th>
                      <th className="py-2.5 px-3 font-semibold">Contents</th>
                      <th className="py-2.5 px-3 font-semibold">Storage Location</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.04] text-white/80">
                    <tr>
                      <td className="py-2.5 px-3 text-amber-300 font-bold">@lexora_daily_state</td>
                      <td className="py-2.5 px-3">Current day index, guesses array, and completion status</td>
                      <td className="py-2.5 px-3 text-white/60">On-Device Sandbox</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 text-amber-300 font-bold">@lexora_practice_state</td>
                      <td className="py-2.5 px-3">Isolated practice game board (never leaks to daily stats)</td>
                      <td className="py-2.5 px-3 text-white/60">On-Device Sandbox</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 text-amber-300 font-bold">@lexora_stats</td>
                      <td className="py-2.5 px-3">Games played, win count, streak records, guess distribution</td>
                      <td className="py-2.5 px-3 text-white/60">On-Device Sandbox</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 text-amber-300 font-bold">@lexora_settings</td>
                      <td className="py-2.5 px-3">Haptics enabled flag, daily reminder notification toggle</td>
                      <td className="py-2.5 px-3 text-white/60">On-Device Sandbox</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-white/60">
                You maintain complete, permanent control over this data. You can erase it at any time by clearing application data via your device settings.
              </p>
            </section>

            {/* 7. Third-Party Services and SDKs */}
            <section id="third-party-services" className="scroll-mt-24 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF7A00] uppercase tracking-wider font-semibold">
                <span>07</span>
                <span>/</span>
                <span>Dependencies</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                7. Third-Party Services &amp; SDKs
              </h2>
              <p>
                Lexora does not embed third-party advertising, telemetry, monetization, or analytics SDKs.
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-[#FF7A00] font-semibold">
                  Audited Open-Source Components &amp; System APIs:
                </div>
                <div className="space-y-2.5 text-xs text-white/70">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <span className="font-bold text-white font-mono">React Native &amp; Expo SDK (v52 / v57 Runtime)</span>
                    <p className="mt-1 text-white/60 leading-relaxed">
                      Cross-platform UI rendering engine. Configured with Hermes bytecode compilation and ProGuard/R8 code shrinking for minimal footprint and maximum security.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <span className="font-bold text-white font-mono">expo-notifications</span>
                    <p className="mt-1 text-white/60 leading-relaxed">
                      Used solely to interface with the local Android NotificationManager. Operates strictly offline. Does not request or register push notification tokens with Apple APNs, Firebase Cloud Messaging (FCM), or any remote messaging service.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <span className="font-bold text-white font-mono">expo-haptics &amp; expo-clipboard</span>
                    <p className="mt-1 text-white/60 leading-relaxed">
                      Hardware-level vibration trigger for tactile keypresses, and system clipboard write handler for sharing masked score cards. No data is stored or transmitted by these modules.
                    </p>
                  </div>
                </div>
              </div>

              {/* Developer Confirmation Notice */}
              <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 text-amber-200/90 text-xs">
                <strong>Third-Party Service Verification:</strong> Based on the complete audit of Lexora v1.0.0 source code and dependencies, there are <strong>zero</strong> commercial tracking SDKs, <strong>zero</strong> advertising networks, and <strong>zero</strong> remote crash-reporting tools (e.g. Sentry, Firebase Crashlytics) bundled in the release binary.
              </div>
            </section>

            {/* 8. Advertising and Analytics */}
            <section id="advertising-and-analytics" className="scroll-mt-24 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF7A00] uppercase tracking-wider font-semibold">
                <span>08</span>
                <span>/</span>
                <span>Advertising &amp; Analytics</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                8. Advertising &amp; Analytics
              </h2>
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">100% Ad-Free Experience</h3>
                    <p className="text-xs text-white/60">No commercial interruptions, banners, or video interstitials.</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed pt-2 border-t border-white/[0.06]">
                  Lexora does not display advertising of any kind. We do not partner with Google AdMob, Unity Ads, Meta Audience Network, AppLovin, ironSource, or any ad exchange. Furthermore, we do not employ analytics frameworks (such as Google Analytics for Firebase, Mixpanel, or Amplitude). Your gameplay rhythm and puzzle deduction sessions are completely private.
                </p>
              </div>
            </section>

            {/* 9. Data Sharing and Disclosure */}
            <section id="data-sharing" className="scroll-mt-24 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF7A00] uppercase tracking-wider font-semibold">
                <span>09</span>
                <span>/</span>
                <span>Data Sharing</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                9. Data Sharing &amp; Disclosure
              </h2>
              <p>
                Because Lexora does not collect, harvest, or transmit your data to remote servers:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-white/75 pl-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF7A00] font-mono mt-0.5">▹</span>
                  <span><strong>We never sell your data:</strong> We do not sell, rent, lease, or monetize personal information to data brokers, advertising agencies, or marketing companies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF7A00] font-mono mt-0.5">▹</span>
                  <span><strong>We never transfer your data:</strong> No user records or game metrics are transferred to corporate affiliates or cloud service providers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF7A00] font-mono mt-0.5">▹</span>
                  <span><strong>User-Initiated Sharing:</strong> When you share your daily result, you are sharing a sanitized emoji block (e.g., <code className="text-amber-300">Lexora #42 4/6</code>) generated locally. The secret solution word is strictly omitted to preserve spoiler safety. You control where that text is posted.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF7A00] font-mono mt-0.5">▹</span>
                  <span><strong>Legal Disclosures:</strong> Because we have no access to your on-device data and maintain no server databases, we possess no user data to produce in response to government, legal, or court requests.</span>
                </li>
              </ul>
            </section>

            {/* 10. Data Retention and Deletion */}
            <section id="data-retention" className="scroll-mt-24 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF7A00] uppercase tracking-wider font-semibold">
                <span>10</span>
                <span>/</span>
                <span>Data Lifecycle</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                10. Data Retention &amp; Deletion
              </h2>
              <p>
                All gameplay history, win streaks, and settings are retained locally on your device indefinitely until you choose to reset or delete them.
              </p>
              
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-[#FF7A00] font-semibold">
                  How to Permanently Delete All Local Data:
                </div>
                <p className="text-xs sm:text-sm text-white/70">
                  Because data exists solely on your physical phone, you do not need to submit a deletion request or wait for server processing. You can erase all data immediately:
                </p>
                <ol className="list-decimal list-inside space-y-1.5 text-xs text-white/80 font-mono">
                  <li>Open Android <strong>Settings</strong> on your device.</li>
                  <li>Tap <strong>Apps</strong> or <strong>Application Manager</strong>.</li>
                  <li>Select <strong>Lexora</strong> from the installed application list.</li>
                  <li>Tap <strong>Storage &amp; Cache</strong>.</li>
                  <li>Tap <strong>Clear Storage</strong> (or <strong>Clear Data</strong>).</li>
                </ol>
                <p className="text-xs text-white/50 pt-1">
                  Alternatively, uninstalling the Lexora app from your Android device causes the Android operating system to immediately and irreversibly delete all sandboxed application files, keys, and cached state.
                </p>
              </div>
            </section>

            {/* 11. Data Security */}
            <section id="data-security" className="scroll-mt-24 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF7A00] uppercase tracking-wider font-semibold">
                <span>11</span>
                <span>/</span>
                <span>Security Engineering</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                11. Data Security
              </h2>
              <p>
                Although Lexora does not transmit data over the internet, we implement defensive mobile software engineering practices to safeguard on-device integrity:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                  <div className="font-bold text-white mb-1 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#FF7A00]" />
                    <span>Prototype Pollution Defense</span>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Storage deserializers explicitly filter and sanitize incoming state against <code className="text-amber-300">__proto__</code> and <code className="text-amber-300">constructor</code> payload tampering.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                  <div className="font-bold text-white mb-1 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#FF7A00]" />
                    <span>Strict Buffer Clamping</span>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Input handlers enforce rigorous 5-character buffer clamps to eliminate state overflow, rapid input races, and UI desynchronization.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                  <div className="font-bold text-white mb-1 flex items-center gap-2">
                    <HardDrive className="w-4 h-4 text-[#FF7A00]" />
                    <span>Android OS Sandboxing</span>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Leverages Android&apos;s Linux-level user isolation. AsyncStorage files are stored within Lexora&apos;s private application directory inaccessible to unprivileged apps.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                  <div className="font-bold text-white mb-1 flex items-center gap-2">
                    <EyeOff className="w-4 h-4 text-[#FF7A00]" />
                    <span>Zero Remote Attack Surface</span>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">
                    With zero incoming or outgoing network ports and no backend endpoints, player data is invulnerable to man-in-the-middle (MITM) attacks or cloud database leaks.
                  </p>
                </div>
              </div>
            </section>

            {/* 12. Children's Privacy */}
            <section id="childrens-privacy" className="scroll-mt-24 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF7A00] uppercase tracking-wider font-semibold">
                <span>12</span>
                <span>/</span>
                <span>Children&apos;s Privacy</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                12. Children&apos;s Privacy
              </h2>
              <p>
                Lexora is a clean, family-friendly word deduction puzzle suitable for users of all ages, including children and students.
              </p>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-2 text-xs sm:text-sm text-white/75">
                <p>
                  Because Lexora does not collect any personal information whatsoever, we do not knowingly solicit, collect, or process personal data from children under the age of 13 (or under 16 in the European Union or applicable jurisdictions).
                </p>
                <p>
                  The dictionary solution pool has been curated to exclude profanity, vulgarity, or mature themes, providing a secure, educational environment for vocabulary development.
                </p>
                <p>
                  Parents and guardians can be assured that children playing Lexora will never encounter behavioral advertising, commercial telemetry, data harvesting, or unvetted external web links.
                </p>
              </div>
            </section>

            {/* 13. User Privacy Rights */}
            <section id="user-privacy-rights" className="scroll-mt-24 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF7A00] uppercase tracking-wider font-semibold">
                <span>13</span>
                <span>/</span>
                <span>Legal Rights &amp; Control</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                13. User Privacy Rights
              </h2>
              <p>
                Various privacy frameworks (such as India&apos;s Digital Personal Data Protection Act, the European Union GDPR, the UK Data Protection Act, and the California CCPA/CPRA) grant individuals rights regarding their personal data, including the right to access, rectify, delete, and port their data.
              </p>
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
                <div className="text-sm font-bold text-white">Direct &amp; Instantaneous Autonomous Control</div>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Because Lexora retains zero user records on external servers, you do not need to contact us, verify identity, or wait for compliance turnaround periods to exercise your privacy rights:
                </p>
                <ul className="space-y-2 text-xs text-white/75 pl-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF7A00] font-mono mt-0.5">▹</span>
                    <span><strong>Right to Access &amp; Portability:</strong> Your complete game statistics, guess distribution, and streak records are directly viewable in the app&apos;s native Stats modal at any time.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF7A00] font-mono mt-0.5">▹</span>
                    <span><strong>Right to Erasure (Deletion):</strong> You can permanently purge 100% of your game records, cache, and settings in seconds by clearing app storage in Android Settings.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF7A00] font-mono mt-0.5">▹</span>
                    <span><strong>Right to Opt Out of Reminders:</strong> You can toggle on-device reminder notifications on or off at any moment in the app&apos;s Settings modal.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 14. Changes to This Privacy Policy */}
            <section id="policy-changes" className="scroll-mt-24 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF7A00] uppercase tracking-wider font-semibold">
                <span>14</span>
                <span>/</span>
                <span>Updates &amp; Revisions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                14. Changes to This Privacy Policy
              </h2>
              <p>
                We may periodically update this Privacy Policy to reflect application enhancements, operating system updates, or evolving app store compliance guidelines (such as updates to the PhonePe Appstore Developer Guidelines).
              </p>
              <p>
                When modifications are made, the <strong>&quot;Last Updated&quot;</strong> date at the top and bottom of this document will be updated accordingly. Because we do not collect email addresses or contact information, we encourage users to review this page periodically.
              </p>
              <p>
                If any future update ever introduces remote functionality, online cloud sync, or network connectivity, we will provide conspicuous advance notice through in-app release prompts and updated policy documentation before any such feature takes effect.
              </p>
            </section>

            {/* 15. Contact Information */}
            <section id="contact-information" className="scroll-mt-24 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF7A00] uppercase tracking-wider font-semibold">
                <span>15</span>
                <span>/</span>
                <span>Contact Details</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                15. Contact Information
              </h2>
              <p>
                If you have questions, feedback, or concerns regarding this Privacy Policy, compliance specifications, or Lexora&apos;s on-device data architecture, please feel free to reach out directly to the developer:
              </p>

              <div className="p-5 sm:p-6 rounded-2xl bg-[#090d26] border border-white/[0.1] space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#FF7A00] font-semibold mb-1">
                      Lead Mobile Engineer &amp; Developer
                    </div>
                    <div className="text-xl font-bold text-white">Narendra Kumar</div>
                    <div className="text-xs text-white/60 font-mono mt-0.5">Developer of Lexora · Software Engineer</div>
                  </div>

                  <button
                    onClick={copyEmail}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FF7A00] text-black font-mono font-bold text-xs hover:bg-[#e66e00] transition-colors cursor-pointer shrink-0"
                  >
                    {copiedEmail ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedEmail ? "Email Copied!" : "Copy Email Address"}</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-white/[0.08] text-xs font-mono">
                  <div>
                    <span className="text-white/40 block">Direct Email:</span>
                    <a
                      href="mailto:narendra.kumarvg2@gmail.com"
                      className="text-white hover:text-[#FF7A00] transition-colors font-semibold"
                    >
                      narendra.kumarvg2@gmail.com
                    </a>
                  </div>
                  <div>
                    <span className="text-white/40 block">Developer Portfolio:</span>
                    <a
                      href="https://knairy.ink"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white hover:text-[#FF7A00] transition-colors font-semibold inline-flex items-center gap-1"
                    >
                      <span>https://knairy.ink</span>
                      <ExternalLink className="w-3 h-3 text-[#FF7A00]" />
                    </a>
                  </div>
                  <div>
                    <span className="text-white/40 block">Codebase Repository:</span>
                    <a
                      href="https://github.com/Nairy1729/Lexora"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white hover:text-[#FF7A00] transition-colors font-semibold inline-flex items-center gap-1"
                    >
                      <span>github.com/Nairy1729/Lexora</span>
                      <ExternalLink className="w-3 h-3 text-[#FF7A00]" />
                    </a>
                  </div>
                  <div>
                    <span className="text-white/40 block">Distribution Channel:</span>
                    <span className="text-amber-300 font-semibold">PhonePe Appstore (Android)</span>
                  </div>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#FF7A00] text-black shadow-lg shadow-[#FF7A00]/25 hover:bg-[#e66e00] transition-all duration-300 cursor-pointer"
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5 font-bold" />
        </button>
      )}

      {/* Bottom Footer */}
      <footer className="border-t border-white/[0.08] bg-[#000319] py-10 relative z-10 text-xs font-mono text-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © 2026 Narendra Kumar. Lexora is an independent word puzzle application.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white transition-colors">
              Portfolio
            </Link>
            <a
              href="https://github.com/Nairy1729/Lexora"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub Codebase
            </a>
            <a
              href="https://github.com/Nairy1729/Lexora/releases/tag/v1.0.0"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FF7A00] transition-colors"
            >
              Latest APK (v1.0.0)
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
