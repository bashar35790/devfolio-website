export type BlogCategory =
  | "Full Stack"
  | "Frontend"
  | "Backend"
  | "UI/UX"
  | "Mobile Apps"
  | "SaaS Platform"
  | "E-Commerce"
  | "Landing Page";

export interface BlogPost {
  title: string;
  excerpt: string;
  description: string;
  date: string;
  readTime: string;
  slug: string;
}

export interface ProjectStep {
  title: string;
  description: string;
}

export interface Project {
  title: string;
  slug: string;
  description: string;
  overview: string[];
  features: string[];
  frontendTech: string[];
  backendTech?: string[];
  buildSteps?: ProjectStep[];
  technologies: string[];
  githubLink: string;
  demoLink: string;
  clientLink?: string;
  serverLink?: string;
  liveLink?: string;
  image: string;
  category: BlogCategory;
}

export interface WorkProof {
  label: string;
  fileId: string;
  previewUrl: string;
  viewUrl: string;
  downloadUrl: string;
}

export interface Experience {
  slug: string;
  role: string;
  company: string;
  period: string;
  tagline: string;
  checklist: string[];
  workProof?: WorkProof;
}

export interface Certificate {
  title: string;
  description: string;
  skills: string[];
  document: WorkProof;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}