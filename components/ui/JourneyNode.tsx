import React from "react";

interface JourneyNodeProps {
  number: string;
  label: string;
  narrative: string;
  className?: string;
}

export function JourneyNode({
  number,
  label,
  narrative,
  className = ""
}: JourneyNodeProps) {
  return (
    <div className={`flex items-center gap-3 mb-6 select-none ${className}`}>
      {/* Node indicator */}
      <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-400">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
        <span className="font-semibold text-slate-200">MILESTONE {number}</span>
        <span className="text-slate-600">/</span>
        <span className="text-blue-400">{label}</span>
      </div>

      {/* Narrative Subtext */}
      <span className="text-xs font-mono text-slate-400 hidden sm:inline">
        — {narrative}
      </span>
    </div>
  );
}
