import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function animateOnScroll(
  selector: string,
  from: gsap.TweenVars = { y: 60, opacity: 0 },
  to: gsap.TweenVars = { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
  trigger?: gsap.TweenVars
) {
  const elements = document.querySelectorAll(selector)
  elements.forEach((el) => {
    gsap.fromTo(el, from, {
      ...to,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
        ...trigger,
      },
    })
  })
}

export function staggerOnScroll(
  selector: string,
  from: gsap.TweenVars = { y: 40, opacity: 0 },
  to: gsap.TweenVars = { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1 },
) {
  const elements = document.querySelectorAll(selector)
  gsap.fromTo(elements, from, {
    ...to,
    scrollTrigger: {
      trigger: elements[0] || elements,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
  })
}

export { gsap, ScrollTrigger }
