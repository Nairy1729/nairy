export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: "Full-Time" | "Contract" | "Internship";
  current: boolean;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  architectureFocus: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "hexaware-technologies",
    company: "Hexaware Technologies",
    role: "Associate Software Engineer",
    period: "Mar 2025 – Present",
    location: "India",
    type: "Full-Time",
    current: true,
    summary:
      "Engineering enterprise backend services and full-stack solutions using Java, Spring Boot, and PostgreSQL. Focused on clean layered architecture, resilient REST APIs, robust authentication pipelines, and automated test reliability.",
    responsibilities: [
      "Developed and maintained enterprise backend applications using Java, Spring Boot, REST APIs, and PostgreSQL following layered architecture and SOLID principles.",
      "Designed and implemented RESTful APIs using Spring Boot with clear separation of Controller, Service, and Repository layers.",
      "Implemented authentication and role-based authorization using Spring Security and JWT for secured API access.",
      "Integrated backend APIs with React.js frontend applications and collaborated with cross-functional teams to deliver production-ready features.",
      "Developed unit and integration tests using JUnit and Mockito and containerized applications using Docker."
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "PostgreSQL",
      "Spring Security",
      "JWT",
      "React.js",
      "JUnit",
      "Mockito",
      "Docker",
      "Git",
      "SOLID"
    ],
    architectureFocus: [
      "Strict Controller-Service-Repository decoupling",
      "Stateless token-based security filter chains",
      "Relational schema indexing & transactional integrity",
      "Test-driven reliability with Mockito & JUnit test runners"
    ]
  }
];
