'use client'

import gsap from 'gsap'
import DrawSVGPlugin from 'gsap/DrawSVGPlugin'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger)

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

      // ✅ tween đung đưa (pause trước)
      const swayTween = gsap.to(path, {
        rotation: 1.6,
        x: 2,
        y: -2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        duration: 1.6,
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
            .to(text04Ref.current, {
              scale: 1,
              ease: 'power1.inOut',
              duration: 0.3,
            })
        },
      })
    }, wrapper)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={wrapperRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden font-bold text-black"
    >
      <div className="js-svg-pin absolute inset-0">
        <div className="h-screen">
          <svg
            viewBox="0 0 1341 970"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
          >
            <path
              ref={pathRef}
              className="[transform-origin:center] [transform-box:fill-box]"
              d="M312.917 0.602655C312.917 0.602655 275.792 117.876 232.917 182.603C194.598 240.453 161.434 264.008 113.417 314.103C75.2004 353.973 28.1464 360.874 13.4173 414.103C0.1607 462.009 -3.65316 508.419 13.4173 555.103C31.6825 605.054 60.9106 627.984 105.417 657.103C137.755 678.26 166.424 687.541 204.417 694.603C266.641 706.168 300.571 705.49 362.917 694.603C398.136 688.452 419.741 685.275 449.917 666.103C478.005 648.257 492.205 633.583 509.417 605.103C529.269 572.254 518.236 544.404 536.417 510.603C554.266 477.42 567.11 457.3 598.917 437.103C619.948 423.749 634.734 421.829 658.417 414.103C715.833 395.371 750.023 385.674 810.417 385.603C871.195 385.531 903.621 403.223 963.417 414.103C1013.76 423.263 1046.19 415.156 1092.42 437.103C1126.21 453.148 1148.18 463.303 1169.42 494.103C1187.54 520.383 1186.94 540.826 1195.42 571.603C1208.4 618.714 1214.52 645.891 1218.42 694.603C1221.37 731.585 1208.94 753.733 1218.42 789.603C1227.34 823.398 1242.69 838.591 1261.42 868.103C1287.98 909.948 1338.92 968.603 1338.92 968.603"
              stroke="#FFE000"
              strokeWidth={4}
              fill="none"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center text-[clamp(40px,36.725px+100vw*.1725,180px)] leading-none uppercase">
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
            className="font-creepster absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 text-[clamp(40px,36.725px+100vw*.1725,100px)] whitespace-nowrap text-white"
          >
            <span className="inline-block -rotate-5">Push your limits</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Senses
