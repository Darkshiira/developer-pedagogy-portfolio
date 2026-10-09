
export type Project = {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

export type SkillGroup = {
  title: string;
  skills: {
    name: string;
    level: string;
  }[];
};

export type CareerEntry = {
  period: string;
  title: string;
  organisation: string;
  description: string;
};