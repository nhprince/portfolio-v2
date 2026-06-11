"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-bg/80 backdrop-blur-md border-b border-border" : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="container-main flex items-center justify-between h-16 md:h-20">
          <a href="#" className="font-display text-xl text-text-primary tracking-tight">
            P.
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-meta text-text-secondary hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/nhprince"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-meta text-text-secondary hover:text-accent transition-colors duration-300"
            >
              GitHub
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={cn("w-6 h-0.5 bg-text-primary transition-all duration-300", mobileOpen && "rotate-45 translate-y-2")} />
            <span className={cn("w-6 h-0.5 bg-text-primary transition-all duration-300", mobileOpen && "opacity-0")} />
            <span className={cn("w-6 h-0.5 bg-text-primary transition-all duration-300", mobileOpen && "-rotate-45 -translate-y-2")} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-display text-h3 text-text-primary hover:text-accent transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/nhprince"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-meta text-text-secondary hover:text-accent transition-colors"
            >
              GitHub
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
