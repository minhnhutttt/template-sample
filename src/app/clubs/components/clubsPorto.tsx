'use client'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'
import { useLayoutEffect, useRef, type CSSProperties } from 'react'

gsap.registerPlugin(ScrollTrigger, SplitText)

const EASE = 'power3.out'

export default function ClubsPorto() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const textMiddleRef = useRef<HTMLSpanElement>(null)
  const textBottomRef = useRef<HTMLSpanElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current
    const middleEl = textMiddleRef.current
    const bottomEl = textBottomRef.current
    const cardsEl = cardsRef.current
    if (!wrapper || !middleEl || !bottomEl || !cardsEl) return

    const splits: SplitText[] = []
    const ctx = gsap.context(() => {
      /* ===== TEXT (giữ nguyên scrub như trước) ===== */
      const splitMiddle = new SplitText(middleEl, { type: 'chars' })
      const splitBottom = new SplitText(bottomEl, { type: 'chars' })
      splits.push(splitMiddle, splitBottom)

      const textTl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 1,
          invalidateOnRefresh: true,
        },
        defaults: {
          ease: 'none',
          duration: 1.6,
          stagger: { each: 0.06, from: 'start' },
        },
      })

      gsap.set(splitMiddle.chars, { scaleY: 0 })
      const scaleChars = (
        targets: Element[] | NodeListOf<Element>,
        toScale: number,
        origin: string,
        pos?: gsap.Position
      ) => textTl.to(targets, { scaleY: toScale, transformOrigin: origin }, pos)

      scaleChars(splitBottom.chars, 0, '50% 100%')
      scaleChars(splitMiddle.chars, 1, '50% 0%', '<')

      const imgs = gsap.utils.toArray<HTMLImageElement>('.cards li .inner img')

      gsap.set(cardsEl, { autoAlpha: 1, duration: 0.5 })
      gsap.set(imgs, { autoAlpha: 0, scale: 0, duration: 0.5 })

      gsap
        .timeline({
          scrollTrigger: {
            trigger: cardsEl,
            start: 'top 70%',
            toggleActions: 'play none none none',
            once: true,
            invalidateOnRefresh: true,
          },
        })
        .to(imgs, {
          autoAlpha: 1,
          scale: 1,
          ease: EASE,
          duration: 0.45,
          stagger: {
            each: 0.12,
            from: 'start',
          },
        })
    }, wrapper)

    ScrollTrigger.refresh()

    return () => {
      ctx.revert()
      splits.forEach((s) => s.revert())
    }
  }, [])

  return (
    <div className="relative overflow-hidden">
      <div className="overflow-hidden md:py-[10vh]">
        <div
          ref={wrapperRef}
          className="flex h-screen items-center justify-center gap-[max(22.8px,22.8px+100vw*.0148)] overflow-hidden py-[max(24px,24px+100vw*.0212)]"
        >
          {/* TEXT */}
          <div className="relative z-10 text-center text-[clamp(60px,calc(30px+10.25vw),240px)] leading-none font-bold tracking-tight whitespace-nowrap text-[#ffe000] will-change-transform">
            <span ref={textMiddleRef} className="inline-block">
              PORTO IS
            </span>
            <span ref={textBottomRef} className="absolute inset-0 inline-block">
              PORTO IS
            </span>
          </div>

          {/* CARDS */}
          <div
            ref={cardsRef}
            className="cards @container pointer-events-none absolute h-[500px] w-[500px] animate-spin will-change-transform select-none [animation-duration:20s] md:h-[50vw] md:w-[50vw]"
          >
            <ul className="relative h-full w-full">
              {Array.from({ length: 8 }).map((_, i) => (
                <li
                  key={i}
                  className="absolute top-1/2 left-1/2 aspect-[200/320] w-[100px] md:w-[20cqw]"
                  style={{ ['--i']: i } as CSSProperties}
                >
                  <div className="inner">
                    <img
                      src={`/assets/images/porto-0${i + 1}.jpg`}
                      alt=""
                      className="block h-full w-full object-cover"
                      draggable={false}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
