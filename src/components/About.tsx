const skills = {
  languages: [
    { name: "TypeScript", level: 92 },
    { name: "JavaScript", level: 95 },
    { name: "Python", level: 82 },
    { name: "PHP", level: 78 },
    { name: "SQL", level: 85 },
  ],
  frameworks: [
    { name: "React", level: 93 },
    { name: "Next.js", level: 90 },
    { name: "Node.js", level: 88 },
    { name: "TailwindCSS", level: 95 },
    { name: "Laravel", level: 75 },
  ],
  tools: [
    { name: "Cloudflare", level: 88 },
    { name: "Docker", level: 75 },
    { name: "Git", level: 92 },
    { name: "PostgreSQL", level: 82 },
    { name: "AWS", level: 70 },
  ],
};

const highlights = [
  { title: "AI & Automation", description: "Building autonomous AI agents, multi-model routing, and intelligent automation pipelines" },
  { title: "Full-Stack Development", description: "End-to-end web applications from database design to polished UI" },
  { title: "Cloud-Native Architecture", description: "Serverless, edge computing, and CDN-first deployment strategies" },
  { title: "Open Source", description: "Active contributor to developer tools, libraries, and community projects" },
];

function SkillColumn({ title, items }: { title: string; items: { name: string; level: number }[] }) {
  return (
    <div className="glass-card p-8 reveal-scale">
      <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>{title}</h3>
      <div className="space-y-5">
        {items.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium text-sm" style={{ color: "var(--text-primary)" }}>{skill.name}</span>
              <span className="text-sm" style={{ color: "var(--text-muted)" }}>{skill.level}%</span>
            </div>
            <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(124, 58, 237, 0.1)" }}>
              <div className="skill-bar-fill h-full rounded-full" data-width={`${skill.level}%`} style={{ width: "0%", background: "var(--accent-gradient)" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32" style={{ backgroundColor: "#f0edf8" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--container-pad)" }}>
        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">
          <div className="reveal-left">
            <p className="text-sm font-medium tracking-wider uppercase mb-3" style={{ color: "var(--accent-from)" }}>About Me</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
              BUILDING DIGITAL<br /><span className="text-gradient">EXPERIENCES</span>
            </h2>
            <div className="space-y-4 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              <p>I'm a passionate Full-Stack Developer with over <span className="font-medium" style={{ color: "var(--text-primary)" }}>4 years of experience</span> building modern web applications, AI agents, and cloud-native systems from Dhaka, Bangladesh.</p>
              <p>Currently working on <span className="text-gradient font-semibold">Saturday AI</span> — a Jarvis-inspired autonomous AI agent running on a cloud VPS with 1,200+ skills, multi-model routing, and enterprise-grade tooling.</p>
              <p>I specialize in crafting robust full-stack applications, real-time systems, and scalable cloud architectures using React, Node.js, TypeScript, and Cloudflare's edge platform.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-children">
            {highlights.map((item) => (
              <div key={item.title} className="glass-card p-6">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold mb-2" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div id="skills">
          <div className="text-center mb-16 reveal">
            <p className="text-sm font-medium tracking-wider uppercase mb-3" style={{ color: "var(--accent-from)" }}>My Expertise</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: "var(--text-primary)" }}>
              SKILLS & <span className="text-gradient">TECHNOLOGIES</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <SkillColumn title="Languages" items={skills.languages} />
            <SkillColumn title="Frameworks" items={skills.frameworks} />
            <SkillColumn title="Tools & Cloud" items={skills.tools} />
          </div>
        </div>
      </div>
    </section>
  );
}
