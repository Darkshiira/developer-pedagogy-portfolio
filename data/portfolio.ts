import type {
  Project,
  // SkillGroup,
  // CareerEntry,
} from "@/types/portfolio";

export const technologies = [
  { name: "TypeScript", color: "teal" },
  { name: "React / Next.js", color: "teal" },
  { name: "C# / .NET", color: "blue" },
  { name: "Entity Framework Core", color: "blue" },
  { name: "MySQL", color: "orange" },
  { name: "RESTful APIs", color: "orange" },
  { name: "Tailwind CSS", color: "teal" },
  { name: "Express.js", color: "blue" },
];

export const advantages = [
  {
    number: "01",
    label: "Problem Solving",
    title: "Breaking Down Complex Problems",
    description:
      "Teaching children often means explaining difficult ideas in smaller, easier steps. I can use the same approach when solving problems in code, making a solution easier to understand and maintain.",
    takeaway: "Clear and structured thinking",
    icon: "workflow",
    footerIcon: "check-circle",
    color: "teal",
  },
  {
    number: "02",
    label: "User Experience",
    title: "Thinking About Different Users",
    description:
      "Every child learns differently, so I have experience adapting how I explain things to meet different needs. In software development, I want to build websites and applications that are clear, accessible, and easy to use.",
    takeaway: "An interest in accessibility and usability",
    icon: "accessibility",
    footerIcon: "check-circle",
    color: "orange",
  },
  {
    number: "03",
    label: "Teamwork",
    title: "Communication and Collaboration",
    description:
      "Working as a teacher has taught me to collaborate with colleagues, communicate with families, and stay calm when things get busy. These experiences help me work with others, ask questions, and explain my ideas clearly.",
    takeaway: "Collaboration and clear communication",
    icon: "messages-square",
    footerIcon: "users",
    color: "cyan",
  },
];

export const projects: Project[] = [
  {
    title: "Matteäventyret",
    category: "Interactive Math Learning",
    description:
      "A playful math application for children aged 6–9. Children explore different worlds, count animals, solve math challenges, and practise number recognition through interactive activities.",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    demoUrl: "https://littlemathadventures.vercel.app/",
    featured: true,
  },
  {
    title: "Svenskaspåret",
    category: "Swedish Language Learning",
    description:
      "An interactive application for practising Swedish through short exercises in spelling, grammar, and vocabulary. Includes daily words, progress tracking, learning streaks, and personalised practice.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "LocalStorage",
    ],
    demoUrl: "https://svenskasparet.vercel.app/",
    featured: true,
  },
];

export const skillGroups = [
  {
    title: "Frontend Development",
    description:
      "Building interactive, responsive interfaces with modern JavaScript tools.",
    icon: "monitor",
    color: "teal",
    skills: [
      { name: "JavaScript", level: "Strong" },
      { name: "React.js", level: "Strong" },
      { name: "Next.js", level: "Proficient" },
      { name: "TypeScript", level: "Proficient" },
      { name: "HTML & CSS", level: "Proficient" },
      { name: "Tailwind CSS", level: "Used in projects" },
    ],
  },
  {
    title: "Backend & APIs",
    description:
      "Creating server-side features and working with APIs and databases.",
    icon: "server",
    color: "blue",
    skills: [
      { name: "Node.js & Express.js", level: "Proficient" },
      { name: "C# & .NET", level: "Working knowledge" },
      { name: "REST APIs & HTTP status codes", level: "Proficient" },
      { name: "API error handling", level: "Proficient" },
      { name: "Entity Framework Core", level: "Basic experience" },
      { name: "Testing & debugging", level: "Some experience" },
    ],
  },
  {
    title: "Databases & Tools",
    description:
      "Working with data, version control, and development workflows.",
    icon: "database",
    color: "orange",
    skills: [
      { name: "Git & GitHub", level: "Confident" },
      { name: "GitHub Actions / Workflows", level: "Some experience" },
      { name: "MySQL", level: "Used in projects" },
      { name: "MongoDB", level: "Some experience" },
      { name: "Prisma ORM", level: "Some experience" },
      { name: "Docker", level: "Beginner" },
    ],
  },
  {
    title: "Other skills",
    description:
      "Bringing patience, creativity, and clear communication to teamwork.",
    icon: "brain",
    color: "yellow",
    skills: [
      { name: "Explaining complex ideas", level: "Strong" },
      { name: "Planning & organisation", level: "Strong" },
      { name: "Adapting to different needs", level: "Strong" },
      { name: "Creative problem-solving", level: "Strong" },
      { name: "Team collaboration", level: "Experienced" },
      { name: "Swedish & English", level: "Professional use" },
    ],
  },
];

export const careerEntries = [
  {
    period: "JAN 2013 – AUG 2025",
    meta: "Teaching · Primary education",
    title: "Primary School Teacher",
    organisation: "Beta School / Matrix Förskola & Stockholm Stad",
    description:
      "Worked with primary-aged children across different school settings. Planned and delivered engaging lessons, adapted teaching to pupils’ needs, collaborated with colleagues and families, and used creative approaches to make learning meaningful.",
    color: "orange",
  },
  {
    period: "OCT 2022 – MAY 2024",
    meta: "Outdoor education · Volunteering",
    title: "Mulle Leader",
    organisation: "Friluftsfrämjandet · Grimstaskogen",
    description:
      "Planned and led outdoor activities for children, combining nature exploration, movement and play. Created opportunities for children to discover the outdoors, learn about nature and build confidence through shared experiences.",
    color: "teal",
  },
  {
    period: "OCT 2023 – APR 2024",
    meta: "Fullstack development · Internship",
    title: "Fullstack Developer Intern",
    organisation: "SJ · Stockholm",
    description:
      "Developed frontend components for a web application that transformed uploaded XML train timetables into updated route numbers and more readable data. Worked with SJ’s component library and contributed to backend functionality using C#, .NET and Entity Framework Core.",
    color: "green",
  },
  {
    period: "AUG 2022 – JUN 2024",
    meta: "Higher Vocational Education · Fullstack Development",
    title: "Fullstack Web Developer, Open Source",
    organisation: "Nackademin · Stockholm",
    description:
      "Completed a two-year vocational education in fullstack web development, focusing on JavaScript, TypeScript, React, Next.js, backend development, APIs and databases. Gained practical experience through projects, teamwork and an internship at SJ.",
    color: "blue",
  },
  {
    period: "NEXT CHAPTER",
    meta: "Ready for new opportunities",
    title: "Fullstack Developer",
    organisation: "Building on teaching and hands-on development experience",
    description:
      "Looking to contribute to software projects where thoughtful problem-solving, clean code, usability and collaboration matter. Bringing a teacher’s ability to explain complex ideas clearly, adapt to different needs and keep learning.",
    color: "green",
  },
];
