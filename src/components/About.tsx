"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { category: "Frontend", items: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express.js", "Django", "Flask", "PHP", "REST APIs"] },
  { category: "Database", items: ["MySQL", "PostgreSQL", "MongoDB", "Supabase", "Cloudflare KV"] },
  { category: "Tools & DevOps", items: ["Git", "GitHub Actions", "Cloudflare Workers", "Cloudflare Pages", "Vite", "Docker"] },
  { category: "Languages", items: ["Python", "C", "JavaScript", "TypeScript", "PHP"] },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-20 md:py-32 bg-[#050505]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#E50914] mb-4 font-mono">About Me</p>
          <h2 className="text-[clamp(3rem,6vw,7rem)] font-extrabold text-white" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            Who I Am
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Portrait + Bio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Portrait */}
            <div className="relative mb-8 rounded-2xl overflow-hidden border border-[#222]">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                alt="NH Prince Prodhan"
                className="w-full h-80 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#E50914] font-mono">Full-Stack Developer</p>
                <p className="text-white text-lg font-semibold mt-1">NH Prince Prodhan</p>
                <p className="text-[#A0A0A0] text-sm">Dhaka, Bangladesh</p>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-4">
              <p className="text-sm md:text-base text-[#A0A0A0] leading-relaxed">
                I&apos;m Prince — a full-stack developer from Dhaka, Bangladesh who loves building
                web applications that solve real business problems.
              </p>
              <p className="text-sm md:text-base text-[#A0A0A0] leading-relaxed">
                I started my journey with C and PHP, then fell in love with JavaScript ecosystems.
                Today I work with TypeScript, React, Node.js, Python, and Django to build everything
                from POS systems to AI-powered creative tools.
              </p>
              <p className="text-sm md:text-base text-[#A0A0A0] leading-relaxed">
                I&apos;ve built applications for retail businesses, design studios, e-commerce brands,
                and educational institutions — each project teaching me something new about turning
                ideas into working software.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="text-[10px] uppercase tracking-[0.25em] text-[#E50914] mb-3 font-mono">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.2em] text-[#A0A0A0] font-mono hover:text-[#E50914] hover:border-[rgba(229,9,20,0.3)] transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#222]">
              <div>
                <p className="text-3xl font-extrabold text-white" style={{ fontFamily: "var(--font-syne), sans-serif" }}>9+</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#666] font-mono mt-1">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white" style={{ fontFamily: "var(--font-syne), sans-serif" }}>5+</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#666] font-mono mt-1">Years</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white" style={{ fontFamily: "var(--font-syne), sans-serif" }}>53</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#666] font-mono mt-1">Repos</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
