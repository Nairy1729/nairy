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
  Bell,
  HardDrive,
  Mail,
  Calendar,
  CheckCircle2,
  XCircle,
  Copy,
  Check,
  Menu,
  X,
  Share2,
  Image as ImageIcon,
  LayoutGrid,
  Volume2,
  BookOpen
} from "lucide-react";

interface SectionItem {
  id: string;
  number: string;
  title: string;
}

const SECTIONS: SectionItem[] = [
  { id: "introduction", number: "01", title: "1. Introduction & Application Details" },
  { id: "information-collected", number: "02", title: "2. Information Collected & No-Collection Guarantee" },
  { id: "local-storage", number: "03", title: "3. Local Storage of Vocabulary & Preferences" },
  { id: "notifications-and-scheduling", number: "04", title: "4. Notifications & Background Scheduling" },
  { id: "wallpaper-and-widget", number: "05", title: "5. Wallpaper & Widget Functionality" },
  { id: "sharing-and-temporary-files", number: "06", title: "6. Sharing Functionality & Temporary Files" },
  { id: "third-party-services", number: "07", title: "7. Third-Party Services & SDKs" },
  { id: "data-security-and-retention", number: "08", title: "8. Data Security & Retention" },
  { id: "childrens-privacy", number: "09", title: "9. Children's Privacy" },
  { id: "user-rights-and-contact", number: "10", title: "10. User Rights & Contact Information" },
  { id: "policy-updates", number: "11", title: "11. Policy Updates & Effective Date" }
];

export default function WordDropPrivacyPolicyPage() {
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
    <div className="min-h-screen bg-[#000319] text-white selection:bg-[#C79F6F]/30 selection:text-white relative">
      {/* Subtle Background Grid Texture */}
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none z-0" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#C79F6F]/10 via-[#C79F6F]/5 to-transparent blur-[120px] pointer-events-none z-0" />

      {/* Top Header / Nav */}
      <header className="sticky top-0 z-40 bg-[#000319]/90 backdrop-blur-xl border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Left: Back to Portfolio */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-white/70 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#C79F6F]" />
            <span>Back to Portfolio</span>
            <span className="hidden sm:inline text-white/30 font-mono text-xs">(knairy.ink)</span>
          </Link>

          {/* Center: WordDrop Editorial Badge */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#C79F6F] to-[#8C6D45] flex items-center justify-center shadow-md shadow-[#C79F6F]/20 border border-[#E6B980]/40">
              <BookOpen className="w-4 h-4 text-[#141316]" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif font-bold text-sm sm:text-base tracking-wide text-white">
                WORDDROP
              </span>
              <span className="hidden md:inline font-mono text-[10px] text-[#C79F6F] tracking-widest uppercase">
                Daily Vocabulary
              </span>
            </div>
          </div>

          {/* Right: Platform Badge & Mobile TOC Toggle */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] text-[11px] font-mono text-[#E6B980]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C79F6F]" />
              <span>100% Offline App</span>
            </span>

            {/* Mobile TOC Button */}
            <button
              onClick={() => setMobileTocOpen(!mobileTocOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/[0.05] border border-white/[0.1] text-white/80 hover:text-white"
              aria-label="Toggle Table of Contents"
            >
              {mobileTocOpen ? <X className="w-5 h-5 text-[#C79F6F]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile TOC Dropdown */}
        {mobileTocOpen && (
          <div className="lg:hidden bg-[#0e101f] border-b border-white/[0.1] px-4 py-4 max-h-[60vh] overflow-y-auto">
            <div className="text-xs font-mono uppercase tracking-wider text-[#C79F6F] font-semibold mb-3">
              Table of Contents
            </div>
            <div className="space-y-1">
              {SECTIONS.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={() => setMobileTocOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-xs font-mono transition-colors ${
                    activeSection === sec.id
                      ? "bg-[#C79F6F]/20 text-[#C79F6F] font-bold"
                      : "text-white/70 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  <span className="text-white/40 mr-2">{sec.number}</span>
                  {sec.title.replace(/^\d+\.\s*/, "")}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Header Section */}
      <section className="relative z-10 pt-12 pb-8 border-b border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C79F6F]/10 border border-[#C79F6F]/30 text-[#E6B980] text-xs font-mono mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C79F6F]" />
              <span>Official Privacy Policy</span>
              <span className="text-white/40">•</span>
              <span>ink.knairy.worddrop</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4">
              WordDrop Privacy Policy
            </h1>

            <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed mb-6">
              Official privacy documentation for <strong>WordDrop – Daily Vocabulary</strong>, an offline-first Android application designed to expand vocabulary passively and effortlessly across your lock screen, notification shade, and home screen widget.
            </p>

            {/* Document Metadata Chips */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/50 border-t border-white/[0.08] pt-4">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C79F6F]" />
                <span>Effective Date: <strong className="text-white">November 5, 2026</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-[#C79F6F]" />
                <span>Package: <strong className="text-white">ink.knairy.worddrop</strong></span>
              </div>
              <div>
                <span>Platform: <strong className="text-white">Android (API 24–36)</strong></span>
              </div>
              <div>
                <span>Developer: <strong className="text-white">Narendra Kumar</strong></span>
              </div>
            </div>

            {/* Core Privacy Highlights Card */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { title: "100% Offline", desc: "Zero network permissions", icon: HardDrive },
                { title: "Zero Ads", desc: "No AdMob or marketing SDKs", icon: XCircle },
                { title: "No Accounts", desc: "No signup or passwords", icon: Lock },
                { title: "Local Sandboxed", desc: "Room & DataStore on device", icon: Database }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex flex-col justify-between"
                >
                  <item.icon className="w-4 h-4 text-[#C79F6F] mb-2" />
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
            <div className="text-xs font-mono uppercase tracking-wider text-[#C79F6F] font-semibold mb-4 flex items-center gap-2">
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
                        ? "bg-[#C79F6F]/15 text-[#E6B980] font-semibold border-l-2 border-[#C79F6F] pl-2.5"
                        : "text-white/60 hover:text-white hover:bg-white/[0.03]"
                    }`}
                  >
                    <span className={`text-[10px] shrink-0 mt-0.5 ${isActive ? "text-[#C79F6F]" : "text-white/30"}`}>
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
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#C79F6F]/10 border border-[#C79F6F]/30 text-xs font-mono text-[#E6B980] hover:bg-[#C79F6F]/20 transition-colors cursor-pointer"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? "Email Copied!" : "Copy Developer Email"}</span>
              </button>
            </div>
          </aside>

          {/* Main Document Body */}
          <main className="flex-1 max-w-4xl space-y-16 text-white/85 text-sm sm:text-base leading-relaxed">

            {/* 1. Introduction and Application Details */}
            <section id="introduction" className="scroll-mt-24 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C79F6F] uppercase tracking-wider font-semibold">
                <span>01</span>
                <span>/</span>
                <span>Application Overview</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                1. Introduction & Application Details
              </h2>
              <p>
                Welcome to <strong>WordDrop – Daily Vocabulary</strong> (&quot;the App&quot;, &quot;WordDrop&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), an offline-first Android application designed and maintained by independent software engineer <strong>Narendra Kumar</strong> (&quot;Nairy&quot;).
              </p>
              <p>
                WordDrop was created around a single principle: <em>&quot;Learn one beautiful English word every day, without trying.&quot;</em> Rather than demanding that users interrupt their daily lives to open a gamified, ad-cluttered educational app, WordDrop delivers curated vocabulary directly to everyday Android glanceable surfaces—the <strong>Lock Screen</strong>, the <strong>Notification Shade</strong>, and the <strong>Home Screen Widget</strong>.
              </p>
              <p>
                We believe exceptional software begins with unconditional respect for your attention, battery, and personal privacy. WordDrop is engineered with a strict <strong>privacy-by-design</strong> architecture: it requires no user accounts, no logins, no personal identity disclosures, and possesses <strong>zero external server communication capabilities</strong>.
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-200/90 text-sm">
                <div className="font-bold text-white mb-1 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#00ff99]" />
                  <span>Foundational Privacy Commitment</span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
                  WordDrop is a 100% client-side application. The application does not contain remote servers, does not operate backend databases, and does not sell, license, share, or monetize any user data.
                </p>
              </div>

              {/* Technical Profile Table */}
              <div className="overflow-x-auto rounded-xl border border-white/[0.08] mt-4">
                <table className="w-full text-xs font-mono text-left">
                  <thead className="bg-white/[0.04] text-white/70 uppercase">
                    <tr>
                      <th className="px-4 py-3">Property</th>
                      <th className="px-4 py-3">Specification / Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.06] text-white/80">
                    <tr>
                      <td className="px-4 py-2.5 font-semibold text-[#E6B980]">Application Name</td>
                      <td className="px-4 py-2.5">WordDrop – Daily Vocabulary</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-semibold text-[#E6B980]">Application ID</td>
                      <td className="px-4 py-2.5 font-mono text-xs">ink.knairy.worddrop</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-semibold text-[#E6B980]">Target Platform</td>
                      <td className="px-4 py-2.5">Android 7.0 (API level 24) through Android 15 (API level 36)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-semibold text-[#E6B980]">Publisher / Developer</td>
                      <td className="px-4 py-2.5">Narendra Kumar (Independent Developer)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-semibold text-[#E6B980]">Developer Website</td>
                      <td className="px-4 py-2.5">
                        <a href="https://knairy.ink" target="_blank" rel="noopener noreferrer" className="text-[#C79F6F] hover:underline">
                          https://knairy.ink
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-semibold text-[#E6B980]">Developer Email</td>
                      <td className="px-4 py-2.5">narendra.kumarvg2@gmail.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 2. Information Collected and No-Collection Guarantee */}
            <section id="information-collected" className="scroll-mt-24 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C79F6F] uppercase tracking-wider font-semibold">
                <span>02</span>
                <span>/</span>
                <span>Data Collection Scope</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                2. Information Collected & No-Collection Guarantee
              </h2>
              <p>
                We do not collect, harvest, store, or transmit any Personally Identifiable Information (PII) or sensitive personal information.
              </p>

              {/* Physical Architecture Guarantee */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-[#C79F6F]/30 space-y-3">
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#C79F6F]" />
                  <span>The Android Permission Guarantee</span>
                </div>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  In Android, an application must explicitly declare the <code className="text-[#E6B980] bg-black/40 px-1 py-0.5 rounded font-mono text-xs">android.permission.INTERNET</code> permission in its compiled <code className="text-[#E6B980] bg-black/40 px-1 py-0.5 rounded font-mono text-xs">AndroidManifest.xml</code> to make network connections or transmit data. 
                </p>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  WordDrop <strong>does not declare or request internet access</strong>. The Android operating system sandbox strictly enforces this restriction at the kernel and framework levels: WordDrop is physically unable to make HTTP/HTTPS network calls, establish socket connections, or communicate with external servers.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-semibold text-white">Specific Categories of Information We Do NOT Collect:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-mono">
                  {[
                    { label: "Personal Identifiers", desc: "No names, email addresses, phone numbers, or account IDs" },
                    { label: "Location Information", desc: "Zero GPS, Wi-Fi, or cellular network location tracking" },
                    { label: "Hardware & Device IDs", desc: "No IMEI, MAC address, Android ID, or Advertising ID (GAID)" },
                    { label: "Contacts & Media", desc: "No access to contacts, photo gallery, documents, or mic" },
                    { label: "Payment & Financials", desc: "No payment methods, bank cards, or purchase records" },
                    { label: "Analytics & Telemetry", desc: "Zero session logs, crash analytics, or behavior tracking" }
                  ].map((cat, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-2.5">
                      <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-white text-xs">{cat.label}</div>
                        <div className="text-[11px] text-white/50 mt-0.5">{cat.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs text-white/60">
                Any state generated through normal application usage (such as which words have been shown today, bookmarked vocabulary, and your preferred notification delivery time) is stored <strong>strictly locally</strong> within your device&apos;s sandboxed storage.
              </p>
            </section>

            {/* 3. Local Storage of Vocabulary, Saved Words, and Preferences */}
            <section id="local-storage" className="scroll-mt-24 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C79F6F] uppercase tracking-wider font-semibold">
                <span>03</span>
                <span>/</span>
                <span>Storage Architecture</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                3. Local Storage of Vocabulary & Preferences
              </h2>
              <p>
                To provide an effortless vocabulary learning experience that retains your progress, WordDrop utilizes standard Android Jetpack local persistence libraries. All stored data resides within the private, encrypted application directory (<code className="text-[#E6B980] bg-black/40 px-1 py-0.5 rounded font-mono text-xs">/data/data/ink.knairy.worddrop/</code>) managed by Android OS sandboxing.
              </p>

              <div className="space-y-4">
                {/* 1. Room Database */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-[#C79F6F]" />
                    <h3 className="text-sm sm:text-base font-bold text-white">1. Local Room Database (`worddrop.db`)</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    WordDrop bundles a curated offline dictionary of over <strong>2,650 high-value English words</strong>. On initial launch, these words are seeded locally into an on-device SQLite database via the AndroidX Room persistence library:
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-white/70 list-disc list-inside">
                    <li>
                      <strong className="text-white font-mono text-xs">words table:</strong> Stores word names, definitions, phonetic pronunciations (IPA), parts of speech, example sentences, synonyms, difficulty tiers (Beginner, Intermediate, Advanced), and editorial usage notes.
                    </li>
                    <li>
                      <strong className="text-white font-mono text-xs">word_history table:</strong> Stores the discovery date (<code className="text-white/80 font-mono">dateShown</code>), foreign key reference (<code className="text-white/80 font-mono">wordId</code>), your saved bookmark status (<code className="text-white/80 font-mono">isSaved</code>), mastery status (<code className="text-white/80 font-mono">isKnown</code>), and discovery timestamp.
                    </li>
                  </ul>
                  <p className="text-xs text-white/60">
                    This history ensures WordDrop&apos;s <strong>guaranteed no-repeat engine</strong>—ensuring you never encounter the same word twice over 7+ years of daily learning.
                  </p>
                </div>

                {/* 2. DataStore Preferences */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
                  <div className="flex items-center gap-2">
                    <HardDrive className="w-4 h-4 text-[#C79F6F]" />
                    <h3 className="text-sm sm:text-base font-bold text-white">2. Jetpack DataStore Preferences (`worddrop_preferences`)</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    Non-relational configuration choices are stored using Android Jetpack DataStore Preferences. The preferences stored on your device are limited to:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-white/70">
                    <div className="p-2 rounded bg-black/30 border border-white/[0.04]">
                      <span className="text-[#E6B980]">selected_difficulty:</span> Beginner, Intermediate, or Advanced
                    </div>
                    <div className="p-2 rounded bg-black/30 border border-white/[0.04]">
                      <span className="text-[#E6B980]">has_completed_onboarding:</span> Initial setup completion boolean
                    </div>
                    <div className="p-2 rounded bg-black/30 border border-white/[0.04]">
                      <span className="text-[#E6B980]">notifications_enabled:</span> Daily notification delivery toggle
                    </div>
                    <div className="p-2 rounded bg-black/30 border border-white/[0.04]">
                      <span className="text-[#E6B980]">persistent_lock_screen:</span> Lock screen persistence preference
                    </div>
                    <div className="p-2 rounded bg-black/30 border border-white/[0.04]">
                      <span className="text-[#E6B980]">wallpaper_enabled:</span> Automatic lock screen wallpaper toggle
                    </div>
                    <div className="p-2 rounded bg-black/30 border border-white/[0.04]">
                      <span className="text-[#E6B980]">auto_play_pronunciation:</span> Audio pronunciation auto-play flag
                    </div>
                    <div className="p-2 rounded bg-black/30 border border-white/[0.04]">
                      <span className="text-[#E6B980]">theme_mode:</span> SYSTEM, LIGHT, or DARK display theme
                    </div>
                    <div className="p-2 rounded bg-black/30 border border-white/[0.04]">
                      <span className="text-[#E6B980]">notification_time:</span> Scheduled delivery hour and minute
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Notifications and Background Scheduling */}
            <section id="notifications-and-scheduling" className="scroll-mt-24 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C79F6F] uppercase tracking-wider font-semibold">
                <span>04</span>
                <span>/</span>
                <span>Background Execution</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                4. Notifications & Background Scheduling
              </h2>
              <p>
                WordDrop utilizes standard Android platform APIs to deliver your daily word reliably without draining battery or tracking usage:
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <div className="font-bold text-white flex items-center gap-2 text-xs sm:text-sm">
                    <Bell className="w-4 h-4 text-[#C79F6F]" />
                    <span>Notification Permission (`POST_NOTIFICATIONS`)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    On Android 13 (API level 33) and higher, WordDrop requests runtime permission to display notifications (<code className="text-[#E6B980] bg-black/40 px-1 py-0.5 rounded font-mono text-xs">android.permission.POST_NOTIFICATIONS</code>). This permission is used <strong>strictly to display the daily vocabulary notification</strong> on your notification shade and lock screen.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <div className="font-bold text-white flex items-center gap-2 text-xs sm:text-sm">
                    <Smartphone className="w-4 h-4 text-[#C79F6F]" />
                    <span>Jetpack WorkManager Scheduling</span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    Daily word delivery is orchestrated on-device via <code className="text-[#E6B980] bg-black/40 px-1 py-0.5 rounded font-mono text-xs">androidx.work.WorkManager</code>.
                  </p>
                  <ul className="text-xs sm:text-sm text-white/70 space-y-1.5 list-disc list-inside">
                    <li>
                      <strong className="text-white">DailyWordWorker:</strong> A periodic 24-hour background task that queries the local database at your chosen time (default 8:00 AM) and posts the daily word notification.
                    </li>
                    <li>
                      <strong className="text-white">NotificationReappearanceWorker:</strong> If persistent mode is enabled and you dismiss the notification before reviewing it, WorkManager quietly reschedules it after a 2-hour delay (capped at a maximum of 3 times per day) so you never miss a word.
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <div className="font-bold text-white flex items-center gap-2 text-xs sm:text-sm">
                    <Calendar className="w-4 h-4 text-[#C79F6F]" />
                    <span>Boot & Time-Zone Adaptation</span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    WordDrop registers broadcast receivers for <code className="text-[#E6B980] bg-black/40 px-1 py-0.5 rounded font-mono text-xs">RECEIVE_BOOT_COMPLETED</code> and system time changes (<code className="text-[#E6B980] bg-black/40 px-1 py-0.5 rounded font-mono text-xs">TIME_SET</code>, <code className="text-[#E6B980] bg-black/40 px-1 py-0.5 rounded font-mono text-xs">TIMEZONE_CHANGED</code>, <code className="text-[#E6B980] bg-black/40 px-1 py-0.5 rounded font-mono text-xs">DATE_CHANGED</code>) to reschedule workers accurately if you reboot your phone or travel across time zones.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C79F6F] shrink-0 mt-0.5" />
                <span>
                  <strong>No Remote Push Services:</strong> WordDrop does not integrate Firebase Cloud Messaging (FCM) or any external push notification gateway. Every notification is created entirely by the local Android OS on your device.
                </span>
              </div>
            </section>

            {/* 5. Wallpaper and Widget Functionality */}
            <section id="wallpaper-and-widget" className="scroll-mt-24 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C79F6F] uppercase tracking-wider font-semibold">
                <span>05</span>
                <span>/</span>
                <span>Surface Integration</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                5. Wallpaper & Widget Functionality
              </h2>
              <p>
                WordDrop integrates into two primary glanceable Android surfaces: the dynamic Lock Screen Wallpaper and the Home Screen App Widget.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Wallpaper */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
                  <div className="flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-[#C79F6F]" />
                    <h3 className="text-sm sm:text-base font-bold text-white">Lock Screen Wallpaper</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    WordDrop includes an optional wallpaper generator that sets today&apos;s word on your lock screen using Android&apos;s standard <code className="text-[#E6B980] bg-black/40 px-1 py-0.5 rounded font-mono text-xs">WallpaperManager</code>.
                  </p>
                  <ul className="text-xs text-white/60 space-y-1.5 list-disc list-inside">
                    <li>Requires explicit user opt-in in Settings.</li>
                    <li>Uses permission <code className="text-white/80 font-mono text-[11px]">android.permission.SET_WALLPAPER</code>.</li>
                    <li>Renders a 1080×2400 editorial wallpaper bitmap dynamically in RAM using Android Canvas.</li>
                    <li>Does <strong>not</strong> access your gallery, photos, or existing wallpaper files.</li>
                    <li>Applies strictly to the Lock Screen (<code className="text-white/80 font-mono text-[11px]">FLAG_LOCK</code>) and can be toggled off at any moment.</li>
                  </ul>
                </div>

                {/* Widget */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
                  <div className="flex items-center gap-2">
                    <LayoutGrid className="w-4 h-4 text-[#C79F6F]" />
                    <h3 className="text-sm sm:text-base font-bold text-white">Home Screen Widget</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    WordDrop provides an Android <code className="text-[#E6B980] bg-black/40 px-1 py-0.5 rounded font-mono text-xs">AppWidgetProvider</code> (<code className="text-white/80 font-mono text-xs">WordDropWidget</code>) for your home screen.
                  </p>
                  <ul className="text-xs text-white/60 space-y-1.5 list-disc list-inside">
                    <li>Updates passively when a new daily word is selected or when the widget is placed.</li>
                    <li>Reads exclusively from your local Room database.</li>
                    <li>Tapping the widget opens WordDrop directly to today&apos;s full word detail view.</li>
                    <li>Collects zero widget view telemetry or interaction analytics.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 6. Sharing Functionality and Temporary Files */}
            <section id="sharing-and-temporary-files" className="scroll-mt-24 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C79F6F] uppercase tracking-wider font-semibold">
                <span>06</span>
                <span>/</span>
                <span>User Sharing</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                6. Sharing Functionality & Temporary Files
              </h2>
              <p>
                WordDrop allows users to share a beautiful editorial image card and definition of today&apos;s word with friends or to social platforms (such as WhatsApp, Instagram Stories, X/Twitter, or messaging apps).
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-[#C79F6F]" />
                  <span>How the Sharing Pipeline Works Under the Hood</span>
                </div>
                <ol className="text-xs sm:text-sm text-white/70 space-y-2 list-decimal list-inside leading-relaxed">
                  <li>
                    <strong className="text-white">User-Initiated:</strong> Sharing is executed only when you explicitly tap the &quot;Share&quot; button inside the app or from the daily notification action.
                  </li>
                  <li>
                    <strong className="text-white">On-Device Canvas Rendering:</strong> The app renders a 1080×1350 resolution editorial card directly in device memory using Android&apos;s 2D Canvas graphics engine.
                  </li>
                  <li>
                    <strong className="text-white">Temporary Cache Storage:</strong> The rendered card is temporarily saved as a PNG image to the app&apos;s private internal cache directory (<code className="text-[#E6B980] bg-black/40 px-1 py-0.5 rounded font-mono text-xs">cache/shares/worddrop_&#123;id&#125;.png</code>).
                  </li>
                  <li>
                    <strong className="text-white">Android FileProvider:</strong> To grant secure, temporary read access to the recipient app, WordDrop declares <code className="text-[#E6B980] bg-black/40 px-1 py-0.5 rounded font-mono text-xs">androidx.core.content.FileProvider</code> with authority <code className="text-white/80 font-mono text-xs">ink.knairy.worddrop.fileprovider</code> and <code className="text-white/80 font-mono text-xs">FLAG_GRANT_READ_URI_PERMISSION</code>.
                  </li>
                  <li>
                    <strong className="text-white">Native System Share Sheet:</strong> The image URI and formatted text are handed over to Android&apos;s native share chooser. WordDrop has zero access to which contacts or apps you select.
                  </li>
                </ol>
                <p className="text-xs text-white/50 border-t border-white/[0.06] pt-2">
                  Temporary share files reside exclusively in your local cache and are automatically evicted by the Android operating system or when application storage is cleared.
                </p>
              </div>
            </section>

            {/* 7. Third-Party Services and SDKs */}
            <section id="third-party-services" className="scroll-mt-24 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C79F6F] uppercase tracking-wider font-semibold">
                <span>07</span>
                <span>/</span>
                <span>Third-Party Audits</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                7. Third-Party Services & SDKs
              </h2>
              <p>
                WordDrop does <strong>not</strong> include any commercial advertising SDKs, behavioral analytics platforms, crash reporting frameworks, or external data brokers.
              </p>

              <div className="overflow-x-auto rounded-xl border border-white/[0.08]">
                <table className="w-full text-xs font-mono text-left">
                  <thead className="bg-white/[0.04] text-white/70 uppercase">
                    <tr>
                      <th className="px-4 py-3">Dependency / Framework</th>
                      <th className="px-4 py-3">Provider</th>
                      <th className="px-4 py-3">Data Transmitted</th>
                      <th className="px-4 py-3">Privacy Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.06] text-white/80">
                    <tr>
                      <td className="px-4 py-2.5 font-semibold text-white">Android Jetpack Compose & BOM</td>
                      <td className="px-4 py-2.5 text-white/60">Google (AOSP)</td>
                      <td className="px-4 py-2.5 text-emerald-400 font-bold">None (0 bytes)</td>
                      <td className="px-4 py-2.5">Declarative UI rendering</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-semibold text-white">Room Persistence Library</td>
                      <td className="px-4 py-2.5 text-white/60">Google (AndroidX)</td>
                      <td className="px-4 py-2.5 text-emerald-400 font-bold">None (0 bytes)</td>
                      <td className="px-4 py-2.5">Local SQLite database management</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-semibold text-white">DataStore Preferences</td>
                      <td className="px-4 py-2.5 text-white/60">Google (AndroidX)</td>
                      <td className="px-4 py-2.5 text-emerald-400 font-bold">None (0 bytes)</td>
                      <td className="px-4 py-2.5">Local configuration storage</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-semibold text-white">WorkManager</td>
                      <td className="px-4 py-2.5 text-white/60">Google (AndroidX)</td>
                      <td className="px-4 py-2.5 text-emerald-400 font-bold">None (0 bytes)</td>
                      <td className="px-4 py-2.5">Local background task scheduling</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-semibold text-white">Kotlinx Serialization JSON</td>
                      <td className="px-4 py-2.5 text-white/60">JetBrains</td>
                      <td className="px-4 py-2.5 text-emerald-400 font-bold">None (0 bytes)</td>
                      <td className="px-4 py-2.5">Offline parsing of bundled words.json</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-semibold text-white">Android TextToSpeech (TTS)</td>
                      <td className="px-4 py-2.5 text-white/60">Android OS Engine</td>
                      <td className="px-4 py-2.5 text-emerald-400 font-bold">None (0 bytes)</td>
                      <td className="px-4 py-2.5">On-device English audio synthesis</td>
                    </tr>
                    <tr className="bg-red-500/[0.04]">
                      <td className="px-4 py-2.5 font-semibold text-white/50">Google AdMob / Ads</td>
                      <td className="px-4 py-2.5 text-white/40">Not Present</td>
                      <td className="px-4 py-2.5 text-white/40">N/A</td>
                      <td className="px-4 py-2.5 text-red-300">Excluded completely</td>
                    </tr>
                    <tr className="bg-red-500/[0.04]">
                      <td className="px-4 py-2.5 font-semibold text-white/50">Firebase Analytics / Crashlytics</td>
                      <td className="px-4 py-2.5 text-white/40">Not Present</td>
                      <td className="px-4 py-2.5 text-white/40">N/A</td>
                      <td className="px-4 py-2.5 text-red-300">Excluded completely</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-2 text-xs text-white/70">
                <Volume2 className="w-4 h-4 text-[#C79F6F] shrink-0" />
                <span>
                  <strong>On-Device Audio Pronunciation:</strong> Audio playback is synthesized locally using Android&apos;s native <code className="text-[#E6B980] bg-black/40 px-1 py-0.5 rounded font-mono text-xs">android.speech.tts.TextToSpeech</code> service. No audio is recorded, and no queries are sent to external speech engines.
                </span>
              </div>
            </section>

            {/* 8. Data Security and Retention */}
            <section id="data-security-and-retention" className="scroll-mt-24 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C79F6F] uppercase tracking-wider font-semibold">
                <span>08</span>
                <span>/</span>
                <span>Security & Retention</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                8. Data Security & Retention
              </h2>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <h3 className="font-bold text-white text-xs sm:text-sm">Operating System Sandboxing</h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    WordDrop relies on Android&apos;s multi-layered security architecture. Each Android app runs in an isolated Linux process with an assigned unique User ID (UID). File permissions prevent other applications from reading WordDrop&apos;s Room database, DataStore preferences, or cached share files.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <h3 className="font-bold text-white text-xs sm:text-sm">Data Retention & Deletion</h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    Because all data is retained exclusively on your device, you possess complete sovereignty over your data lifecycle:
                  </p>
                  <ul className="text-xs sm:text-sm text-white/70 space-y-2 list-disc list-inside">
                    <li>
                      <strong className="text-white">Clear Application Data:</strong> You can purge all discovered words, bookmarks, mastery records, and settings at any moment by navigating to <code className="text-[#E6B980] bg-black/40 px-1 py-0.5 rounded font-mono text-xs">Android Settings &gt; Apps &gt; WordDrop &gt; Storage &gt; Clear Storage / Clear Data</code>.
                    </li>
                    <li>
                      <strong className="text-white">Uninstallation:</strong> Uninstalling WordDrop automatically prompts the Android OS to permanently remove all application files, databases, preferences, and cached cards from your hardware.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 9. Children's Privacy */}
            <section id="childrens-privacy" className="scroll-mt-24 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C79F6F] uppercase tracking-wider font-semibold">
                <span>09</span>
                <span>/</span>
                <span>Child Privacy</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                9. Children&apos;s Privacy
              </h2>
              <p>
                WordDrop is an educational vocabulary reference tool intended for a general audience, including students, readers, and English learners of all ages.
              </p>
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-2 text-xs sm:text-sm text-white/70 leading-relaxed">
                <p>
                  We fully adhere to the standards of the <strong>Children&apos;s Online Privacy Protection Act (COPPA)</strong>, the EU General Data Protection Regulation (GDPR) regarding children, and India&apos;s Digital Personal Data Protection Act (DPDPA):
                </p>
                <ul className="space-y-1.5 list-disc list-inside">
                  <li>WordDrop does not solicit, gather, or store personal information from children or adults.</li>
                  <li>WordDrop contains no advertisements, behavioral tracking mechanisms, or in-app purchases.</li>
                  <li>WordDrop contains no chatrooms, messaging features, or external communications channels.</li>
                  <li>All 2,650+ words are curated, educational, and family-friendly.</li>
                </ul>
              </div>
            </section>

            {/* 10. User Rights and Contact Information */}
            <section id="user-rights-and-contact" className="scroll-mt-24 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C79F6F] uppercase tracking-wider font-semibold">
                <span>10</span>
                <span>/</span>
                <span>User Rights & Contact</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                10. User Rights & Contact Information
              </h2>
              <p>
                Under global privacy regulations (including GDPR, CCPA/CPRA, and DPDPA), users have rights to access, rectify, port, and erase their personal data.
              </p>
              <p>
                Because WordDrop does not collect or transmit your data to remote servers, you can exercise all of these rights directly and instantaneously on your device:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm font-mono">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                  <div className="text-[#E6B980] font-bold mb-1">Right to Access</div>
                  <div className="text-white/60 text-xs">All discovered and saved words are viewable directly within the History and Vault tabs of the app.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                  <div className="text-[#E6B980] font-bold mb-1">Right to Delete</div>
                  <div className="text-white/60 text-xs">Erase all records anytime by clearing app storage in Android Settings or uninstalling the app.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                  <div className="text-[#E6B980] font-bold mb-1">Permission Control</div>
                  <div className="text-white/60 text-xs">Grant or revoke Notification and Wallpaper permissions whenever you wish via system settings.</div>
                </div>
              </div>

              {/* Developer Contact Card */}
              <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-[#C79F6F]/10 via-[#C79F6F]/5 to-transparent border border-[#C79F6F]/30 space-y-3">
                <div className="text-base font-bold text-white flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[#C79F6F]" />
                  <span>Developer Contact & Privacy Inquiries</span>
                </div>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  If you have questions regarding this Privacy Policy, store compliance reviews, or wish to inspect the architecture verification, please contact the developer directly:
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2">
                  <button
                    onClick={copyEmail}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#C79F6F] text-[#141316] font-mono font-bold text-xs hover:bg-[#E6B980] transition-colors cursor-pointer"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-[#141316]" /> : <Copy className="w-4 h-4 text-[#141316]" />}
                    <span>{copiedEmail ? "Email Copied to Clipboard!" : "Copy: narendra.kumarvg2@gmail.com"}</span>
                  </button>
                  <a
                    href="mailto:narendra.kumarvg2@gmail.com?subject=WordDrop%20Privacy%20Inquiry"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#E6B980] hover:text-white underline"
                  >
                    Send Direct Email
                  </a>
                </div>
              </div>
            </section>

            {/* 11. Policy Updates and Effective Date */}
            <section id="policy-updates" className="scroll-mt-24 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C79F6F] uppercase tracking-wider font-semibold">
                <span>11</span>
                <span>/</span>
                <span>Version & Revisions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                11. Policy Updates & Effective Date
              </h2>
              <p>
                We may periodically update this Privacy Policy to reflect future Android OS capability enhancements or store compliance specifications. Any revisions will be published directly to this URL (<code className="text-[#E6B980] bg-black/40 px-1 py-0.5 rounded font-mono text-xs">https://knairy.ink/worddrop/privacy-policy</code>) with an updated effective date.
              </p>
              <p>
                Because WordDrop contains no network connectivity, it will never retroactively enable background data harvesting. Any future feature requiring network access would require explicit user confirmation through an updated APK release.
              </p>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-white/60 space-y-1">
                <div>Document Version: 1.0.0</div>
                <div>Effective Date: November 5, 2026</div>
                <div>Status: Current & Active</div>
              </div>
            </section>

            {/* Footer Navigation */}
            <div className="border-t border-white/[0.1] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
              <div className="flex items-center gap-3">
                <Link href="/" className="hover:text-white transition-colors">
                  knairy.ink
                </Link>
                <span>•</span>
                <Link href="/lexora/privacy-policy" className="hover:text-white transition-colors">
                  Lexora Privacy Policy
                </Link>
              </div>
              <div>
                © 2026 Narendra Kumar. All rights reserved.
              </div>
            </div>

          </main>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-[#C79F6F] text-[#141316] shadow-xl shadow-black/50 hover:bg-[#E6B980] transition-all transform hover:scale-105 cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
