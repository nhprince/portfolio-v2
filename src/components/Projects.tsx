import Image from "next/image";
import { projects } from "@/lib/projects";
import type { Project } from "@/lib/projects";

/* ─── Project Card ─── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div
      className="glass-card overflow-hidden reveal"
      style={{ borderRadius: "var(--card-radius-lg)", marginBottom: "3rem", position: "relative" }}
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
              <span className="font-[family-name:var(--font-display)] text-4xl opacity-20" style={{ color: "var(--text-primary)" }}>
                {project.name}
              </span>
            </div>
          )}
          <span
            className="absolute top-4 left-4 text-xs font-medium px-3 py-1 rounded-full"
            style={{ background: "rgba(255,255,255,0.9)", backdropFilter: "blur(8px)", color: "var(--accent-from)" }}
          >
            {project.category}
          </span>
        </div>

        {/* Content area */}
        <div className="lg:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-center">
          <span className="text-xs font-[family-name:var(--font-mono)] tracking-widest uppercase mb-3" style={{ color: "var(--text-muted)" }}>
            {project.tagline}
          </span>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" style={{ color: "var(--text-primary)", fontFamily: "var(--font-display), sans-serif" }}>
            {project.name}
          </h3>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span key={t} className="text-xs font-[family-name:var(--font-mono)] px-3 py-1 rounded-full" style={{ background: "rgba(124, 58, 237, 0.08)", color: "var(--accent-from)", border: "1px solid rgba(124, 58, 237, 0.15)" }}>
                {t}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full text-white transition-transform hover:scale-105" style={{ background: "var(--accent-gradient)" }}>
                Live Demo
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-transform hover:scale-105" style={{ background: "rgba(124, 58, 237, 0.08)", color: "var(--text-primary)", border: "1px solid rgba(124, 58, 237, 0.2)" }}>
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
  const featured = projects.filter((p) => p.featured);
  const standard = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24 md:py-32" style={{ backgroundColor: "#f0edf8" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--container-pad)" }}>
        {/* Header */}
        <div className="mb-12 md:mb-16 reveal">
          <p className="text-sm font-medium tracking-wider uppercase mb-3" style={{ color: "var(--accent-from)" }}>My Work</p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: "var(--text-primary)" }}>
            FEATURED <span className="text-gradient">PROJECTS</span>
          </h2>
        </div>

        {/* Featured Projects */}
        {featured.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}

        {/* More Projects Grid */}
        <div className="mt-16">
          <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: "var(--text-primary)" }}>
            More Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {standard.map((project) => (
              <div key={project.id} className="glass-card overflow-hidden group">
                <div className="relative" style={{ height: "180px" }}>
                  {project.image ? (
                    <Image src={project.image} alt={project.name} fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(236,72,153,0.08) 100%)" }}>
                      <span className="font-[family-name:var(--font-display)] text-2xl opacity-15" style={{ color: "var(--text-primary)" }}>{project.name}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3" style={{ background: "rgba(12,10,26,0.5)", backdropFilter: "blur(4px)" }}>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110" style={{ background: "var(--accent-gradient)" }}>
                        ↗
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110" style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(10px)" }}>
                        ⟠
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-[family-name:var(--font-mono)]" style={{ color: "var(--text-muted)" }}>{project.number}</span>
                    <span className="text-xs font-[family-name:var(--font-mono)] px-2 py-0.5 rounded-full" style={{ background: "rgba(124, 58, 237, 0.08)", color: "var(--accent-from)" }}>{project.category}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: "var(--text-primary)", fontFamily: "var(--font-display), sans-serif" }}>{project.name}</h3>
                  <p className="text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: "var(--text-secondary)" }}>{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="text-xs font-[family-name:var(--font-mono)] px-2 py-0.5 rounded-full" style={{ background: "rgba(124, 58, 237, 0.06)", color: "var(--text-muted)", border: "1px solid rgba(124, 58, 237, 0.1)" }}>{t}</span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs font-[family-name:var(--font-mono)] px-2 py-0.5" style={{ color: "var(--text-muted)" }}>+{project.tech.length - 3}</span>
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
