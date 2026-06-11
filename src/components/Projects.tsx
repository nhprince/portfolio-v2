"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Lenden POS",
    description:
      "Full-stack Point of Sale system with real-time inventory management, sales tracking, receipt generation, and multi-role admin dashboard. Built for retail businesses.",
    tags: ["React", "Express.js", "MySQL", "Node.js"],
    liveUrl: "#",
    githubUrl: "https://github.com/nhprince/Lenden-POS",
    featured: true,
  },
  {
    title: "AI Landing",
    description:
      "AI-powered art generation platform with 15 unique art styles. Features AI response caching, template fallback system, and 12 different HTML renderers.",
    tags: ["Cloudflare Workers", "Workers AI", "KV", "JavaScript"],
    liveUrl: "https://ai-landing.nurulhudaprince18.workers.dev",
    githubUrl: "https://github.com/nhprince/ai-landing",
    featured: true,
  },
  {
    title: "The Witches BD",
    description:
      "E-commerce storefront for a beauty & fashion brand. Product catalog, shopping cart, and order management with a modern, responsive design.",
    tags: ["Next.js", "React", "Tailwind CSS", "Cloudflare Pages"],
    liveUrl: "https://the-witches-bd.nhprince.dpdns.org",
    githubUrl: "https://github.com/nhprince/The-Witches-BD",
    featured: true,
  },
  {
    title: "MH CreationX",
    description:
      "Studio management platform for creative agencies. Project tracking, client management, and team collaboration tools in one unified dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://mhcreationx.top",
    githubUrl: "https://github.com/nhprince",
    featured: true,
  },
  {
    title: "GSSC Library",
    description:
      "Smart library management system with book cataloging, member management, and transaction tracking. PHP backend with React frontend.",
    tags: ["PHP", "React", "MySQL", "Vite"],
    liveUrl: "https://gssclibrary.nhprince.dpdns.org",
    githubUrl: "https://github.com/nhprince/GSSC-Library",
  },
  {
    title: "Stuck Studio",
    description:
      "Modern agency website showcasing design and development services. Features smooth animations, responsive design, and glassmorphism UI.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://stuckstudio.com",
    githubUrl: "https://github.com/nhprince",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "glass-card p-6 md:p-8 group hover:border-accent/30 transition-all duration-500",
        project.featured && "md:col-span-2"
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-display text-h3 text-text-primary group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-meta text-text-muted hover:text-accent transition-colors"
            >
              Live ↗
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-meta text-text-muted hover:text-accent transition-colors"
            >
              Code ↗
            </a>
          )}
        </div>
      </div>

      <p className="font-body text-body text-text-secondary mb-6 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="glass-tag font-mono text-meta text-text-muted">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-spacing">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-meta text-accent mb-4">Selected Work</p>
          <h2 className="font-display text-h1 text-text-primary">Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
