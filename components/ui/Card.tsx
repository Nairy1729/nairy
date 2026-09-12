import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
  interactive?: boolean;
}

export function Card({
  children,
  className,
  glow = false,
  interactive = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-xl relative overflow-hidden transition-all duration-300",
        interactive && "hover:border-slate-700/80 hover:bg-slate-900/70 hover:translate-y-[-2px]",
        glow && "hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5",
        className
      )}
      {...props}
    >
      {/* Subtle top inner gradient edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-700/40 to-transparent pointer-events-none" />
      {children}
    </div>
  );
}
