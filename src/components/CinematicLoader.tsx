'use client'
import { useEffect } from 'react'
import gsap from 'gsap'

export default function CinematicLoader() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.set('.hero-name-line', { clipPath: 'inset(0 100% 0 0)' })
    tl.set('.hero-eyebrow', { y: 20, opacity: 0 })
    tl.set('.hero-subtitle', { y: 30, opacity: 0 })
    tl.set('.hero-cta', { y: 20, opacity: 0 })
    tl.set('.hero-decor', { scale: 0.6, opacity: 0 })
    tl.set('.navbar', { y: -40, opacity: 0 })
    tl.set('.scroll-indicator', { opacity: 0 })

    tl.to('.page-bg', { opacity: 1, duration: 0.4 }, 0)
    tl.to('.navbar', { y: 0, opacity: 1, duration: 0.6 }, 0.2)
    tl.to('.hero-eyebrow', { y: 0, opacity: 1, duration: 0.5 }, 0.4)
    tl.to('.hero-name-line', { clipPath: 'inset(0 0% 0 0)', duration: 0.9, ease: 'expo.out' as const }, 0.55)
    tl.to('.hero-subtitle', { y: 0, opacity: 1, duration: 0.7 }, 0.9)
    tl.to('.hero-cta', { y: 0, opacity: 1, stagger: 0.12, duration: 0.6 }, 1.05)
    tl.to('.hero-decor', { scale: 1, opacity: 1, stagger: 0.1, duration: 0.8 }, 1.2)
    tl.to('.scroll-indicator', { opacity: 1, duration: 0.5 }, 1.4)
  }, [])

  return null
}
