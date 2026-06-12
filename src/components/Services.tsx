'use client'

import { useRef, useEffect } from 'react'

interface ServiceCard {
  number: string
  title: string
  description: string
  bullets: string[]
}

const SERVICES: ServiceCard[] = [
  {
    number: '01',
    title: 'WEB DEVELOPMENT',
    description:
      'Fast, accessible, and SEO-friendly web applications built with modern frameworks and best practices.',
    bullets: [
      'React, Next.js, and TypeScript for scalable frontends with server-side rendering and static generation.',
      'Performance budgets enforced from day one — Lighthouse scores above 95 on every project.',
      'Responsive layouts, dark mode, and accessibility baked in, not bolted on.',
    ],
  },
  {
    number: '02',
    title: 'UI/UX DESIGN + BUILD',
    description:
      'End-to-end design and development — from wireframes and prototypes to pixel-perfect production code.',
    bullets: [
      'User research, wireframing, and high-fidelity mockups in Figma before writing a single line of code.',
      'Design systems and component libraries that keep products consistent as they scale.',
      'Micro-interactions and motion design that make interfaces feel alive and intuitive.',
    ],
  },
  {
    number: '03',
    title: 'E-COMMERCE SYSTEMS',
    description:
      'Custom online stores and payment flows that convert visitors into customers and scale with demand.',
    bullets: [
      'Shopify, WooCommerce, and headless commerce builds tailored to each brand and product catalogue.',
      'Secure payment integration (Stripe, bKash, Nagad) with cart recovery and analytics tracking.',
      'Inventory management dashboards and automated order workflows to reduce manual overhead.',
    ],
  },
  {
    number: '04',
    title: 'AI INTEGRATION',
    description:
      'Practical AI features embedded into real products — chatbots, recommendations, and automation.',
    bullets: [
      'LLM-powered chatbots and assistants fine-tuned on your data for accurate, contextual responses.',
      'AI-driven search, content generation, and personalisation engines that improve user engagement.',
      'API integrations with OpenAI, Anthropic, and open-source models — deployed securely at scale.',
    ],
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

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

        // Cards stagger
        cardRefs.current.forEach((card) => {
          if (!card) return
          gsapTyped.fromTo(
            card,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'top 60%',
                scrub: 0.5,
              },
            }
          )
        })
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
      id='services'
      className='relative py-24 md:py-32'
      style={{ backgroundColor: '#f5f3fa' }}
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
            04 — SERVICES
          </span>
          <h2 className='font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary'>
            WHAT I BUILD.
          </h2>
        </div>

        {/* ─── Services Grid ─── */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
          {SERVICES.map((service, index) => (
            <div
              key={service.number}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              className='glass-card relative p-6 md:p-8 overflow-hidden'
            >
              {/* Faint background number */}
              <span
                className='absolute -top-4 -right-2 font-display text-[10rem] md:text-[12rem] font-extrabold leading-none select-none pointer-events-none z-0'
                style={{ opacity: 0.06, color: '#7c3aed' }}
                aria-hidden='true'
              >
                {service.number}
              </span>

              {/* Card content */}
              <div className='relative z-10'>
                <span
                  className='inline-block font-mono text-xs tracking-[0.2em] uppercase mb-3'
                  style={{ color: '#7c3aed' }}
                >
                  {service.number} — {service.title}
                </span>
                <h3
                  className='font-display text-xl md:text-2xl font-bold mb-3'
                  style={{ color: '#0c0a1a' }}
                >
                  {service.title}
                </h3>
                <p
                  className='text-sm md:text-base leading-relaxed mb-5'
                  style={{ color: '#4a4060' }}
                >
                  {service.description}
                </p>
                <ul className='flex flex-col gap-3'>
                  {service.bullets.map((bullet, i) => (
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
          ))}
        </div>
      </div>
    </section>
  )
}
