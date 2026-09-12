import React from "react";

export type SystemCoreMode = "init" | "branch" | "signal" | "timeline" | "triad" | "complete";

interface SystemCoreProps {
  mode: SystemCoreMode;
  label?: string;
  sublabel?: string;
  className?: string;
  active?: boolean;
}

export function SystemCore({
  mode,
  label,
  sublabel,
  className = "",
  active = true
}: SystemCoreProps) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Visual System Core Node */}
      <div className="relative flex items-center justify-center w-7 h-7 shrink-0">
        {/* Outer Ring */}
        <div
          className={`absolute inset-0 rounded-full border transition-all duration-300 ${
            active
              ? "border-blue-500/60 bg-blue-950/30 scale-100"
              : "border-slate-800 bg-slate-950/50 scale-95"
          }`}
        />

        {/* Dynamic Mode-Specific Indicator */}
        {mode === "init" && (
          <div className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-sm shadow-blue-400/50" />
        )}

        {mode === "branch" && (
          <div className="w-2.5 h-2.5 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-sm bg-indigo-400 rotate-45" />
          </div>
        )}

        {mode === "signal" && (
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/60 animate-pulse" />
        )}

        {mode === "timeline" && (
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" />
        )}

        {mode === "triad" && (
          <div className="w-2.5 h-2.5 flex items-center justify-center gap-0.5">
            <span className="w-1 h-1 rounded-full bg-blue-400" />
            <span className="w-1 h-1 rounded-full bg-blue-400" />
            <span className="w-1 h-1 rounded-full bg-blue-400" />
          </div>
        )}

        {mode === "complete" && (
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/80" />
        )}
      </div>

      {/* Coordinate & Narrative Label */}
      {(label || sublabel) && (
        <div className="flex flex-col">
          {label && (
            <span className="text-[11px] font-mono tracking-wider font-semibold text-slate-200">
              {label}
            </span>
          )}
          {sublabel && (
            <span className="text-[10px] font-mono text-slate-500">
              {sublabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
