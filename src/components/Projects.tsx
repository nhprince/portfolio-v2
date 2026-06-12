"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { projects, categories } from "@/lib/projects";
import type { Project } from "@/lib/projects";

/* ─── Project Card with real image ─── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div
      className="glass-card overflow-hidden"
      style={{ borderRadius: "var(--card-radius-lg)", marginBottom: "3rem" }}
    >
      {/* Giant background number */}
      <span
        className="absolute top-0 font-bold leading-none select-none pointer-events-none z-0"
        style={{
          fontSize: "clamp(8rem, 18vw, 22rem)",
          color: "rgba(124, 58, 237, 0.06)",
          ...(isEven ? { right: "-1rem" } : { left: "-1rem" }),
          fontFamily: "var(--font-display), sans-serif",
        }}
      >
        {project.number}
      </span>

      <div className={`relative z-10 flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
        {/* Image area */}
        <div className="lg:w-[55%] relative" style={{ minHeight: "300px" }}>
          {project.image ? (
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority={index < 2}
            />
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(236,72,153,0.1) 100%)" }}
            >
              <span
                className="font-[family-name:var(--font-display)] text-4xl opacity-20"
                style={{ color: "var(--text-primary)" }}
              >
                {project.name}
              </span>
            </div>
          )}
          {/* Category badge */}
          <span
            className="absolute top-4 left-4 text-xs font-medium px-3 py-1 rounded-full"
            style={{
              background: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(8px)",
              color: "var(--accent-from)",
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Content area */}
        <div className="lg:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-center">
          <span
            className="text-xs font-[family-name:var(--font-mono)] tracking-widest uppercase mb-3"
            style={{ color: "var(--text-muted)" }}
          >
            {project.tagline}
          </span>
          <h3
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
            style={{ color: "var(--text-primary)", fontFamily: "var(--font-display), sans-serif" }}
          >
            {project.name}
          </h3>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-[family-name:var(--font-mono)] px-3 py-1 rounded-full"
                style={{
                  background: "rgba(124, 58, 237, 0.08)",
                  color: "var(--accent-from)",
                  border: "1px solid rgba(124, 58, 237, 0.15)",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full text-white transition-transform hover:scale-105"
                style={{ background: "var(--accent-gradient)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-transform hover:scale-105"
                style={{
                  background: "rgba(124, 58, 237, 0.08)",
                  color: "var(--text-primary)",
                  border: "1px solid rgba(124, 58, 237, 0.2)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll(".project-card");
      cards?.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 md:py-32"
      style={{ backgroundColor: "#f0edf8" }}
    >
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "0 var(--container-pad)",
        }}
      >
        {/* Header */}
        <div className="mb-12 md:mb-16 reveal">
          <p className="text-sm font-medium tracking-wider uppercase mb-3" style={{ color: "var(--accent-from)" }}>
            My Work
          </p>
          <h2
            className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            FEATURED <span className="text-gradient">PROJECTS</span>
          </h2>
        </div>

        {/* Projects List */}
        {projects.filter((p) => p.featured).map((project, i) => (
          <div key={project.id} className="project-card">
            <ProjectCard project={project} index={i} />
          </div>
        ))}

        {/* More Projects Grid */}
        <div className="mt-16">
          <h3
            className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold mb-8 text-center"
            style={{ color: "var(--text-primary)" }}
          >
            More Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter((p) => !p.featured).map((project) => (
              <div key={project.id} className="glass-card overflow-hidden group">
                {/* Image */}
                <div className="relative" style={{ height: "180px" }}>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(236,72,153,0.08) 100%)" }}
                    >
                      <span
                        className="font-[family-name:var(--font-display)] text-2xl opacity-15"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {project.name}
                      </span>
                    </div>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3" style={{ background: "rgba(12,10,26,0.5)", backdropFilter: "blur(4px)" }}>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110"
                        style={{ background: "var(--accent-gradient)" }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110"
                        style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(10px)" }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-[family-name:var(--font-mono)]" style={{ color: "var(--text-muted)" }}>
                      {project.number}
                    </span>
                    <span
                      className="text-xs font-[family-name:var(--font-mono)] px-2 py-0.5 rounded-full"
                      style={{ background: "rgba(124, 58, 237, 0.08)", color: "var(--accent-from)" }}
                    >
                      {project.category}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: "var(--text-primary)", fontFamily: "var(--font-display), sans-serif" }}
                  >
                    {project.name}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: "var(--text-secondary)" }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-xs font-[family-name:var(--font-mono)] px-2 py-0.5 rounded-full"
                        style={{
                          background: "rgba(124, 58, 237, 0.06)",
                          color: "var(--text-muted)",
                          border: "1px solid rgba(124, 58, 237, 0.1)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs font-[family-name:var(--font-mono)] px-2 py-0.5" style={{ color: "var(--text-muted)" }}>
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
