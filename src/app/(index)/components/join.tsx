'use client'

import gsap from 'gsap'
import DrawSVGPlugin from 'gsap/DrawSVGPlugin'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger, SplitText)

const Join = () => {
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
    <div className="overflow-hidden bg-[#ffe000]">
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
                stroke="#000"
                strokeWidth={4}
                fill="none"
              />
            </svg>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center px-5 text-center text-[clamp(30px,28px+100vw*.1525,180px)] leading-none text-[#ffe000] uppercase">
          <div
            ref={wrapTextRef}
            className="relative scale-x-0 rounded-4xl bg-stone-900"
          >
            <p
              ref={text01Ref}
              className="origin-top rounded-4xl bg-stone-900 px-4"
            >
              JOIN THE
            </p>
            <p
              className="h-0 scale-y-0 overflow-hidden bg-stone-900 px-4"
              ref={text02Ref}
            >
              PHIVE
            </p>
            <p
              className="h-0 scale-y-0 overflow-hidden rounded-4xl bg-stone-900 px-4"
              ref={text03Ref}
            >
              CLUBS
            </p>

            <p
              ref={text04Ref}
              className="font-creepster absolute top-3/5 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(20px,20px+100vw*.1,100px)] whitespace-nowrap text-white"
            >
              <span className="inline-block -rotate-5">FOLLOW US</span>
            </p>
          </div>
          <div className="relative z-10 mt-10 flex justify-center gap-5">
            <a
              href="#"
              className="relative inline-flex h-[42px] items-center justify-center rounded-full border border-[#000] px-[max(20.4px,20.4px+100vw*.0021)] text-[clamp(10px,9.415px+100vw*.0015,12px)] leading-[1.1em] tracking-[.06em] text-[#000] duration-300 hover:bg-[#ffe000] hover:tracking-normal hover:text-black hover:opacity-80"
            >
              KNOW MORE
            </a>
          </div>
        </div>
      </div>
      <div className="relative h-[calc(100%-max(27.6px,27.6px+100vw*.0402))] pt-[max(24px,24px+100vw*.0212)] pb-[40vw]">
        <a
          href="#"
          className="group absolute top-0 left-0 flex h-[27.5vw] w-[27.5vw] items-center justify-center overflow-hidden rounded-full border-white duration-200 hover:rotate-[20deg] hover:border-[20px]"
        >
          <span>
            <img src="/assets/images/join-01.jpg" alt="" />
          </span>
          <span className="absolute inset-0 flex items-center justify-center text-[clamp(30px,46.55px+100vw*.015,140px)] font-bold text-white">
            IG
          </span>
          <span className="absolute inset-0 flex items-center justify-center opacity-0 duration-200 group-hover:opacity-100">
            <img src="/assets/images/x.png" alt="" />
          </span>
        </a>
        <a
          href="#"
          className="group absolute bottom-0 left-[calc((100%-27.5vw)*1/(4-1))] flex h-[27.5vw] w-[27.5vw] items-center justify-center overflow-hidden rounded-full border-white duration-200 hover:rotate-[20deg] hover:border-[20px]"
        >
          <span>
            <img src="/assets/images/join-02.jpg" alt="" />
          </span>
          <span className="absolute inset-0 flex items-center justify-center text-[clamp(30px,46.55px+100vw*.015,140px)] font-bold text-white">
            IG
          </span>
          <span className="absolute inset-0 flex items-center justify-center opacity-0 duration-200 group-hover:opacity-100">
            <img src="/assets/images/x.png" alt="" />
          </span>
        </a>
        <a
          href="#"
          className="group absolute top-0 left-[calc((100%-27.5vw)*2/(4-1))] flex h-[27.5vw] w-[27.5vw] items-center justify-center overflow-hidden rounded-full border-white duration-200 hover:rotate-[20deg] hover:border-[20px]"
        >
          <span>
            <img src="/assets/images/join-03.jpg" alt="" />
          </span>
          <span className="absolute inset-0 flex items-center justify-center text-[clamp(30px,46.55px+100vw*.015,140px)] font-bold text-white">
            IG
          </span>
          <span className="absolute inset-0 flex items-center justify-center opacity-0 duration-200 group-hover:opacity-100">
            <img src="/assets/images/x.png" alt="" />
          </span>
        </a>
        <a
          href="#"
          className="group absolute bottom-0 left-[calc((100%-27.5vw)*3/(4-1))] flex h-[27.5vw] w-[27.5vw] items-center justify-center overflow-hidden rounded-full border-white duration-200 hover:rotate-[20deg] hover:border-[20px]"
        >
          <span>
            <img src="/assets/images/join-04.jpg" alt="" />
          </span>
          <span className="absolute inset-0 flex items-center justify-center text-[clamp(30px,46.55px+100vw*.015,140px)] font-bold text-white">
            IG
          </span>
          <span className="absolute inset-0 flex items-center justify-center opacity-0 duration-200 group-hover:opacity-100">
            <img src="/assets/images/x.png" alt="" />
          </span>
        </a>
      </div>
      <p className="my-10 text-center text-[clamp(34px,29.242px+100vw*.0122,50px)] leading-[1.2] font-bold uppercase">
        {' '}
        Keep up with all the latest on our socials!
      </p>
    </div>
  )
}

export default Join
