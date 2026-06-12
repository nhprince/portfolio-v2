const TECH_STACK = [
  "TypeScript", "React", "Next.js", "Node.js", "Python",
  "Cloudflare", "TailwindCSS", "PostgreSQL", "Docker", "AWS",
  "GraphQL", "Redis", "PHP", "Laravel", "Three.js",
  "TypeScript", "React", "Next.js", "Node.js", "Python",
  "Cloudflare", "TailwindCSS", "PostgreSQL", "Docker", "AWS",
  "GraphQL", "Redis", "PHP", "Laravel", "Three.js",
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: "#f0edf8" }}>
      {/* Background Orbs */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute animate-pulse" style={{
          width: "min(50vw, 600px)", height: "min(50vw, 600px)", top: "-5%", left: "5%",
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 70%)",
          borderRadius: "50%", filter: "blur(60px)",
        }} />
        <div className="absolute animate-pulse" style={{
          width: "min(45vw, 550px)", height: "min(45vw, 550px)", top: "35%", right: "5%",
          background: "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 70%)",
          borderRadius: "50%", filter: "blur(60px)", animationDelay: "1s",
        }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(12,10,26,1) 1px, transparent 1px), linear-gradient(90deg, rgba(12,10,26,1) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Content */}
      <div className="container relative z-10 w-full" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--container-pad)" }}>
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass animate-fade-in-up animate-delay-100" style={{ borderRadius: "9999px" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#22c55e" }} />
            <span className="font-[family-name:var(--font-mono)] text-xs font-medium tracking-widest uppercase" style={{ color: "#22c55e" }}>
              ◉ Available for Work
            </span>
          </div>

          {/* Name */}
          <h1 className="font-[family-name:var(--font-display)] font-bold leading-none tracking-tight mb-2 animate-fade-in-up animate-delay-200" style={{ fontSize: "clamp(4rem, 10vw, 11rem)", color: "#0c0a1a", lineHeight: "0.9" }}>
            NH PRINCE
          </h1>
          <h1 className="font-[family-name:var(--font-display)] font-bold leading-none tracking-tight mb-6 text-gradient animate-fade-in-up animate-delay-300" style={{ fontSize: "clamp(4rem, 10vw, 11rem)", lineHeight: "0.9" }}>
            PRODHAN
          </h1>

          {/* Subtitle */}
          <p className="mb-8 font-[family-name:var(--font-display)] font-medium tracking-wide animate-fade-in-up animate-delay-400" style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)", color: "#4a4060" }}>
            Full-Stack Developer &amp; AI Specialist
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl max-w-xl mb-10 leading-relaxed animate-fade-in-up animate-delay-500" style={{ color: "var(--text-secondary)" }}>
            Crafting robust web solutions with <span className="font-medium" style={{ color: "var(--text-primary)" }}>4+ years</span> of experience.
            Building AI agents, SaaS platforms, and cloud-native applications.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-500">
            <a href="#projects" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white transition-transform hover:scale-105 active:scale-95" style={{ background: "var(--accent-gradient)", boxShadow: "0 8px 32px rgba(124, 58, 237, 0.35)" }}>
              View My Work
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold transition-transform hover:scale-105 active:scale-95 glass" style={{ color: "var(--text-primary)" }}>
              Get In Touch
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-md animate-fade-in-up animate-delay-500">
            {[{ value: "4+", label: "Years Exp." }, { value: "15+", label: "Projects" }, { value: "100%", label: "Satisfaction" }].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-gradient">{stat.value}</p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#about" className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in-up animate-delay-500">
        <div className="flex flex-col items-center justify-center w-6 h-10 rounded-full border-2" style={{ borderColor: "rgba(100, 80, 200, 0.3)" }}>
          <div className="w-1.5 h-3 rounded-full animate-bounce" style={{ background: "var(--accent-gradient)" }} />
        </div>
        <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-widest uppercase" style={{ color: "#9b90b8" }}>Scroll</span>
      </a>

      {/* Tech Marquee */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden" style={{
        background: "rgba(255, 255, 255, 0.35)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.6)", padding: "10px 0",
      }}>
        <div className="flex animate-scroll-x whitespace-nowrap will-change-transform">
          {TECH_STACK.map((tech, i) => (
            <span key={i} className="inline-flex items-center mx-6 font-[family-name:var(--font-mono)] text-sm font-medium tracking-wider" style={{ color: "#4a4060" }}>
              {tech}
              <span className="ml-6 w-1.5 h-1.5 rounded-full opacity-40" style={{ background: "var(--accent-gradient)" }} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
