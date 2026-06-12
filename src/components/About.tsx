'use client'

import { useRef, useEffect } from 'react'

const BIO_PARAGRAPHS = [
  "I'm a full-stack developer based in Dhaka, Bangladesh, with a passion for crafting performant, pixel-perfect web experiences. With over 4 years of hands-on coding experience, I specialize in building end-to-end applications — from intuitive front-end interfaces backed by modern frameworks to robust, scalable server-side architectures.",
  "My approach blends clean, maintainable code with thoughtful design. I believe great software lives at the intersection of engineering discipline and creative problem-solving. Whether it's architecting a real-time data pipeline, optimizing a React render cycle down to the millisecond, or designing a database schema that scales — I dive deep into every layer of the stack.",
  "When I'm not shipping code, I'm exploring new tools, contributing to open-source projects, and writing about what I learn. I'm currently focused on high-performance web applications, developer tooling, and AI-integrated product experiences. Always building. Always learning."
]

const STATS = [
  { number: '4+', label: 'YRS CODING' },
  { number: '10+', label: 'LIVE PROJECTS' },
  { number: '50+', label: 'GITHUB REPOS' },
]

const SKILLS = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'GSAP'],
  Backend: ['Node.js', 'GraphQL', 'tRPC', 'Prisma', 'Redis'],
  Database: ['PostgreSQL', 'MongoDB', 'MySQL'],
  Tools: ['Docker', 'AWS', 'Git', 'CI/CD'],
  Languages: ['TypeScript', 'Python', 'Go', 'Rust'],
}

const GLASS_CARD: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.55)',
  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
  border: '1px solid rgba(255, 255, 255, 0.75)',
  boxShadow: '0 8px 32px rgba(100, 80, 200, 0.12)',
}

const GLASS_PILL: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.45)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  border: '1px solid rgba(255, 255, 255, 0.65)',
  boxShadow: '0 4px 16px rgba(100, 80, 200, 0.08)',
  borderRadius: '9999px',
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftColRef = useRef<HTMLDivElement>(null)
  const rightColRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: gsap.Context | undefined

    if (typeof window === 'undefined') return

    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(
      ([gsapModule, scrollTriggerModule]) => {
        const gsapLib = gsapModule.gsap || gsapModule.default
        const gsapTyped = gsapLib as typeof import('gsap').default
        const ScrollTrigger = scrollTriggerModule.default || scrollTriggerModule

        gsapTyped.registerPlugin(ScrollTrigger)

        ctx = gsapTyped.context(() => {
          gsapTyped.fromTo(
            leftColRef.current,
            { x: -120, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 70%',
                toggleActions: 'play none none reverse',
              },
            }
          )

          gsapTyped.fromTo(
            rightColRef.current,
            { x: 120, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 70%',
                toggleActions: 'play none none reverse',
              },
            }
          )
        }, sectionRef)
      }
    )

    return () => {
      ctx?.revert()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id='about'
      className='py-24 md:py-32'
      style={{ backgroundColor: '#f5f3fa' }}
    >
      <div
        className='mx-auto px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24'
        style={{ maxWidth: '1560px' }}
      >
        {/* ─── Section Header ─── */}
        <div className='mb-16 md:mb-20'>
          <span
            className='font-mono font-medium tracking-widest uppercase block mb-4'
            style={{
              fontSize: '0.6875rem',
              color: '#7c3aed',
              letterSpacing: '0.2em',
            }}
          >
            02 — ABOUT
          </span>
          <h2
            className='font-display font-bold leading-tight tracking-tight'
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              color: '#0c0a1a',
            }}
          >
            I{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #a855f7, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              BUILD.
            </span>
          </h2>
        </div>

        {/* ─── Two-Column Grid ─── */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16'>
          {/* ════════ LEFT COLUMN ════════ */}
          <div ref={leftColRef} style={{ opacity: 0 }}>
            {/* Portrait Area */}
            <div
              className='relative rounded-2xl overflow-hidden mb-8'
              style={{
                border: '1px solid rgba(255, 255, 255, 0.5)',
                aspectRatio: '4 / 5',
                maxHeight: '520px',
              }}
            >
              {/* Gradient Placeholder */}
              <div
                className='absolute inset-0'
                style={{
                  background:
                    'linear-gradient(160deg, #7c3aed 0%, #a855f7 35%, #d946ef 65%, #ec4899 100%)',
                }}
              />
              {/* Subtle noise texture overlay */}
              <div
                className='absolute inset-0'
                style={{
                  background:
                    'radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.15) 0%, transparent 50%)',
                }}
              />

              {/* Name Overlay */}
              <div
                className='absolute inset-0 flex flex-col justify-end p-6 md:p-8'
                style={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
                }}
              >
                <h3
                  className='font-bold mb-1'
                  style={{
                    fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                    color: '#ffffff',
                  }}
                >
                  NH Prince Prodhan
                </h3>
                <span
                  className='font-mono font-medium tracking-wider uppercase mb-1'
                  style={{
                    fontSize: '0.6875rem',
                    color: '#c4b5fd',
                    letterSpacing: '0.15em',
                  }}
                >
                  Full-Stack Developer
                </span>
                <span
                  className='font-medium'
                  style={{
                    fontSize: '0.875rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                  }}
                >
                  Dhaka, Bangladesh
                </span>
              </div>
            </div>

            {/* Bio Paragraphs */}
            <div className='space-y-5'>
              {BIO_PARAGRAPHS.map((text, i) => (
                <p
                  key={i}
                  className='leading-relaxed'
                  style={{
                    fontSize: '0.9375rem',
                    color: '#4a4060',
                    lineHeight: '1.75',
                  }}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>

          {/* ════════ RIGHT COLUMN ════════ */}
          <div ref={rightColRef} style={{ opacity: 0 }}>
            {/* Glass Card */}
            <div
              className='rounded-2xl p-8 md:p-10'
              style={GLASS_CARD}
            >
              {/* Stat Grid */}
              <div className='grid grid-cols-3 gap-6 mb-8'>
                {STATS.map((stat) => (
                  <div key={stat.label} className='text-center'>
                    <div
                      className='font-display font-bold mb-1'
                      style={{
                        fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                        background:
                          'linear-gradient(135deg, #7c3aed, #a855f7, #ec4899)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {stat.number}
                    </div>
                    <span
                      className='font-mono font-medium tracking-wider uppercase'
                      style={{
                        fontSize: '0.625rem',
                        color: '#9b90b8',
                        letterSpacing: '0.15em',
                      }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Location / Availability Row */}
              <div className='flex flex-wrap items-center gap-3 mb-8 pb-8' style={{ borderBottom: '1px solid rgba(124, 58, 237, 0.1)' }}>
                <span
                  className='inline-flex items-center gap-1.5 font-mono font-medium tracking-wider'
                  style={{ fontSize: '0.75rem', color: '#4a4060' }}
                >
                  <svg className='w-3.5 h-3.5' fill='none' viewBox='0 0 24 24' stroke='#7c3aed' strokeWidth={2}>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                    <path strokeLinecap='round' strokeLinejoin='round' d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                  </svg>
                  Dhaka, BD
                </span>
                <span className='w-1 h-1 rounded-full' style={{ backgroundColor: '#c4b5fd' }} />
                <span
                  className='inline-flex items-center gap-1.5 font-mono font-medium tracking-wider'
                  style={{ fontSize: '0.75rem', color: '#22c55e' }}
                >
                  <span className='w-1.5 h-1.5 rounded-full animate-pulse' style={{ backgroundColor: '#22c55e' }} />
                  Open to remote
                </span>
              </div>

              {/* Skills Grouped by Category */}
              <div className='space-y-5 mb-8 pb-8' style={{ borderBottom: '1px solid rgba(124, 58, 237, 0.1)' }}>
                {Object.entries(SKILLS).map(([category, skills]) => (
                  <div key={category}>
                    <span
                      className='font-mono font-medium tracking-wider uppercase block mb-2.5'
                      style={{
                        fontSize: '0.625rem',
                        color: '#9b90b8',
                        letterSpacing: '0.15em',
                      }}
                    >
                      {category}
                    </span>
                    <div className='flex flex-wrap gap-2'>
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className='inline-flex items-center px-3.5 py-1.5 font-medium'
                          style={{
                            ...GLASS_PILL,
                            fontSize: '0.8125rem',
                            color: '#0c0a1a',
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Currently Using */}
              <div>
                <span
                  className='font-mono font-medium tracking-wider uppercase block mb-3'
                  style={{
                    fontSize: '0.625rem',
                    color: '#9b90b8',
                    letterSpacing: '0.15em',
                  }}
                >
                  Currently Using
                </span>
                <div className='flex items-center gap-2 flex-wrap' style={{ color: '#4a4060' }}>
                  {['Arch Linux', 'VS Code', 'Figma', 'Claude AI'].map(
                    (tool, i, arr) => (
                      <span
                        key={tool}
                        className='inline-flex items-center font-medium'
                        style={{ fontSize: '0.875rem' }}
                      >
                        {tool}
                        {i < arr.length - 1 && (
                          <span
                            className='ml-2 w-1 h-1 rounded-full'
                            style={{ backgroundColor: '#c4b5fd' }}
                          />
                        )}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
