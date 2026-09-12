"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Layers,
  ShieldCheck,
  Server,
  Database,
  Box,
  Cloud,
  Code2,
  Check,
  Copy,
  Play,
  RotateCcw,
  Zap,
  Activity,
  ArrowDown,
  ArrowRight,
  Cpu
} from "lucide-react";

interface TopologyNode {
  id: string;
  number: string;
  name: string;
  tier: string;
  category: string;
  tech: string[];
  description: string;
  telemetry: string;
  codeSnippet?: string;
  upstream: string[];
  downstream: string[];
  icon: React.ReactNode;
}

export function ArchitectureFlow() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("app-core");
  const [showCode, setShowCode] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  // Packet Flow Simulation
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState<number>(-1);
  const simulationTimerRef = useRef<NodeJS.Timeout | null>(null);

  const nodes: TopologyNode[] = [
    {
      id: "client",
      number: "01",
      name: "Client Ingress",
      tier: "LEVEL 01 · CLIENT TIER",
      category: "Frontend Ingress",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "Next.js"],
      description:
        "Modular React client delivering typed REST consumption, optimistic state updates, and predictive form validations.",
      telemetry: "POST /api/v1/offers • Payload: 1.4 KB",
      upstream: [],
      downstream: ["gateway"],
      icon: <Layers className="w-4 h-4 text-cyan-400" />,
      codeSnippet: `// Typed Client Request Dispatcher
export async function syncOffer(token: string, payload: OfferRequest): Promise<OfferResponse> {
  const response = await fetch("/api/v1/offers", {
    method: "POST",
    headers: {
      "Authorization": \`Bearer \${token}\`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
  if (!response.ok) throw new ApiError(response.status, "API sync failed");
  return response.json();
}`
    },
    {
      id: "gateway",
      number: "02",
      name: "API Gateway & Ingress",
      tier: "LEVEL 02 · ROUTE INGRESS",
      category: "Gateway Tier",
      tech: ["REST APIs", "Reverse Proxy", "TLS 1.3", "Rate Limiter"],
      description:
        "Unified HTTP reverse proxy handling TLS termination, route mapping, request logging, and dispatching to backend security filters.",
      telemetry: "HTTP/2 Ingress • TLS 1.3 Handshake: 0.9ms",
      upstream: ["client"],
      downstream: ["security", "app-core"],
      icon: <Activity className="w-4 h-4 text-blue-400" />
    },
    {
      id: "security",
      number: "03",
      name: "Stateless Security Filter",
      tier: "LEVEL 03 · AUTH & RBAC",
      category: "Security Gateway",
      tech: ["Spring Security", "JWT", "OAuth2", "RBAC"],
      description:
        "Stateless OncePerRequestFilter chain extracting Bearer JWTs, cryptographically validating claims, and binding SecurityContextHolder before controller dispatch.",
      telemetry: "JWT Signature Valid • Claims: [ROLE_USER] • 0.6ms",
      upstream: ["gateway"],
      downstream: ["app-core"],
      icon: <ShieldCheck className="w-4 h-4 text-blue-400" />,
      codeSnippet: `// Stateless Spring Security JWT Filter
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, 
                                    HttpServletResponse response, 
                                    FilterChain filterChain) throws ServletException, IOException {
        String authHeader = request.getHeader("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        String jwt = authHeader.substring(7);
        String username = jwtService.extractUsername(jwt);

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);
            if (jwtService.isTokenValid(jwt, userDetails)) {
                UsernamePasswordAuthenticationToken authToken = 
                    new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }
        filterChain.doFilter(request, response);
    }
}`
    },
    {
      id: "app-core",
      number: "04",
      name: "Spring Boot Application Core",
      tier: "LEVEL 03 · BUSINESS SERVICES",
      category: "Application Engine",
      tech: ["Java 21", "Spring Boot", "Spring MVC", "SOLID"],
      description:
        "Layered service tier isolating Controller, Service, and Repository layers. Enforces transactional boundaries, domain invariants, and DTO mappings.",
      telemetry: "OfferServiceImpl.fetchUserOffers() • Txn: READ_ONLY",
      upstream: ["security", "gateway"],
      downstream: ["database", "cache"],
      icon: <Server className="w-4 h-4 text-indigo-400" />,
      codeSnippet: `// Layered Domain Service with Transactional Boundary
@Service
@Transactional(readOnly = true)
public class OfferServiceImpl implements OfferService {
    private final OfferRepository offerRepository;

    public OfferServiceImpl(OfferRepository offerRepository) {
        this.offerRepository = offerRepository;
    }

    @Override
    @Cacheable(value = "offers", key = "#userId + '-' + #page")
    public Page<OfferResponseDto> fetchUserOffers(String userId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("createdAt").descending());
        return offerRepository.findByUserId(userId, pageable).map(OfferMapper::toDto);
    }
}`
    },
    {
      id: "database",
      number: "05",
      name: "PostgreSQL Relational Core",
      tier: "LEVEL 04 · STORAGE TIER",
      category: "Relational Storage",
      tech: ["PostgreSQL", "Spring Data JPA", "Hibernate", "ACID"],
      description:
        "ACID relational storage with normalized relational schemas, B-tree indexes, and Spring Data JPA repositories with isolated transactions.",
      telemetry: "Index Scan on offers_pkey • Disk I/O: 1.2ms",
      upstream: ["app-core"],
      downstream: ["docker"],
      icon: <Database className="w-4 h-4 text-emerald-400" />,
      codeSnippet: `// Spring Data JPA Repository with Indexed Query
@Repository
public interface OfferRepository extends JpaRepository<OfferEntity, UUID> {
    @Query("SELECT o FROM OfferEntity o WHERE o.userId = :userId AND o.active = true")
    Page<OfferEntity> findByUserId(@Param("userId") String userId, Pageable pageable);
}`
    },
    {
      id: "cache",
      number: "06",
      name: "Redis In-Memory Cache",
      tier: "LEVEL 04 · ACCELERATION TIER",
      category: "In-Memory Cache",
      tech: ["Redis", "Spring Cache", "Key-Value Store"],
      description:
        "Sub-millisecond in-memory cache layer storing high-frequency query results, reducing load on PostgreSQL relational storage.",
      telemetry: "Redis Cache HIT: 0.8ms • Key: offers-usr492-p1",
      upstream: ["app-core"],
      downstream: ["docker"],
      icon: <Zap className="w-4 h-4 text-amber-400" />
    },
    {
      id: "docker",
      number: "07",
      name: "Docker Container Engine",
      tier: "LEVEL 05 · RUNTIME PARITY",
      category: "Container Runtime",
      tech: ["Docker", "Multi-stage Builds", "Alpine JRE 21"],
      description:
        "Multi-stage Docker builds separating compilation from runtime images, producing lightweight Alpine JRE images for uniform dev/prod parity.",
      telemetry: "Container Health: GREEN • Memory: 142MB",
      upstream: ["database", "cache"],
      downstream: ["cloud"],
      icon: <Box className="w-4 h-4 text-blue-400" />,
      codeSnippet: `# Multi-stage lightweight production container
FROM eclipse-temurin:21-jdk-alpine AS build
WORKDIR /app
COPY pom.xml mvnw ./
COPY .mvn .mvn
RUN ./mvnw dependency:go-offline
COPY src src
RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]`
    },
    {
      id: "cloud",
      number: "08",
      name: "AWS & Automated CI/CD",
      tier: "LEVEL 05 · CLOUD DELIVERY",
      category: "Infrastructure",
      tech: ["AWS", "GitHub Actions", "JUnit 5", "Mockito"],
      description:
        "Automated delivery pipelines executing unit and integration tests with JUnit 5 & Mockito prior to immutable artifact release.",
      telemetry: "Pipeline Passed: 48 Unit Tests • 0 Regressions • 200 OK",
      upstream: ["docker"],
      downstream: [],
      icon: <Cloud className="w-4 h-4 text-cyan-400" />
    }
  ];

  const selectedNode = nodes.find((n) => n.id === selectedNodeId) || nodes[3];

  // Dispatch Packet simulation sequence
  const simulationPath = ["client", "gateway", "security", "app-core", "database", "docker", "cloud"];

  const startSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimStep(0);
    setSelectedNodeId(simulationPath[0]);

    let step = 0;
    simulationTimerRef.current = setInterval(() => {
      step += 1;
      if (step < simulationPath.length) {
        setSimStep(step);
        setSelectedNodeId(simulationPath[step]);
      } else {
        if (simulationTimerRef.current) clearInterval(simulationTimerRef.current);
        setTimeout(() => {
          setIsSimulating(false);
          setSimStep(-1);
        }, 1200);
      }
    }, 550);
  };

  useEffect(() => {
    return () => {
      if (simulationTimerRef.current) clearInterval(simulationTimerRef.current);
    };
  }, []);

  const copyCode = () => {
    if (selectedNode.codeSnippet) {
      navigator.clipboard.writeText(selectedNode.codeSnippet);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 1500);
    }
  };

  return (
    <section id="architecture" className="pt-10 pb-16 md:pt-14 md:pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Simulation Action & Milestone 02 Anchor */}
        <div id="path-anchor-architecture" className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 md:mb-10 gap-6 scroll-mt-28">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-2.5">
              <div
                id="path-anchor-milestone-02"
                className="relative flex items-center justify-center w-5 h-5 rounded-full bg-blue-950 border border-blue-500/60 shadow-sm shadow-blue-500/50 shrink-0"
              >
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs tracking-wider uppercase">
                <Cpu className="w-3.5 h-3.5" />
                <span>MILESTONE 02 · SYSTEM ARCHITECTURE TOPOLOGY</span>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2.5">
              System Architecture Topology
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
              The single journey trail branches into multi-tier distributed architecture. Select any node to illuminate its upstream and downstream dependencies, or dispatch a synthetic request packet.
            </p>
          </div>

          {/* Simulation Trigger */}
          <div className="w-full sm:w-auto shrink-0 flex items-center gap-3">
            <button
              onClick={startSimulation}
              disabled={isSimulating}
              className={`w-full sm:w-auto justify-center inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-xs font-mono font-medium transition-all cursor-pointer ${
                isSimulating
                  ? "bg-blue-950/60 border-cyan-400 text-cyan-300 shadow-lg shadow-cyan-500/20"
                  : "bg-slate-900 border-slate-700/80 text-slate-200 hover:bg-slate-800 hover:border-slate-600"
              }`}
            >
              {isSimulating ? (
                <>
                  <Activity className="w-4 h-4 text-cyan-400 animate-spin" />
                  <span>Tracing Request Packet...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-blue-400 fill-blue-400" />
                  <span>Dispatch System Request</span>
                </>
              )}
            </button>

            {isSimulating && (
              <button
                onClick={() => {
                  if (simulationTimerRef.current) clearInterval(simulationTimerRef.current);
                  setIsSimulating(false);
                  setSimStep(-1);
                }}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
                title="Reset simulation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* The Spatial System Topology Canvas */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/30 p-4 sm:p-8 backdrop-blur-xl mb-10">
          {/* Live Telemetry Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 sm:mb-8 border-b border-slate-800/80 gap-3 text-xs font-mono">
            <div className="flex items-center gap-2.5">
              <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${isSimulating ? "bg-cyan-400 animate-ping" : "bg-emerald-400"}`} />
              <span className="text-slate-400">TELEMETRY:</span>
              <span className="text-slate-200 font-semibold truncate">{selectedNode.telemetry}</span>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-slate-400 text-[10px] sm:text-[11px]">
              <span className="px-2 py-0.5 rounded bg-slate-950/70 border border-slate-800">
                STATUS: <strong className="text-emerald-400 font-semibold">200 OK</strong>
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-950/70 border border-slate-800">
                LATENCY: <strong className="text-cyan-300 font-semibold">18.4ms</strong>
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-950/70 border border-slate-800">
                DEPS: <strong className="text-blue-400 font-semibold">{selectedNode.upstream.length} In / {selectedNode.downstream.length} Out</strong>
              </span>
            </div>
          </div>

          {/* Spatial Multi-Tier Topology Map Layout */}
          <div className="space-y-4 mb-8">
            {/* TIER 1: CLIENT INGRESS */}
            <div className="flex justify-center">
              {(() => {
                const node = nodes[0];
                const isSelected = selectedNodeId === node.id;
                const isPacketActive = isSimulating && simulationPath[simStep] === node.id;
                const isDownstream = selectedNode.downstream.includes(node.id);
                const isUpstream = selectedNode.upstream.includes(node.id);

                return (
                  <button
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`w-full max-w-md p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer relative overflow-hidden ${
                      isPacketActive
                        ? "bg-cyan-950/60 border-cyan-400 shadow-xl shadow-cyan-500/20 scale-102"
                        : isSelected
                        ? "bg-slate-800/95 border-blue-500/80 shadow-lg shadow-blue-500/10"
                        : isDownstream || isUpstream
                        ? "bg-slate-900/90 border-blue-400/50"
                        : "bg-slate-950/50 border-slate-800/80 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="p-1 rounded-md bg-slate-900 border border-slate-800">{node.icon}</span>
                        <span className="text-xs font-bold text-white tracking-tight">{node.name}</span>
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400">{node.tier}</span>
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">
                      {node.tech.join(" • ")}
                    </div>
                  </button>
                );
              })()}
            </div>

            <div className="flex justify-center text-slate-600">
              <ArrowDown className="w-4 h-4 text-slate-600 animate-pulse" />
            </div>

            {/* TIER 2: API GATEWAY */}
            <div className="flex justify-center">
              {(() => {
                const node = nodes[1];
                const isSelected = selectedNodeId === node.id;
                const isPacketActive = isSimulating && simulationPath[simStep] === node.id;
                const isDownstream = selectedNode.downstream.includes(node.id);
                const isUpstream = selectedNode.upstream.includes(node.id);

                return (
                  <button
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`w-full max-w-md p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer relative overflow-hidden ${
                      isPacketActive
                        ? "bg-cyan-950/60 border-cyan-400 shadow-xl shadow-cyan-500/20 scale-102"
                        : isSelected
                        ? "bg-slate-800/95 border-blue-500/80 shadow-lg"
                        : isDownstream || isUpstream
                        ? "bg-slate-900/90 border-blue-400/50"
                        : "bg-slate-950/50 border-slate-800/80 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="p-1 rounded-md bg-slate-900 border border-slate-800">{node.icon}</span>
                        <span className="text-xs font-bold text-white tracking-tight">{node.name}</span>
                      </div>
                      <span className="text-[10px] font-mono text-blue-400">{node.tier}</span>
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">
                      {node.tech.join(" • ")}
                    </div>
                  </button>
                );
              })()}
            </div>

            <div className="flex justify-center text-slate-600">
              <ArrowDown className="w-4 h-4 text-slate-600 animate-pulse" />
            </div>

            {/* TIER 3: SECURITY GATEWAY ⟷ APPLICATION CORE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {[nodes[2], nodes[3]].map((node) => {
                const isSelected = selectedNodeId === node.id;
                const isPacketActive = isSimulating && simulationPath[simStep] === node.id;
                const isDownstream = selectedNode.downstream.includes(node.id);
                const isUpstream = selectedNode.upstream.includes(node.id);

                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer relative overflow-hidden ${
                      isPacketActive
                        ? "bg-cyan-950/60 border-cyan-400 shadow-xl shadow-cyan-500/20 scale-102"
                        : isSelected
                        ? "bg-slate-800/95 border-blue-500/80 shadow-lg"
                        : isDownstream || isUpstream
                        ? "bg-slate-900/90 border-blue-400/50"
                        : "bg-slate-950/50 border-slate-800/80 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="p-1 rounded-md bg-slate-900 border border-slate-800">{node.icon}</span>
                        <span className="text-xs font-bold text-white tracking-tight">{node.name}</span>
                      </div>
                      <span className="text-[10px] font-mono text-indigo-400">{node.number}</span>
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">
                      {node.tech.slice(0, 3).join(" • ")}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-center text-slate-600">
              <ArrowDown className="w-4 h-4 text-slate-600 animate-pulse" />
            </div>

            {/* TIER 4: POSTGRESQL ⟷ REDIS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {[nodes[4], nodes[5]].map((node) => {
                const isSelected = selectedNodeId === node.id;
                const isPacketActive = isSimulating && simulationPath[simStep] === node.id;
                const isDownstream = selectedNode.downstream.includes(node.id);
                const isUpstream = selectedNode.upstream.includes(node.id);

                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer relative overflow-hidden ${
                      isPacketActive
                        ? "bg-cyan-950/60 border-cyan-400 shadow-xl shadow-cyan-500/20 scale-102"
                        : isSelected
                        ? "bg-slate-800/95 border-blue-500/80 shadow-lg"
                        : isDownstream || isUpstream
                        ? "bg-slate-900/90 border-blue-400/50"
                        : "bg-slate-950/50 border-slate-800/80 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="p-1 rounded-md bg-slate-900 border border-slate-800">{node.icon}</span>
                        <span className="text-xs font-bold text-white tracking-tight">{node.name}</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400">{node.number}</span>
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">
                      {node.tech.slice(0, 3).join(" • ")}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-center text-slate-600">
              <ArrowDown className="w-4 h-4 text-slate-600 animate-pulse" />
            </div>

            {/* TIER 5: DOCKER ──► AWS CI/CD */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {[nodes[6], nodes[7]].map((node) => {
                const isSelected = selectedNodeId === node.id;
                const isPacketActive = isSimulating && simulationPath[simStep] === node.id;
                const isDownstream = selectedNode.downstream.includes(node.id);
                const isUpstream = selectedNode.upstream.includes(node.id);

                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer relative overflow-hidden ${
                      isPacketActive
                        ? "bg-cyan-950/60 border-cyan-400 shadow-xl shadow-cyan-500/20 scale-102"
                        : isSelected
                        ? "bg-slate-800/95 border-blue-500/80 shadow-lg"
                        : isDownstream || isUpstream
                        ? "bg-slate-900/90 border-blue-400/50"
                        : "bg-slate-950/50 border-slate-800/80 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="p-1 rounded-md bg-slate-900 border border-slate-800">{node.icon}</span>
                        <span className="text-xs font-bold text-white tracking-tight">{node.name}</span>
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400">{node.number}</span>
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">
                      {node.tech.slice(0, 3).join(" • ")}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Deep Node Inspector with Code Toggle */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-7">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-slate-800/80 gap-3">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-semibold">
                  TIER {selectedNode.number} · {selectedNode.tier}
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight mt-0.5">
                  {selectedNode.name}
                </h3>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5">
                {selectedNode.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 font-normal max-w-3xl">
              {selectedNode.description}
            </p>

            {/* Code Toggle if snippet exists */}
            {selectedNode.codeSnippet && (
              <div className="pt-3 border-t border-slate-800/80">
                <div className="flex items-center justify-between mb-3">
                  <button
                    onClick={() => setShowCode(!showCode)}
                    className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>{showCode ? "Hide Implementation Example" : "View Implementation Example"}</span>
                  </button>

                  {showCode && (
                    <button
                      onClick={copyCode}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedCode ? "Copied" : "Copy Code"}</span>
                    </button>
                  )}
                </div>

                {showCode && (
                  <div className="rounded-xl border border-slate-800 bg-[#06070a] p-4 overflow-x-auto text-xs font-mono leading-relaxed text-slate-300 animate-in fade-in duration-200">
                    <pre>
                      <code>{selectedNode.codeSnippet}</code>
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Architecture Convergence into Philosophy / Axioms */}
        <div id="path-anchor-architecture-exit" className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-6 sm:p-8 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider mb-1">
                CONVERGENCE · MULTI-TIER ARCHITECTURE ──► CORE AXIOMS
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Architecture governed by foundational engineering axioms.
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                The multi-tier system topology converges into the foundational principles that direct all architectural trade-offs.
              </p>
            </div>

            <a
              href="#philosophy"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:border-slate-700 transition-all self-start md:self-auto"
            >
              <span>Inspect Engineering Axioms</span>
              <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
