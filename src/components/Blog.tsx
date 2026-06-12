'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    title: 'How I Built a Working POS System at 16',
    tags: ['personal', 'backend', 'nodejs'],
    excerpt:
      'At 16, I built Lenden — a full-stack point-of-sale system for small businesses. It handled inventory, receipts, and real-time sales tracking with Node.js and PostgreSQL. This is the story of how a teenager shipped production code and learned more in those months than in years of school.',
  },
  {
    title: 'What Nobody Tells You About Glassmorphism',
    tags: ['css', 'design', 'ui-ux'],
    excerpt:
      'Glassmorphism looks easy — just slap a backdrop-filter and call it a day. But getting it right means understanding stacking contexts, contrast ratios, and performance trade-offs. Here are the hard-won lessons from building glass-driven UIs at scale without sacrificing accessibility.',
  },
  {
    title: 'Building Saturday: The AI That Deploys My Projects',
    tags: ['ai', 'automation', 'saturday'],
    excerpt:
      'Saturday is my autonomous deployment agent — it builds, tests, and pushes my projects without me ever touching a terminal. This post breaks down Saturday\'s architecture: how it connects to git hooks, manages Docker containers, and rolls back on failure with zero drama.',
  },
];

export default function Blog() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        },
      );

      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="py-24 md:py-32"
      style={{ backgroundColor: '#f0edf8' }}
    >
      <div className="mx-auto max-w-[1560px] px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div ref={headerRef} className="mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-3">
            05 — WRITING
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
            THOUGHTS.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group glass-card rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-accent/10 text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="font-display text-xl md:text-2xl font-bold text-primary mb-4 leading-tight">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-primary/70 leading-relaxed text-sm md:text-base mb-6">
                {post.excerpt}
              </p>

              {/* Link */}
              <a
                href="#"
                className="inline-flex items-center gap-1 font-mono text-sm uppercase tracking-wider text-accent transition-colors duration-200 hover:text-accent/80"
              >
                Read more <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
