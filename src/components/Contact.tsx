"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 md:py-32" style={{ backgroundColor: "#0A0A0A" }}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="max-w-2xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#E50914] font-mono mb-4">GET IN TOUCH</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6" style={{ fontFamily: "var(--font-syne), sans-serif" }}>Let&apos;s Work Together</h2>
          <p className="text-sm md:text-base text-neutral-400 leading-relaxed mb-10">Have a project in mind? I&apos;m available for freelance work and open to new opportunities. Let&apos;s build something amazing together.</p>
          <a href="mailto:contact@nhprince.me" className="inline-block px-10 py-5 bg-[#E50914] text-white text-xs uppercase tracking-[0.2em] rounded-full hover:opacity-90 hover:scale-105 transition-all duration-300 font-mono font-semibold">
            contact@nhprince.me
          </a>
          <div className="flex justify-center gap-8 mt-12 pt-8 border-t border-neutral-800">
            <a href="https://github.com/nhprince" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 hover:text-[#E50914] transition-colors font-mono">GitHub</a>
            <a href="https://linkedin.com/in/nh-prince-prodhan-a1b46a399" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 hover:text-[#E50914] transition-colors font-mono">LinkedIn</a>
            <a href="mailto:contact@nhprince.me" className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 hover:text-[#E50914] transition-colors font-mono">Email</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
