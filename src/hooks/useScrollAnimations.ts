import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)
gsap.config({ nullTargetWarn: false })

const useScrollAnimations = () => {
  const app = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const animations: Record<string, (el: HTMLElement) => void> = {
      'fade-up': (el: HTMLElement) => {
        void gsap.from(el, {
          autoAlpha: 0,
          y: 30,
          duration: 0.5,
          ease: 'power2.inOut',
          scrollTrigger: { trigger: el },
        })
      },
      'fade-down': (el: HTMLElement) => {
        void gsap.from(el, {
          autoAlpha: 0,
          y: -30,
          duration: 0.5,
          ease: 'power2.inOut',
          scrollTrigger: { trigger: el },
        })
      },
      marker: (el: HTMLElement) => {
        void gsap.from(el, {
          backgroundSize: '0% 0%',
          duration: 0.5,
          ease: 'power2.inOut',
          scrollTrigger: { trigger: el },
        })
      },
    }

    const ctx = gsap.context(() => {
      Object.entries(animations).forEach(([className, run]) => {
        gsap.utils.toArray<HTMLElement>(`.${className}`).forEach((el) => {
          run(el)
        })
      })
    }, app)

    return () => ctx.revert()
  }, [])

  return app
}

export default useScrollAnimations
