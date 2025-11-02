'use client'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'
import { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger, SplitText)

const EASE = 'power3.out'
const DUR = 0.6
const STAG = { each: 0.06, from: 'start' as const }

export default function Club() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const textTopRef = useRef<HTMLSpanElement>(null)
  const textMiddleRef = useRef<HTMLSpanElement>(null)
  const textBottomRef = useRef<HTMLSpanElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current
    const topEl = textTopRef.current
    const middleEl = textMiddleRef.current
    const bottomEl = textBottomRef.current
    const textEl = textRef.current
    if (!wrapper || !topEl || !middleEl || !bottomEl || !textEl) return

    const splits: SplitText[] = []
    const ctx = gsap.context(() => {
      const splitTop = new SplitText(topEl, { type: 'chars' })
      const splitMiddle = new SplitText(middleEl, { type: 'chars' })
      const splitBottom = new SplitText(bottomEl, { type: 'chars' })
      const splitText = new SplitText(textEl, { type: 'chars' })
      splits.push(splitTop, splitMiddle, splitBottom, splitText)
      gsap.set(splitText.chars, { autoAlpha: 0, scale: 1.5 })
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top top',
          end: '+=100%',
          pin: true,
          scrub: 0.5,
          markers: process.env.NODE_ENV !== 'production',
          invalidateOnRefresh: true,
        },
      })

      const scaleChars = (
        targets: Element[] | NodeListOf<Element>,
        fromScale: number,
        toScale: number,
        origin: string,
        pos?: gsap.Position
      ) =>
        tl.fromTo(
          targets,
          {
            scaleY: fromScale,
            transformOrigin: origin,
            ease: EASE,
            duration: DUR,
            stagger: STAG,
          },
          {
            scaleY: toScale,
            transformOrigin: origin,
            ease: EASE,
            duration: DUR,
            stagger: STAG,
          },
          pos
        )

      scaleChars(splitTop.chars, 1, 0, '50% 0%')
      scaleChars(splitMiddle.chars, 0, 1, '50% 100%', '<')
      scaleChars(splitMiddle.chars, 1, 0, '50% 0%')
      tl.fromTo(
        splitBottom.chars,
        {
          scaleY: 0,
          transformOrigin: '50% 100%',
          ease: EASE,
          duration: DUR,
          stagger: STAG,
        },
        {
          scaleY: 1,
          transformOrigin: '50% 100%',
          ease: EASE,
          duration: DUR,
          stagger: STAG,
          onStart: () => {
            gsap.to(splitText.chars, {
              autoAlpha: 1,
              scale: 1,
              ease: EASE,
              duration: DUR,
            })
          },
        },
        '<'
      )
    }, wrapper)

    return () => {
      ctx.revert()
      splits.forEach((s) => s.revert())
    }
  }, [])

  return (
    <div
      ref={wrapperRef}
      className="relative flex min-h-screen items-center justify-center"
    >
      <div className="relative text-[clamp(80px,calc(36.725px+17.25vw),300px)] leading-none font-bold whitespace-nowrap text-[#ffe000] will-change-transform">
        <span ref={textTopRef} className="inline-block">
          PHIVE
        </span>
        <span ref={textMiddleRef} className="absolute inset-0 inline-block">
          PHIVE
        </span>
        <span ref={textBottomRef} className="absolute inset-0 inline-block">
          PHIVE
        </span>
        <p
          ref={textRef}
          className="font-creepster absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(20px,20px+100vw*.1,100px)] whitespace-nowrap text-white"
        >
          <span className="inline-block -rotate-5">Choose your club</span>
        </p>
      </div>
    </div>
  )
}
