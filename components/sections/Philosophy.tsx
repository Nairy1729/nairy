"use client";

import React, { useState } from "react";
import {
  Shield,
  ShieldCheck,
  Compass,
  Check,
  X,
  Layers,
  Lock,
  ArrowRight,
  Zap,
  Activity,
  FileCode2
} from "lucide-react";

export function Philosophy() {
  const [activeAxiom, setActiveAxiom] = useState<string>("01");

  // Axiom 01: Selected Tier in Domain Isolation Inspector
  const [selectedTier, setSelectedTier] = useState<number>(1);

  // Axiom 02: Interactive Token Security Simulation
  const [tokenScenario, setTokenScenario] = useState<"valid" | "expired" | "tampered">("valid");

  // Axiom 03: Cache Simulation State
  const [cacheMode, setCacheMode] = useState<"hit" | "miss">("hit");
  const [activeReliabilityTab, setActiveReliabilityTab] = useState<"cache" | "tests">("cache");

  const axioms = [
    {
      number: "01",
      id: "boundaries",
      title: "Clean Domain Boundaries",
      tagline: "Strict Tier Isolation & SOLID Modularity",
      icon: <Layers className="w-5 h-5 text-blue-400" />,
      summary:
        "Controller, Service, and Repository layers strictly isolated. Decoupled abstractions prevent business logic from leaking into database schemas or HTTP transport protocols.",
      invariant: "Controller ──► Service ──► Repository (Unidirectional Flow)",
      rule: "No controller interacts with database entities directly; business policies are isolated inside service interfaces with explicit DTO boundaries."
    },
    {
      number: "02",
      id: "security",
      title: "Security by Design",
      tagline: "Stateless Authentication & Route Guards",
      icon: <ShieldCheck className="w-5 h-5 text-indigo-400" />,
      summary:
        "Stateless JWT filter chains, cryptographic token verification, and granular RBAC enforced at the route filter boundary—never treated as a secondary patch.",
      invariant: "Zero-Trust Stateless Inspection • Claims-to-Context Binding",
      rule: "Every inbound request is intercepted before hitting business services. Claims are cryptographically validated and bound to ephemeral security contexts."
    },
    {
      number: "03",
      id: "reliability",
      title: "Performance & Reliability",
      tagline: "Deterministic Caching & Regression-Proof Tests",
      icon: <Activity className="w-5 h-5 text-emerald-400" />,
      summary:
        "Optimized relational indexing, in-memory Redis caching, and automated JUnit 5 & Mockito test suites to ensure high throughput and continuous regression resistance.",
      invariant: "Sub-5ms Query Targets • Automated CI Verification Gates",
      rule: "Heavy read paths leverage Redis cache layers. Core service logic is validated against automated test suites before deployment."
    }
  ];

  // Tier Data for Axiom 01
  const tierLayers = [
    {
      id: 0,
      name: "Client Ingress / HTTP Controller",
      annotation: "@RestController · Inbound Transport",
      code: "POST /api/v1/orders",
      contract: "Accepts JSON payloads, deserializes into immutable DTOs, and executes Jakarta Validation. Strict zero-dependency on internal database entities.",
      role: "Transport Boundary"
    },
    {
      id: 1,
      name: "DTO Validation & Boundary Guard",
      annotation: "@Valid OrderRequestDTO · Boundary Gate",
      code: "OrderRequestDTO -> Domain Command",
      contract: "Prevents internal database schema mutations from breaking external API contracts. Enforces strict type-safety and field validation before domain entry.",
      role: "Schema Decoupling"
    },
    {
      id: 2,
      name: "Service Domain Logic",
      annotation: "@Service · Transactional Domain",
      code: "OrderServiceImpl implements OrderService",
      contract: "Contains 100% of business policies, state machines, and transactional boundaries (@Transactional). Completely unaware of HTTP or transport protocols.",
      role: "Core Business Invariants"
    },
    {
      id: 3,
      name: "Persistence Repository",
      annotation: "@Repository · Data Isolation",
      code: "JpaRepository<OrderEntity, Long>",
      contract: "Conceals SQL dialect, connection pooling, and object-relational mapping. Returns domain entities mapped directly to relational database schemas.",
      role: "Database Abstraction"
    }
  ];

  // Token Simulation Data for Axiom 02
  const tokenScenarios = {
    valid: {
      label: "Valid User Token",
      status: "200 OK",
      statusColor: "text-emerald-400 border-emerald-800/60 bg-emerald-950/40",
      icon: <Check className="w-4 h-4 text-emerald-400" />,
      header: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      signature: "VALID_HMAC_SHA256 (Signature matches secret)",
      claims: '{ "sub": "narendra_k", "role": "ROLE_USER", "exp": 1799283200 }',
      context: "SecurityContextHolder.getContext().setAuthentication(auth)",
      decision: "Access Granted. Filter chain proceeds to OrderController."
    },
    expired: {
      label: "Expired Token",
      status: "401 UNAUTHORIZED",
      statusColor: "text-amber-400 border-amber-800/60 bg-amber-950/40",
      icon: <X className="w-4 h-4 text-amber-400" />,
      header: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      signature: "VALID_SIGNATURE (Signature matches secret)",
      claims: '{ "sub": "narendra_k", "role": "ROLE_USER", "exp": 1700000000 }',
      context: "Context rejected: TokenExpiredException raised.",
      decision: "Access Denied at Filter Layer. Pipeline halted before hitting business logic."
    },
    tampered: {
      label: "Tampered Signature",
      status: "403 FORBIDDEN",
      statusColor: "text-rose-400 border-rose-800/60 bg-rose-950/40",
      icon: <X className="w-4 h-4 text-rose-400" />,
      header: "Bearer eyJhbGciOiJIUzI1Ni...[MODIFIED_PAYLOAD]",
      signature: "INVALID_SIGNATURE (Computed hash does not match header)",
      claims: "REJECTED_UNTRUSTED",
      context: "Context rejected: SignatureException raised.",
      decision: "Immediate Drop. Security violation logged with client IP."
    }
  };

  const currentToken = tokenScenarios[tokenScenario];

  return (
    <section id="philosophy" className="pt-10 pb-16 md:pt-14 md:pb-20 relative">
      <span id="about" className="sr-only" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Milestone 03 Anchor */}
        <div id="path-anchor-philosophy" className="max-w-3xl mb-6 md:mb-7 scroll-mt-28">
          <div className="flex items-center gap-3 mb-2.5">
            <div
              id="path-anchor-milestone-03"
              className="relative flex items-center justify-center w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/60 shadow-sm shadow-emerald-500/50 shrink-0"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs tracking-wider uppercase">
              <Compass className="w-3.5 h-3.5" />
              <span>MILESTONE 03 · CORE ENGINEERING AXIOMS</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2.5">
            Three Engineering Axioms
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            The path simplifies. Complex architecture branches dissolve into three invariant principles: Boundaries, Security, and Reliability.
          </p>
        </div>

        {/* 3 Axiom Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-8">
          {axioms.map((ax) => {
            const isSelected = activeAxiom === ax.number;
            return (
              <button
                key={ax.number}
                onClick={() => setActiveAxiom(ax.number)}
                className={`text-left rounded-2xl border p-5 sm:p-7 backdrop-blur-xl transition-all duration-200 cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? "bg-slate-900/80 border-blue-500/60 shadow-xl shadow-blue-500/10 translate-y-[-2px]"
                    : "bg-slate-900/30 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/50"
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500" />
                )}
                {ax.number === "03" && (
                  <div id="path-anchor-axiom-03-dock" className="absolute top-4 right-4 w-2 h-2 opacity-0 pointer-events-none" />
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      {ax.icon}
                    </span>
                    <span className="text-xs font-mono text-blue-400 font-semibold tracking-wider">
                      AXIOM {ax.number}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1">
                    {ax.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-400 mb-3">
                    {ax.tagline}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {ax.summary}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-800/80 text-[11px] font-mono flex items-center justify-between">
                  <span className="text-slate-500">SCHEMATIC</span>
                  <span className={isSelected ? "text-blue-400 font-semibold flex items-center gap-1" : "text-slate-600"}>
                    {isSelected ? (
                      <>
                        <span>Active Instrument</span>
                        <ArrowRight className="w-3 h-3" />
                      </>
                    ) : (
                      "Inspect Blueprint"
                    )}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Architectural Schematic Instrument */}
        <div className="rounded-3xl border border-slate-800 bg-slate-950/80 backdrop-blur-xl p-4 sm:p-8 lg:p-10 mb-8 shadow-2xl relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

          {/* Blueprint Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-6 border-b border-slate-800/80 gap-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider">
                LIVE SCHEMATIC · AXIOM {activeAxiom}
              </span>
              <span className="text-slate-700">•</span>
              <span className="text-sm font-semibold text-white">
                {axioms.find((a) => a.number === activeAxiom)?.title}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-emerald-400">
                Interactive Engineering Model
              </span>
            </div>
          </div>

          {/* SCHEMATIC 01: Clean Domain Boundaries (Tiered DTO Isolation Pipeline) */}
          {activeAxiom === "01" && (
            <div className="space-y-6">
              <div className="text-xs text-slate-400 leading-relaxed max-w-2xl">
                Click on any architectural tier below to inspect its isolation contract, boundary enforcement, and data decoupling guarantees.
              </div>

              {/* 4 Interactive Slices */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {tierLayers.map((tier) => {
                  const isCurrent = selectedTier === tier.id;
                  return (
                    <button
                      key={tier.id}
                      onClick={() => setSelectedTier(tier.id)}
                      className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-150 cursor-pointer flex flex-col justify-between ${
                        isCurrent
                          ? "bg-slate-900 border-blue-500 shadow-md shadow-blue-500/10 translate-y-[-1px]"
                          : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono text-blue-400 font-bold">
                            TIER 0{tier.id + 1}
                          </span>
                          <span className="text-[10px] font-mono text-slate-500">
                            {tier.role}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-white tracking-tight mb-1">
                          {tier.name}
                        </h4>
                        <div className="text-[11px] font-mono text-slate-400">
                          {tier.annotation}
                        </div>
                      </div>

                      <div className="pt-3 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                        <span className="text-slate-500 truncate max-w-[120px]">{tier.code}</span>
                        {isCurrent && <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Tier Inspector Details Plate */}
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-3 border-b border-slate-800/80 gap-2">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-bold text-white">
                      Boundary Contract: {tierLayers[selectedTier].name}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    {tierLayers[selectedTier].annotation}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-mono uppercase text-slate-400 font-semibold">
                      Enforced Invariant
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {tierLayers[selectedTier].contract}
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs space-y-1 text-slate-300">
                    <div className="text-[10px] text-slate-500 uppercase">Layer Signature</div>
                    <div className="text-blue-300 font-semibold">{tierLayers[selectedTier].code}</div>
                    <div className="text-[11px] text-emerald-400 pt-1">
                      ✓ Zero Direct Entity Leaks • Decoupled DTO Interface
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SCHEMATIC 02: Security by Design (Stateless JWT Filter Barrier Simulation) */}
          {activeAxiom === "02" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-slate-400 leading-relaxed max-w-xl">
                  Simulate an inbound HTTP request passing through the stateless Spring Security JWT filter chain. Toggle token scenarios to observe cryptographic verification and rejection gates.
                </div>

                {/* Scenario Toggle Buttons */}
                <div className="grid grid-cols-3 sm:flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 w-full sm:w-auto shrink-0">
                  <button
                    onClick={() => setTokenScenario("valid")}
                    className={`px-2.5 py-1.5 rounded-lg text-center text-xs font-mono transition-all cursor-pointer ${
                      tokenScenario === "valid"
                        ? "bg-blue-600 text-white font-semibold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Valid Token
                  </button>
                  <button
                    onClick={() => setTokenScenario("expired")}
                    className={`px-2.5 py-1.5 rounded-lg text-center text-xs font-mono transition-all cursor-pointer ${
                      tokenScenario === "expired"
                        ? "bg-amber-600 text-white font-semibold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Expired
                  </button>
                  <button
                    onClick={() => setTokenScenario("tampered")}
                    className={`px-2.5 py-1.5 rounded-lg text-center text-xs font-mono transition-all cursor-pointer ${
                      tokenScenario === "tampered"
                        ? "bg-rose-600 text-white font-semibold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Tampered
                  </button>
                </div>
              </div>

              {/* Live Filter Pipeline Visualization */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Step 1: Inbound Header Inspection */}
                <div className="p-4 sm:p-5 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-400 font-semibold">
                      STEP 01 · INBOUND
                    </span>
                    <Lock className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="text-xs font-bold text-white">
                    OncePerRequestFilter Interceptor
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 font-mono text-[11px] text-slate-300 break-all">
                    <span className="text-slate-500">Authorization:</span>
                    <br />
                    <span className="text-blue-300">{currentToken.header}</span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    Extracts Bearer token from header before HTTP dispatcher.
                  </div>
                </div>

                {/* Step 2: Cryptographic Signature & Expiry Check */}
                <div className="p-4 sm:p-5 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-400 font-semibold">
                      STEP 02 · VERIFY
                    </span>
                    <Shield className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="text-xs font-bold text-white">
                    Cryptographic Signature Validation
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 font-mono text-[11px] space-y-1.5">
                    <div className="text-slate-400 text-[10px]">SIGNATURE STATUS</div>
                    <div className="text-slate-200 text-xs font-semibold">
                      {currentToken.signature}
                    </div>
                    <div className="text-slate-400 text-[10px] pt-1">PAYLOAD CLAIMS</div>
                    <div className="text-blue-300 text-[10px] truncate">
                      {currentToken.claims}
                    </div>
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    HMAC-SHA256 checksum & expiration timestamp verified.
                  </div>
                </div>

                {/* Step 3: Context Binding & Access Decision */}
                <div className="p-4 sm:p-5 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-400 font-semibold">
                      STEP 03 · RESOLUTION
                    </span>
                    {currentToken.icon}
                  </div>
                  <div className="text-xs font-bold text-white">
                    SecurityContext Binding
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 font-mono text-[11px] space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">HTTP_STATUS:</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${currentToken.statusColor}`}>
                        {currentToken.status}
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-400 pt-1">DECISION</div>
                    <div className="text-xs text-white leading-tight">
                      {currentToken.decision}
                    </div>
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    {tokenScenario === "valid" ? "Claims bound to thread-local context." : "Pipeline terminated immediately."}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SCHEMATIC 03: Performance & Reliability (Redis Cache & CI Verification Reactor) */}
          {activeAxiom === "03" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-slate-400 leading-relaxed max-w-xl">
                  Inspect high-throughput read optimization via Redis in-memory caching or automated test verification gates for continuous regression resistance.
                </div>

                {/* Reliability Sub-tabs */}
                <div className="flex items-center gap-2 p-1 rounded-xl bg-slate-900 border border-slate-800 shrink-0 self-start sm:self-auto">
                  <button
                    onClick={() => setActiveReliabilityTab("cache")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      activeReliabilityTab === "cache"
                        ? "bg-blue-600 text-white font-semibold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Redis In-Memory Cache
                  </button>
                  <button
                    onClick={() => setActiveReliabilityTab("tests")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      activeReliabilityTab === "tests"
                        ? "bg-blue-600 text-white font-semibold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    JUnit 5 CI Gates
                  </button>
                </div>
              </div>

              {activeReliabilityTab === "cache" ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-slate-400">Simulation Scenario:</span>
                    <button
                      onClick={() => setCacheMode("hit")}
                      className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                        cacheMode === "hit"
                          ? "bg-emerald-950 border border-emerald-800 text-emerald-300 font-semibold"
                          : "bg-slate-900 border border-slate-800 text-slate-400"
                      }`}
                    >
                      Cache Hit (Sub-2ms)
                    </button>
                    <button
                      onClick={() => setCacheMode("miss")}
                      className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                        cacheMode === "miss"
                          ? "bg-amber-950 border border-amber-800 text-amber-300 font-semibold"
                          : "bg-slate-900 border border-slate-800 text-slate-400"
                      }`}
                    >
                      Cache Miss (DB Fetch + Warm)
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-blue-400 font-bold">
                          DATA RESOLUTION PATH
                        </span>
                        <Zap className="w-4 h-4 text-amber-400" />
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-2">
                        <div className="text-slate-400">Query: GET /api/v1/catalog/1029</div>
                        <div className="text-slate-300">
                          Target Key: <span className="text-blue-300">catalog:item:1029</span>
                        </div>
                        <div className={cacheMode === "hit" ? "text-emerald-400" : "text-amber-400"}>
                          {cacheMode === "hit"
                            ? "✓ Redis Memory Match: Key found in cache (TTL: 3412s)"
                            : "⚠ Redis Key Miss: Relational SQL fallback triggered"}
                        </div>
                      </div>
                      <div className="text-xs text-slate-300 leading-relaxed font-normal">
                        {cacheMode === "hit"
                          ? "Response returned directly from Redis cluster memory without touching the primary PostgreSQL database."
                          : "PostgreSQL query executed in 38ms. Result automatically serialized into JSON and written to Redis with 1-hour expiration."}
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-emerald-400 font-bold">
                          LATENCY METRICS
                        </span>
                        <Activity className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-500">Latency Target:</span>
                          <span className="text-slate-300 font-bold">&lt; 5.0ms</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-500">Observed Latency:</span>
                          <span className={`font-bold ${cacheMode === "hit" ? "text-emerald-400" : "text-amber-400"}`}>
                            {cacheMode === "hit" ? "1.6ms (Redis)" : "42.1ms (PostgreSQL)"}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-500">Throughput Impact:</span>
                          <span className="text-slate-200">
                            {cacheMode === "hit" ? "12,000+ req/sec" : "1,400 req/sec"}
                          </span>
                        </div>
                      </div>
                      <div className="text-xs text-slate-400 font-mono">
                        Deterministic query caching protects relational pools from read spikes.
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileCode2 className="w-4 h-4 text-blue-400" />
                        <span className="text-xs font-mono text-white font-bold">
                          AUTOMATED CI VERIFICATION SUITE (JUNIT 5 + MOCKITO)
                        </span>
                      </div>
                      <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
                        142 / 142 Passing
                      </span>
                    </div>

                    <div className="space-y-2 font-mono text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                        <span className="text-slate-300">✓ AuthServiceTest.shouldAuthenticateWithValidCredentials</span>
                        <span className="text-slate-500">12ms</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                        <span className="text-slate-300">✓ JwtFilterTest.shouldRejectTamperedSignatures</span>
                        <span className="text-slate-500">8ms</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                        <span className="text-slate-300">✓ OrderServiceTest.shouldEnforceTransactionalIntegrity</span>
                        <span className="text-slate-500">24ms</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                        <span className="text-slate-300">✓ RateLimiterTest.shouldThrottleExceededBuckets</span>
                        <span className="text-slate-500">6ms</span>
                      </div>
                    </div>

                    <div className="pt-2 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                      <span>Regression Resistance: 100% Core Coverage</span>
                      <span className="text-emerald-400">CI Build Gate: GREEN</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Seamless Transformation into Professional Experience */}
        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-6 sm:p-8 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-[10px] font-mono text-blue-400 uppercase tracking-wider mb-1">
                TRANSFORMATION · AXIOMS INTO ENTERPRISE PRACTICE
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Principles battle-tested across enterprise software delivery.
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                See how domain isolation, route security, and deterministic caching translate into real-world production engineering.
              </p>
            </div>

            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:border-slate-700 transition-all self-start md:self-auto cursor-pointer"
            >
              <span>Explore Career Timeline</span>
              <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
