export type NavItem = {
  name: string;
  link: string;
};

export type BentoItem = {
  id: number;
  title: string;
  description: string;
  className: string;
  type: "globe" | "text" | "code" | "image";
};

export type Skill = {
  name: string;
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};

export type Project = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
};

export type EducationItem = {
  id: number;
  type: "education" | "certification";
  title: string;
  institution: string;
  period: string;
  description?: string;
  credentialUrl?: string;
  grade?: string;
};

export type SocialLink = {
  id: number;
  name: string;
  link: string;
};
