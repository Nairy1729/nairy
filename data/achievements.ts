export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  category: "Award" | "Scholarship" | "Recognition";
  description: string;
  badge: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  grade?: string;
  location: string;
  highlights: string[];
}

export const achievements: Achievement[] = [
  {
    id: "innovative-champion",
    title: "Innovative Champion Award",
    issuer: "Hexaware Technologies",
    category: "Award",
    badge: "Enterprise Honor",
    description:
      "Awarded for outstanding contributions to innovation and forward-thinking technology initiatives at Hexaware Technologies."
  },
  {
    id: "shiv-nadar-scholarship",
    title: "100% Tuition Scholarship",
    issuer: "Shiv Nadar Foundation",
    category: "Scholarship",
    badge: "Merit Award",
    description:
      "Awarded a prestigious full 100% tuition scholarship by the Shiv Nadar Foundation in recognition of academic excellence and leadership potential."
  }
];

export const educationList: EducationItem[] = [
  {
    id: "vit-vellore",
    institution: "Vellore Institute of Technology, Vellore",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Electronics and Communication Engineering",
    period: "2020 – 2024",
    location: "Vellore, India",
    highlights: [
      "Rigorous engineering coursework covering computer systems, hardware architectures, and computational problem solving",
      "Focused on software engineering, object-oriented design, data structures & algorithms"
    ]
  },
  {
    id: "vidyagyan-sitapur",
    institution: "VidyaGyan School, Sitapur",
    degree: "Senior Secondary (Class XII)",
    field: "PCM + Fine Arts",
    period: "2019 – 2020",
    grade: "95.2%",
    location: "Sitapur, India",
    highlights: [
      "Graduated with an exceptional 95.2% aggregate score",
      "Selected among top rural academic talent under the Shiv Nadar Foundation leadership initiative"
    ]
  }
];
