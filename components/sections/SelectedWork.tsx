"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Smartphone,
  Maximize2,
  X,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
  Layers,
  Cpu,
  Volume2
} from "lucide-react";

export function SelectedWork() {
  const [activeModalApp, setActiveModalApp] = useState<string | null>(null);
  const [expandedSystemId, setExpandedSystemId] = useState<string | null>(null);

  // WordDrop Interactive Phone Surface State
  const [phoneSurface, setPhoneSurface] = useState<"lockscreen" | "notification" | "widget">("lockscreen");
  const [activeWordIndex, setActiveWordIndex] = useState<number>(0);

  const curatedDailyWords = [
    {
      word: "Serendipity",
      phonetic: "/ˌser.ənˈdɪp.ə.ti/",
      partOfSpeech: "noun",
      meaning: "The occurrence and development of events by chance in a happy or beneficial way.",
      example: "A fortunate stroke of serendipity brought them together in the quiet library.",
      etymology: "From Persian fairy tale 'The Three Princes of Serendip'"
    },
    {
      word: "Petrichor",
      phonetic: "/ˈpet.rɪ.kɔːr/",
      partOfSpeech: "noun",
      meaning: "A pleasant, distinctive smell that frequently accompanies the first rain after a long period of warm, dry weather.",
      example: "She opened the balcony door, taking in the soothing petrichor rising from the asphalt.",
      etymology: "Greek 'petra' (stone) + 'īchōr' (fluid of the gods)"
    },
    {
      word: "Sonder",
      phonetic: "/ˈsɒn.dər/",
      partOfSpeech: "noun",
      meaning: "The profound realization that everyone, including strangers passing by, has a life as complex as one's own.",
      example: "A sudden wave of sonder washed over him as he watched the evening commuters on the train platform.",
      etymology: "From 'The Dictionary of Obscure Sorrows'"
    }
  ];

  const currentDailyWord = curatedDailyWords[activeWordIndex];

  const cycleNextDailyWord = () => {
    setActiveWordIndex((prev) => (prev + 1) % curatedDailyWords.length);
  };

  const publishedApps = [
    {
      id: "worddrop",
      title: "WordDrop",
      category: "Android Application",
      tagline: "Daily Word Lock Screen & Vocabulary App",
      quote: '"Learn one beautiful English word every day, without trying."',
      summary:
        "WordDrop is an Android application designed to expand vocabulary passively and effortlessly. Instead of demanding that users open a traditional educational app every day, WordDrop integrates curated vocabulary directly into everyday phone usage surfaces—the Android Lock Screen, the Notification Shade, and the Home Screen Widget.",
      technologies: ["Android", "Kotlin", "Lock Screen API", "App Widgets", "Notification Shade", "Room DB"],
      liveUrl: "https://github.com/Nairy1729/WordDrop/releases/download/v1.0.0/worddrop.apk",
      githubUrl: "https://github.com/Nairy1729/WordDrop",
      specs: [
        '"Learn one beautiful English word every day, without trying."',
        "Direct integration into everyday Android surfaces: Lock Screen, Notification Shade, Home Screen Widget",
        "Effortless passive vocabulary expansion with zero app-launch friction",
        "Offline-first local vocabulary cache with Room DB and low-overhead background workers"
      ],
      icon: <Smartphone className="w-5 h-5 text-cyan-400" />
    },
    {
      id: "another-life",
      title: "Another Life",
      category: "Interactive Storytelling & Cinematic Experience",
      tagline: '"WHAT IF, ANOTHER LIFE?"',
      quote: '"What if things had happened differently?"',
      summary:
        'An interactive storytelling and emotional web experience built around the question: "What if things had happened differently?" Explores alternate possibilities, diverging lifelines, and the idea of another version of one\'s life through storytelling, atmospheric visuals, and music.',
      liveUrl: "https://what-if-another-life.netlify.app/",
      technologies: ["React", "TypeScript", "Narrative Graph", "Atmospheric Audio", "Shader Effects"],
      specs: [
        "Non-linear branching narrative state engine exploring alternate life trajectories",
        "Atmospheric audiovisual design combining ambient music cross-fading and cinematic lighting",
        "Component-driven emotional storytelling interface built for deep user immersion"
      ],
      icon: <Sparkles className="w-5 h-5 text-indigo-400" />
    }
  ];

  // Another Life Interactive Lifelines State
  const [activeLifeline, setActiveLifeline] = useState<number>(0);

  const lifelines = [
    {
      question: "What if you took the midnight train to the coast?",
      fragment: "A quiet seaside studio, salt air drifting through an open window at dawn, and notebooks filled with handwritten stories.",
      mood: "MELANCHOLY & FREEDOM",
      accent: "text-cyan-300 border-cyan-500/40 bg-cyan-950/30"
    },
    {
      question: "What if you stayed in the old city?",
      fragment: "Brick alleys in the rain, midnight conversations at the corner diner, and memories carved into familiar stone.",
      mood: "NOSTALGIA & BELONGING",
      accent: "text-amber-300 border-amber-500/40 bg-amber-950/30"
    },
    {
      question: "What if you chose the path unexplored?",
      fragment: "Uncharted coordinates, an unfamiliar skyline across the ocean, and beginning anew with nothing but an empty canvas.",
      mood: "WONDER & UNCERTAINTY",
      accent: "text-indigo-300 border-indigo-500/40 bg-indigo-950/30"
    }
  ];

  const systemsProjects = [
    {
      id: "offerpilot",
      title: "OfferPilot",
      category: "Full-Stack Platform",
      description:
        "Platform for managing and analyzing job offers, compensation models, and candidate benchmarks.",
      engineeringHighlight:
        "Integrated Redis caching with dynamic criteria filtering, pagination, and JWT authentication.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "React", "Docker"],
      details: [
        "Developed RESTful APIs with strict request validation, pagination, and global exception handling",
        "Implemented Redis caching to accelerate read operations and reduce query load on PostgreSQL",
        "Stateless JWT authentication with containerized deployment using Docker"
      ]
    },
    {
      id: "cds-enterprise",
      title: "CDS Enterprise Application",
      category: "Enterprise System",
      description:
        "High-scale enterprise backend service enforcing strict layered boundaries and relational data persistence.",
      engineeringHighlight:
        "Layered Spring Boot architecture with PostgreSQL JPA/Hibernate and Spring Security JWT.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Spring Security", "JUnit 5", "Docker"],
      details: [
        "Engineered REST APIs using Controller, Service, and Repository separation",
        "Implemented role-based authorization using Spring Security and JWT",
        "Automated unit and integration test suites using JUnit 5 and Mockito in Docker"
      ]
    },
    {
      id: "career-crafter",
      title: "Career Crafter",
      category: "Web Application",
      description:
        "Full-stack recruitment and job portal featuring role-based access and automated candidate resume workflows.",
      engineeringHighlight:
        "Secure RBAC authorization pipelines with ASP.NET Core REST APIs and React frontend.",
      technologies: ["ASP.NET Core", "React.js", "MS SQL Server", "REST APIs", "RBAC"],
      details: [
        "Built role-based access control distinguishing candidate and employer portals",
        "Engineered high-throughput REST APIs integrated with responsive React UI",
        "Relational schema modeling and transaction integrity on MS SQL Server"
      ]
    }
  ];

  const activeApp = publishedApps.find((a) => a.id === activeModalApp);

  return (
    <section id="work" className="pt-10 pb-16 md:pt-12 md:pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Milestone Marker 01 Anchor & Heading */}
        <div className="max-w-3xl mb-6 scroll-mt-24">
          <div className="flex items-center gap-3 mb-2.5">
            <div
              id="path-anchor-milestone-01"
              className="relative flex items-center justify-center w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/60 shadow-sm shadow-cyan-500/50 shrink-0"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs tracking-wider uppercase">
              <Layers className="w-3.5 h-3.5" />
              <span>MILESTONE 01 · WHAT I BUILD</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2.5">
            Products & Experiences
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
            Two distinct expressions of software craftsmanship: an effortless Android vocabulary app integrating into everyday phone surfaces, and an immersive cinematic storytelling experience.
          </p>
        </div>

        {/* Featured Living Product Surfaces (WordDrop Mobile & Another Life Experience) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-stretch">
          {/* PRODUCT 01: WORDDROP (Real Smartphone Android Surfaces Chassis) */}
          <div
            id="path-anchor-worddrop"
            onClick={() => setActiveModalApp("worddrop")}
            className="rounded-3xl border border-slate-800/90 bg-slate-900/40 p-4 sm:p-7 backdrop-blur-xl flex flex-col justify-between hover:border-cyan-500/50 hover:bg-slate-900/60 transition-all duration-300 group cursor-pointer relative overflow-hidden shadow-xl"
          >
            <div id="path-anchor-worddrop-dock" className="absolute top-4 left-4 w-2 h-2 opacity-0 pointer-events-none" />

            {/* Top Product Header */}
            <div>
              <div className="flex flex-wrap items-center justify-between mb-3 gap-2">
                <span className="text-[11px] sm:text-xs font-mono text-cyan-400 font-semibold flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 shrink-0" />
                  <span>ANDROID VOCABULARY ENGINE</span>
                </span>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="https://github.com/Nairy1729/WordDrop/releases/download/v1.0.0/worddrop.apk"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/25 text-xs font-mono font-medium transition-all cursor-pointer"
                    title="Download WordDrop APK v1.0.0"
                  >
                    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    <span>Download APK</span>
                  </a>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalApp("worddrop");
                    }}
                    className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title="Expand Android App Showcase"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="mb-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  WordDrop
                </h3>
                <div className="text-xs sm:text-sm font-medium text-cyan-400/90 mt-0.5">
                  Daily Word Lock Screen & Vocabulary App
                </div>
              </div>

              <blockquote className="text-xs sm:text-sm italic text-cyan-200/90 font-serif border-l-2 border-cyan-500/50 pl-3 py-1 my-3 bg-cyan-950/20 rounded-r">
                &ldquo;Learn one beautiful English word every day, without trying.&rdquo;
              </blockquote>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                WordDrop is an Android application designed to expand vocabulary passively and effortlessly. Instead of demanding that users open a traditional educational app every day, WordDrop integrates curated vocabulary directly into everyday phone usage surfaces—the Android Lock Screen, the Notification Shade, and the Home Screen Widget.
              </p>

              {/* Surface Switcher Tabs */}
              <div className="flex items-center justify-between gap-1 mb-2.5 p-1 rounded-xl bg-slate-950/90 border border-slate-800/80 text-[11px] font-mono">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPhoneSurface("lockscreen");
                  }}
                  className={`flex-1 py-1.5 px-2 rounded-lg transition-all text-center cursor-pointer ${
                    phoneSurface === "lockscreen"
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 font-semibold shadow-xs"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Lock Screen
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPhoneSurface("notification");
                  }}
                  className={`flex-1 py-1.5 px-2 rounded-lg transition-all text-center cursor-pointer ${
                    phoneSurface === "notification"
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 font-semibold shadow-xs"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Notification Shade
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPhoneSurface("widget");
                  }}
                  className={`flex-1 py-1.5 px-2 rounded-lg transition-all text-center cursor-pointer ${
                    phoneSurface === "widget"
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 font-semibold shadow-xs"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Home Widget
                </button>
              </div>

              {/* Word Cycler Indicator */}
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-4 px-1">
                <span className="text-cyan-400/90 font-medium">
                  Surface: <span className="capitalize text-slate-200 font-semibold">{phoneSurface === "lockscreen" ? "Lock Screen" : phoneSurface === "notification" ? "Notification Shade" : "Home Widget"}</span>
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    cycleNextDailyWord();
                  }}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 cursor-pointer font-semibold"
                >
                  <span>Cycle Word ({activeWordIndex + 1}/3)</span>
                  <span>↻</span>
                </button>
              </div>

              {/* Realistic Smartphone / Android UI Frame */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative mx-auto w-full max-w-[270px] sm:max-w-[305px] rounded-[2.6rem] sm:rounded-[2.8rem] border-[4px] sm:border-[5px] border-slate-700/80 bg-slate-950 p-2 sm:p-2.5 shadow-2xl ring-1 ring-slate-600/40 transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-cyan-500/20 select-none mb-4"
              >
                {/* Android Camera Punch Hole */}
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-black rounded-full border border-slate-800 z-30 flex items-center justify-center">
                  <span className="w-1 h-1 rounded-full bg-cyan-950/80" />
                </div>

                {/* Android Status Bar */}
                <div className="flex items-center justify-between px-3 text-[10px] font-mono text-slate-400 pt-1 pb-2">
                  <span className="font-semibold text-slate-200">10:24</span>
                  <div className="flex items-center gap-1.5 text-[9px]">
                    <span>5G</span>
                    <div className="w-3.5 h-2 border border-slate-400 rounded-2xs p-0.5 flex items-center">
                      <div className="w-full h-full bg-emerald-400 rounded-3xs" />
                    </div>
                  </div>
                </div>

                {/* Screen Display Area */}
                <div className="min-h-[260px] rounded-[1.8rem] bg-gradient-to-b from-slate-900/90 via-[#07090e] to-slate-950 border border-slate-800/90 p-3.5 relative overflow-hidden flex flex-col justify-between">
                  {/* Surface 1: Lock Screen */}
                  {phoneSurface === "lockscreen" && (
                    <div className="space-y-4 pt-2 animate-in fade-in duration-200">
                      <div className="text-center pt-2">
                        <div className="text-4xl font-extrabold text-white tracking-tighter leading-none font-sans">
                          10:24
                        </div>
                        <div className="text-[11px] text-slate-400 font-medium mt-1">
                          Thursday, October 12 • 72°F
                        </div>
                      </div>

                      {/* Curated WordDrop Lock Screen Card */}
                      <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-cyan-500/40 shadow-xl backdrop-blur-md">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1.5 text-[9px] font-mono font-bold text-cyan-300 uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                            <span>WordDrop · Daily Word</span>
                          </div>
                          <span className="text-[8px] font-mono bg-cyan-950 text-cyan-400 px-1.5 py-0.5 rounded border border-cyan-800/60 font-bold">
                            LOCK SCREEN
                          </span>
                        </div>

                        <div className="flex items-baseline justify-between mb-0.5">
                          <span className="text-lg font-bold text-white tracking-tight">
                            {currentDailyWord.word}
                          </span>
                          <span className="text-[10px] font-mono text-cyan-400/90 italic">
                            {currentDailyWord.partOfSpeech}
                          </span>
                        </div>
                        <div className="text-[10px] font-mono text-slate-400 mb-2">
                          {currentDailyWord.phonetic}
                        </div>

                        <p className="text-[11px] text-slate-200 leading-snug mb-2 font-normal">
                          {currentDailyWord.meaning}
                        </p>

                        <div className="text-[10px] text-slate-400 italic border-l-2 border-cyan-500/50 pl-2 py-0.5 bg-slate-950/50 rounded-r">
                          &ldquo;{currentDailyWord.example}&rdquo;
                        </div>
                      </div>

                      <div className="pt-2 text-center">
                        <span className="text-[9px] font-mono text-slate-500">
                          Swipe up to unlock • Passive exposure
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Surface 2: Notification Shade */}
                  {phoneSurface === "notification" && (
                    <div className="space-y-3 pt-1 animate-in fade-in duration-200">
                      <div className="text-[9px] font-mono uppercase text-slate-400 tracking-wider flex items-center justify-between px-1">
                        <span>Ongoing Notifications</span>
                        <span className="text-slate-500">Silent</span>
                      </div>

                      {/* WordDrop Android Notification Card */}
                      <div className="p-3 rounded-2xl bg-slate-900/95 border border-cyan-500/30 shadow-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1.5">
                            <div className="w-5 h-5 rounded-md bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 text-[10px] font-bold font-mono">
                              W
                            </div>
                            <span className="text-[11px] font-semibold text-white">WordDrop</span>
                            <span className="text-[9px] text-slate-500">• Daily Word</span>
                          </div>
                          <span className="text-[8px] font-mono text-cyan-400 bg-cyan-950 px-1.5 py-0.5 rounded border border-cyan-800/50">
                            Active Shade
                          </span>
                        </div>

                        <div className="pl-6 mb-2">
                          <div className="flex items-baseline gap-2">
                            <span className="text-sm font-bold text-cyan-300">{currentDailyWord.word}</span>
                            <span className="text-[10px] font-mono text-slate-400">{currentDailyWord.phonetic}</span>
                          </div>
                          <p className="text-[11px] text-slate-300 leading-snug mt-0.5 line-clamp-2">
                            {currentDailyWord.meaning}
                          </p>
                        </div>

                        <div className="flex items-center gap-1.5 pl-6 pt-1.5 border-t border-slate-800/80 text-[9px] font-mono">
                          <button
                            type="button"
                            onClick={cycleNextDailyWord}
                            className="px-2 py-1 rounded bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 hover:bg-cyan-900/80 transition-colors cursor-pointer"
                          >
                            Next Word →
                          </button>
                          <span className="px-2 py-1 rounded bg-slate-950 text-slate-400 border border-slate-800">
                            🔊 Listen
                          </span>
                          <span className="px-2 py-1 rounded bg-slate-950 text-slate-400 border border-slate-800">
                            ★ Saved
                          </span>
                        </div>
                      </div>

                      {/* Secondary system notification */}
                      <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-[10px] flex items-center justify-between opacity-70">
                        <div className="flex items-center gap-2">
                          <span className="text-indigo-400">📅</span>
                          <span className="text-slate-300">Calendar • Architecture Sync</span>
                        </div>
                        <span className="text-[9px] text-slate-500">in 20m</span>
                      </div>
                    </div>
                  )}

                  {/* Surface 3: Home Screen Widget */}
                  {phoneSurface === "widget" && (
                    <div className="space-y-4 pt-1 animate-in fade-in duration-200">
                      <div className="text-[9px] font-mono text-slate-400 px-1 flex items-center justify-between">
                        <span>Home Screen Widget (4x2)</span>
                        <span className="text-cyan-400">Tap to flip ↻</span>
                      </div>

                      {/* Interactive Widget */}
                      <div
                        onClick={cycleNextDailyWord}
                        className="p-3.5 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-cyan-500/40 shadow-xl backdrop-blur-md cursor-pointer hover:border-cyan-400/70 transition-all group/widget"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1.5">
                            <div className="w-4 h-4 rounded bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[9px] font-bold">
                              W
                            </div>
                            <span className="text-[9px] font-mono text-cyan-300 font-bold uppercase tracking-wider">
                              Word of the Day
                            </span>
                          </div>
                          <span className="text-[8px] font-mono text-slate-400 group-hover/widget:text-cyan-300 transition-colors">
                            Cycle ↻
                          </span>
                        </div>

                        <div className="mb-1">
                          <div className="text-lg font-bold text-white tracking-tight flex items-baseline gap-2">
                            <span>{currentDailyWord.word}</span>
                            <span className="text-[10px] font-mono text-cyan-400/80 font-normal">
                              {currentDailyWord.phonetic}
                            </span>
                          </div>
                        </div>

                        <p className="text-[11px] text-slate-300 leading-snug mb-2 font-normal">
                          {currentDailyWord.meaning}
                        </p>

                        <div className="text-[9px] font-mono text-cyan-400/80 bg-cyan-950/50 p-1.5 rounded-lg border border-cyan-900/50">
                          {currentDailyWord.etymology}
                        </div>
                      </div>

                      {/* Home Screen App Launcher Row */}
                      <div className="pt-2 grid grid-cols-4 gap-2 px-1">
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-9 h-9 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-xs">
                            📞
                          </div>
                          <span className="text-[8px] text-slate-400">Phone</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-9 h-9 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-xs">
                            💬
                          </div>
                          <span className="text-[8px] text-slate-400">Messages</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-9 h-9 rounded-2xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-xs">
                            🌐
                          </div>
                          <span className="text-[8px] text-slate-400">Chrome</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-9 h-9 rounded-2xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-xs">
                            📷
                          </div>
                          <span className="text-[8px] text-slate-400">Camera</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Android Gesture Bar */}
                  <div className="w-20 h-1 bg-slate-600/70 rounded-full mx-auto mt-3" />
                </div>
              </div>
            </div>

            <div>
              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {["Kotlin", "Python", "Android SDK", "Room DB", "Lock Screen API", "App Widgets"].map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/80 border border-slate-800 text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors flex items-center gap-1">
                  <span>Open Android Showcase</span>
                  <span>→</span>
                </span>
                <a
                  href="https://github.com/Nairy1729/WordDrop/releases/download/v1.0.0/worddrop.apk"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold hover:underline cursor-pointer"
                >
                  <span>Download v1.0.0 APK</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* PRODUCT 02: ANOTHER LIFE ("WHAT IF, ANOTHER LIFE?" — Immersive Experience) */}
          <div
            id="path-anchor-anotherlife"
            onClick={() => setActiveModalApp("another-life")}
            className="rounded-3xl border border-indigo-900/50 bg-gradient-to-br from-indigo-950/30 via-purple-950/20 to-slate-900/50 p-4 sm:p-7 backdrop-blur-xl flex flex-col justify-between hover:border-indigo-500/60 hover:bg-slate-900/60 transition-all duration-300 group cursor-pointer relative overflow-hidden shadow-2xl"
          >
            <div id="path-anchor-anotherlife-dock" className="absolute top-4 right-4 w-2 h-2 opacity-0 pointer-events-none" />

            {/* Ambient Atmosphere Accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex flex-wrap items-center justify-between mb-3 gap-2">
                <span className="text-[11px] sm:text-xs font-mono text-indigo-300 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>INTERACTIVE STORYTELLING</span>
                </span>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="https://what-if-another-life.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 hover:bg-indigo-500/30 text-xs font-mono font-medium transition-all cursor-pointer"
                    title="Open What If, Another Life"
                  >
                    <span>Live Experience</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalApp("another-life");
                    }}
                    className="p-1.5 rounded-lg bg-slate-900/80 border border-indigo-900/60 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title="Expand Experience Stage"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="mb-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-indigo-200 transition-colors">
                  Another Life
                </h3>
                <div className="text-xs font-mono text-indigo-300 font-medium italic mt-0.5">
                  &ldquo;WHAT IF, ANOTHER LIFE?&rdquo;
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                An interactive storytelling and emotional web experience built around the question: <strong className="text-white font-medium">&ldquo;What if things had happened differently?&rdquo;</strong> Exploring alternate possibilities and unchosen lifelines through atmospheric visuals, music, and interaction.
              </p>

              {/* Interactive Alternate Possibilities Experience Canvas */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="rounded-2xl border border-indigo-900/60 bg-[#070814]/90 p-5 mb-6 select-none relative overflow-hidden space-y-4"
              >
                {/* Audio Engine Indicator */}
                <div className="flex items-center justify-between pb-3 border-b border-indigo-950/80 text-[11px] font-mono">
                  <div className="flex items-center gap-2 text-indigo-300">
                    <Volume2 className="w-3.5 h-3.5 text-indigo-400" />
                    <span>ATMOSPHERIC SOUNDSCAPE · 48kHz</span>
                  </div>
                  <span className="text-[10px] text-slate-400">EMOTIVE STORY ENGINE</span>
                </div>

                {/* "WHAT IF..." Question Prompt */}
                <div className="space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                    EXPLORE ALTERNATE LIFELINES:
                  </div>

                  {/* 3 Possibility Branches */}
                  <div className="grid grid-cols-1 gap-2">
                    {lifelines.map((line, idx) => {
                      const isCurrent = activeLifeline === idx;
                      return (
                        <button
                          key={idx}
                          onClick={() => setActiveLifeline(idx)}
                          className={`text-left p-3 rounded-xl border text-xs font-mono transition-all duration-200 cursor-pointer flex items-center justify-between ${
                            isCurrent
                              ? `${line.accent} shadow-md shadow-indigo-500/10 font-medium`
                              : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-indigo-800 hover:text-slate-200"
                          }`}
                        >
                          <span className="truncate pr-2">&ldquo;{line.question}&rdquo;</span>
                          <span className="text-[10px] shrink-0 font-sans opacity-75">{line.mood}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Narrative Memory Fragment Box */}
                <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-900/50 font-serif italic text-sm text-slate-200 leading-relaxed">
                  &ldquo;{lifelines[activeLifeline].fragment}&rdquo;
                </div>

                {/* Enter Experience CTA Button */}
                <a
                  href="https://what-if-another-life.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white text-xs font-medium tracking-wide transition-all shadow-lg shadow-indigo-600/25 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Enter the Experience</span>
                  <Sparkles className="w-3.5 h-3.5" />
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div>
              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {["React", "Three.js", "Lenis", "WebGL", "TypeScript", "Tailwind CSS"].map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-950/40 border border-indigo-900/60 text-indigo-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-indigo-400 group-hover:text-indigo-300 transition-colors flex items-center gap-1">
                  <span>Explore Narrative Architecture</span>
                  <span>→</span>
                </span>
                <a
                  href="https://what-if-another-life.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-semibold hover:underline cursor-pointer"
                >
                  <span>Launch Live App</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Showcase: Enterprise Backends & Platforms */}
        <div className="mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-6 font-semibold flex items-center gap-2">
            <span>ENTERPRISE BACKENDS & SYSTEMS</span>
            <span className="text-slate-700">•</span>
            <span className="text-slate-400 font-normal">Java, Spring Boot, and Full-Stack Architectures</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {systemsProjects.map((project) => {
              const isExpanded = expandedSystemId === project.id;
              return (
                <div
                  key={project.id}
                  id={project.id}
                  className="rounded-2xl border border-slate-800/80 bg-slate-900/30 p-6 backdrop-blur-xl flex flex-col justify-between hover:border-slate-700 transition-all group"
                >
                  <div>
                    <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider mb-2 block font-semibold">
                      {project.category}
                    </span>

                    <h4 className="text-xl font-bold text-white tracking-tight mb-2">
                      {project.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 font-normal">
                      {project.description}
                    </p>

                    <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 mb-5">
                      <div className="text-[10px] font-mono uppercase text-slate-400 font-semibold mb-1">
                        Architecture Spec:
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed font-normal">
                        {project.engineeringHighlight}
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-slate-800/80">
                      <button
                        onClick={() => setExpandedSystemId(isExpanded ? null : project.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
                      >
                        <span>{isExpanded ? "Hide Architecture Specs" : "View Architecture Specs"}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    {isExpanded && (
                      <div className="mt-3 pt-3 border-t border-slate-800/50 space-y-1.5 animate-in fade-in duration-200">
                        {project.details.map((d, dIdx) => (
                          <div key={dIdx} className="text-xs text-slate-300 flex items-start gap-2">
                            <span className="text-blue-400">▹</span>
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* The Deconstruction Moment: Seamless Object Transformation into Architecture */}
        <div id="path-anchor-deconstruct" className="rounded-3xl border border-slate-800/90 bg-slate-950/90 p-5 sm:p-8 md:p-10 backdrop-blur-2xl">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-blue-400 font-semibold mb-2">
              <div id="path-anchor-deconstruct-dock" className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)] animate-pulse" />
              <Cpu className="w-3.5 h-3.5 text-blue-400" />
              <span>THE DECONSTRUCTION · FROM PRODUCT SURFACES TO ARCHITECTURAL LAYERS</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
              Every interface is powered by an underlying architectural system.
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Deconstructing consumer product surfaces into their contract boundaries, stateless authentication filters, and persistent database schemas.
            </p>
          </div>

          {/* 5 Stacked Deconstructed Architecture Slices */}
          <div className="space-y-2 font-mono text-xs">
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="p-1 rounded-md bg-cyan-950 border border-cyan-800 text-cyan-300 text-[10px]">01</span>
                <span className="font-semibold text-white">CLIENT UI TREE</span>
                <span className="text-slate-500 hidden sm:inline">•</span>
                <span className="text-slate-400 text-[11px]">React.js Component Graphs & State Engines</span>
              </div>
              <span className="text-[10px] text-cyan-400 bg-cyan-950/40 border border-cyan-900/50 px-2 py-0.5 rounded self-start sm:self-auto">
                VIEWPORT_LAYER
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="p-1 rounded-md bg-blue-950 border border-blue-800 text-blue-300 text-[10px]">02</span>
                <span className="font-semibold text-white">API GATEWAY & INGRESS</span>
                <span className="text-slate-500 hidden sm:inline">•</span>
                <span className="text-slate-400 text-[11px]">RESTful Contracts & Typed Request Serialization</span>
              </div>
              <span className="text-[10px] text-blue-400 bg-blue-950/40 border border-blue-900/50 px-2 py-0.5 rounded self-start sm:self-auto">
                CONTRACT_LAYER
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="p-1 rounded-md bg-indigo-950 border border-indigo-800 text-indigo-300 text-[10px]">03</span>
                <span className="font-semibold text-white">STATELESS SECURITY FILTER</span>
                <span className="text-slate-500 hidden sm:inline">•</span>
                <span className="text-slate-400 text-[11px]">Spring Security JWT Claims & Endpoint RBAC</span>
              </div>
              <span className="text-[10px] text-indigo-400 bg-indigo-950/40 border border-indigo-900/50 px-2 py-0.5 rounded self-start sm:self-auto">
                AUTH_GATEWAY
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="p-1 rounded-md bg-emerald-950 border border-emerald-800 text-emerald-300 text-[10px]">04</span>
                <span className="font-semibold text-white">APPLICATION SERVICE LOGIC</span>
                <span className="text-slate-500 hidden sm:inline">•</span>
                <span className="text-slate-400 text-[11px]">Spring Boot Layered Core & Domain Validation</span>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-950/40 border border-emerald-900/50 px-2 py-0.5 rounded self-start sm:self-auto">
                DOMAIN_ENGINE
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="p-1 rounded-md bg-purple-950 border border-purple-800 text-purple-300 text-[10px]">05</span>
                <span className="font-semibold text-white">RELATIONAL DATA & CACHE</span>
                <span className="text-slate-500 hidden sm:inline">•</span>
                <span className="text-slate-400 text-[11px]">PostgreSQL ACID Queries & In-Memory Redis</span>
              </div>
              <span className="text-[10px] text-purple-400 bg-purple-950/40 border border-purple-900/50 px-2 py-0.5 rounded self-start sm:self-auto">
                PERSISTENCE_CORE
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* In-Place Interactive Product Inspection Stage (Modal) */}
      {activeApp && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModalApp(null)}
        >
          <div
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-800 bg-[#090b14] p-5 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-blue-400">
                  {activeApp.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {activeApp.title}
                  </h3>
                  <span className="text-xs font-mono text-slate-400">
                    {activeApp.category}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setActiveModalApp(null)}
                className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close inspection stage"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {activeApp.quote && (
              <blockquote className="text-xs sm:text-sm italic text-cyan-200/90 font-serif border-l-2 border-cyan-500/50 pl-3 py-1 mb-4 bg-cyan-950/20 rounded-r">
                {activeApp.quote}
              </blockquote>
            )}

            <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
              {activeApp.summary}
            </p>

            {/* Invariants */}
            <div className="mb-6 space-y-2 p-4 rounded-xl bg-slate-950 border border-slate-800/80">
              <div className="text-xs font-mono uppercase text-slate-400 font-semibold mb-2">
                Architectural Invariants:
              </div>
              {activeApp.specs.map((spec, sIdx) => (
                <div key={sIdx} className="text-xs text-slate-300 flex items-start gap-2">
                  <span className="text-blue-400 font-mono text-[10px] mt-0.5">▹</span>
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
              {activeApp.technologies.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Modal Direct Actions */}
            {activeApp.id === "worddrop" && (
              <div className="pt-4 mt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/Nairy1729/WordDrop/releases/download/v1.0.0/worddrop.apk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-mono font-bold transition-all shadow-lg shadow-cyan-600/25"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    <span>Download APK (v1.0.0)</span>
                  </a>
                  <a
                    href="https://github.com/Nairy1729/WordDrop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>GitHub Repo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
                <span className="text-[11px] font-mono text-slate-500">Android 8.0+ / Release Build</span>
              </div>
            )}

            {activeApp.id === "another-life" && (
              <div className="pt-4 mt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <a
                  href="https://what-if-another-life.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white text-xs font-mono font-bold transition-all shadow-lg shadow-indigo-600/25"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Launch Live Experience</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <span className="text-xs font-mono text-indigo-400/80">
                  what-if-another-life.netlify.app
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
