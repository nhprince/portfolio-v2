import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function animateOnScroll(
  selector: string,
  from: gsap.TweenVars = { y: 60, opacity: 0 },
  to: gsap.TweenVars = { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
  trigger?: Record<string, unknown>
) {
  if (typeof document === 'undefined') return
  const elements = document.querySelectorAll(selector)
  elements.forEach((el) => {
    const { scrollTrigger: _st, ...tweenVars } = to as Record<string, unknown>
    gsap.fromTo(el, from, {
      ...tweenVars,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
        ...trigger,
      },
    } as gsap.TweenVars)
  })
}

export function staggerOnScroll(
  selector: string,
  from: gsap.TweenVars = { y: 40, opacity: 0 },
  to: gsap.TweenVars = { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1 },
) {
  if (typeof document === 'undefined') return
  const elements = document.querySelectorAll(selector)
  if (elements.length === 0) return
  gsap.fromTo(elements, from, {
    ...to,
    scrollTrigger: {
      trigger: elements[0],
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
  } as gsap.TweenVars)
}

export { gsap, ScrollTrigger }
