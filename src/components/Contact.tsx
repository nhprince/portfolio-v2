'use client'

import { useState, useRef, useEffect } from 'react'
import { z } from 'zod'
import { gsap } from '@/lib/gsap'

/* ─── Validation Schema ─── */
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(80, 'Name is too long'),
  email: z.string().email('Please enter a valid email'),
  type: z.enum(['Freelance Project', 'Internship Enquiry', 'Just saying hi'], {
    errorMap: () => ({ message: 'Please select a message type' }),
  }),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000, 'Message is too long'),
})

type ContactFormData = z.infer<typeof contactSchema>

type FormErrors = Partial<Record<keyof ContactFormData, string>>

/* ─── Style Tokens ─── */
const GLASS_CARD: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.55)',
  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
  border: '1px solid rgba(255, 255, 255, 0.75)',
  boxShadow: '0 8px 32px rgba(100, 80, 200, 0.12)',
}

const GLASS_INPUT: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.45)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  border: '1px solid rgba(255, 255, 255, 0.6)',
  borderRadius: '12px',
  color: '#0c0a1a',
  outline: 'none',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
}

const ACCENT = '#7c3aed'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftColRef = useRef<HTMLDivElement>(null)
  const rightColRef = useRef<HTMLDivElement>(null)
  const successRef = useRef<HTMLDivElement>(null)

  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    type: 'Freelance Project',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [success, setSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [copied, setCopied] = useState(false)

  /* ─── GSAP Entrance ─── */
  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftColRef.current,
        { x: -100, opacity: 0 },
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

      gsap.fromTo(
        rightColRef.current,
        { x: 100, opacity: 0 },
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

    return () => ctx.revert()
  }, [])

  /* ─── Re-trigger entrance on success message ─── */
  useEffect(() => {
    if (success && successRef.current) {
      gsap.fromTo(
        successRef.current,
        { y: 20, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: 'power3.out' }
      )
    }
  }, [success])

  /* ─── Handlers ─── */
  const handleChange = (field: keyof ContactFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('contact@nhprince.me')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* fallback — do nothing */
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})

    const result = contactSchema.safeParse(form)
    if (!result.success) {
      const fieldErrors: FormErrors = {}
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof ContactFormData
        if (!fieldErrors[key]) {
          fieldErrors[key] = issue.message
        }
      }
      setErrors(fieldErrors)
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data),
      })

      if (res.ok) {
        setSuccess(true)
        setForm({ name: '', email: '', type: 'Freelance Project', message: '' })
      } else {
        const data = await res.json().catch(() => ({}))
        setErrors({ message: (data as { error?: string }).error || 'Something went wrong. Please try again.' })
      }
    } catch {
      setErrors({ message: 'Network error. Please try again.' })
    } finally {
      setSubmitting(false)
    }
  }

  /* ─── Field Error Helper ─── */
  const fieldError = (key: keyof ContactFormData) =>
    errors[key] ? (
      <span className='text-xs font-medium mt-1 block' style={{ color: '#ef4444' }}>
        {errors[key]}
      </span>
    ) : null

  return (
    <section
      ref={sectionRef}
      id='contact'
      className='py-24 md:py-32'
      style={{ backgroundColor: '#f5f3fa' }}
    >
      <div
        className='mx-auto px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24'
        style={{ maxWidth: '1560px' }}
      >
        {/* ─── Section Header ─── */}
        <div className='mb-14 md:mb-18'>
          <span
            className='font-mono font-medium tracking-widest uppercase block mb-4'
            style={{
              fontSize: '0.6875rem',
              color: ACCENT,
              letterSpacing: '0.2em',
            }}
          >
            06 — CONTACT
          </span>
          <h2
            className='font-display font-extrabold leading-tight tracking-tight text-4xl md:text-5xl lg:text-6xl'
            style={{ color: '#0c0a1a' }}
          >
            LET&apos;S BUILD.
          </h2>
        </div>

        {/* ─── Glass Card ─── */}
        <div
          className='rounded-[32px] p-8 md:p-12 lg:p-16'
          style={GLASS_CARD}
        >
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start'>
            {/* ════════ LEFT COLUMN ════════ */}
            <div ref={leftColRef} style={{ opacity: 0 }}>
              {/* Subtitle */}
              <p
                className='leading-relaxed mb-8'
                style={{
                  fontSize: '1rem',
                  color: '#4a4060',
                  lineHeight: '1.7',
                }}
              >
                Open to freelance projects, internships, and anything interesting.
              </p>

              {/* Email */}
              <div className='mb-8'>
                <span
                  className='font-mono font-medium tracking-wider uppercase block mb-3'
                  style={{
                    fontSize: '0.625rem',
                    color: '#9b90b8',
                    letterSpacing: '0.15em',
                  }}
                >
                  Email
                </span>
                <div className='flex items-center gap-3'>
                  <a
                    href='mailto:contact@nhprince.me'
                    onClick={handleCopyEmail}
                    className='inline-flex items-center gap-2 font-medium text-lg transition-colors duration-200 hover:underline'
                    style={{ color: ACCENT }}
                  >
                    <svg
                      className='w-5 h-5 flex-shrink-0'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke={ACCENT}
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                    contact@nhprince.me
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className='relative inline-flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 hover:scale-110'
                    style={{
                      background: copied ? 'rgba(34, 197, 94, 0.1)' : 'rgba(124, 58, 237, 0.08)',
                      border: `1px solid ${copied ? 'rgba(34, 197, 94, 0.2)' : 'rgba(124, 58, 237, 0.15)'}`,
                    }}
                    title='Copy email'
                  >
                    {copied ? (
                      <svg className='w-3.5 h-3.5' fill='none' viewBox='0 0 24 24' stroke='#22c55e' strokeWidth={2.5}>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
                      </svg>
                    ) : (
                      <svg className='w-3.5 h-3.5' fill='none' viewBox='0 0 24 24' stroke={ACCENT} strokeWidth={2}>
                        <rect x='9' y='9' width='13' height='13' rx='2' ry='2' />
                        <path d='M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1' />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div className='mb-8'>
                <span
                  className='font-mono font-medium tracking-wider uppercase block mb-3'
                  style={{
                    fontSize: '0.625rem',
                    color: '#9b90b8',
                    letterSpacing: '0.15em',
                  }}
                >
                  Find me on
                </span>
                <div className='flex flex-wrap gap-3'>
                  {/* GitHub */}
                  <a
                    href='https://github.com/nhprince'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 px-5 py-2.5 font-medium transition-all duration-200 hover:scale-105'
                    style={{
                      ...GLASS_CARD,
                      borderRadius: '9999px',
                      fontSize: '0.875rem',
                      color: '#0c0a1a',
                    }}
                  >
                    <svg className='w-4 h-4' viewBox='0 0 24 24' fill='currentColor'>
                      <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                    </svg>
                    GitHub
                  </a>

                  {/* LinkedIn */}
                  <a
                    href='https://linkedin.com/in/nhprince'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 px-5 py-2.5 font-medium transition-all duration-200 hover:scale-105'
                    style={{
                      ...GLASS_CARD,
                      borderRadius: '9999px',
                      fontSize: '0.875rem',
                      color: '#0c0a1a',
                    }}
                  >
                    <svg className='w-4 h-4' viewBox='0 0 24 24' fill='currentColor'>
                      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Location Note */}
              <div
                className='inline-flex items-center gap-2 rounded-xl px-4 py-3'
                style={{
                  background: 'rgba(124, 58, 237, 0.05)',
                  border: '1px solid rgba(124, 58, 237, 0.1)',
                }}
              >
                <svg className='w-4 h-4 flex-shrink-0' fill='none' viewBox='0 0 24 24' stroke={ACCENT} strokeWidth={2}>
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
                <span className='font-medium' style={{ fontSize: '0.875rem', color: '#4a4060' }}>
                  Based in Dhaka, Bangladesh. Available for remote work worldwide.
                </span>
              </div>
            </div>

            {/* ════════ RIGHT COLUMN — FORM ════════ */}
            <div ref={rightColRef} style={{ opacity: 0 }}>
              {/* Success Message */}
              {success && (
                <div
                  ref={successRef}
                  className='rounded-2xl p-6 mb-8 flex items-start gap-3'
                  style={{
                    background: 'rgba(34, 197, 94, 0.08)',
                    border: '1px solid rgba(34, 197, 94, 0.2)',
                  }}
                >
                  <svg
                    className='w-5 h-5 flex-shrink-0 mt-0.5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='#22c55e'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <div>
                    <p className='font-semibold' style={{ fontSize: '0.9375rem', color: '#15803d' }}>
                      Message sent successfully!
                    </p>
                    <p style={{ fontSize: '0.8125rem', color: '#16a34a', marginTop: '2px' }}>
                      Thanks for reaching out — I&apos;ll get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className='space-y-5'>
                {/* Name */}
                <div>
                  <label
                    htmlFor='contact-name'
                    className='font-mono font-medium tracking-wider uppercase block mb-2'
                    style={{
                      fontSize: '0.625rem',
                      color: '#9b90b8',
                      letterSpacing: '0.15em',
                    }}
                  >
                    Name
                  </label>
                  <input
                    id='contact-name'
                    type='text'
                    placeholder='Your name'
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className='w-full px-4 py-3 text-sm'
                    style={{
                      ...GLASS_INPUT,
                      borderColor: errors.name ? '#ef4444' : GLASS_INPUT.border,
                      boxShadow: errors.name ? '0 0 0 2px rgba(239, 68, 68, 0.15)' : 'none',
                    }}
                  />
                  {fieldError('name')}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor='contact-email'
                    className='font-mono font-medium tracking-wider uppercase block mb-2'
                    style={{
                      fontSize: '0.625rem',
                      color: '#9b90b8',
                      letterSpacing: '0.15em',
                    }}
                  >
                    Email
                  </label>
                  <input
                    id='contact-email'
                    type='email'
                    placeholder='you@example.com'
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className='w-full px-4 py-3 text-sm'
                    style={{
                      ...GLASS_INPUT,
                      borderColor: errors.email ? '#ef4444' : GLASS_INPUT.border,
                      boxShadow: errors.email ? '0 0 0 2px rgba(239, 68, 68, 0.15)' : 'none',
                    }}
                  />
                  {fieldError('email')}
                </div>

                {/* Type Select */}
                <div>
                  <label
                    htmlFor='contact-type'
                    className='font-mono font-medium tracking-wider uppercase block mb-2'
                    style={{
                      fontSize: '0.625rem',
                      color: '#9b90b8',
                      letterSpacing: '0.15em',
                    }}
                  >
                    Type
                  </label>
                  <select
                    id='contact-type'
                    value={form.type}
                    onChange={(e) => handleChange('type', e.target.value)}
                    className='w-full px-4 py-3 text-sm appearance-none cursor-pointer'
                    style={{
                      ...GLASS_INPUT,
                      borderColor: errors.type ? '#ef4444' : GLASS_INPUT.border,
                      boxShadow: errors.type ? '0 0 0 2px rgba(239, 68, 68, 0.15)' : 'none',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%237c3aed' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 16px center',
                      paddingRight: '2.5rem',
                    }}
                  >
                    <option value='Freelance Project'>Freelance Project</option>
                    <option value='Internship Enquiry'>Internship Enquiry</option>
                    <option value='Just saying hi'>Just saying hi</option>
                  </select>
                  {fieldError('type')}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor='contact-message'
                    className='font-mono font-medium tracking-wider uppercase block mb-2'
                    style={{
                      fontSize: '0.625rem',
                      color: '#9b90b8',
                      letterSpacing: '0.15em',
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id='contact-message'
                    rows={5}
                    placeholder='Tell me about your project, or just say hello…'
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className='w-full px-4 py-3 text-sm resize-y'
                    style={{
                      ...GLASS_INPUT,
                      borderColor: errors.message ? '#ef4444' : GLASS_INPUT.border,
                      boxShadow: errors.message ? '0 0 0 2px rgba(239, 68, 68, 0.15)' : 'none',
                      minHeight: '120px',
                    }}
                  />
                  {fieldError('message')}
                </div>

                {/* Submit Button */}
                <button
                  type='submit'
                  disabled={submitting}
                  className='inline-flex items-center gap-2 px-8 py-3.5 text-white font-semibold text-sm rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100'
                  style={{
                    background: 'linear-gradient(135deg, #7c3aed, #a855f7, #ec4899)',
                    boxShadow: '0 4px 20px rgba(124, 58, 237, 0.35)',
                  }}
                >
                  {submitting ? (
                    <>
                      <svg
                        className='animate-spin w-4 h-4'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                        />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className='text-base leading-none'>→</span>
                    </>
                  )}
                </button>

                {/* Generic error (network / server) */}
                {errors.message?.includes('Something went wrong') ||
                errors.message?.includes('Network error') ? (
                  <p className='text-sm font-medium' style={{ color: '#ef4444' }}>
                    {errors.message}
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
