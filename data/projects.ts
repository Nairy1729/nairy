export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Android Application" | "Interactive Web Experience" | "Published Application" | "Enterprise Full-Stack" | "Full-Stack Application" | string;
  description: string;
  highlights: string[];
  technologies: string[];
  featured: boolean;
  status: "Published" | "Production" | "Completed";
  githubUrl?: string;
  liveUrl?: string;
  metrics?: string;
  isStagingPlaceholder?: boolean;
  badge?: string;
  architectureNotes?: string[];
}

export const projects: Project[] = [
  {
    id: "jobhunter",
    title: "JobHunter",
    subtitle: "AI-Powered Job Discovery Platform",
    category: "Full-Stack / AI / Developer Tools",
    description:
      "An AI-powered job discovery platform built to help developers find jobs worth applying to based on their profile, skills, experience and career preferences. Combines intelligent candidate-job matching, AI-assisted resume tailoring, and a dedicated government-job discovery engine.",
    highlights: [
      "Intelligent candidate-job matching evaluating skills, experience, and role relevance using pgvector embeddings",
      "AI-assisted resume tailoring that preserves factual information and never fabricates qualifications",
      "Separate discovery pipeline for Indian government recruitment linked directly to official notifications",
      "Production-ready Spring Boot REST API with Spring Security, JWT auth, and refresh-token sessions"
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "TanStack Query",
      "Axios",
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "PostgreSQL",
      "pgvector",
      "Google Gemini",
      "Firecrawl",
      "Vercel",
      "Render",
      "Supabase"
    ],
    featured: true,
    status: "Production",
    badge: "Full-Stack / AI / Developer Tools",
    liveUrl: "https://jobhunterfrontend.vercel.app",
    githubUrl: "https://github.com/Nairy1729",
    isStagingPlaceholder: false,
    architectureNotes: [
      "Separation between private tech job discovery and authentic Indian government recruitment",
      "Google Gemini semantic analysis + Firecrawl structured web content extraction",
      "PostgreSQL + pgvector vector similarity pipeline matching candidate profiles against job requirements",
      "Stateless JWT authentication with refresh-token rotation and Spring Security authorization filters"
    ]
  },
  {
    id: "lexora",
    title: "Lexora",
    subtitle: "Premium Offline-First Word Puzzle",
    category: "Mobile Application",
    description:
      "An offline-first, five-letter daily word puzzle app built with React Native, Expo SDK 52, and TypeScript. Features a luxury dark-glass editorial aesthetic, an offline 12,947-word dictionary, deterministic 00:00 UTC daily synchronization, dual-session daily and practice mode isolation, local smart daytime notification scheduling, and a 55% package size reduction down to 36.15 MB.",
    highlights: [
      "100% offline-first architecture with 12,947-word accepted vocabulary and O(1) set lookups",
      "Deterministic 00:00 UTC worldwide synchronization across a 6.3-year solution pool (2,311 words) with zero server dependencies",
      "Dual-session state isolation guaranteeing practice plays never leak into daily streaks or stats",
      "Optimized Android release package size by 55% (80.8 MB down to 36.15 MB) via Hermes and ProGuard/R8",
      "152 automated unit & regression tests passing across 21 test suites with WCAG 2.1 AAA contrast"
    ],
    technologies: [
      "React Native",
      "Expo SDK 52",
      "TypeScript",
      "Android",
      "Hermes Engine",
      "ProGuard / R8",
      "Offline Architecture",
      "Local Notifications",
      "WCAG AAA"
    ],
    featured: true,
    status: "Published",
    badge: "Published Android App",
    liveUrl: "https://github.com/Nairy1729/Lexora/releases/tag/v1.0.0",
    githubUrl: "https://github.com/Nairy1729/Lexora",
    isStagingPlaceholder: false,
    architectureNotes: [
      "Hashed Set<string> for instantaneous O(1) dictionary lookups with zero network calls",
      "Deterministic epoch hashing for globally synchronized daily puzzles at 00:00 UTC",
      "Namespace-isolated state machines preventing practice mode leakage into daily streaks",
      "Android ProGuard/R8 code shrinking and native ABI filtering (arm64-v8a / armeabi-v7a)",
      "VAPT-hardened persistence with prototype pollution prevention and 5-character buffer clamps"
    ]
  },
  {
    id: "worddrop",
    title: "WordDrop",
    subtitle: "Daily Word Lock Screen & Vocabulary App",
    category: "Android Application",
    description:
      "WordDrop is an Android application designed to expand vocabulary passively and effortlessly. Instead of demanding that users open a traditional educational app every day, WordDrop integrates curated vocabulary directly into everyday phone usage surfaces—the Android Lock Screen, the Notification Shade, and the Home Screen Widget.",
    highlights: [
      '"Learn one beautiful English word every day, without trying."',
      "Direct integration into everyday Android surfaces: Lock Screen, Notification Shade, Home Screen Widget",
      "Effortless passive vocabulary expansion with zero app-launch friction"
    ],
    technologies: ["Kotlin", "Python", "Android SDK", "Room DB", "Lock Screen API", "App Widgets"],
    featured: true,
    status: "Published",
    badge: "Published Android App",
    liveUrl: "https://github.com/Nairy1729/WordDrop/releases/download/v1.0.0/worddrop.apk",
    githubUrl: "https://github.com/Nairy1729/WordDrop",
    isStagingPlaceholder: false,
    architectureNotes: [
      "Offline-first local vocabulary cache with Room DB",
      "Python data pipeline for curated vocabulary ingestion & linguistic categorization",
      "Android Lock Screen, notification listener, and home screen widget providers"
    ]
  },
  {
    id: "another-life",
    title: "Another Life",
    subtitle: "Interactive Storytelling & Cinematic Experience",
    category: "Interactive Web Experience",
    description:
      'An interactive storytelling and emotional web experience built around the question: "What if things had happened differently?" Explores alternate possibilities, diverging lifelines, and the idea of another version of one\'s life through storytelling, atmospheric visuals, and music.',
    highlights: [
      '"WHAT IF, ANOTHER LIFE?"',
      "Atmospheric audiovisual design with ambient soundscapes and emotive transitions",
      "Non-linear branching narrative state engine exploring alternate life trajectories"
    ],
    technologies: ["React", "Three.js", "Lenis", "WebGL", "TypeScript", "Tailwind CSS"],
    featured: true,
    status: "Published",
    badge: "Published Experience",
    liveUrl: "https://what-if-another-life.netlify.app/",
    isStagingPlaceholder: false,
    architectureNotes: [
      "Three.js WebGL canvas rendering dynamic 3D lifelines and particle constellations",
      "Lenis smooth inertial scrolling integrated with reactive camera choreography",
      "Dynamic audio synthesis and soundscape cross-fading"
    ]
  },
  {
    id: "cds-enterprise",
    title: "CDS — Enterprise Application",
    subtitle: "Enterprise Full-Stack Application",
    category: "Enterprise Full-Stack",
    description:
      "High-scale enterprise backend and web application built following a strict layered architecture and SOLID principles. Features secured REST APIs, relational persistence, and containerized deployment.",
    highlights: [
      "Developed REST APIs using layered Spring Boot architecture with PostgreSQL persistence using JPA/Hibernate",
      "Implemented authentication and authorization using Spring Security and JWT for secured API access",
      "Developed comprehensive automated test suites using JUnit 5 and Mockito",
      "Containerized backend services and dependencies using Docker for reproducible deployments"
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "JPA / Hibernate", "Spring Security", "JWT", "React", "Docker", "JUnit 5", "Mockito"],
    featured: true,
    status: "Production",
    badge: "Enterprise System",
    isStagingPlaceholder: false,
    architectureNotes: [
      "Layered Controller-Service-Repository decoupling for strict separation of concerns",
      "Stateless JWT authorization filters with granular role-based endpoints",
      "Optimized JPA entity mappings with eager/lazy fetch management and index optimization"
    ]
  },
  {
    id: "offerpilot",
    title: "OfferPilot",
    subtitle: "Offer Management Platform",
    category: "Full-Stack Application",
    description:
      "A full-stack platform for managing, analyzing, and tracking job offers and compensation packages. Engineered for high performance with in-memory caching, paginated queries, and robust API error contracts.",
    highlights: [
      "Built a full-stack platform for managing and tracking job offers and compensation data",
      "Developed RESTful APIs with strict request validation, pagination, dynamic filtering, and global exception handling",
      "Implemented Redis caching layer to accelerate read operations and reduce database query load",
      "Implemented JWT authentication and Docker-based containerization for all services"
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "React", "Redis", "Docker", "REST APIs", "JWT", "Postman"],
    featured: true,
    status: "Completed",
    badge: "Full-Stack Platform",
    isStagingPlaceholder: false,
    architectureNotes: [
      "Redis write-through / read-through caching for high-frequency compensation analytics",
      "Spring `@ControllerAdvice` global exception handling with uniform RFC-7807 error envelopes",
      "Dynamic criteria-based filtering with Spring Data JPA Pageable execution"
    ]
  },
  {
    id: "career-crafter",
    title: "Career Crafter",
    subtitle: "Full-Stack Job Portal",
    category: "Full-Stack Application",
    description:
      "A comprehensive job portal platform featuring secure authentication, role-based access control (RBAC), and automated resume management for candidates and recruiters.",
    highlights: [
      "Built a full-stack job portal with secure authentication, role-based access control, and resume management",
      "Developed high-throughput REST APIs using ASP.NET Core and integrated them with React.js frontend applications",
      "Engineered database schemas and transactional procedures on MS SQL Server for seamless application flow"
    ],
    technologies: ["ASP.NET Core", "React.js", "MS SQL Server", "REST APIs", "RBAC", "Full-Stack Architecture"],
    featured: false,
    status: "Completed",
    badge: "Web Platform",
    isStagingPlaceholder: false,
    architectureNotes: [
      "Role-based authorization middleware differentiating applicant and employer access",
      "Clean API contracts consumed seamlessly by responsive React component tree",
      "Normalized relational schema handling applicant profiles and resume metadata"
    ]
  }
];
