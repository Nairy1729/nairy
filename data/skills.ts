export interface SkillCategory {
  title: string;
  badge: string;
  description: string;
  skills: string[];
  principles: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend Architecture",
    badge: "Core Strength",
    description:
      "Designing robust, decoupled enterprise services with strict layered boundaries, high throughput, and clean RESTful API contracts.",
    skills: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "Microservices",
      "C#",
      "C++"
    ],
    principles: [
      "Controller-Service-Repository separation",
      "Stateless RESTful resource endpoints",
      "SOLID & Object-Oriented Design",
      "Transactional boundary management"
    ]
  },
  {
    title: "Security & Identity",
    badge: "Authentication & RBAC",
    description:
      "Securing sensitive endpoints, managing token lifecycles, and implementing granular role-based authorization barriers.",
    skills: [
      "Spring Security",
      "JWT (JSON Web Tokens)",
      "OAuth2",
      "Role-Based Access Control (RBAC)",
      "API Security Filters"
    ],
    principles: [
      "Stateless security filter chain architecture",
      "Cryptographic signature verification",
      "Least-privilege authorization boundaries",
      "Secure credential & token handling"
    ]
  },
  {
    title: "Data Persistence & Caching",
    badge: "Storage & Query Optimization",
    description:
      "Modeling relational and document data, crafting index strategies, and leveraging in-memory caches to minimize query latency.",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "SQL",
      "Data Modeling",
      "Pagination & Filtering"
    ],
    principles: [
      "ACID compliance & relational integrity",
      "In-memory Redis caching patterns",
      "ORM query optimization & fetch tuning",
      "Dynamic filtering & paginated responses"
    ]
  },
  {
    title: "Frontend Engineering",
    badge: "Modern Web & Product UI",
    description:
      "Crafting performant, accessible, and responsive user interfaces that consume backend APIs cleanly with zero visual lag.",
    skills: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Component Architecture"
    ],
    principles: [
      "Predictable state & unidirectional data flow",
      "Responsive mobile-first layout systems",
      "High-contrast, accessible typography & UI",
      "Resilient API client integration & error states"
    ]
  },
  {
    title: "Engineering Quality & Verification",
    badge: "Automated Testing",
    description:
      "Ensuring software stability and regression resistance through comprehensive unit testing, mock injection, and contract testing.",
    skills: [
      "JUnit 5",
      "Mockito",
      "Postman",
      "Automated Testing",
      "API Verification"
    ],
    principles: [
      "Isolated unit test cases with Mockito mocks",
      "Boundary condition & edge-case verification",
      "Contract testing with Postman collections",
      "Continuous test execution in CI workflows"
    ]
  },
  {
    title: "DevOps, Cloud & Delivery",
    badge: "Containerization & CI/CD",
    description:
      "Packaging applications into portable containers and establishing reproducible build pipelines for cloud deployment.",
    skills: [
      "Docker",
      "Git",
      "GitHub Actions",
      "CI/CD Pipelines",
      "AWS",
      "System Design"
    ],
    principles: [
      "Multi-stage Docker container builds",
      "Automated linting, testing & build automation",
      "Scalable cloud deployment patterns",
      "Immutable configuration & environment parity"
    ]
  }
];

export const allSkillsList = [
  "Java",
  "Spring Boot",
  "Spring MVC",
  "Spring Security",
  "Spring Data JPA",
  "Hibernate",
  "REST APIs",
  "Microservices",
  "React.js",
  "TypeScript",
  "JavaScript",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "Docker",
  "Git",
  "GitHub Actions",
  "CI/CD",
  "AWS",
  "JUnit 5",
  "Mockito",
  "Postman",
  "C++",
  "C#",
  "SQL",
  "HTML5",
  "CSS3",
  "OOP",
  "SOLID",
  "DSA",
  "JWT",
  "OAuth2",
  "System Design"
];
