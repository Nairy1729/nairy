"use client";

import React, { useEffect, useState } from "react";

export function LivingEnvironment() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 30 });
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized percentage with smooth damping
      const x = Math.round((e.clientX / window.innerWidth) * 100);
      const y = Math.round((e.clientY / window.innerHeight) * 100);
      setMousePos({ x, y });
    };

    const handleScroll = () => {
      const sections = ["hero", "work", "architecture", "philosophy", "experience", "achievements", "contact"];
      const scrollPos = window.scrollY + window.innerHeight * 0.4;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none transition-opacity duration-700"
    >
      {/* 1. Ultra-Subtle Technical Coordinate Grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle, #60a5fa 1px, transparent 1px)`,
          backgroundSize: "36px 36px"
        }}
      />

      {/* 2. Soft Atmospheric Radial Gradient following cursor & active section */}
      <div
        className="absolute w-[850px] h-[850px] rounded-full blur-[140px] opacity-[0.08] transition-all duration-1000 ease-out"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: "translate(-50%, -50%)",
          background:
            activeSection === "architecture"
              ? "radial-gradient(circle, #06b6d4 0%, #3b82f6 60%, transparent 80%)"
              : activeSection === "work"
              ? "radial-gradient(circle, #6366f1 0%, #3b82f6 60%, transparent 80%)"
              : activeSection === "philosophy"
              ? "radial-gradient(circle, #10b981 0%, #3b82f6 60%, transparent 80%)"
              : activeSection === "experience"
              ? "radial-gradient(circle, #3b82f6 0%, #6366f1 60%, transparent 80%)"
              : activeSection === "achievements"
              ? "radial-gradient(circle, #f59e0b 0%, #3b82f6 60%, transparent 80%)"
              : activeSection === "contact"
              ? "radial-gradient(circle, #06b6d4 0%, #10b981 60%, transparent 80%)"
              : "radial-gradient(circle, #3b82f6 0%, #1d4ed8 60%, transparent 80%)"
        }}
      />

      {/* 3. Deep Vignette Boundary */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090a0f]/40 via-transparent to-[#090a0f]/90" />

      {/* 4. Discrete Technical Context Watermark (Bottom-Left) */}
      <div className="fixed bottom-3 left-4 hidden lg:flex items-center gap-3 text-[9px] font-mono text-slate-400 opacity-60 tracking-wider">
        <span>SYS_ENV: PROD</span>
        <span>•</span>
        <span>LATENCY: 1.2ms</span>
        <span>•</span>
        <span>NODE: ASIA-SOUTH1</span>
        <span>•</span>
        <span className="text-blue-400 font-semibold">STAGE: {activeSection.toUpperCase()}</span>
      </div>
    </div>
  );
}
