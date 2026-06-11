"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/lib/utils";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-accent mb-4">Get In Touch</p>
          <h2 className="font-[var(--font-syne)] text-[clamp(3rem,6vw,7rem)] font-extrabold text-text-primary mb-6">Let&apos;s Work Together</h2>
          <p className="text-[clamp(1rem,1.2vw,1.125rem)] leading-relaxed text-text-secondary mb-10">
            Have a project in mind? I&apos;m available for freelance work and open to new opportunities.
            Let&apos;s build something amazing together.
          </p>

          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-block px-8 py-4 bg-accent text-white font-mono text-[0.625rem] uppercase tracking-[0.25em] rounded-full hover:bg-accent-hover transition-all duration-300 hover:scale-105"
          >
            {siteConfig.email}
          </a>

          <div className="flex justify-center gap-6 mt-12">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-text-muted hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-text-muted hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-text-muted hover:text-accent transition-colors"
            >
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
