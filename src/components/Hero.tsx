"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [gsapReady, setGsapReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    import("gsap").then((gsapModule) => {
      const gsap = gsapModule.default;
      import("gsap/ScrollTrigger").then((ScrollTriggerModule) => {
        gsap.registerPlugin(ScrollTriggerModule.ScrollTrigger);
        setGsapReady(true);
      });
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (!gsapReady || !glowRef.current || !textRef.current) return;

    import("gsap").then((gsapModule) => {
      const gsap = gsapModule.default;
      gsap.to(glowRef.current, {
        x: mousePos.x * -30,
        y: mousePos.y * -30,
        duration: 1.5,
        ease: "power2.out",
      });
      gsap.to(textRef.current, {
        x: mousePos.x * -15,
        y: mousePos.y * -15,
        duration: 1.5,
        ease: "power2.out",
      });
    });
  }, [mousePos, gsapReady]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Layer 1: Crimson radial glow */}
      <motion.div
        ref={glowRef}
        className="absolute z-[1] w-[600px] md:w-[800px] h-[600px] md:h-[800px] rounded-full opacity-30 animate-[glowPulse_3s_ease-in-out_infinite]"
        style={{
          background: "radial-gradient(circle, rgba(229,9,20,0.4) 0%, transparent 70%)",
          y: glowY,
        }}
      />

      {/* Layer 2: Massive display text */}
      <motion.div
        ref={textRef}
        className="relative z-[2] text-center px-4"
        style={{ y: textY, opacity }}
      >
        <motion.p
          className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-text-secondary mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Full-Stack Developer — Dhaka, Bangladesh
        </motion.p>

        <motion.h1
          className="font-[var(--font-syne)] text-[clamp(4rem,10vw,12rem)] font-extrabold text-text-primary tracking-tight"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          PRINCE
        </motion.h1>

        <motion.p
          className="text-[clamp(1rem,1.2vw,1.125rem)] text-text-secondary max-w-xl mx-auto mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Building modern web applications with React, TypeScript, Node.js & Python.
          Turning complex problems into elegant solutions.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-accent text-white font-mono text-[0.625rem] uppercase tracking-[0.25em] rounded-full hover:bg-accent-hover transition-colors duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-border text-text-primary font-mono text-[0.625rem] uppercase tracking-[0.25em] rounded-full hover:border-accent transition-colors duration-300"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[4]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-border rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div className="w-1 h-2 bg-accent rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}
