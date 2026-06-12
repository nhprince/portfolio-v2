"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, type Easing } from "framer-motion";

const NAV_LINKS = [
  { label: "WORK", href: "#projects" },
  { label: "ABOUT", href: "#about" },
  { label: "BLOG", href: "#blog" },
  { label: "CONTACT", href: "#contact" },
] as const;

const navContainer = {
  hidden: { y: "-100%" },
  visible: {
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as Easing },
  },
};

const mobileMenuContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, staggerChildren: 0.08, delayChildren: 0.15 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25, staggerChildren: 0.04, staggerDirection: -1 },
  },
};

const mobileLinkItem = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as Easing },
  },
  exit: {
    y: 20,
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll listener — toggle glass after 80px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body scroll lock
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <motion.nav
        variants={navContainer}
        initial="hidden"
        animate="visible"
        className="fixed top-0 left-0 right-0 z-50 w-full h-16 md:h-20"
        style={{
          backgroundColor: scrolled
            ? "rgba(255, 255, 255, 0.78)"
            : "transparent",
          backdropFilter: scrolled ? "blur(32px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(32px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(200, 190, 240, 0.40)"
            : "1px solid transparent",
          transition:
            "background-color 0.4s ease, backdrop-filter 0.4s ease, border-bottom 0.4s ease",
        }}
      >
        <div className="max-w-[1560px] mx-auto px-[var(--container-pad)] h-full flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-1 select-none">
            <span
              className="text-2xl font-bold font-[family-name:var(--font-display)]"
              style={{
                background:
                  "linear-gradient(135deg, #7c3aed, #a855f7, #ec4899)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              P.
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-secondary hover:text-[var(--accent-from)] uppercase transition-colors duration-200"
                style={{
                  fontSize: "0.85rem",
                  letterSpacing: "0.08em",
                }}
              >
                {label}
              </a>
            ))}

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background: "rgba(255, 255, 255, 0.55)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255, 255, 255, 0.75)",
                boxShadow:
                  "0 8px 32px rgba(100, 80, 200, 0.12), 0 1px 2px rgba(100, 80, 200, 0.08)",
                color: "var(--accent-from)",
              }}
            >
              Get in Touch →
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden relative flex flex-col items-center justify-center w-10 h-10 rounded-lg"
            style={{
              background: "rgba(255, 255, 255, 0.55)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255, 255, 255, 0.75)",
            }}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {/* Top bar */}
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: 45, y: 6, width: 20 }
                  : { rotate: 0, y: -5, width: 20 }
              }
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as Easing }}
              className="block h-[2px] rounded-full"
              style={{ background: "var(--text-primary)" }}
            />
            {/* Middle bar */}
            <motion.span
              animate={
                mobileOpen
                  ? { opacity: 0, scaleX: 0 }
                  : { opacity: 1, scaleX: 1 }
              }
              transition={{ duration: 0.2 }}
              className="block h-[2px] rounded-full"
              style={{ background: "var(--text-primary)" }}
            />
            {/* Bottom bar */}
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: -45, y: -6, width: 20 }
                  : { rotate: 0, y: 5, width: 20 }
              }
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as Easing }}
              className="block h-[2px] rounded-full"
              style={{ background: "var(--text-primary)" }}
            />
          </button>
        </div>
      </motion.nav>

      {/* ─── Mobile Menu Overlay ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={mobileMenuContainer}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{
              background: "rgba(255, 255, 255, 0.78)",
              backdropFilter: "blur(40px)",
              WebkitBackdropFilter: "blur(40px)",
              border: "1px solid rgba(255, 255, 255, 0.75)",
            }}
          >
            <motion.div className="flex flex-col items-center gap-6">
              {NAV_LINKS.map(({ label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  variants={mobileLinkItem}
                  onClick={closeMobile}
                  className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] hover:text-[var(--accent-from)] transition-colors duration-200"
                  style={{ letterSpacing: "0.04em" }}
                >
                  {label}
                </motion.a>
              ))}
            </motion.div>

            <motion.a
              href="#contact"
              variants={mobileLinkItem}
              onClick={closeMobile}
              className="mt-10 inline-flex items-center gap-2 rounded-full px-8 py-3 text-lg font-semibold font-[family-name:var(--font-display)] transition-transform duration-200 hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, #7c3aed, #a855f7, #ec4899)",
                color: "#ffffff",
                boxShadow:
                  "0 12px 48px rgba(124, 58, 237, 0.35)",
              }}
            >
              Get in Touch →
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
