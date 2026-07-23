export const siteConfig = {
  name: "Abul Bashar",
  title: "Abul Bashar | Premium Developer Portfolio",
  description:
    "Premium creative portfolio and engineering solutions built by Abul Bashar using React, Next.js, and GSAP.",
  email: "bashar35790@gmail.com",
  phone: "+8801833487526",
  location: "Dhaka, Bangladesh",
  age: "24 Years",
  role: "Senior Full Stack Developer",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/bashar35790",
    linkedin: "https://www.linkedin.com/in/bashar35790/",
    facebook: "https://www.facebook.com/bashar35790/",
  },
  navItems: [
    { href: "/", label: "Home", sectionId: "home" },
    { href: "/about", label: "About", sectionId: "about" },
    { href: "/projects", label: "Projects", sectionId: "projects" },
    { href: "/blogs", label: "Blogs", sectionId: "blogs" },
    { href: "/contact", label: "Contact", sectionId: "contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
