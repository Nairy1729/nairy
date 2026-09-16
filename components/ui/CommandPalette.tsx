"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  FolderGit2,
  Terminal,
  Cpu,
  Briefcase,
  Award,
  GraduationCap,
  Mail,
  ExternalLink,
  Copy,
  Check,
  X
} from "lucide-react";

interface CommandItem {
  id: string;
  label: string;
  category: "Navigation" | "Projects" | "Actions" | "Social";
  icon: React.ReactNode;
  action: () => void;
  shortcut?: string;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
        setSelectedIndex(0);
        setQuery("");
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    onClose();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("narendra.kumarvg2@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  const commands: CommandItem[] = [
    {
      id: "nav-work",
      label: "Jump to Work & Projects",
      category: "Navigation",
      icon: <FolderGit2 className="w-4 h-4 text-blue-400" />,
      action: () => scrollToSection("work"),
      shortcut: "G W"
    },
    {
      id: "nav-architecture",
      label: "Jump to System Architecture Flow",
      category: "Navigation",
      icon: <Cpu className="w-4 h-4 text-indigo-400" />,
      action: () => scrollToSection("architecture"),
      shortcut: "G A"
    },
    {
      id: "nav-engineering",
      label: "Jump to Engineering Strengths",
      category: "Navigation",
      icon: <Terminal className="w-4 h-4 text-emerald-400" />,
      action: () => scrollToSection("engineering"),
      shortcut: "G E"
    },
    {
      id: "nav-experience",
      label: "Jump to Experience (Hexaware Technologies)",
      category: "Navigation",
      icon: <Briefcase className="w-4 h-4 text-amber-400" />,
      action: () => scrollToSection("experience"),
      shortcut: "G X"
    },
    {
      id: "nav-achievements",
      label: "Jump to Achievements & Honors",
      category: "Navigation",
      icon: <Award className="w-4 h-4 text-yellow-400" />,
      action: () => scrollToSection("achievements")
    },
    {
      id: "nav-education",
      label: "Jump to Education (VIT Vellore)",
      category: "Navigation",
      icon: <GraduationCap className="w-4 h-4 text-purple-400" />,
      action: () => scrollToSection("education")
    },
    {
      id: "nav-contact",
      label: "Jump to Contact",
      category: "Navigation",
      icon: <Mail className="w-4 h-4 text-pink-400" />,
      action: () => scrollToSection("contact"),
      shortcut: "G C"
    },
    {
      id: "proj-worddrop",
      label: "WordDrop (Daily Word Lock Screen & Vocabulary App)",
      category: "Projects",
      icon: <FolderGit2 className="w-4 h-4 text-cyan-400" />,
      action: () => scrollToSection("worddrop")
    },
    {
      id: "proj-anotherlife",
      label: "Another Life (Interactive Storytelling & Cinematic Experience)",
      category: "Projects",
      icon: <FolderGit2 className="w-4 h-4 text-indigo-400" />,
      action: () => scrollToSection("another-life")
    },
    {
      id: "proj-cds",
      label: "CDS — Enterprise Application (Java/Spring Boot)",
      category: "Projects",
      icon: <FolderGit2 className="w-4 h-4 text-blue-400" />,
      action: () => scrollToSection("cds-enterprise")
    },
    {
      id: "proj-offerpilot",
      label: "OfferPilot (Spring Boot/Redis/PostgreSQL)",
      category: "Projects",
      icon: <FolderGit2 className="w-4 h-4 text-blue-400" />,
      action: () => scrollToSection("offerpilot")
    },
    {
      id: "proj-careercrafter",
      label: "Career Crafter (Job Portal)",
      category: "Projects",
      icon: <FolderGit2 className="w-4 h-4 text-blue-400" />,
      action: () => scrollToSection("career-crafter")
    },
    {
      id: "action-download-worddrop",
      label: "Download WordDrop APK (v1.0.0 Release)",
      category: "Actions",
      icon: <ExternalLink className="w-4 h-4 text-cyan-400" />,
      action: () => {
        window.open("https://github.com/Nairy1729/WordDrop/releases/download/v1.0.0/worddrop.apk", "_blank");
        onClose();
      }
    },
    {
      id: "action-open-anotherlife",
      label: "Launch Another Life (Live Web Experience)",
      category: "Actions",
      icon: <ExternalLink className="w-4 h-4 text-indigo-400" />,
      action: () => {
        window.open("https://what-if-another-life.netlify.app/", "_blank");
        onClose();
      }
    },
    {
      id: "action-download-resume",
      label: "Download Narendra's Resume (PDF)",
      category: "Actions",
      icon: <ExternalLink className="w-4 h-4 text-cyan-400" />,
      action: () => {
        window.open("/Narendra_Resume.pdf", "_blank");
        onClose();
      }
    },
    {
      id: "action-copy-email",
      label: copied ? "Email Copied to Clipboard!" : "Copy Email (narendra.kumarvg2@gmail.com)",
      category: "Actions",
      icon: copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-300" />,
      action: copyEmail,
      shortcut: "Enter"
    },
    {
      id: "social-github",
      label: "Open GitHub Profile (Nairy1729)",
      category: "Social",
      icon: <ExternalLink className="w-4 h-4 text-slate-400" />,
      action: () => {
        window.open("https://github.com/Nairy1729", "_blank");
        onClose();
      }
    },
    {
      id: "social-linkedin",
      label: "Open LinkedIn Profile",
      category: "Social",
      icon: <ExternalLink className="w-4 h-4 text-slate-400" />,
      action: () => {
        window.open("https://www.linkedin.com/in/nairykumar", "_blank");
        onClose();
      }
    }
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredCommands.length));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % Math.max(1, filteredCommands.length));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/70 backdrop-blur-md transition-opacity"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search header */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 gap-3">
          <Search className="w-4 h-4 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or jump to section..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-300 p-1 rounded-md hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-slate-800/40">
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center text-sm text-slate-500">
              No matching commands found.
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all ${
                    isSelected
                      ? "bg-blue-600/20 text-white border border-blue-500/30"
                      : "text-slate-300 hover:bg-slate-800/50 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="shrink-0 p-1.5 rounded-lg bg-slate-800/70 border border-slate-700/50">
                      {cmd.icon}
                    </span>
                    <div>
                      <div className="text-xs sm:text-sm font-medium">{cmd.label}</div>
                      <div className="text-[10px] text-slate-500 font-mono">{cmd.category}</div>
                    </div>
                  </div>
                  {cmd.shortcut && (
                    <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                      {cmd.shortcut}
                    </span>
                  )}
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="flex flex-wrap items-center justify-between px-4 py-2.5 bg-slate-950/60 border-t border-slate-800/80 text-[10px] sm:text-[11px] text-slate-500 font-mono gap-2">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>Esc Close</span>
          </div>
          <span className="text-slate-400 hidden sm:inline">Narendra • Portfolio Command</span>
        </div>
      </div>
    </div>
  );
}
