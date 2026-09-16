"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { LivingEnvironment } from "@/components/ui/LivingEnvironment";
import { AmbientAudioPlayer } from "@/components/ui/AmbientAudioPlayer";
import { Hero } from "@/components/sections/Hero";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { Projects3D } from "@/components/sections/Projects3D";
import { Experience } from "@/components/sections/Experience";
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
    <div className="min-h-screen flex flex-col bg-[#000319] text-white relative selection:bg-[#00ff99]/30 selection:text-white">
      {/* Subtle Living Atmospheric Particles */}
      <LivingEnvironment />

      {/* Global Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Floating Ambient Music Player (Matching radnaabazar.com) */}
      <AmbientAudioPlayer />

      {/* Top Navbar */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Sections */}
      <main className="flex-1 relative">
        <Hero />
        <BentoGrid />
        <Projects3D />
        <Experience />
        <Credentials />
        <Contact />
      </main>

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
}

