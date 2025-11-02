'use client'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'
import { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger, SplitText)

const EASE = 'power3.out'
const DUR = 0.6
const STAG = { each: 0.06, from: 'start' as const }

const dataImage = [
  '/assets/images/1.jpg',
  '/assets/images/2.jpg',
  '',
  '/assets/images/3.jpg',
  '/assets/images/4.jpg',
  '',
  '/assets/images/5.jpg',
  '',
  '/assets/images/6.jpg',
  '',
  '/assets/images/7.jpg',
  '',
  '',
  '/assets/images/8.jpg',
  '',
  '',
  '',
  '',
  '/assets/images/9.jpg',
  '',
  '',
  '/assets/images/10.jpg',
  '',
  '',
  '',
  '/assets/images/11.jpg',
  '/assets/images/12.jpg',
  '',
  '',
  '',
  '',
  '/assets/images/13.jpg',
  '',
  '',
  '/assets/images/14.jpg',
  '',
  '/assets/images/15.jpg',
  '',
  '/assets/images/16.jpg',
]

export default function Club() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const textTopRef = useRef<HTMLSpanElement>(null)
  const textMiddleRef = useRef<HTMLSpanElement>(null)
  const textBottomRef = useRef<HTMLSpanElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)

  const gridRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current
    const topEl = textTopRef.current
    const middleEl = textMiddleRef.current
    const bottomEl = textBottomRef.current
    const textEl = textRef.current
    const buttonEl = buttonRef.current
    const gridEl = gridRef.current

    if (
      !wrapper ||
      !topEl ||
      !middleEl ||
      !bottomEl ||
      !textEl ||
      !gridEl ||
      !buttonEl
    )
      return

    const splits: SplitText[] = []

    const ctx = gsap.context(() => {
      const splitTop = new SplitText(topEl, { type: 'chars' })
      const splitMiddle = new SplitText(middleEl, { type: 'chars' })
      const splitBottom = new SplitText(bottomEl, { type: 'chars' })
      const splitText = new SplitText(textEl, { type: 'chars' })
      splits.push(splitTop, splitMiddle, splitBottom, splitText)
      gsap.set(splitText.chars, { autoAlpha: 0, scale: 1.5 })

      const END = '+=200%'

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top top',
          end: END,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
        defaults: { ease: EASE, duration: DUR, stagger: STAG },
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
          { scaleY: fromScale, transformOrigin: origin },
          { scaleY: toScale, transformOrigin: origin },
          pos
        )

      scaleChars(splitTop.chars, 1, 0, '50% 0%')
      scaleChars(splitMiddle.chars, 0, 1, '50% 100%', '<')
      scaleChars(splitMiddle.chars, 1, 0, '50% 0%')
      tl.fromTo(
        splitBottom.chars,
        { scaleY: 0, transformOrigin: '50% 100%' },
        {
          scaleY: 1,
          transformOrigin: '50% 100%',
          onStart: () => {
            gsap.to(splitText.chars, {
              autoAlpha: 1,
              scale: 1,
              ease: EASE,
              duration: DUR,
            })
            gsap.to(buttonEl, {
              opacity: 1,
              scale: 1,
              ease: EASE,
              duration: DUR,
            })
          },
        },
        '<'
      )

      const items = Array.from(
        gridEl.querySelectorAll<HTMLImageElement>('[data-grid-item]')
      )

      items.forEach((el) => {
        if (!el.dataset.rot)
          el.dataset.rot = String(gsap.utils.random(-8, 8, 0.1))
        if (!el.dataset.scl)
          el.dataset.scl = String(gsap.utils.random(0.92, 2, 0.01))
        el.style.willChange = 'transform'
        el.style.transformOrigin = '50% 50%'
      })

      const imgTl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top top',
          end: END,
          scrub: 1,
          markers: false,
          invalidateOnRefresh: true,
        },
      })

      const getCenter = () => {
        const vw = window.innerWidth
        const vh = window.innerHeight
        return { cx: vw / 2, cy: vh / 2 }
      }

      imgTl.to(items, {
        x: (_i, el: HTMLElement) => {
          const rect = el.getBoundingClientRect()
          const { cx } = getCenter()
          const ex = rect.left + rect.width / 2
          return cx - ex
        },
        y: (_i, el: HTMLElement) => {
          const rect = el.getBoundingClientRect()
          const { cy } = getCenter()
          const ey = rect.top + rect.height / 2
          return cy - ey
        },
        rotate: (_i, el: HTMLElement) => Number(el.dataset.rot || 0),
        scale: (_i, el: HTMLElement) => Number(el.dataset.scl || 2),
        ease: 'power3.out',
        duration: 1.2,
        stagger: { amount: 2, from: 'start' },
      })

      imgTl.to(
        items,
        {
          scale: (_i, el: HTMLElement) =>
            Number(el.dataset.rot || 0) > 0 ? 2 : 2,
          duration: 0.6,
        },
        '>-0.2'
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
      <div
        ref={gridRef}
        className="pointer-events-none absolute inset-0 mx-auto grid grid-cols-[repeat(4,_1fr)] grid-rows-[repeat(6,_1fr)] gap-[min(16px,16px+100vw*0)] px-4 py-10 md:grid-cols-[repeat(10,_1fr)] md:grid-rows-[repeat(4,_1fr)]"
      >
        {dataImage.map((src, i) => (
          <div key={i} className="relative w-full">
            {src !== '' && (
              <img
                data-grid-item
                src={src}
                alt=""
                className="h-full w-full object-cover [transform-style:preserve-3d]"
                loading="lazy"
                decoding="async"
              />
            )}
          </div>
        ))}
      </div>

      <div className="relative z-10 text-[clamp(80px,calc(50px+17.25vw),300px)] leading-none font-bold whitespace-nowrap text-[#ffe000] will-change-transform">
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
          className="font-creepster absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(12px,12px+100vw*.1,100px)] whitespace-nowrap text-white"
        >
          <span className="inline-block -rotate-5">Choose your club</span>
        </p>
        <div
          ref={buttonRef}
          className="relative z-10 flex justify-center gap-5 opacity-0 max-md:mt-10"
        >
          <a
            href="#"
            className="relative inline-flex h-[42px] items-center justify-center rounded-full bg-[#ffe000] px-[max(20.4px,20.4px+100vw*.0021)] text-[clamp(10px,9.415px+100vw*.0015,12px)] leading-[1.1em] tracking-[.06em] text-black duration-300 hover:tracking-normal hover:opacity-80"
          >
            View all Clubs
          </a>
          <a
            href="#"
            className="relative inline-flex h-[42px] items-center justify-center rounded-full border border-[#ffe000] px-[max(20.4px,20.4px+100vw*.0021)] text-[clamp(10px,9.415px+100vw*.0015,12px)] leading-[1.1em] tracking-[.06em] text-[#ffe000] duration-300 hover:bg-[#ffe000] hover:tracking-normal hover:text-black hover:opacity-80"
          >
            Schedule a visit
          </a>
        </div>
      </div>
    </div>
  )
}
