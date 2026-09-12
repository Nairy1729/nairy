"use client";

import React, { useState, useEffect } from "react";

interface Milestone {
  id: string;
  chapter: string;
  label: string;
  narrative: string;
}

const milestones: Milestone[] = [
  { id: "hero", chapter: "CH_01", label: "THE ENGINEER", narrative: "The Entry Point" },
  { id: "work", chapter: "CH_02", label: "WHAT I BUILD", narrative: "Products & Systems" },
  { id: "architecture", chapter: "CH_03", label: "HOW IT WORKS", narrative: "System Topology" },
  { id: "experience", chapter: "CH_04", label: "WHERE IT LIVES", narrative: "Enterprise History" },
  { id: "about", chapter: "CH_05", label: "HOW I THINK", narrative: "Core Principles" },
  { id: "contact", chapter: "CH_06", label: "CONNECT", narrative: "System Complete" }
];

export function JourneyRail() {
  const [activeId, setActiveId] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = milestones.map((m) => document.getElementById(m.id));
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(milestones[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activeMilestone = milestones.find((m) => m.id === activeId) || milestones[0];

  return (
    <>
      {/* Desktop Journey Rail (Right Edge) */}
      <nav
        aria-label="System Journey Progression"
        className="fixed right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-end gap-3 select-none pointer-events-auto"
      >
        <div className="flex flex-col items-end gap-3 relative py-2">
          {/* Subtle connecting track line */}
          <div className="absolute right-[5px] top-2 bottom-2 w-[1px] bg-slate-800/80 pointer-events-none" />

          {milestones.map((m) => {
            const isActive = m.id === activeId;
            return (
              <button
                key={m.id}
                onClick={() => scrollToSection(m.id)}
                className="group flex items-center gap-3 py-1 cursor-pointer focus:outline-none"
                title={`${m.chapter} ${m.label} — ${m.narrative}`}
              >
                {/* Expandable Label */}
                <span
                  className={`text-[10px] font-mono tracking-wider transition-all duration-200 ${
                    isActive
                      ? "opacity-100 text-slate-200 font-semibold translate-x-0"
                      : "opacity-0 -translate-x-1 group-hover:opacity-75 group-hover:translate-x-0 text-slate-500"
                  }`}
                >
                  {m.chapter} {m.label}
                </span>

                {/* Waypoint Dot */}
                <span
                  className={`relative z-10 w-2.5 h-2.5 rounded-full border transition-all duration-200 shrink-0 ${
                    isActive
                      ? "bg-blue-500 border-blue-400 scale-125 shadow-sm shadow-blue-500/50"
                      : "bg-slate-900 border-slate-700 hover:border-slate-500"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Journey Pill (Bottom Center) */}
      <aside
        aria-label="Current System Chapter"
        className="lg:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-30 pointer-events-auto"
      >
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#090a0f]/90 border border-slate-800/90 backdrop-blur-md shadow-xl text-[11px] font-mono text-slate-300">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-blue-400 font-semibold">{activeMilestone.chapter}</span>
          <span className="text-slate-600">/</span>
          <span className="tracking-wider">{activeMilestone.label}</span>
        </div>
      </aside>
    </>
  );
}
