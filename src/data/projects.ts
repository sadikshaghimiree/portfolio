import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Eccommerce Website with Dynamic Pricing",
    description:
      "Machine learning based system that dynamically adjusts product prices based on demand, competition, and user ratings in real time.",
    tech: ["Python", "Django", "Scikit-learn", "PostgreSQL"],
    github: "https://github.com/sadikshaghimiree/minprjct",
    demo: "#",
  },
  {
    title: "Smart Vending Machine",
    description:
      "Automated vending system with QR payment integration, real-time inventory tracking, and product dispensing via Arduino.",
    tech: ["FastAPI", "Arduino", "React", "MQTT"],
    github: "https://github.com/sadikshaghimiree/Newbackend",
    demo: "#",
  },
  {
    title: "Task Management API",
    description:
      "RESTful API built with FastAPI featuring JWT authentication, role-based access control, and real-time WebSocket notifications.",
    tech: ["FastAPI", "PostgreSQL", "Docker", "Redis"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion with responsive design and smooth animations.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/sadikshaghimiree/portfolio",
    demo: "#",
  },
];
