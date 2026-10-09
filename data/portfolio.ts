
import type {
  Project,
  SkillGroup,
  CareerEntry,
} from "@/types/portfolio";

export const technologies = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Express.js",
  "C# / .NET",
  "REST APIs",
  "MySQL",
];

export const projects: Project[] = [
  {
    title: "Featured Project",
    description:
      "Explain the problem, your solution, and what you implemented.",
    technologies: ["TypeScript", "React", "CSS"],
    category: "Web application",
    featured: true,
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Engineering",
    skills: [
      { name: "HTML & CSS", level: "Your actual level" },
      { name: "JavaScript", level: "Your actual level" },
      { name: "TypeScript", level: "Your actual level" },
      { name: "React", level: "Your actual level" },
      { name: "Next.js", level: "Your actual level" },
    ],
  },
   {
    title: "Backend Engineering",
    skills: [
      { name: ".NET", level: "Your actual level" },
      { name: "Express.js", level: "Your actual level" },
      { name: "MySQL", level: "Your actual level" },
    ],
  },
];

export const careerEntries: CareerEntry[] = [
  {
    period: "2023–2024",
    title: "Fullstack Developer Intern",
    organisation: "SJ",
    description:
      "Describe your actual work on the train timetable application.",
  },
];