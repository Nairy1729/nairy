import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  asChild?: boolean;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  disabled,
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary:
      "bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-sm hover:shadow-blue-500/25 border border-blue-500/30",
    secondary:
      "bg-slate-800 hover:bg-slate-700/80 text-slate-100 font-medium border border-slate-700/70",
    outline:
      "bg-transparent hover:bg-slate-800/60 text-slate-300 hover:text-white font-medium border border-slate-700/80 hover:border-slate-600",
    ghost: "bg-transparent hover:bg-slate-800/50 text-slate-400 hover:text-slate-100 font-medium"
  };

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 rounded-lg gap-1.5",
    md: "text-sm px-4 py-2 rounded-lg gap-2",
    lg: "text-base px-5 py-2.5 rounded-xl gap-2.5"
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </button>
  );
}
