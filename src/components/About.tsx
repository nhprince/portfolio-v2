'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillsData = [
  {
    label: 'FRONTEND',
    skills: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    label: 'BACKEND',
    skills: ['Node.js', 'Express', 'Django', 'Flask', 'PHP', 'REST API'],
  },
  {
    label: 'DATABASE',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Supabase', 'Cloudflare KV'],
  },
  {
    label: 'TOOLS',
    skills: ['Git', 'GitHub Actions', 'Workers', 'Pages', 'Vite', 'Docker'],
  },
  {
    label: 'LANGUAGES',
    skills: ['Python', 'C', 'JavaScript', 'TypeScript', 'PHP'],
  },
];

const stats = [
  { number: '9+', label: 'PROJECTS' },
  { number: '5+', label: 'YEARS' },
  { number: '53', label: 'REPOS' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id='about'
      className='bg-[#050505] py-24 md:py-32'
    >
      <div className='max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12'>
        {/* Header */}
        <div className='mb-6 md:mb-16'>
          <p className='text-[10px] uppercase tracking-[0.3em] text-[#E50914] font-mono mb-4'>
            ABOUT ME
          </p>
          <h2 className='text-5xl md:text-6xl lg:text-7xl font-black text-white'>
            Who I Am
          </h2>
        </div>

        {/* Two-column grid */}
        <div
          ref={ref}
          className='grid lg:grid-cols-2 gap-16 items-start'
        >
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Portrait Card */}
            <div className='relative rounded-2xl overflow-hidden border border-neutral-800 mb-8'>
              <img
                src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80'
                alt='NH Prince Prodhan'
                className='w-full h-80 md:h-96 object-cover'
              />
              {/* Gradient overlay */}
              <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent' />
              {/* Text overlay */}
              <div className='absolute bottom-0 left-0 p-6'>
                <p className='text-[10px] uppercase tracking-[0.2em] text-[#E50914] font-mono mb-1'>
                  Full-Stack Developer
                </p>
                <h3 className='text-xl md:text-2xl font-bold text-white mb-0.5'>
                  NH Prince Prodhan
                </h3>
                <p className='text-sm text-neutral-400'>Dhaka, Bangladesh</p>
              </div>
            </div>

            {/* Bio paragraphs */}
            <div className='text-sm text-neutral-400 leading-relaxed space-y-4'>
              <p>
                I&apos;m a full-stack developer based in Dhaka, Bangladesh, specializing in
                building modern, performant web applications from concept to deployment.
                With over five years of experience, I thrive at the intersection of
                clean architecture and thoughtful user experience.
              </p>
              <p>
                My workflow spans the entire stack — from crafting responsive,
                animation-rich interfaces with React and Next.js to designing robust
                backend services and databases. I&apos;m drawn to projects that demand
                both technical precision and creative problem-solving.
              </p>
              <p>
                When I&apos;m not coding, I explore new frameworks, contribute to
                open-source, and refine my craft. I believe in shipping fast, iterating
                often, and never standing still.
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          >
            {/* Skills */}
            <div className='space-y-6'>
              {skillsData.map((group) => (
                <div key={group.label}>
                  <p className='text-[10px] uppercase tracking-[0.3em] text-[#E50914] font-mono mb-3'>
                    {group.label}
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className='bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-wider font-mono text-neutral-400 hover:text-[#E50914] hover:border-[#E50914]/30 transition-all cursor-default px-3 py-1.5'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className='grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-neutral-800'>
              {stats.map((stat) => (
                <div key={stat.label} className='text-center'>
                  <p className='text-3xl md:text-4xl font-black text-white mb-1'>
                    {stat.number}
                  </p>
                  <p className='text-[10px] uppercase tracking-widest text-neutral-500 font-mono'>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
