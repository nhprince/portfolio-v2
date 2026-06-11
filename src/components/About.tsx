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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-spacing">
      <div className="container-main" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-meta text-accent mb-4">About Me</p>
          <h2 className="font-display text-h1 text-text-primary">Who I Am</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-body text-body text-text-secondary leading-relaxed mb-6">
              I&apos;m Prince — a full-stack developer from Dhaka, Bangladesh who loves building
              web applications that solve real business problems.
            </p>
            <p className="font-body text-body text-text-secondary leading-relaxed mb-6">
              I started my journey with C and PHP, then fell in love with JavaScript ecosystems.
              Today I work with TypeScript, React, Node.js, Python, and Django to build everything
              from POS systems to AI-powered creative tools.
            </p>
            <p className="font-body text-body text-text-secondary leading-relaxed mb-6">
              I&apos;ve built applications for retail businesses, design studios, e-commerce brands,
              and educational institutions — each project teaching me something new about turning
              ideas into working software.
            </p>
            <p className="font-body text-body text-text-secondary leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new frameworks, contributing to
              open source, or brainstorming the next big idea.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {skills.map((group, i) => (
              <div key={group.category}>
                <h3 className="font-mono text-meta text-accent mb-3">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="glass-tag font-mono text-meta text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
