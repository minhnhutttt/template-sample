'use client'

import gsap from 'gsap'
import DrawSVGPlugin from 'gsap/DrawSVGPlugin'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger, SplitText)

const Senses = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)

  const wrapTextRef = useRef<HTMLDivElement | null>(null)
  const text01Ref = useRef<HTMLParagraphElement | null>(null)
  const text02Ref = useRef<HTMLParagraphElement | null>(null)
  const text03Ref = useRef<HTMLParagraphElement | null>(null)
  const text04Ref = useRef<HTMLParagraphElement | null>(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const path = pathRef.current
    if (!wrapper || !path) return

    const ctx = gsap.context(() => {
      gsap.set(path, { drawSVG: '0% 0%' })

      const splitText = new SplitText(text04Ref.current, { type: 'chars' })
      const swayTween = gsap.to(path, {
        x: 4,
        y: 0,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        duration: 2.6,
        paused: true,
        transformOrigin: 'center center',
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top center',
          end: 'bottom center',
          invalidateOnRefresh: true,
        },
      })

      tl.to(path, {
        drawSVG: '0% 100%',
        ease: 'none',
        duration: 2,
        onComplete: () => {
          swayTween.play()
        },
        onStart: () => {
          gsap
            .timeline()
            .to(wrapTextRef.current, {
              scaleX: 1.5,
              ease: 'power1.inOut',
              duration: 0.3,
            })
            .to(wrapTextRef.current, {
              scaleX: 1,
              ease: 'power1.inOut',
              duration: 0.3,
            })
            .to(text03Ref.current, {
              scaleY: 2,
              height: 'auto',
              transformOrigin: 'top',
              ease: 'power1.inOut',
              duration: 0.3,
            })
            .to(text02Ref.current, {
              scaleY: 1,
              height: 'auto',
              transformOrigin: 'bottom',
              ease: 'power1.inOut',
              duration: 0.3,
            })
            .to(text03Ref.current, {
              scaleY: 1,
              height: 'auto',
              transformOrigin: 'top',
              ease: 'power1.inOut',
              duration: 0.3,
            })
            .from(splitText.chars, {
              opacity: 0,
              scale: 2,
              stagger: 0.04,
              ease: 'power1.inOut',
              duration: 0.3,
            })
        },
      })
    }, wrapper)

    return () => ctx.revert()
  }, [])

  return (
    <div className="overflow-hidden">
      <div
        ref={wrapperRef}
        className="relative flex min-h-screen items-center justify-center px-5 font-bold text-black"
      >
        <div className="js-svg-pin absolute inset-0">
          <div className="h-full w-full">
            <svg
              className="h-full"
              viewBox="0 0 1900 877"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                ref={pathRef}
                className="[transform-origin:center] [transform-box:fill-box]"
                d="M545.731 0.482239C545.731 0.482239 572.66 136.837 545.731 216.982C480.12 412.258 172.472 158.482 51.7314 401.982C-7.77467 521.989 -27.3706 691.113 73.7314 778.982C146.931 842.601 224.951 828.313 317.231 798.482C482.731 744.982 467.96 579.006 618.731 528.482C719.207 494.813 783.738 487.15 888.731 501.482C984.947 514.616 1039.11 536.771 1122.23 586.982C1250.67 664.573 1227.71 877.539 1377.73 873.982C1475.29 871.669 1496.71 767.199 1591.73 744.982C1711.92 716.88 1799.31 731.889 1903.23 798.482"
                stroke="#FFE000"
                strokeWidth={4}
                fill="none"
              />
            </svg>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center px-5 text-center text-[clamp(30px,28px+100vw*.1525,180px)] leading-none uppercase">
          <div
            ref={wrapTextRef}
            className="relative scale-x-0 rounded-4xl bg-[#ffe000]"
          >
            <p
              ref={text01Ref}
              className="origin-top rounded-4xl bg-[#ffe000] px-4"
            >
              active
            </p>
            <p
              className="h-0 scale-y-0 overflow-hidden bg-[#ffe000] px-4"
              ref={text02Ref}
            >
              your
            </p>
            <p
              className="h-0 scale-y-0 overflow-hidden rounded-4xl bg-[#ffe000] px-4"
              ref={text03Ref}
            >
              senses
            </p>

            <p
              ref={text04Ref}
              className="font-creepster absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(20px,20px+100vw*.1,100px)] whitespace-nowrap text-white"
            >
              <span className="inline-block -rotate-5">Push your limits</span>
            </p>
          </div>
        </div>
      </div>

      <p className="mt-8 px-4 px-5 text-center text-[clamp(16px,14.206px+100vw*.0046,22px)] leading-snug font-bold text-[#ffe000] uppercase">
        Phive has clubs located in Coimbra, Leiria, Lisbon, and Porto. <br />
        Get to know each one!
      </p>
    </div>
  )
}

export default Senses
