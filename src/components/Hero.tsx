"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TECH_STACK = [
  "TypeScript", "React", "Next.js", "Node.js", "Python",
  "Cloudflare", "TailwindCSS", "PostgreSQL", "Docker", "AWS",
  "GraphQL", "Redis", "PHP", "Laravel", "Three.js",
  "TypeScript", "React", "Next.js", "Node.js", "Python",
  "Cloudflare", "TailwindCSS", "PostgreSQL", "Docker", "AWS",
  "GraphQL", "Redis", "PHP", "Laravel", "Three.js",
];

const TYPEWRITER_STRINGS = [
  "Full-Stack Developer",
  "TypeScript | React | Node.js",
  "Cloudflare & AI Specialist",
  "Building Digital Products",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const orbRef1 = useRef<HTMLDivElement>(null);
  const orbRef2 = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Mouse parallax for orbs
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const xRatio = (e.clientX / window.innerWidth - 0.5) * 2;
      const yRatio = (e.clientY / window.innerHeight - 0.5) * 2;

      if (orbRef1.current) {
        orbRef1.current.style.transform = `translate(${xRatio * 60}px, ${yRatio * 40}px)`;
      }
      if (orbRef2.current) {
        orbRef2.current.style.transform = `translate(${xRatio * -50}px, ${yRatio * -35}px)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#f0edf8" }}
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div
          ref={orbRef1}
          className="absolute"
          style={{
            width: "min(50vw, 600px)",
            height: "min(50vw, 600px)",
            top: "-5%",
            left: "5%",
            background: "radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(60px)",
            willChange: "transform",
            transition: "transform 0.6s ease-out",
          }}
        />
        <div
          ref={orbRef2}
          className="absolute"
          style={{
            width: "min(45vw, 550px)",
            height: "min(45vw, 550px)",
            top: "35%",
            right: "5%",
            background: "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(60px)",
            willChange: "transform",
            transition: "transform 0.8s ease-out",
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(12,10,26,1) 1px, transparent 1px), linear-gradient(90deg, rgba(12,10,26,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="container relative z-10 w-full" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--container-pad)" }}>
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass"
            style={{ borderRadius: "9999px" }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#22c55e" }} />
            <span className="font-[family-name:var(--font-mono)] text-xs font-medium tracking-widest uppercase" style={{ color: "#22c55e" }}>
              ◉ Available for Work
            </span>
          </motion.div>

          {/* Name */}
          <h1
            className="font-[family-name:var(--font-display)] font-bold leading-none tracking-tight mb-2"
            style={{
              fontSize: "clamp(4rem, 10vw, 11rem)",
              color: "#0c0a1a",
              lineHeight: "0.9",
            }}
          >
            NH PRINCE
          </h1>
          <h1
            className="font-[family-name:var(--font-display)] font-bold leading-none tracking-tight mb-6 text-gradient"
            style={{
              fontSize: "clamp(4rem, 10vw, 11rem)",
              lineHeight: "0.9",
            }}
          >
            PRODHAN
          </h1>

          {/* Typewriter Subtitle */}
          <div
            className="mb-8 font-[family-name:var(--font-display)] font-medium tracking-wide"
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)", color: "#4a4060" }}
          >
            <TypewriterText strings={TYPEWRITER_STRINGS} />
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Crafting robust web solutions with{" "}
            <span className="font-medium" style={{ color: "var(--text-primary)" }}>4+ years</span> of experience.
            Building AI agents, SaaS platforms, and cloud-native applications.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollTo("#projects")}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white transition-transform hover:scale-105 active:scale-95"
              style={{
                background: "var(--accent-gradient)",
                boxShadow: "0 8px 32px rgba(124, 58, 237, 0.35)",
              }}
            >
              View My Work
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold transition-transform hover:scale-105 active:scale-95 glass"
              style={{ color: "var(--text-primary)" }}
            >
              Get In Touch
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-md"
          >
            {[
              { value: "4+", label: "Years Exp." },
              { value: "15+", label: "Projects" },
              { value: "100%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-gradient">
                  {stat.value}
                </p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => scrollTo("#about")}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        aria-label="Scroll down"
      >
        <div
          className="flex flex-col items-center justify-center w-6 h-10 rounded-full border-2"
          style={{ borderColor: "rgba(100, 80, 200, 0.3)" }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 rounded-full"
            style={{ background: "var(--accent-gradient)" }}
          />
        </div>
        <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-widest uppercase" style={{ color: "#9b90b8" }}>
          Scroll
        </span>
      </motion.button>

      {/* Tech Marquee */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden"
        style={{
          background: "rgba(255, 255, 255, 0.35)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderTop: "1px solid rgba(255, 255, 255, 0.6)",
          padding: "10px 0",
        }}
      >
        <div className="flex animate-scroll-x whitespace-nowrap will-change-transform">
          {TECH_STACK.map((tech, i) => (
            <span
              key={i}
              className="inline-flex items-center mx-6 font-[family-name:var(--font-mono)] text-sm font-medium tracking-wider"
              style={{ color: "#4a4060" }}
            >
              {tech}
              <span
                className="ml-6 w-1.5 h-1.5 rounded-full opacity-40"
                style={{ background: "var(--accent-gradient)" }}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Simple Typewriter Component ─── */
function TypewriterText({ strings }: { strings: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentString = strings[currentIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < currentString.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentString.slice(0, displayText.length + 1));
      }, 50);
    } else if (!isDeleting && displayText.length === currentString.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentString.slice(0, displayText.length - 1));
      }, 30);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % strings.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, strings]);

  return (
    <span>
      {displayText}
      <span className="inline-block w-[2px] h-[1em] ml-1 align-middle animate-pulse" style={{ background: "var(--accent-from)" }} />
    </span>
  );
}
