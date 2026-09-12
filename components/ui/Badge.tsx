import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "blue" | "emerald" | "amber" | "purple" | "outline";
  size?: "sm" | "md";
  dot?: boolean;
}

export function Badge({
  children,
  className,
  variant = "default",
  size = "sm",
  dot = false,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-slate-800/80 text-slate-300 border-slate-700/60",
    blue: "bg-blue-950/40 text-blue-300 border-blue-800/50",
    emerald: "bg-emerald-950/40 text-emerald-300 border-emerald-800/50",
    amber: "bg-amber-950/40 text-amber-300 border-amber-800/50",
    purple: "bg-purple-950/40 text-purple-300 border-purple-800/50",
    outline: "bg-transparent text-slate-400 border-slate-700/50"
  };

  const dotColors = {
    default: "bg-slate-400",
    blue: "bg-blue-400",
    emerald: "bg-emerald-400",
    amber: "bg-amber-400",
    purple: "bg-purple-400",
    outline: "bg-slate-500"
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 tracking-wide",
    md: "text-xs px-3 py-1 tracking-normal"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono font-medium rounded-full border transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full inline-block shrink-0", dotColors[variant])}
        />
      )}
      {children}
    </span>
  );
}
