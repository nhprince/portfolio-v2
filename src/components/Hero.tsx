'use client'

import { useRef, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const Hero3DScene = dynamic(() => import('./Hero3DScene'), { ssr: false })

const TECH_STACK = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'GraphQL',
  'PostgreSQL',
  'Docker',
  'AWS',
  'TailwindCSS',
  'Prisma',
  'Redis',
  'tRPC',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'GraphQL',
  'PostgreSQL',
  'Docker',
  'AWS',
  'TailwindCSS',
  'Prisma',
  'Redis',
  'tRPC',
]

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const orbVioletRef = useRef<HTMLDivElement>(null)
  const orbPinkRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    let ctx: gsap.Context | undefined

    if (typeof window === 'undefined') return

    import('gsap').then((gsapModule) => {
      const gsapLib = gsapModule.gsap || gsapModule.default
      const gsapTyped = gsapLib as typeof import('gsap').default

      ctx = gsapTyped.context(() => {
        // Entrance animations
        const tl = gsapTyped.timeline({ defaults: { ease: 'power3.out' } })

        tl.fromTo(
          contentRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1.2 }
        )
          .fromTo(
            '.hero-eyebrow',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6 },
            '-=0.8'
          )
          .fromTo(
            '.hero-name-line',
            { opacity: 0, y: 60, skewY: 3 },
            { opacity: 1, y: 0, skewY: 0, duration: 0.8, stagger: 0.15 },
            '-=0.6'
          )
          .fromTo(
            '.hero-subtitle',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6 },
            '-=0.4'
          )
          .fromTo(
            '.hero-cta',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
            '-=0.3'
          )
          .fromTo(
            '.hero-decor',
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 0.6, stagger: 0.1 },
            '-=0.3'
          )
          .fromTo(
            '.scroll-indicator',
            { opacity: 0, y: -10 },
            { opacity: 1, y: 0, duration: 0.5 },
            '-=0.2'
          )

        // Scroll indicator bounce
        gsapTyped.to('.scroll-wheel', {
          y: 6,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        })

        // Scroll indicator fade out on scroll
        if (sectionRef.current) {
          gsapTyped.to('.scroll-indicator', {
            opacity: 0,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 10%',
              end: 'top -10%',
              scrub: true,
            },
          })
        }
      }, sectionRef)
    })

    return () => {
      ctx?.revert()
    }
  }, [])

  // Mouse parallax for orbs
  useEffect(() => {
    let ctx: gsap.Context | undefined

    if (typeof window === 'undefined') return

    import('gsap').then((gsapModule) => {
      const gsapLib = gsapModule.gsap || gsapModule.default
      const gsapTyped = gsapLib as typeof import('gsap').default

      ctx = gsapTyped.context(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const { innerWidth, innerHeight } = window
          const xRatio = (e.clientX / innerWidth - 0.5) * 2
          const yRatio = (e.clientY / innerHeight - 0.5) * 2

          if (orbVioletRef.current) {
            gsapTyped.to(orbVioletRef.current, {
              x: xRatio * 80,
              y: yRatio * 50,
              duration: 0.8,
              ease: 'power2.out',
            })
          }

          if (orbPinkRef.current) {
            gsapTyped.to(orbPinkRef.current, {
              x: xRatio * -60,
              y: yRatio * -40,
              duration: 1,
              ease: 'power2.out',
            })
          }
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
          window.removeEventListener('mousemove', handleMouseMove)
        }
      }, orbVioletRef)
    })

    return () => {
      ctx?.revert()
    }
  }, [])

  const glassPill: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.55)',
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
    border: '1px solid rgba(255, 255, 255, 0.75)',
    boxShadow: '0 8px 32px rgba(100, 80, 200, 0.12)',
    borderRadius: '9999px',
  }

  const gradientBg: React.CSSProperties = {
    background: 'linear-gradient(135deg, #7c3aed, #a855f7, #ec4899)',
  }

  return (
    <section
      ref={sectionRef}
      className='relative h-screen w-full overflow-hidden bg-[#f0edf8]'
      style={{ zIndex: 1 }}
    >
      {/* ─── Layer 1: Background Orbs (z-0) ─── */}
      <div className='absolute inset-0 z-0' aria-hidden='true'>
        {/* Violet orb - top-left area */}
        <div
          ref={orbVioletRef}
          className='absolute'
          style={{
            width: 'min(50vw, 700px)',
            height: 'min(50vw, 700px)',
            top: '-10%',
            left: '5%',
            background:
              'radial-gradient(circle, rgba(124, 58, 237, 0.35) 0%, rgba(168, 85, 247, 0.15) 50%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            willChange: 'transform',
          }}
        />
        {/* Pink orb - center-right area */}
        <div
          ref={orbPinkRef}
          className='absolute'
          style={{
            width: 'min(45vw, 600px)',
            height: 'min(45vw, 600px)',
            top: '30%',
            right: '5%',
            background:
              'radial-gradient(circle, rgba(236, 72, 153, 0.35) 0%, rgba(168, 85, 247, 0.15) 50%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            willChange: 'transform',
          }}
        />
      </div>

      {/* ─── Layer 2: Text Content (z-10) ─── */}
      <div
        ref={contentRef}
        className='absolute inset-0 z-10 flex items-center'
      >
        <div
          className='w-full px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24'
          style={{ maxWidth: 'var(--container-max, 1560px)', margin: '0 auto' }}
        >
          <div className='w-full md:w-[60%]'>
            {/* Eyebrow Badge */}
            <div
              className='hero-eyebrow inline-flex items-center gap-2 px-4 py-2 mb-8'
              style={{
                ...glassPill,
                opacity: 0,
              }}
            >
              <span
                className='w-2 h-2 rounded-full animate-pulse flex-shrink-0'
                style={{ backgroundColor: '#22c55e' }}
              />
              <span
                className='font-mono text-xs font-medium tracking-widest uppercase'
                style={{ color: '#22c55e', fontSize: 'var(--text-xs, 0.75rem)' }}
              >
                ◉ Available for Work
              </span>
            </div>

            {/* Name */}
            <div className='mb-2'>
              <h1
                className='hero-name-line font-display font-extrabold leading-none tracking-tight'
                style={{
                  fontSize: 'clamp(6rem, 12vw, 16rem)',
                  color: '#0c0a1a',
                  lineHeight: '0.9',
                  opacity: 0,
                }}
              >
                NH PRINCE
              </h1>
              <h1
                className='hero-name-line font-display font-extrabold leading-none tracking-tight'
                style={{
                  fontSize: 'clamp(6rem, 12vw, 16rem)',
                  background: 'linear-gradient(135deg, #7c3aed, #a855f7, #ec4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: '0.9',
                  opacity: 0,
                }}
              >
                PRODHAN
              </h1>
            </div>

            {/* Subtitle */}
            <div className='mb-8'>
              <span
                hero-subtitle
                className='hero-subtitle font-display font-medium tracking-wide'
                style={{
                  fontSize: 'var(--text-xl, 1.25rem)',
                  color: '#4a4060',
                  opacity: 0,
                }}
              >
                Full-Stack Developer
              </span>
            </div>

            {/* CTAs */}
            <div className='flex flex-wrap gap-4'>
              <a
                href='#projects'
                className='hero-cta inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white transition-transform hover:scale-105 active:scale-95'
                style={{
                  ...gradientBg,
                  boxShadow: '0 8px 32px rgba(124, 58, 237, 0.35)',
                  fontSize: 'var(--text-base, 1rem)',
                  opacity: 0,
                }}
              >
                View Work →
              </a>
              <a
                href='#contact'
                className='hero-cta inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold transition-transform hover:scale-105 active:scale-95'
                style={{
                  background: 'rgba(255, 255, 255, 0.55)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid rgba(124, 58, 237, 0.3)',
                  color: '#0c0a1a',
                  boxShadow: '0 8px 32px rgba(100, 80, 200, 0.12)',
                  fontSize: 'var(--text-base, 1rem)',
                  opacity: 0,
                }}
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Layer 3: 3D Scene (z-10, right side) ─── */}
      {!isMobile && (
        <div className='absolute inset-0 z-10 pointer-events-none md:flex'>
          <div
            className='ml-auto pointer-events-auto'
            style={{
              width: '40%',
              height: '100%',
            }}
          >
            <Hero3DScene />
          </div>
        </div>
      )}

      {/* ─── Decorative Glass Cards ─── */}
      {/* Top-left location badge */}
      <div
        className='hero-decor absolute z-20 hidden md:flex items-center gap-2 px-4 py-2'
        style={{
          ...glassPill,
          top: '12%',
          left: '8%',
          opacity: 0,
        }}
      >
        <svg
          className='w-4 h-4 flex-shrink-0'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
          />
        </svg>
        <span
          className='font-mono text-xs font-medium tracking-wider whitespace-nowrap'
          style={{ color: '#4a4060' }}
        >
          BASED IN DHAKA, BD
        </span>
      </div>

      {/* Bottom-right decor badge */}
      <div
        className='hero-decor absolute z-20 hidden md:flex items-center gap-2 px-4 py-2'
        style={{
          ...glassPill,
          bottom: '25%',
          right: '38%',
          opacity: 0,
        }}
      >
        <span
          className='font-mono text-xs font-medium tracking-wider whitespace-nowrap'
          style={{ color: '#4a4060' }}
        >
          Building Digital Experiences
        </span>
      </div>

      {/* ─── Scroll Indicator ─── */}
      <div
        className='scroll-indicator absolute bottom-8 left-1/2 z-20 flex flex-col items-center gap-2 -translate-x-1/2'
      >
        <div
          className='flex flex-col items-center justify-center w-6 h-10 rounded-full border-2'
          style={{ borderColor: 'rgba(100, 80, 200, 0.3)' }}
        >
          <div
            className='scroll-wheel w-1.5 h-3 rounded-full'
            style={{
              background: 'linear-gradient(180deg, #7c3aed, #ec4899)',
            }}
          />
        </div>
        <span
          className='font-mono text-[10px] tracking-widest uppercase'
          style={{ color: '#9b90b8' }}
        >
          Scroll
        </span>
      </div>

      {/* ─── Tech Marquee ─── */}
      <div
        className='absolute bottom-0 left-0 right-0 z-20 overflow-hidden'
        style={{
          background: 'rgba(255, 255, 255, 0.35)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderTop: '1px solid rgba(255, 255, 255, 0.6)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.6)',
          padding: '10px 0',
        }}
      >
        <div className='flex animate-scroll-x whitespace-nowrap will-change-transform'>
          {TECH_STACK.map((tech, i) => (
            <span
              key={i}
              className='inline-flex items-center mx-6 font-mono text-sm font-medium tracking-wider'
              style={{ color: '#4a4060' }}
            >
              {tech}
              <span
                className='ml-6 w-1.5 h-1.5 rounded-full opacity-40'
                style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
