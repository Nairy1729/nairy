"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { LivingEnvironment } from "@/components/ui/LivingEnvironment";
import { JourneyPath } from "@/components/ui/JourneyPath";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { ArchitectureFlow } from "@/components/sections/ArchitectureFlow";
import { Experience } from "@/components/sections/Experience";
import { Philosophy } from "@/components/sections/Philosophy";
import { Credentials } from "@/components/sections/Credentials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#090a0f] text-slate-100 relative selection:bg-blue-600/30 selection:text-white">
      {/* Living Atmospheric Environment Layer */}
      <LivingEnvironment />

      {/* Global Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Top Navbar */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Continuous Engineering Journey Sections */}
      <main className="flex-1 relative">
        {/* Living Continuous Journey Road & Scroll-Driven Traveller */}
        <JourneyPath />

        <Hero />
        <SelectedWork />
        <ArchitectureFlow />
        <Philosophy />
        <Experience />
        <Credentials />
        <Contact />
      </main>

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
}
