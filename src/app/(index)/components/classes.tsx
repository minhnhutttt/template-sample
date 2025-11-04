'use client'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'
import { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function Classes() {
  const classWrapperRef = useRef<HTMLDivElement>(null)
  const classTextTopRef = useRef<HTMLSpanElement>(null)
  const classTextMiddleRef = useRef<HTMLSpanElement>(null)
  const classTextBottomRef = useRef<HTMLSpanElement>(null)
  const img01Ref = useRef<HTMLSpanElement>(null)
  const img02Ref = useRef<HTMLSpanElement>(null)
  const img03Ref = useRef<HTMLSpanElement>(null)
  const img04Ref = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    const wrapper = classWrapperRef.current
    const topEl = classTextTopRef.current
    const middleEl = classTextMiddleRef.current
    const bottomEl = classTextBottomRef.current
    const img01El = img01Ref.current
    const img02El = img02Ref.current
    const img03El = img03Ref.current
    const img04El = img04Ref.current
    if (
      !wrapper ||
      !topEl ||
      !middleEl ||
      !bottomEl ||
      !img01El ||
      !img02El ||
      !img03El ||
      !img04El
    )
      return

    const imgs = [img01El, img02El, img03El, img04El]

    gsap.set(imgs, { yPercent: 100, force3D: true, willChange: 'transform' })

    const getExitYPercent = (el: HTMLElement) => {
      const H = wrapper.clientHeight || window.innerHeight
      const h = el.clientHeight || el.getBoundingClientRect().height || 1
      const epsilon = 2
      return -(1 + H / h) * 100 - epsilon
    }

    const splits: SplitText[] = []
    const ctx = gsap.context(() => {
      const splitTop = new SplitText(topEl, { type: 'chars' })
      const splitMiddle = new SplitText(middleEl, { type: 'chars' })
      const splitBottom = new SplitText(bottomEl, { type: 'chars' })
      splits.push(splitTop, splitMiddle, splitBottom)

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top top',
          end: '+=400%',
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onRefresh: () => {
            imgs.forEach((el) =>
              gsap.set(el, {
                yPercent: gsap.getProperty(el, 'yPercent') as number,
              })
            )
          },
        },
        defaults: { ease: 'none', stagger: { each: 0.06, from: 'start' } },
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
      tl.to(
        img01El,
        { yPercent: () => getExitYPercent(img01El), force3D: true },
        '<'
      )

      scaleChars(splitMiddle.chars, 0, 1, '50% 100%', '<')
      tl.to(
        img02El,
        { yPercent: () => getExitYPercent(img02El), force3D: true },
        '<+=0.5'
      )

      scaleChars(splitMiddle.chars, 1, 0, '50% 0%')
      tl.to(
        img03El,
        { yPercent: () => getExitYPercent(img03El), force3D: true },
        '<+=0.5'
      )

      scaleChars(splitBottom.chars, 0, 1, '50% 100%', '<')
      tl.to(
        img04El,
        { yPercent: () => getExitYPercent(img04El), force3D: true },
        '<+=0.5'
      )
    }, wrapper)
    ScrollTrigger.refresh()
    return () => {
      ctx.revert()
      splits.forEach((s) => s.revert())
    }
  }, [])

  return (
    <div
      ref={classWrapperRef}
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      <div className="relative text-center text-[clamp(80px,calc(30px+15.25vw),300px)] leading-none font-bold whitespace-nowrap text-[#ffe000] will-change-transform">
        <span ref={classTextTopRef} className="inline-block">
          CLASSES
        </span>
        <span
          ref={classTextMiddleRef}
          className="absolute inset-0 inline-block"
        >
          CLASSES
        </span>
        <span
          ref={classTextBottomRef}
          className="absolute inset-0 inline-block"
        >
          CLASSES
        </span>
        <p className="mx-auto w-full max-w-[600px] px-5 text-center text-[clamp(16px,14.206px+100vw*.0046,22px)] whitespace-normal text-[#ffe000] uppercase">
          The most exciting classes, created by top instructors. No matter your
          goal, we can make it happen.
        </p>
      </div>

      <span
        ref={img01Ref}
        className="group absolute top-full left-0 w-[45vw] max-w-[400px] origin-bottom border-[4px] border-transparent duration-300 will-change-transform hover:border-[#ffe000] md:w-[25vw]"
      >
        <img
          src="/assets/images/classes-img-01.jpg"
          alt=""
          className="block h-auto w-full"
        />
        <span className="absolute inset-x-0 bottom-0 p-5 text-[clamp(20px,12px+100vw*.0076,30px)] text-white uppercase duration-300 group-hover:text-[#ffe000]">
          Dance Kids
        </span>
      </span>
      <span
        ref={img02Ref}
        className="group absolute top-full right-0 w-[45vw] max-w-[400px] origin-bottom border-[4px] border-transparent duration-300 will-change-transform hover:border-[#ffe000] md:w-[25vw]"
      >
        <img
          src="/assets/images/classes-img-02.jpg"
          alt=""
          className="block h-auto w-full"
        />
        <span className="absolute inset-x-0 bottom-0 p-5 text-[clamp(20px,12px+100vw*.0076,30px)] text-white uppercase duration-300 group-hover:text-[#ffe000]">
          Dance Kids
        </span>
      </span>
      <span
        ref={img03Ref}
        className="group absolute top-full left-0 w-[45vw] max-w-[400px] origin-bottom border-[4px] border-transparent duration-300 will-change-transform hover:border-[#ffe000] md:w-[25vw]"
      >
        <img
          src="/assets/images/classes-img-03.jpg"
          alt=""
          className="block h-auto w-full"
        />
        <span className="absolute inset-x-0 bottom-0 p-5 text-[clamp(20px,12px+100vw*.0076,30px)] text-white uppercase duration-300 group-hover:text-[#ffe000]">
          Dance Kids
        </span>
      </span>
      <span
        ref={img04Ref}
        className="group absolute top-full right-1/5 w-[45vw] max-w-[400px] origin-bottom border-[4px] border-transparent duration-300 will-change-transform hover:border-[#ffe000] md:w-[25vw]"
      >
        <img
          src="/assets/images/classes-img-04.jpg"
          alt=""
          className="block h-auto w-full"
        />
        <span className="absolute inset-x-0 bottom-0 p-5 text-[clamp(20px,12px+100vw*.0076,30px)] text-white uppercase duration-300 group-hover:text-[#ffe000]">
          Dance Kids
        </span>
      </span>
    </div>
  )
}
