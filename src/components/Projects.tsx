'use client'

import { useState, useRef, useEffect, useMemo } from 'react'
import { AnimatePresence, motion, LayoutGroup } from 'framer-motion'
import { projects, categories, type Project } from '@/lib/projects'
import { gsap } from '@/lib/gsap'

/* ─── Gradient placeholder palettes (no Unsplash) ─── */
const GRADIENT_PALETTES = [
  'linear-gradient(135deg, #7c3aed 0%, #a855f7 40%, #ec4899 100%)',
  'linear-gradient(135deg, #06b6d4 0%, #7c3aed 50%, #a855f7 100%)',
  'linear-gradient(135deg, #f59e0b 0%, #ec4899 50%, #7c3aed 100%)',
  'linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)',
  'linear-gradient(135deg, #ec4899 0%, #f59e0b 100%)',
  'linear-gradient(135deg, #a855f7 0%, #06b6d4 50%, #7c3aed 100%)',
  'linear-gradient(135deg, #0c0a1a 0%, #7c3aed 60%, #ec4899 100%)',
  'linear-gradient(135deg, #7c3aed 0%, #ec4899 40%, #f59e0b 100%)',
  'linear-gradient(135deg, #4a4060 0%, #7c3aed 50%, #a855f7 100%)',
]

function projectGradient(id: string): string {
  let hash = 0
  for (let i = 0; i < id.length; i++) hash = id.charCodeAt(i) + ((hash << 5) - hash)
  return GRADIENT_PALETTES[Math.abs(hash) % GRADIENT_PALETTES.length]
}

/* ─── Gradient Placeholder ─── */
function GradientPlaceholder({ projectId, className }: { projectId: string; className?: string }) {
  return (
    <div
      className={className}
      style={{
        background: projectGradient(projectId),
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative shapes */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: '40%',
          height: '40%',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.12)',
          filter: 'blur(40px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '15%',
          width: '35%',
          height: '35%',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.08)',
          filter: 'blur(30px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60%',
          height: '60%',
          borderRadius: '24px',
          border: '1px solid rgba(255,255,255,0.15)',
          background: 'rgba(255,255,255,0.05)',
        }}
      />
    </div>
  )
}

/* ─── Featured Project Card ─── */
function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const isReversed = index % 2 !== 0

  return (
    <motion.div
      className="featured-card glass-card rounded-[32px] overflow-hidden relative"
      style={{ marginBottom: '3rem' }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
    >
      {/* Giant background number */}
      <span
        className="absolute top-0 font-extrabold leading-none select-none pointer-events-none z-0"
        style={{
          fontSize: 'clamp(8rem, 18vw, 22rem)',
          color: 'rgba(0,0,0,0.06)',
          ...(isReversed ? { left: '-2rem' } : { right: '-2rem' }),
          top: '-1rem',
          fontFamily: 'var(--font-display), sans-serif',
        }}
      >
        {project.number}
      </span>

      <div
        className={`relative z-10 flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
      >
        {/* Image area — 60% on desktop */}
        <div className="lg:w-[60%] relative" style={{ minHeight: '340px' }}>
          <GradientPlaceholder
            projectId={project.id}
            className="absolute inset-0 w-full h-full"
          />
          {/* Gradient overlay fading to glass bg */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to ${isReversed ? 'left' : 'bottom'}, rgba(240,237,248,0) 0%, rgba(240,237,248,0.6) 60%, rgba(240,237,248,1) 100%)`,
            }}
          />
        </div>

        {/* Content area — 40% on desktop */}
        <div className="lg:w-[40%] p-6 md:p-8 lg:p-10 flex flex-col justify-center">
          <span
            className="text-xs font-mono tracking-widest uppercase mb-3"
            style={{ color: 'var(--text-muted, #9b90b8)' }}
          >
            {project.tagline}
          </span>
          <h3
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4"
            style={{
              color: 'var(--text-primary, #0c0a1a)',
              fontFamily: 'var(--font-display), sans-serif',
            }}
          >
            {project.name}
          </h3>
          <p
            className="text-sm md:text-base leading-relaxed mb-6"
            style={{ color: 'var(--text-secondary, #4a4060)' }}
          >
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-3 py-1 rounded-full"
                style={{
                  background: 'rgba(124, 58, 237, 0.08)',
                  color: 'var(--accent-from, #7c3aed)',
                  border: '1px solid rgba(124, 58, 237, 0.15)',
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full text-white transition-transform hover:scale-105"
                style={{ background: 'var(--accent-gradient, linear-gradient(135deg, #7c3aed, #a855f7, #ec4899))' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-transform hover:scale-105"
                style={{
                  background: 'rgba(124, 58, 237, 0.08)',
                  color: 'var(--text-primary, #0c0a1a)',
                  border: '1px solid rgba(124, 58, 237, 0.2)',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Standard Project Card ─── */
function StandardCard({ project }: { project: Project }) {
  return (
    <motion.div
      className="glass-card rounded-[20px] overflow-hidden group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={{ y: -6 }}
    >
      {/* Image area */}
      <div className="relative" style={{ height: '200px' }}>
        <GradientPlaceholder
          projectId={project.id}
          className="absolute inset-0 w-full h-full"
        />
        {/* Overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3"
          style={{ background: 'rgba(12,10,26,0.5)', backdropFilter: 'blur(4px)' }}
        >
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110"
              style={{ background: 'var(--accent-gradient, linear-gradient(135deg, #7c3aed, #ec4899))' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110"
              style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <div className="flex items-center justify-between mb-2">
          <span
            className="text-xs font-mono tracking-wider"
            style={{ color: 'var(--text-muted, #9b90b8)' }}
          >
            {project.number}
          </span>
          <span
            className="text-xs font-mono px-2 py-0.5 rounded-full"
            style={{
              background: 'rgba(124, 58, 237, 0.08)',
              color: 'var(--accent-from, #7c3aed)',
            }}
          >
            {project.category}
          </span>
        </div>
        <h3
          className="text-lg font-bold mb-2"
          style={{
            color: 'var(--text-primary, #0c0a1a)',
            fontFamily: 'var(--font-display), sans-serif',
          }}
        >
          {project.name}
        </h3>
        <p
          className="text-sm leading-relaxed mb-4 line-clamp-2"
          style={{ color: 'var(--text-secondary, #4a4060)' }}
        >
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2 py-0.5 rounded-full"
              style={{
                background: 'rgba(124, 58, 237, 0.06)',
                color: 'var(--text-muted, #9b90b8)',
                border: '1px solid rgba(124, 58, 237, 0.1)',
              }}
            >
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span
              className="text-xs font-mono px-2 py-0.5"
              style={{ color: 'var(--text-muted, #9b90b8)' }}
            >
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Main Projects Section ─── */
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const sectionRef = useRef<HTMLElement>(null)
  const featuredRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return projects
    return projects.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  const featured = useMemo(
    () => filtered.filter((p) => p.featured),
    [filtered]
  )
  const standard = useMemo(
    () => filtered.filter((p) => !p.featured),
    [filtered]
  )

  /* GSAP scroll-triggered entrance */
  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      /* Stagger featured cards */
      const featuredEls = sectionRef.current?.querySelectorAll('.featured-card')
      if (featuredEls?.length) {
        gsap.fromTo(
          featuredEls,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.2,
            scrollTrigger: {
              trigger: featuredEls[0] as HTMLElement,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      /* Stagger standard grid cards */
      const standardEls = sectionRef.current?.querySelectorAll('.standard-card')
      if (standardEls?.length) {
        gsap.fromTo(
          standardEls,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: standardEls[0] as HTMLElement,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [filtered])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 md:py-32"
      style={{ backgroundColor: '#f0edf8' }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: '1560px',
          paddingLeft: 'clamp(1.25rem, 4vw, 5rem)',
          paddingRight: 'clamp(1.25rem, 4vw, 5rem)',
        }}
      >
        {/* ─── Header ─── */}
        <div className="mb-12 md:mb-16">
          <span
            className="text-xs font-mono tracking-[0.2em] uppercase block mb-3"
            style={{ color: 'var(--text-muted, #9b90b8)' }}
          >
            01 — SELECTED WORK
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6"
            style={{
              color: 'var(--text-primary, #0c0a1a)',
              fontFamily: 'var(--font-display), sans-serif',
            }}
          >
            PROJECTS
          </h2>
        </div>

        {/* ─── Filter Tabs ─── */}
        <LayoutGroup>
          <div
            className="flex flex-wrap gap-2 mb-12 md:mb-16"
            role="tablist"
            aria-label="Filter projects by category"
          >
            <AnimatePresence mode="popLayout">
              {categories.map((cat) => {
                const isActive = activeCategory === cat
                return (
                  <motion.button
                    key={cat}
                    layout
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(cat)}
                    className="relative text-xs font-mono tracking-wider uppercase px-5 py-2.5 rounded-full cursor-pointer transition-colors duration-200"
                    style={{
                      background: isActive
                        ? 'var(--accent-gradient, linear-gradient(135deg, #7c3aed, #a855f7, #ec4899))'
                        : 'var(--glass-bg, rgba(255,255,255,0.55))',
                      backdropFilter: isActive ? 'none' : 'blur(24px)',
                      WebkitBackdropFilter: isActive ? 'none' : 'blur(24px)',
                      border: isActive
                        ? '1px solid transparent'
                        : '1px solid var(--glass-border, rgba(255,255,255,0.75))',
                      color: isActive
                        ? '#ffffff'
                        : 'var(--text-secondary, #4a4060)',
                      boxShadow: isActive
                        ? '0 4px 20px rgba(124, 58, 237, 0.35)'
                        : 'var(--glass-shadow, 0 8px 32px rgba(100,80,200,0.12))',
                    }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    initial={false}
                    animate={{ opacity: 1 }}
                    transition={{ layout: { type: 'spring', stiffness: 500, damping: 35 } }}
                  >
                    {cat}
                  </motion.button>
                )
              })}
            </AnimatePresence>
          </div>
        </LayoutGroup>

        {/* ─── Featured Projects ─── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`featured-${activeCategory}`}
            ref={featuredRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {featured.map((project, i) => (
              <FeaturedCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ─── Standard Projects Grid ─── */}
        {standard.length > 0 && (
          <AnimatePresence mode="wait">
            <motion.div
              key={`standard-${activeCategory}`}
              ref={gridRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {standard.map((project) => (
                <div key={project.id} className="standard-card">
                  <StandardCard project={project} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <p
              className="text-lg font-mono"
              style={{ color: 'var(--text-muted, #9b90b8)' }}
            >
              No projects in this category yet.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
