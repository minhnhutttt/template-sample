'use client'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'
import { useLayoutEffect, useRef } from 'react'

import DraggableSlider from '@/components/DraggableSlider'

gsap.registerPlugin(ScrollTrigger, SplitText)
const ClubsClasses = () => {
  const slides = [
    {
      image: '/assets/images/1.jpg',
      title: 'BOOTCAMP',
    },
    {
      image: '/assets/images/2.jpg',
      title: 'BOOTCAMP',
    },
    {
      image: '/assets/images/3.jpg',
      title: 'BOOTCAMP',
    },
    {
      image: '/assets/images/4.jpg',
      title: 'BOOTCAMP',
    },
    {
      image: '/assets/images/5.jpg',
      title: 'BOOTCAMP',
    },
    {
      image: '/assets/images/6.jpg',
      title: 'BOOTCAMP',
    },
    {
      image: '/assets/images/7.jpg',
      title: 'BOOTCAMP',
    },
    {
      image: '/assets/images/8.jpg',
      title: 'BOOTCAMP',
    },
    {
      image: '/assets/images/9.jpg',
      title: 'BOOTCAMP',
    },
    {
      image: '/assets/images/10.jpg',
      title: 'BOOTCAMP',
    },
  ]

  const wrapperRef = useRef<HTMLDivElement>(null)
  const textMiddleRef = useRef<HTMLSpanElement>(null)
  const textBottomRef = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current
    const middleEl = textMiddleRef.current
    const bottomEl = textBottomRef.current

    if (!wrapper || !middleEl || !bottomEl) return

    const splits: SplitText[] = []

    const ctx = gsap.context(() => {
      const splitMiddle = new SplitText(middleEl, { type: 'chars' })
      const splitBottom = new SplitText(bottomEl, { type: 'chars' })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          invalidateOnRefresh: true,
        },
        defaults: {
          ease: 'none',
          duration: 1.6,
          stagger: { each: 0.06, from: 'start' },
        },
      })

      gsap.set([splitMiddle.chars], {
        scaleY: 0,
      })

      const scaleChars = (
        targets: Element[] | NodeListOf<Element>,
        toScale: number,
        origin: string,
        pos?: gsap.Position
      ) => tl.to(targets, { scaleY: toScale, transformOrigin: origin }, pos)

      scaleChars(splitBottom.chars, 0, '50% 100%')
      scaleChars(splitMiddle.chars, 1, '50% 0%', '<')
    }, wrapper)
    ScrollTrigger.refresh()
    return () => {
      ctx.revert()
      splits.forEach((s) => s.revert())
    }
  }, [])
  return (
    <div
      ref={wrapperRef}
      className="flex flex-col gap-[max(22.8px,22.8px+100vw*.0148)] py-[max(24px,24px+100vw*.0212)]"
    >
      <div className="mr-auto ml-auto flex w-full justify-center px-5 [flex-flow:row_wrap]">
        <div className="">
          <p className="text-center text-[clamp(16px,14.206px+100vw*.0046,22px)] font-bold text-[#f6c548] uppercase">
            Phive Boavista offers a wide range of classes that make fitness fun
          </p>
        </div>
      </div>
      <div className="relative z-10 text-center text-[clamp(80px,calc(30px+15.25vw),300px)] leading-none font-bold tracking-tight whitespace-nowrap text-[#ffe000] will-change-transform">
        <span ref={textMiddleRef} className="inline-block">
          CLASSES
        </span>
        <span ref={textBottomRef} className="absolute inset-0 inline-block">
          CLASSES
        </span>
      </div>
      <div className="flex items-center justify-center gap-1.5 text-[#ffe000]">
        <p className="relative block rounded-[max(21.8px,21.8px+100vw*.0095)] px-[max(20.4px,20.4px+100vw*.0021)] py-[min(12px,12px+100vw*0)] text-[#fff4a6] opacity-[.4]">
          FILTER
        </p>
        <ul className="flex flex-wrap gap-1.5 max-md:flex-1">
          <li className="relative block rounded-[max(21.8px,21.8px+100vw*.0095)] bg-[#ffe000] px-[max(20.4px,20.4px+100vw*.0021)] py-[min(12px,12px+100vw*0)] text-[clamp(10px,9.415px+100vw*.0015,12px)] font-bold text-black">
            ALL
          </li>
          <li className="relative block rounded-[max(21.8px,21.8px+100vw*.0095)] px-[max(20.4px,20.4px+100vw*.0021)] py-[min(12px,12px+100vw*0)] text-[clamp(10px,9.415px+100vw*.0015,12px)] font-bold">
            FLOW
          </li>
          <li className="relative block rounded-[max(21.8px,21.8px+100vw*.0095)] px-[max(20.4px,20.4px+100vw*.0021)] py-[min(12px,12px+100vw*0)] text-[clamp(10px,9.415px+100vw*.0015,12px)] font-bold">
            RIDE
          </li>
          <li className="relative block rounded-[max(21.8px,21.8px+100vw*.0095)] px-[max(20.4px,20.4px+100vw*.0021)] py-[min(12px,12px+100vw*0)] text-[clamp(10px,9.415px+100vw*.0015,12px)] font-bold">
            POWER
          </li>
          <li className="relative block rounded-[max(21.8px,21.8px+100vw*.0095)] px-[max(20.4px,20.4px+100vw*.0021)] py-[min(12px,12px+100vw*0)] text-[clamp(10px,9.415px+100vw*.0015,12px)] font-bold">
            MOVES
          </li>
          <li className="relative block rounded-[max(21.8px,21.8px+100vw*.0095)] px-[max(20.4px,20.4px+100vw*.0021)] py-[min(12px,12px+100vw*0)] text-[clamp(10px,9.415px+100vw*.0015,12px)] font-bold">
            KID
          </li>
          <li className="relative block rounded-[max(21.8px,21.8px+100vw*.0095)] px-[max(20.4px,20.4px+100vw*.0021)] py-[min(12px,12px+100vw*0)] text-[clamp(10px,9.415px+100vw*.0015,12px)] font-bold">
            AQUA
          </li>
        </ul>
      </div>
      <DraggableSlider slides={slides} />
    </div>
  )
}

export default ClubsClasses
