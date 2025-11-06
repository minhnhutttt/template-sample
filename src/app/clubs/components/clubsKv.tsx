'use client'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'
import { useLayoutEffect, useRef } from 'react'

import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'

gsap.registerPlugin(ScrollTrigger, SplitText)

const ClubsKV = () => {
  useInfiniteScroll()

  const wrapperRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const clubsWrapperRef = useRef<HTMLDivElement>(null)
  const clubsTopRef = useRef<HTMLSpanElement>(null)
  const clubsMiddleRef = useRef<HTMLSpanElement>(null)
  const clubsBottomRef = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    const wrapperEl = wrapperRef.current
    const buttonEl = buttonRef.current
    const clubsWrapperEl = clubsWrapperRef.current
    const topEl = clubsTopRef.current
    const middleEl = clubsMiddleRef.current
    const bottomEl = clubsBottomRef.current
    if (
      !wrapperEl ||
      !buttonEl ||
      !clubsWrapperEl ||
      !topEl ||
      !middleEl ||
      !bottomEl
    )
      return

    const mm = gsap.matchMedia()
    mm.add(
      {
        isPC: '(min-width: 768px)',
        isSP: '(max-width: 767px)',
      },
      (ctx) => {
        const { isPC, isSP } = ctx.conditions!

        const btnTl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperEl,
            start: 'top top',
            end: 'bottom top',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true,
          },
        })

        if (isPC) {
          btnTl.to(buttonEl, { xPercent: 100 })
        }
        if (isSP) {
          btnTl.to(buttonEl, { yPercent: 100, opacity: 0 })
        }

        return () => {
          btnTl.kill()
        }
      }
    )

    const splits: SplitText[] = []
    const ctx = gsap.context(() => {
      const splitTop = new SplitText(topEl, { type: 'chars' })
      const splitMiddle = new SplitText(middleEl, { type: 'chars' })
      const splitBottom = new SplitText(bottomEl, { type: 'chars' })
      splits.push(splitTop, splitMiddle, splitBottom)

      gsap.set([splitTop.chars, splitMiddle.chars, splitBottom.chars], {
        scaleY: 0,
      })

      const tl = gsap.timeline({
        defaults: { ease: 'none', stagger: { each: 0.08, from: 'start' } },
      })

      tl.to(clubsWrapperEl, { opacity: 1 })
        .to(splitBottom.chars, { scaleY: 1, transformOrigin: '50% 0%' })
        .to(splitBottom.chars, { scaleY: 0, transformOrigin: '50% 100%' })
        .to(splitMiddle.chars, { scaleY: 1, transformOrigin: '50% 0%' }, '<')
        .to(splitMiddle.chars, { scaleY: 0, transformOrigin: '50% 100%' })
        .to(splitTop.chars, { scaleY: 1, transformOrigin: '50% 0%' }, '<')
    })

    return () => {
      ctx.revert()
      splits.forEach((s) => s.revert())
      mm.revert()
    }
  }, [])

  return (
    <div
      ref={wrapperRef}
      className="relative flex h-[calc(100vh-64px)] flex-col items-center justify-center overflow-hidden md:min-h-screen"
    >
      <div className="absolute inset-0 z-10">
        <div
          data-infinite-scroll="6:30s"
          className="absolute inset-x-0 top-0 flex w-max gap-10 py-3"
        >
          <div className="flex shrink-0 items-center gap-10">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="relative flex items-center justify-center"
              >
                <div className="flex items-center text-[clamp(14px,13.415px+100vw*.0015,16px)] text-[#ffe000] uppercase">
                  Online campaign — 1st month free
                </div>
              </div>
            ))}
          </div>
        </div>

        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          src="/assets/video/web.mp4"
        />

        <div className="absolute inset-0 z-40 flex justify-center bg-[#ffe000]/[0.2] text-center text-white max-md:pt-20 md:items-center">
          <div
            ref={clubsWrapperRef}
            className="relative scale-y-[1.2] text-center text-[clamp(80px,calc(30px+14.25vw),300px)] leading-[0.8] font-bold tracking-tighter whitespace-nowrap text-[#ffe000] opacity-0 will-change-transform max-md:origin-top"
          >
            <span ref={clubsTopRef} className="inline-block">
              PHIVE <br />
              BOAVISTA
            </span>
            <span
              ref={clubsMiddleRef}
              className="absolute inset-0 inline-block"
            >
              PHIVE <br />
              BOAVISTA
            </span>
            <span
              ref={clubsBottomRef}
              className="absolute inset-0 inline-block"
            >
              PHIVE <br />
              BOAVISTA
            </span>
          </div>
        </div>
      </div>

      <div
        ref={buttonRef}
        className="fixed right-0 bottom-18 z-50 flex justify-center will-change-transform max-md:left-0 md:bottom-4"
      >
        <a
          href="#"
          className="relative inline-flex h-[clamp(48px,46.206px+100vw*.0046,54px)] items-center justify-center border border-[#fff4a6] px-[max(20.4px,20.4px+100vw*.0021)] font-bold text-[#fff4a6] uppercase duration-300 hover:bg-[#ffe000] hover:text-black"
        >
          Schedule a visit
        </a>
      </div>
    </div>
  )
}

export default ClubsKV
