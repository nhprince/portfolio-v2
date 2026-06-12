'use client'

import { useRef, useEffect } from 'react'

const EXPERIENCE_ENTRIES = [
  {
    period: '2023 – 2025',
    company: 'Stuck Studio Agency',
    location: 'Dhaka',
    role: 'Senior Frontend Developer & UI/UX Designer',
    bullets: [
      'Led the redesign of 12+ client-facing web applications, improving average page load speeds by 45% through code splitting, lazy loading, and asset optimisation.',
      'Architected a reusable component library in React and TypeScript that reduced new feature development time by 35% across three concurrent projects.',
      'Collaborated closely with UX researchers to translate Figma prototypes into pixel-perfect, accessible interfaces meeting WCAG 2.1 AA standards.',
      'Mentored 4 junior developers through code reviews, pair programming sessions, and weekly technical workshops on modern frontend patterns.',
      'Integrated headless CMS solutions (Contentful, Sanity) and GraphQL APIs, enabling marketing teams to ship content updates independently.',
    ],
  },
  {
    period: '2021 – Present',
    company: 'Independent Freelance',
    location: 'Remote',
    role: 'Developer & Designer',
    bullets: [
      'Delivered 30+ full-stack projects for clients across 8 countries, spanning e-commerce, SaaS dashboards, and portfolio platforms.',
      'Designed and developed end-to-end solutions — from brand identity and UI mockups in Figma to production deployments on Vercel and AWS.',
      'Built custom WordPress themes and Shopify stores that generated over $200K in combined client revenue within the first quarter.',
      'Maintained a 5-star average rating across freelance platforms by shipping on scope, on budget, and ahead of deadline.',
    ],
  },
]

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const card1Ref = useRef<HTMLDivElement>(null)
  const card2Ref = useRef<HTMLDivElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)
  const noteRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    let ctx: gsap.Context | undefined

    const init = async () => {
      const gsapModule = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      const gsapLib = gsapModule.gsap || gsapModule.default
      const gsapTyped = gsapLib as typeof import('gsap').default

      gsapTyped.registerPlugin(ScrollTrigger)

      ctx = gsapTyped.context(() => {
        // Header entrance
        gsapTyped.fromTo(
          headerRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              end: 'top 60%',
              scrub: 0.5,
            },
          }
        )

        // Card 1 — comes from left on desktop
        gsapTyped.fromTo(
          card1Ref.current,
          { opacity: 0, x: -80, y: 30 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card1Ref.current,
              start: 'top 80%',
              end: 'top 55%',
              scrub: 0.5,
            },
          }
        )

        // Card 2 — comes from right on desktop
        gsapTyped.fromTo(
          card2Ref.current,
          { opacity: 0, x: 80, y: 30 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card2Ref.current,
              start: 'top 80%',
              end: 'top 55%',
              scrub: 0.5,
            },
          }
        )

        // Education card
        gsapTyped.fromTo(
          educationRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: educationRef.current,
              start: 'top 82%',
              end: 'top 58%',
              scrub: 0.5,
            },
          }
        )

        // Note
        gsapTyped.fromTo(
          noteRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: noteRef.current,
              start: 'top 88%',
              end: 'top 65%',
              scrub: 0.5,
            },
          }
        )
      }, sectionRef)
    }

    init()

    return () => {
      ctx?.revert()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id='experience'
      className='relative py-24 md:py-32'
      style={{ backgroundColor: '#f0edf8' }}
    >
      <div
        className='mx-auto px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24'
        style={{ maxWidth: '1560px' }}
      >
        {/* ─── Header ─── */}
        <div ref={headerRef} className='mb-16 md:mb-20'>
          <span
            className='inline-block font-mono text-xs tracking-[0.25em] uppercase mb-4'
            style={{ color: '#7c3aed' }}
          >
            03 — EXPERIENCE
          </span>
          <h2 className='font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary'>
            WHERE I&apos;VE WORKED.
          </h2>
        </div>

        {/* ─── Timeline ─── */}
        <div className='relative'>
          {/* Vertical line — left on desktop, centre on mobile */}
          <div
            className='absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-[0.5px]'
            style={{
              background:
                'linear-gradient(180deg, rgba(124, 58, 237, 0) 0%, rgba(124, 58, 237, 0.3) 15%, rgba(124, 58, 237, 0.3) 85%, rgba(124, 58, 237, 0) 100%)',
            }}
            aria-hidden='true'
          />

          {/* ─── Experience Cards ─── */}
          <div className='flex flex-col gap-12 md:gap-16'>
            {/* Card 1 — left on desktop */}
            <div
              ref={card1Ref}
              className='relative pl-12 md:pl-0 md:w-[calc(50%-32px)] md:mr-auto'
            >
              {/* Dot on timeline */}
              <div
                className='absolute left-[11px] md:left-auto md:right-[-39px] top-8 w-[10px] h-[10px] md:w-3 md:h-3 rounded-full'
                style={{
                  background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                  boxShadow: '0 0 12px rgba(124, 58, 237, 0.45)',
                }}
                aria-hidden='true'
              />

              <div className='glass-card p-6 md:p-8'>
                <div className='flex flex-col gap-1 mb-4'>
                  <span
                    className='font-mono text-xs tracking-wider uppercase'
                    style={{ color: '#7c3aed' }}
                  >
                    {EXPERIENCE_ENTRIES[0].period}
                  </span>
                  <h3
                    className='font-display text-xl md:text-2xl font-bold'
                    style={{ color: '#0c0a1a' }}
                  >
                    {EXPERIENCE_ENTRIES[0].company}
                  </h3>
                  <span
                    className='text-sm font-medium'
                    style={{ color: '#4a4060' }}
                  >
                    {EXPERIENCE_ENTRIES[0].role} · {EXPERIENCE_ENTRIES[0].location}
                  </span>
                </div>
                <ul className='flex flex-col gap-3'>
                  {EXPERIENCE_ENTRIES[0].bullets.map((bullet, i) => (
                    <li key={i} className='flex gap-3'>
                      <span
                        className='mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0'
                        style={{
                          background:
                            'linear-gradient(135deg, #7c3aed, #ec4899)',
                        }}
                        aria-hidden='true'
                      />
                      <span
                        className='text-sm md:text-base leading-relaxed'
                        style={{ color: '#4a4060' }}
                      >
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 2 — right on desktop */}
            <div
              ref={card2Ref}
              className='relative pl-12 md:pl-0 md:w-[calc(50%-32px)] md:ml-auto'
            >
              {/* Dot on timeline */}
              <div
                className='absolute left-[11px] md:left-[-39px] top-8 w-[10px] h-[10px] md:w-3 md:h-3 rounded-full'
                style={{
                  background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                  boxShadow: '0 0 12px rgba(124, 58, 237, 0.45)',
                }}
                aria-hidden='true'
              />

              <div className='glass-card p-6 md:p-8'>
                <div className='flex flex-col gap-1 mb-4'>
                  <span
                    className='font-mono text-xs tracking-wider uppercase'
                    style={{ color: '#7c3aed' }}
                  >
                    {EXPERIENCE_ENTRIES[1].period}
                  </span>
                  <h3
                    className='font-display text-xl md:text-2xl font-bold'
                    style={{ color: '#0c0a1a' }}
                  >
                    {EXPERIENCE_ENTRIES[1].company}
                  </h3>
                  <span
                    className='text-sm font-medium'
                    style={{ color: '#4a4060' }}
                  >
                    {EXPERIENCE_ENTRIES[1].role} · {EXPERIENCE_ENTRIES[1].location}
                  </span>
                </div>
                <ul className='flex flex-col gap-3'>
                  {EXPERIENCE_ENTRIES[1].bullets.map((bullet, i) => (
                    <li key={i} className='flex gap-3'>
                      <span
                        className='mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0'
                        style={{
                          background:
                            'linear-gradient(135deg, #7c3aed, #ec4899)',
                        }}
                        aria-hidden='true'
                      />
                      <span
                        className='text-sm md:text-base leading-relaxed'
                        style={{ color: '#4a4060' }}
                      >
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Education Card ─── */}
        <div
          ref={educationRef}
          className='mt-16 md:mt-20 ml-12 md:ml-0 flex justify-center'
        >
          <div className='glass-card p-6 md:p-8 w-full max-w-xl text-center'>
            <span
              className='inline-block font-mono text-xs tracking-[0.2em] uppercase mb-3'
              style={{ color: '#7c3aed' }}
            >
              EDUCATION
            </span>
            <h3
              className='font-display text-xl md:text-2xl font-bold mb-3'
              style={{ color: '#0c0a1a' }}
            >
              Govt. Shahid Suhrawardy College
            </h3>
            <div className='flex flex-col gap-1'>
              <p
                className='text-sm md:text-base font-medium'
                style={{ color: '#4a4060' }}
              >
                HSC · In Progress · Expected 2027
              </p>
              <p
                className='text-sm md:text-base font-medium'
                style={{ color: '#4a4060' }}
              >
                SSC · Dhaka Board · 2025
              </p>
            </div>
          </div>
        </div>

        {/* ─── Footnote ─── */}
        <p
          ref={noteRef}
          className='mt-12 md:mt-16 text-center font-mono text-xs md:text-sm tracking-wide px-4'
          style={{ color: '#9b90b8' }}
        >
          4 years of shipping real products while finishing school. The projects
          above are live — feel free to open any link.
        </p>
      </div>
    </section>
  )
}
