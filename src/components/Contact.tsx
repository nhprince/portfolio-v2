"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#E50914] mb-4 font-mono">Get In Touch</p>
          <h2 className="text-[clamp(3rem,6vw,7rem)] font-extrabold text-white mb-6" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            Let&apos;s Work Together
          </h2>
          <p className="text-sm md:text-base text-[#A0A0A0] leading-relaxed mb-10">
            Have a project in mind? I&apos;m available for freelance work and open to new opportunities.
            Let&apos;s build something amazing together.
          </p>

          <a
            href="mailto:contact@nhprince.me"
            className="inline-block px-8 py-4 bg-[#E50914] text-white text-[10px] uppercase tracking-[0.25em] rounded-full hover:bg-[#FF1A25] transition-all duration-300 hover:scale-105 font-mono font-semibold"
          >
            contact@nhprince.me
          </a>

          <div className="flex justify-center gap-8 mt-12 pt-8 border-t border-[#222]">
            <a href="https://github.com/nhprince" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-[0.25em] text-[#666] hover:text-[#E50914] transition-colors font-mono">
              GitHub
            </a>
            <a href="https://linkedin.com/in/nh-prince-prodhan-a1b46a399" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-[0.25em] text-[#666] hover:text-[#E50914] transition-colors font-mono">
              LinkedIn
            </a>
            <a href="mailto:contact@nhprince.me" className="text-[10px] uppercase tracking-[0.25em] text-[#666] hover:text-[#E50914] transition-colors font-mono">
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
