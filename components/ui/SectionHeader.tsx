import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

interface SectionHeaderProps {
  tag: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  tag,
  title,
  description,
  align = "left",
  className
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl",
        className
      )}
    >
      <div className={cn("mb-3", align === "center" && "flex justify-center")}>
        <Badge variant="blue" dot>
          {tag}
        </Badge>
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-100 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
