import { Certificate, Experience } from "@/types";

const SOFTVENCE_FILE_ID = "14gJeZ2O-owelMHG7eMDhuXz2wwpzs0xV";
const WEB_DEV_CERT_FILE_ID = "1TKKi0EPm5WcQRaUF8XyO4hHDqr3GJlHW";

export const experiences: Experience[] = [
  {
    slug: "softvence-agency",
    role: "Frontend Developer",
    company: "Softvence Agency",
    period: "Jan 2025 - Aug 2026",
    tagline: "Delivering high-end, responsive web experiences for global clients.",
    checklist: [
      "Build responsive, pixel-perfect interfaces with modern frameworks and clean, semantic code.",
      "Craft motion-rich UIs with smooth animations and micro-interactions that elevate user engagement.",
      "Optimize performance and Core Web Vitals to deliver fast, SEO-friendly experiences.",
      "Collaborate with designers and backend engineers to ship production-ready features on time.",
      "Translate client requirements into polished, accessible frontend solutions that drive results.",
    ],
    workProof: {
      label: "Work Experience Proof",
      fileId: SOFTVENCE_FILE_ID,
      previewUrl: `https://drive.google.com/file/d/${SOFTVENCE_FILE_ID}/preview`,
      viewUrl: `https://drive.google.com/file/d/${SOFTVENCE_FILE_ID}/view`,
      downloadUrl: `https://drive.google.com/uc?export=download&id=${SOFTVENCE_FILE_ID}`,
    },
  },
];

export const certificates: Certificate[] = [
  {
    title: "Complete Web Development",
    description:
      "A comprehensive full stack web development certification covering modern frontend and backend engineering, from responsive interfaces to scalable APIs, authentication, databases, and third-party integrations.",
    skills: [
      "Full Stack Developer",
      "Web Developer",
      "Software Developer",
      "Frontend Developer",
      "Backend Developer",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "REST API",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Git",
      "GitHub",
      "JWT Authentication",
      "Role-Based Authorization",
      "Responsive Web Design",
      "Full Stack Web Development",
      "API Integration",
      "Database Management",
      "Payment Integration",
      "AI Integration",
      "Problem Solving",
      "Software Development",
    ],
    document: {
      label: "Complete Web Development Certificate",
      fileId: WEB_DEV_CERT_FILE_ID,
      previewUrl: `https://drive.google.com/file/d/${WEB_DEV_CERT_FILE_ID}/preview`,
      viewUrl: `https://drive.google.com/file/d/${WEB_DEV_CERT_FILE_ID}/view`,
      downloadUrl: `https://drive.google.com/uc?export=download&id=${WEB_DEV_CERT_FILE_ID}`,
    },
  },
];
