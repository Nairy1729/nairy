"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";

interface WaypointDef {
  id: string;
  milestone?: string;
  label?: string;
  align?: "left" | "center" | "right";
}

const WAYPOINTS: WaypointDef[] = [
  { id: "path-anchor-hero", align: "right" },
  { id: "path-anchor-milestone-01", milestone: "01", label: "PRODUCTS", align: "left" },
  { id: "path-anchor-worddrop-dock", align: "left" },
  { id: "path-anchor-anotherlife-dock", align: "right" },
  { id: "path-anchor-deconstruct-dock", align: "left" },
  { id: "path-anchor-milestone-02", milestone: "02", label: "ARCHITECTURE", align: "left" },
  { id: "path-anchor-architecture-exit", align: "center" },
  { id: "path-anchor-milestone-03", milestone: "03", label: "AXIOMS", align: "left" },
  { id: "path-anchor-axiom-03-dock", align: "right" },
  { id: "path-anchor-milestone-04", milestone: "04", label: "EXPERIENCE", align: "left" },
  { id: "path-anchor-experience-2026-dock", align: "right" },
  { id: "path-anchor-milestone-05", milestone: "05", label: "CREDENTIALS", align: "left" },
  { id: "path-anchor-credentials-dock", align: "right" },
  { id: "path-anchor-milestone-06", milestone: "06", label: "CONTACT", align: "center" }
];

export function JourneyPath() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const glowPathRef = useRef<SVGPathElement>(null);
  const activePathRef = useRef<SVGPathElement>(null);
  const travellerRef = useRef<SVGGElement>(null);

  const [pathData, setPathData] = useState<string>("");
  const [totalLength, setTotalLength] = useState<number>(0);
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });
  const [waypointPositions, setWaypointPositions] = useState<Array<{ id: string; milestone?: string; label?: string; x: number; y: number }>>([]);
  const [activeMilestone, setActiveMilestone] = useState<string>("01");

  // Re-calculate the road coordinates based on DOM waypoint anchors
  const calculatePath = useCallback(() => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const cWidth = containerRect.width;
    const cHeight = containerRect.height;

    if (cWidth === 0 || cHeight === 0) return;
    setDimensions({ width: cWidth, height: cHeight });

    const points: Array<{ id: string; milestone?: string; label?: string; x: number; y: number }> = [];

    WAYPOINTS.forEach((wp, idx) => {
      const el = document.getElementById(wp.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        // Calculate center coordinate relative to container top-left
        let x = rect.left - containerRect.left + rect.width / 2;
        const y = rect.top - containerRect.top + rect.height / 2;

        if (cWidth < 640) {
          // On mobile screens, neatly route the path along the left margin rail
          x = Math.max(22, Math.min(x, 40));
        }

        points.push({ ...wp, x, y });
      } else {
        // Fallback procedural coordinate if element not yet rendered
        const yFrac = idx / (WAYPOINTS.length - 1);
        let xFrac = 0.5;
        if (wp.align === "left") xFrac = 0.15;
        if (wp.align === "right") xFrac = 0.85;
        let x = cWidth * xFrac;
        if (cWidth < 640) {
          x = 28;
        }
        points.push({
          ...wp,
          x,
          y: cHeight * yFrac
        });
      }
    });

    if (points.length < 2) return;

    // Generate smooth organic Bézier curves with natural ease-in-out S-curves
    let d = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;

    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];

      const dy = p1.y - p0.y;

      // Vertical ease-out from p0 and ease-in into p1 produces clean, continuous S-curves without loopbacks
      const tension = 0.42;
      const cp1x = p0.x;
      const cp1y = p0.y + dy * tension;

      const cp2x = p1.x;
      const cp2y = p1.y - dy * tension;

      d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p1.x.toFixed(1)} ${p1.y.toFixed(1)}`;
    }

    setPathData(d);
    setWaypointPositions(points);
  }, []);

  // Update path on mount, resize, and scroll height changes
  useEffect(() => {
    calculatePath();

    const handleResize = () => {
      calculatePath();
    };

    window.addEventListener("resize", handleResize);
    const observer = new ResizeObserver(calculatePath);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Delay slightly to let all components render completely
    const t = setTimeout(calculatePath, 500);

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      clearTimeout(t);
    };
  }, [calculatePath]);

  // Read total path length once pathData changes
  useEffect(() => {
    if (pathRef.current && pathData) {
      try {
        const len = pathRef.current.getTotalLength();
        setTotalLength(len);
      } catch {
        // SVG length reading fallback
      }
    }
  }, [pathData]);

  // Scroll listener to move traveller node and illuminate active trail
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!pathRef.current || totalLength === 0) {
            ticking = false;
            return;
          }

          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrollProgress = docHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / docHeight)) : 0;
          const currentDistance = scrollProgress * totalLength;

          // Update active illuminated trail strokeDashoffset
          if (activePathRef.current) {
            activePathRef.current.style.strokeDasharray = `${totalLength}`;
            activePathRef.current.style.strokeDashoffset = `${totalLength - currentDistance}`;
          }

          // Move the traveller along the exact curve
          try {
            const point = pathRef.current.getPointAtLength(currentDistance);
            if (travellerRef.current) {
              travellerRef.current.setAttribute("transform", `translate(${point.x}, ${point.y})`);
            }

            // Check which milestone is closest
            let nearestMilestone = "01";
            let minDist = Infinity;
            waypointPositions.forEach((wp) => {
              if (wp.milestone) {
                const dist = Math.hypot(point.x - wp.x, point.y - wp.y);
                if (dist < minDist) {
                  minDist = dist;
                  nearestMilestone = wp.milestone;
                }
              }
            });
            setActiveMilestone(nearestMilestone);
          } catch {
            // Ignore geometry evaluation errors during DOM resize
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalLength, waypointPositions]);

  if (!pathData) return <div ref={containerRef} className="absolute inset-0 pointer-events-none -z-10" />;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden"
      style={{ height: "100%", width: "100%" }}
    >
      <svg
        className="w-full h-full overflow-visible"
        viewBox={`0 0 ${dimensions.width || 1200} ${dimensions.height || 4000}`}
        preserveAspectRatio="none"
      >
        <defs>
          {/* Subtle Outer Neon/Glow Filter */}
          <filter id="trail-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Core Trail Linear Gradient */}
          <linearGradient id="trail-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="25%" stopColor="#60a5fa" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.9" />
            <stop offset="75%" stopColor="#818cf8" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.95" />
          </linearGradient>

          {/* Inactive Base Road Gradient */}
          <linearGradient id="base-trail-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#1e293b" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#064e3b" stopOpacity="0.3" />
          </linearGradient>

          {/* Radial Pulse Gradient for Traveller */}
          <radialGradient id="traveller-pulse">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="1" />
            <stop offset="40%" stopColor="#0284c7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0369a1" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. Base Road Shadow / Ambient Glow */}
        <path
          ref={glowPathRef}
          d={pathData}
          fill="none"
          stroke="#0284c7"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#trail-glow)"
          opacity="0.25"
        />

        {/* 2. Inactive Base Track Road */}
        <path
          d={pathData}
          fill="none"
          stroke="url(#base-trail-gradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
        />

        {/* 3. Reference Path for Measurements */}
        <path
          ref={pathRef}
          d={pathData}
          fill="none"
          stroke="transparent"
          strokeWidth="1"
        />

        {/* 4. Electric Energy Pulse Travelling along the Road */}
        <path
          d={pathData}
          fill="none"
          stroke="#38bdf8"
          strokeWidth="2"
          strokeDasharray="12 16"
          className="animate-trail-flow"
          opacity="0.75"
        />

        {/* 5. Active Illuminated Scroll-Progress Road */}
        <path
          ref={activePathRef}
          d={pathData}
          fill="none"
          stroke="url(#trail-gradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#trail-glow)"
          opacity="0.95"
        />

        {/* 6. Milestone Docking Stations along the Road (Snaps cleanly to milestone badge docks) */}
        {waypointPositions.map((wp, idx) => {
          if (!wp.milestone) return null;
          const isActive = activeMilestone === wp.milestone;

          return (
            <g key={wp.id || idx} transform={`translate(${wp.x}, ${wp.y})`}>
              {/* Outer Pulsing Halo when active */}
              {isActive && (
                <circle
                  r="18"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                  opacity="0.4"
                  className="animate-ping"
                />
              )}

              {/* Milestone Outer Docking Ring */}
              <circle
                r="9"
                fill="#030712"
                stroke={isActive ? "#38bdf8" : "#334155"}
                strokeWidth={isActive ? "2" : "1.2"}
                className="transition-colors duration-300"
              />

              {/* Milestone Inner Core */}
              <circle
                r="3.5"
                fill={isActive ? "#38bdf8" : "#1e293b"}
                className="transition-colors duration-300"
              />
            </g>
          );
        })}

        {/* 7. The Living Traveller Light Signal */}
        <g ref={travellerRef} transform="translate(0, 0)">
          {/* Broad Ambient Light Flare */}
          <circle r="34" fill="url(#traveller-pulse)" opacity="0.6" />

          {/* Mid Glow */}
          <circle r="12" fill="#0284c7" opacity="0.85" filter="url(#trail-glow)" />

          {/* Intense Core Orb */}
          <circle r="5" fill="#38bdf8" />

          {/* White Hot Center Spark */}
          <circle r="2" fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
}
