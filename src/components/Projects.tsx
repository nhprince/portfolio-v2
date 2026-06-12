"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  live: string;
  github: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "Lenden POS",
    description:
      "Full-stack Point of Sale with real-time inventory, sales tracking, receipt generation, multi-role admin dashboard",
    tags: ["React", "Express.js", "MySQL", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    live: "#",
    github: "https://github.com/nhprince/Lenden-POS",
    featured: true,
  },
  {
    title: "AI Landing",
    description:
      "AI-powered art generation with 15 unique styles, AI caching, template fallback, 12 HTML renderers",
    tags: ["Cloudflare Workers", "Workers AI", "KV", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    live: "https://ai-landing.nurulhudaprince18.workers.dev",
    github: "https://github.com/nhprince/ai-landing",
    featured: true,
  },
  {
    title: "The Witches BD",
    description:
      "E-commerce storefront for beauty & fashion brand. Product catalog, cart, order management",
    tags: ["Next.js", "React", "Tailwind CSS", "Cloudflare Pages"],
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    live: "https://the-witches-bd.nhprince.dpdns.org",
    github: "https://github.com/nhprince/The-Witches-BD",
    featured: true,
  },
  {
    title: "MH CreationX",
    description:
      "Studio management for creative agencies. Project tracking, client management, team collaboration",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    live: "https://mhcreationx.top",
    github: "https://github.com/nhprince",
    featured: true,
  },
  {
    title: "GSSC Library",
    description:
      "Smart library management with book cataloging, member management, transaction tracking. PHP + React",
    tags: ["PHP", "React", "MySQL", "Vite"],
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80",
    live: "https://gssclibrary.nhprince.dpdns.org",
    github: "https://github.com/nhprince/GSSC-Library",
    featured: false,
  },
  {
    title: "Stuck Studio",
    description:
      "Modern agency website with smooth animations and glassmorphism UI",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    live: "https://stuckstudio.com",
    github: "https://github.com/nhprince",
    featured: false,
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const isFeatured = project.featured;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        group relative rounded-2xl overflow-hidden
        border border-neutral-800/50
        hover:border-[#E50914]/30
        transition-all duration-500
        bg-[#0d0d0d]
        ${isFeatured ? "md:col-span-2" : ""}
      `}
    >
      {/*
        ── Featured layout: horizontal row (image 60% / content 40%) ──
        ── Regular layout: vertical stack ──
      */}
      <div className={isFeatured ? "flex flex-col md:flex-row" : "flex flex-col"}>
        {/* ── Image area ── */}
        <div
          className={`
            relative overflow-hidden
            ${isFeatured ? "w-full md:w-[60%]" : "w-full"}
          `}
        >
          <div
            className={`
              relative w-full
              ${isFeatured ? "h-56 md:h-72" : "h-48 md:h-56"}
            `}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes={isFeatured ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 50vw"}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>

          {/* Live / Code links */}
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            {project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/60 backdrop-blur text-[10px] uppercase tracking-wider font-mono rounded-full px-3 py-1.5 text-white hover:bg-[#E50914] transition-colors duration-300"
              >
                Live
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/60 backdrop-blur text-[10px] uppercase tracking-wider font-mono rounded-full px-3 py-1.5 text-white hover:bg-[#E50914] transition-colors duration-300"
            >
              Code
            </a>
          </div>
        </div>

        {/* ── Content area ── */}
        <div
          className={`
            p-6 md:p-8 flex flex-col justify-center
            ${isFeatured ? "w-full md:w-[40%]" : "w-full"}
          `}
        >
          <h3
            className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#E50914] transition-colors duration-300 mb-3"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            {project.title}
          </h3>

          <p className="text-sm text-neutral-400 leading-relaxed mb-5">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-wider font-mono bg-white/5 border border-white/10 rounded-full px-3 py-1 text-neutral-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* ── Section Header ── */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#E50914] font-mono mb-4">
            SELECTED WORK
          </p>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-16"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            Projects
          </h2>
        </motion.div>

        {/* ── Project Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
