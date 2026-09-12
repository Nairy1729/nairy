"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { skillCategories } from "@/data/skills";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export function Engineering() {
  const [selectedLayer, setSelectedLayer] = useState<"controller" | "service" | "repository">("controller");
  const [copiedCode, setCopiedCode] = useState(false);

  const codeSnippets = {
    controller: `// REST Controller Tier: Contract, Validation & Security Filter Integration
@RestController
@RequestMapping("/api/v1/offers")
@Validated
public class OfferController {

    private final OfferService offerService;

    public OfferController(OfferService offerService) {
        this.offerService = offerService;
    }

    @GetMapping
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<PageResponse<OfferResponseDto>> getOffers(
            @AuthenticationPrincipal UserDetails userDetails,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String status) {
        
        PageResponse<OfferResponseDto> response = offerService.fetchUserOffers(
            userDetails.getUsername(), page, size, status
        );
        return ResponseEntity.ok(response);
    }
}`,
    service: `// Service Tier: Business Rules, Domain Invariants & Cache Orchestration
@Service
@Transactional(readOnly = true)
public class OfferServiceImpl implements OfferService {

    private final OfferRepository offerRepository;
    private final CacheManager cacheManager;

    @Override
    @Cacheable(value = "offers", key = "#userId + '-' + #page + '-' + #status")
    public PageResponse<OfferResponseDto> fetchUserOffers(
            String userId, int page, int size, String status) {
        
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "createdAt"));
        Page<OfferEntity> offerPage = (status != null && !status.isBlank())
            ? offerRepository.findByUserIdAndStatus(userId, status, pageable)
            : offerRepository.findByUserId(userId, pageable);

        return PageResponse.from(offerPage.map(OfferMapper::toDto));
    }
}`,
    repository: `// Repository Tier: Spring Data JPA Persistence & Criteria Derivation
@Repository
public interface OfferRepository extends JpaRepository<OfferEntity, UUID> {

    @Query("SELECT o FROM OfferEntity o WHERE o.userId = :userId ORDER BY o.createdAt DESC")
    Page<OfferEntity> findByUserId(@Param("userId") String userId, Pageable pageable);

    @Query("SELECT o FROM OfferEntity o WHERE o.userId = :userId AND o.status = :status")
    Page<OfferEntity> findByUserIdAndStatus(
        @Param("userId") String userId, 
        @Param("status") String status, 
        Pageable pageable
    );

    boolean existsByUserIdAndCompany(String userId, String company);
}`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[selectedLayer]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 1500);
  };

  return (
    <section id="engineering" className="py-20 md:py-32 relative bg-[#07090e]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="blue" dot className="mb-3">
            {"// 02. ENGINEERING CAPABILITIES"}
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-4">
            Architectural Strengths & Technical Philosophy
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
            Organized around systemic principles rather than static tool checklists. Every tier is
            designed for clear domain boundaries, test coverage, and predictable runtime behavior.
          </p>
        </div>

        {/* Conceptual Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((cat, idx) => (
            <Card
              key={cat.title}
              interactive
              className="flex flex-col justify-between border-slate-800/80 bg-slate-900/30"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="blue" size="sm">
                    {cat.badge}
                  </Badge>
                  <span className="font-mono text-[10px] text-slate-400 font-semibold">
                    [0{idx + 1}]
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white tracking-tight mb-2">
                  {cat.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                  {cat.description}
                </p>

                {/* Core Architectural Principles */}
                <div className="space-y-1.5 mb-6 p-3 rounded-xl bg-slate-950/50 border border-slate-800/60">
                  <div className="text-[10px] font-mono uppercase text-slate-400 font-semibold mb-1">
                    System Invariants:
                  </div>
                  {cat.principles.map((pr, pIdx) => (
                    <div key={pIdx} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="text-emerald-400 font-mono text-[10px] mt-0.5">✓</span>
                      <span>{pr}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Badges */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Interactive Layered Architecture Inspector */}
        <div className="rounded-2xl border border-slate-800 bg-[#090b11] p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
                <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                  Layered Architecture Implementation Pattern
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 font-normal">
                Inspection of standard Controller ➔ Service ➔ Repository separation implemented across
                Hexaware & full-stack enterprise projects.
              </p>
            </div>

            {/* Layer Selection Tabs */}
            <div className="flex items-center gap-2">
              {(["controller", "service", "repository"] as const).map((layer) => (
                <button
                  key={layer}
                  onClick={() => setSelectedLayer(layer)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono capitalize transition-all cursor-pointer ${
                    selectedLayer === layer
                      ? "bg-blue-600 text-white font-medium shadow-sm"
                      : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
                  }`}
                >
                  {layer} Layer
                </button>
              ))}

              <button
                onClick={handleCopyCode}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                title="Copy code snippet"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Code Viewer Box */}
          <div className="rounded-xl border border-slate-800/80 bg-[#06070a] p-4 sm:p-5 overflow-x-auto font-mono text-xs leading-relaxed text-slate-300">
            <pre className="text-slate-300">
              <code>{codeSnippets[selectedLayer]}</code>
            </pre>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 pt-3 border-t border-slate-800/60">
            <div className="flex items-center gap-4">
              <span>PATTERN: Spring Boot 3.x / Java 17+</span>
              <span>CONSTRAINTS: SOLID & RFC-7807 Compliance</span>
            </div>
            <span className="text-emerald-400">STATUS: PRODUCTION_TESTED</span>
          </div>
        </div>
      </div>
    </section>
  );
}
