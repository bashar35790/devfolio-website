export interface Blogs {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

export interface Projects {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  image: string;
}

export interface formDate {
  name:string,
  email:string,
  message:string,
}