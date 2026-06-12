"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Lenden POS",
    description: "Full-stack Point of Sale system with real-time inventory management, sales tracking, receipt generation, and multi-role admin dashboard.",
    tags: ["React", "Express.js", "MySQL", "Node.js"],
    image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=800&q=80",
    liveUrl: "#",
    githubUrl: "https://github.com/nhprince/Lenden-POS",
    featured: true,
  },
  {
    title: "AI Landing",
    description: "AI-powered art generation platform with 15 unique art styles. Features AI response caching, template fallback system, and 12 HTML renderers.",
    tags: ["Cloudflare Workers", "Workers AI", "KV", "JavaScript"],
    image: "https://images.unsplash.com/photo-1718844054440-22acf5d5c8f0?w=800&q=80",
    liveUrl: "https://ai-landing.nurulhudaprince18.workers.dev",
    githubUrl: "https://github.com/nhprince/ai-landing",
    featured: true,
  },
  {
    title: "The Witches BD",
    description: "E-commerce storefront for a beauty & fashion brand. Product catalog, shopping cart, and order management with modern responsive design.",
    tags: ["Next.js", "React", "Tailwind CSS", "Cloudflare Pages"],
    image: "https://images.unsplash.com/photo-1532190872407-280735d27e08?w=800&q=80",
    liveUrl: "https://the-witches-bd.nhprince.dpdns.org",
    githubUrl: "https://github.com/nhprince/The-Witches-BD",
    featured: true,
  },
  {
    title: "MH CreationX",
    description: "Studio management platform for creative agencies. Project tracking, client management, and team collaboration tools.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    image: "https://images.unsplash.com/photo-168944311130-6e9c7dfd8f9e?w=800&q=80",
    liveUrl: "https://mhcreationx.top",
    githubUrl: "https://github.com/nhprince",
    featured: true,
  },
  {
    title: "GSSC Library",
    description: "Smart library management system with book cataloging, member management, and transaction tracking. PHP backend with React frontend.",
    tags: ["PHP", "React", "MySQL", "Vite"],
    image: "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?w=800&q=80",
    liveUrl: "https://gssclibrary.nhprince.dpdns.org",
    githubUrl: "https://github.com/nhprince/GSSC-Library",
  },
  {
    title: "Stuck Studio",
    description: "Modern agency website showcasing design and development services. Features smooth animations and glassmorphism UI.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1617040619263-41c5a9ca7521?w=800&q=80",
    liveUrl: "https://stuckstudio.com",
    githubUrl: "https://github.com/nhprince",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group rounded-2xl overflow-hidden border border-neutral-800 hover:border-red-900/50 transition-all duration-500 bg-neutral-900 ${project.featured ? "md:col-span-2" : ""}`}
    >
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
        <div className="absolute top-4 right-4 flex gap-2">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-black/60 backdrop-blur-sm text-white text-xs uppercase tracking-wider rounded-full font-mono hover:bg-red-600 transition-colors">
              Live ↗
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-black/60 backdrop-blur-sm text-white text-xs uppercase tracking-wider rounded-full font-mono hover:bg-red-600 transition-colors">
              Code ↗
            </a>
          )}
        </div>
      </div>
      <div className="p-6 md:p-8">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors duration-300" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
          {project.title}
        </h3>
        <p className="text-sm md:text-base text-neutral-400 leading-relaxed mb-5">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs uppercase tracking-wider text-neutral-400 font-mono">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32" style={{ backgroundColor: "#0A0A0A" }}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <p className="text-xs uppercase tracking-widest mb-4 font-mono" style={{ color: "#E50914" }}>Selected Work</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white" style={{ fontFamily: "var(--font-syne), sans-serif" }}>Projects</h2>
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
