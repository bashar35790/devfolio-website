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
  date: string;
  readTime: string;
  slug: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  image: string;
  category: BlogCategory;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}