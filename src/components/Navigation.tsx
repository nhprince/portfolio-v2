"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollTo = useCallback((href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 w-full h-16 md:h-20 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.78)" : "transparent",
          backdropFilter: scrolled ? "blur(32px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(32px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(200, 190, 240, 0.4)" : "1px solid transparent",
        }}
      >
        <div
          className="max-w-[1560px] mx-auto px-[var(--container-pad)] h-full flex items-center justify-between"
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
            className="font-[family-name:var(--font-display)] text-2xl md:text-3xl tracking-wider select-none"
          >
            <span className="text-gradient">P</span>
            <span style={{ color: "var(--text-primary)" }}>.</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={label}
                onClick={() => scrollTo(href)}
                className="text-sm font-medium uppercase tracking-wider transition-colors duration-200 hover:text-[var(--accent-from)]"
                style={{ color: "var(--text-muted)" }}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background: "var(--accent-gradient)",
                boxShadow: "0 4px 20px rgba(124, 58, 237, 0.3)",
              }}
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden relative flex flex-col items-center justify-center w-10 h-10 rounded-lg glass"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="block w-5 h-[2px] rounded-full"
              style={{ background: "var(--text-primary)" }}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-[2px] rounded-full mt-1"
              style={{ background: "var(--text-primary)" }}
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 5 }}
              transition={{ duration: 0.3 }}
              className="block w-5 h-[2px] rounded-full mt-1"
              style={{ background: "var(--text-primary)" }}
            />
          </button>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] origin-left"
          style={{ scaleX, background: "var(--accent-gradient)" }}
        />
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(40px)",
              WebkitBackdropFilter: "blur(40px)",
            }}
          >
            <div className="flex flex-col items-center gap-6">
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.button
                  key={label}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  onClick={() => scrollTo(href)}
                  className="font-[family-name:var(--font-display)] text-3xl font-bold hover:text-[var(--accent-from)] transition-colors"
                  style={{ color: "var(--text-primary)" }}
                >
                  {label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
