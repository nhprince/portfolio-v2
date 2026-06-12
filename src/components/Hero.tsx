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

  // Dynamic GSAP import + ScrollTrigger registration
  useEffect(() => {
    import("gsap").then((gsapModule) => {
      const gsap = gsapModule.default;
      import("gsap/ScrollTrigger").then((ScrollTriggerModule) => {
        gsap.registerPlugin(ScrollTriggerModule.ScrollTrigger);
        setGsapReady(true);
      });
    });
  }, []);

  // Mouse tracking
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

  // GSAP mouse parallax on glow (x30) and text (x15)
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
      style={{ backgroundColor: "#0A0A0A" }}
    >
      {/* Layer 1 (z-10): Crimson radial glow with GSAP parallax */}
      <motion.div
        ref={glowRef}
        className="absolute z-10 w-[600px] md:w-[800px] h-[600px] md:h-[800px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(229,9,20,0.4) 0%, transparent 70%)",
          y: glowY,
          animation: "glowPulse 3s ease-in-out infinite",
        }}
      />

      {/* Layer 2 (z-20): Text content */}
      <motion.div
        ref={textRef}
        className="relative z-20 text-center px-4"
        style={{ y: textY, opacity }}
      >
        {/* Metadata */}
        <motion.p
          className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-mono mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          FULL-STACK DEVELOPER — DHAKA, BANGLADESH
        </motion.p>

        {/* Display name */}
        <motion.h1
          className="font-black text-white leading-none"
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "clamp(4rem, 12vw, 14rem)",
            textShadow: "0 0 80px rgba(229,9,20,0.3)",
          }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          PRINCE
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-neutral-400 max-w-xl mx-auto mt-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Building modern web applications with React, TypeScript, Node.js &
          Python. Turning complex problems into elegant solutions.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex gap-4 justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 text-white text-[10px] uppercase tracking-[0.2em] rounded-full transition-colors duration-300 font-mono font-semibold"
            style={{ backgroundColor: "#E50914" }}
          >
            VIEW MY WORK
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-neutral-600 text-white text-[10px] uppercase tracking-[0.2em] rounded-full hover:border-red-600 transition-colors duration-300 font-mono font-semibold"
          >
            GET IN TOUCH
          </a>
        </motion.div>
      </motion.div>

      {/* Layer 3 (z-30): Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border border-neutral-700 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full mt-2"
            style={{ backgroundColor: "#E50914" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
