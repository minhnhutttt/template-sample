'use client'

import gsap from 'gsap'
import SplitText from 'gsap/SplitText'
import { useLayoutEffect, useRef } from 'react'

import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'

gsap.registerPlugin(SplitText)

type SplitOptions = {
  readDelayFromDataset?: boolean
}

const Kv = ({ options }: { options?: SplitOptions }) => {
  useInfiniteScroll()
  const scope = useRef<HTMLDivElement | null>(null)
  const container = useRef<HTMLDivElement | null>(null)
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const topRef = useRef<HTMLDivElement | null>(null)
  const bottomRef = useRef<HTMLDivElement | null>(null)
  const thumbRef = useRef<HTMLDivElement | null>(null)
  const videoRef = useRef<HTMLDivElement | null>(null)
  const textRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    if (!scope.current && !container.current) return

    const ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray<HTMLDivElement>('.js-split-block')

      const halfTop =
        document.querySelector<HTMLSpanElement>('.js-split-half-top')
      const halfBottom = document.querySelector<HTMLSpanElement>(
        '.js-split-half-bottom'
      )

      const halfTl = gsap.timeline({
        defaults: { duration: 1, ease: 'power3.out' },
        delay: 2,
      })
      const tls: gsap.core.Timeline[] = []
      const splits: SplitText[] = []
      const tl = gsap.timeline({})
      gsap.set([topRef.current, bottomRef.current], { yPercent: 0 })
      tl.to(
        topRef.current,
        {
          yPercent: -100,
          delay: 2,
        },
        0
      )
        .to(bottomRef.current, { yPercent: 100, delay: 2 }, 0)
        .to(wrapRef.current, { opacity: 0, duration: 2 })
        .from(
          container.current,
          { scale: 0, duration: 2, ease: 'power3.out' },
          '<'
        )
        .to(
          halfTop,
          {
            top: 0,
            transformOrigin: '50% 0%',
            duration: 1,
            ease: 'power3.inOut',
          },
          '+=1'
        )
        .to(
          halfBottom,
          {
            bottom: 0,
            transformOrigin: '50% 100%',
            duration: 1,
            ease: 'power3.inOut',
          },
          '<'
        )
        .fromTo(
          videoRef.current,
          {
            clipPath: 'polygon(0 50%,100% 50%,100% 50%,0 50%)',
            willChange: 'clip-path',
            duration: 1,
            ease: 'power3.inOut',
          },
          {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            willChange: 'clip-path',
            duration: 1,
            ease: 'power3.inOut',
          },
          '<'
        )

      const addStep = (
        tl: gsap.core.Timeline,
        targets: Element[],
        fromScale: number,
        toScale: number,
        origin: string,
        staggerFrom: 'start' | 'end',
        pos?: gsap.Position
      ) => {
        tl.fromTo(
          targets,
          {
            scaleY: fromScale,
            transformOrigin: origin,
            stagger: { each: 0.1, from: staggerFrom },
          },
          {
            scaleY: toScale,
            transformOrigin: origin,
            stagger: { each: 0.1, from: staggerFrom },
          },
          pos
        )
      }

      blocks.forEach((block) => {
        const delay = options?.readDelayFromDataset
          ? Number(block.dataset.delay ?? 0) / 1000
          : 0

        const topEl = block.querySelector<HTMLSpanElement>('.split-text-top')
        const bottomEl =
          block.querySelector<HTMLSpanElement>('.split-text-bottom')
        if (!topEl || !bottomEl) return

        const splitTop = new SplitText(topEl, { type: 'chars' })
        const splitBottom = new SplitText(bottomEl, { type: 'chars' })
        splits.push(splitTop, splitBottom)

        const tl = gsap.timeline({
          defaults: { duration: 2, ease: 'power3.inOut' },
          repeat: -1,
          repeatDelay: 1,
          delay,
        })

        addStep(tl, splitTop.chars, 1, 0, '50% 0%', 'start')
        addStep(tl, splitBottom.chars, 0, 1, '50% 100%', 'start', '<')
        addStep(tl, splitBottom.chars, 1, 0, '50% 100%', 'end', '+=1')
        addStep(tl, splitTop.chars, 0, 1, '50% 0%', 'end', '<')

        tls.push(tl)
      })

      // Cleanup
      return () => {
        tls.forEach((t) => t.kill())
        halfTl.kill()
        splits.forEach((s) => s.revert())
      }
    }, scope)

    return () => ctx.revert()
  }, [options?.readDelayFromDataset])

  return (
    <section
      ref={scope}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
    >
      <div
        ref={wrapRef}
        className="js-overlay pointer-events-none fixed inset-0 z-50 h-screen w-full bg-stone-900"
      >
        <div
          ref={topRef}
          className="absolute inset-x-0 top-0 h-1/2 bg-[#ffe000] will-change-transform"
        />
        <div
          ref={bottomRef}
          className="absolute inset-x-0 bottom-0 h-1/2 bg-[#ffe000] will-change-transform"
        />
      </div>
      <div
        ref={thumbRef}
        className="absolute inset-0 flex items-center justify-center bg-[url(/assets/images/kv.jpg)] bg-cover bg-center bg-no-repeat"
      />
      <div ref={videoRef} className="absolute inset-0 z-10">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          src="/assets/video/web.mp4"
        ></video>
        <div
          ref={textRef}
          className="absolute inset-0 z-40 flex items-center justify-center text-center text-white"
        >
          <div>
            <h3 className="relative mt-[min(20px,20px+100vw*0)] text-[clamp(18px,17.415px+100vw*.0015,20px)] leading-[1em] tracking-[-.01em] uppercase">
              Phive Porto
            </h3>
            <h2 className="relative mt-[min(20px,20px+100vw*0)] text-[clamp(36px,28.863px+100vw*.0183,60px)] leading-[1em] tracking-[-.01em] uppercase">
              Find out more
            </h2>
            <p className="flex items-center justify-center text-center text-[clamp(20px,17.036px+100vw*.0076,30px)] leading-[1em]">
              <a href="#">
                <span className="mt-[max(23px,23px+100vw*.0159)] flex items-center justify-center rounded-[100%] border border-white px-[max(22px,22px+100vw*.0106)] py-[max(20.2px,20.2px+100vw*.0011)] text-[clamp(10px,9.415px+100vw*.0015,12px)] leading-[1.1em] tracking-[.06em] duration-300 hover:bg-stone-900">
                  Discover the Club
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>

      <div
        ref={container}
        className="pointer-events-none relative z-20 flex h-screen items-center justify-center"
      >
        <div className="invisible flex items-center bg-[#ffe000] opacity-0">
          <div className="relative text-[clamp(80px,36.725px+100vw*.1725,300px)] leading-none font-bold whitespace-nowrap">
            <span className="inline-block">PHIVE PORTO</span>
          </div>
        </div>
        <div
          data-infinite-scroll="2:60s"
          className="js-split-half-top absolute flex w-max [clip-path:polygon(0_0,_100%_0,_100%_50%,_0_50%)]"
        >
          <div className="flex shrink-0 items-center">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="relative flex items-center justify-center"
              >
                <div className="flex items-center bg-[#ffe000] px-[max(21px,21px+100vw*.03)]">
                  <div className="js-split-block relative text-[clamp(80px,36.725px+100vw*.1725,300px)] leading-none font-bold whitespace-nowrap">
                    <span className="split-text-top inline-block">
                      PHIVE PORTO
                    </span>
                    <span className="split-text-bottom absolute inset-0 inline-block">
                      PHIVE PORTO
                    </span>
                  </div>
                </div>
                <div className="flex items-center bg-[#ffe000] px-[max(21px,21px+100vw*.03)]">
                  <div className="js-split-block relative text-[clamp(80px,36.725px+100vw*.1725,300px)] leading-none font-bold whitespace-nowrap">
                    <span className="split-text-top inline-block">
                      PHIVE PORTO
                    </span>
                    <span className="split-text-bottom absolute inset-0 inline-block">
                      PHIVE PORTO
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          data-infinite-scroll="2:60s"
          className="js-split-half-bottom absolute flex w-max [clip-path:polygon(0_50%,_100%_50%,_100%_100%,_0_100%)]"
        >
          <div className="flex shrink-0 items-center">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="relative flex items-center justify-center"
              >
                <div className="flex items-center bg-[#ffe000] px-[max(21px,21px+100vw*.03)]">
                  <div className="js-split-block relative text-[clamp(80px,36.725px+100vw*.1725,300px)] leading-none font-bold whitespace-nowrap">
                    <span className="split-text-top inline-block">
                      PHIVE PORTO
                    </span>
                    <span className="split-text-bottom absolute inset-0 inline-block">
                      PHIVE PORTO
                    </span>
                  </div>
                </div>
                <div className="flex items-center bg-[#ffe000] px-[max(21px,21px+100vw*.03)]">
                  <div className="js-split-block relative text-[clamp(80px,36.725px+100vw*.1725,300px)] leading-none font-bold whitespace-nowrap">
                    <span className="split-text-top inline-block">
                      PHIVE PORTO
                    </span>
                    <span className="split-text-bottom absolute inset-0 inline-block">
                      PHIVE PORTO
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Kv
