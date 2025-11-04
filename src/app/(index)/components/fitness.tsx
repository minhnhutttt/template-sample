'use client'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function Fitness() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const weightRef = useRef<HTMLDivElement>(null)
  const weight2Ref = useRef<HTMLDivElement>(null)
  const weight3Ref = useRef<HTMLDivElement>(null)

  const svgContainerRef = useRef<HTMLDivElement>(null)
  const svgWrapRef = useRef<HTMLDivElement>(null)
  const svgBoxRef = useRef<HTMLDivElement>(null)
  const blackTextRef = useRef<SVGTextElement>(null)

  const spWrapperRef = useRef<HTMLDivElement>(null)
  const spSlot1Ref = useRef<HTMLDivElement>(null)
  const spSlot2Ref = useRef<HTMLDivElement>(null)
  const spText1Ref = useRef<HTMLDivElement>(null)
  const spText2Ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const el = textRef.current
    const svgContainerEl = svgContainerRef.current
    const svgWrapEl = svgWrapRef.current
    const svgBoxEl = svgBoxRef.current
    const blackText = blackTextRef.current
    const weightEl = weightRef.current
    const weight2El = weight2Ref.current
    const weight3El = weight3Ref.current

    if (
      !section ||
      !el ||
      !svgContainerEl ||
      !svgWrapEl ||
      !svgBoxEl ||
      !blackText ||
      !weightEl ||
      !weight2El ||
      !weight3El
    )
      return

    const MAX_SCALE = 10

    const getBaseHeight = (node: HTMLElement) => {
      const hClient = node.clientHeight
      if (hClient > 0) return hClient

      const currentScale = Number(gsap.getProperty(node, 'scaleY')) || 1
      const rect = node.getBoundingClientRect()
      return (rect.height || 1) / currentScale
    }

    const getTargetScale = () => {
      const baseH = getBaseHeight(el)
      const vh = section.getBoundingClientRect().height
      return Math.min(vh / baseH, MAX_SCALE)
    }

    const getSvgBaseHeight = () => {
      const w =
        svgBoxEl.clientWidth || svgBoxEl.getBoundingClientRect().width || 1
      const ratio = 4 / 16
      return Math.max(1, w * ratio)
    }

    const getSvgScale = () => {
      const baseH = getSvgBaseHeight()
      const vh = svgContainerEl.getBoundingClientRect().height || 1
      return Math.min(vh / baseH, MAX_SCALE)
    }

    const fitSvgHeight = () => {
      gsap.set(svgBoxEl, {
        scaleY: getSvgScale(),
        transformOrigin: 'center center',
        willChange: 'transform',
      })
    }

    const ctx = gsap.context(() => {
      gsap.set(el, {
        scaleY: 0.001,
        transformOrigin: 'top center',
        force3D: true,
        willChange: 'transform',
      })

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: '+=200%',
          scrub: true,
          invalidateOnRefresh: true,
        },
      })

      tl.to(el, { scaleY: () => getTargetScale(), duration: 0.5 })
      tl.to(
        weightEl,
        { rotate: 360, yPercent: 100, duration: 0.5, ease: 'power1.inOut' },
        '<'
      )
      tl.to(el, { scaleY: 0.001, duration: 0.5 })
      tl.to(
        weightEl,
        { rotate: -360, yPercent: -100, duration: 0.5, ease: 'power1.inOut' },
        '<'
      )

      const mm = gsap.matchMedia()

      mm.add('(min-width: 768px)', () => {
        fitSvgHeight()
        gsap.set(blackText, { opacity: 1 })

        const svgTl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: svgContainerEl,
            start: 'top top',
            end: '+=300%',
            scrub: true,
            pin: true,
            markers: false,
            invalidateOnRefresh: true,
            onRefresh: fitSvgHeight,
          },
        })

        svgTl
          .to(
            svgWrapEl,
            { scale: 30, transformOrigin: 'center center', duration: 1 },
            0
          )
          .to(svgWrapEl, { opacity: 0, duration: 0.4 })
          .to(
            weight2El,
            {
              yPercent: -window.innerHeight,
              rotate: 360,
              transformOrigin: 'center center',
              duration: 2,
              ease: 'power1.inOut',
            },
            '<'
          )
          .to(weight3El, {
            yPercent: -window.innerHeight,
            rotate: -360,
            transformOrigin: 'center center',
            duration: 2,
            ease: 'power1.inOut',
          })

        svgTl.to(blackText, { opacity: 0, duration: 1 }, 0)

        const onResize = () => {
          fitSvgHeight()
          ScrollTrigger.refresh()
        }
        window.addEventListener('resize', onResize, { passive: true })

        return () => {
          window.removeEventListener('resize', onResize)
          svgTl.kill()
        }
      })

      mm.add('(max-width: 767.98px)', () => {
        const slot1 = spSlot1Ref.current
        const slot2 = spSlot2Ref.current
        const t1 = spText1Ref.current
        const t2 = spText2Ref.current

        if (!slot1 || !slot2 || !t1 || !t2) return

        gsap.set([t1, t2], { transformOrigin: 'top center' })

        const fitOne = (slotEl: HTMLElement, textEl: HTMLElement) => {
          gsap.set(textEl, { scaleY: 1 })
          const baseH = getBaseHeight(textEl)
          const targetH = slotEl.getBoundingClientRect().height || 1
          const scaleY = Math.min(targetH / baseH, MAX_SCALE)
          gsap.set(textEl, { scaleY })
        }

        const fitAll = () => {
          fitOne(slot1, t1)
          fitOne(slot2, t2)
        }

        fitAll()

        const onResize = () => fitAll()
        window.addEventListener('resize', onResize, { passive: true })
        window.addEventListener('orientationchange', onResize)

        const ro1 = new ResizeObserver(() => fitOne(slot1, t1))
        const ro2 = new ResizeObserver(() => fitOne(slot2, t2))
        ro1.observe(slot1)
        ro2.observe(slot2)

        return () => {
          window.removeEventListener('resize', onResize)
          window.removeEventListener('orientationchange', onResize)
          ro1.disconnect()
          ro2.disconnect()
          gsap.set([t1, t2], { scaleY: 1 })
        }
      })

      return () => {
        mm.revert()
      }
    })

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section className="relative bg-[#ffe000]">
      <div className="flex min-h-[100svh] justify-center md:min-h-[200svh]">
        <div
          ref={sectionRef}
          className="sticky top-0 right-0 left-0 flex h-[50vh] items-start max-md:hidden md:h-screen"
        >
          <div
            ref={textRef}
            className="text-[clamp(110px,2.828px+100vw*.2748,470px)] leading-[0.8em] text-black select-none"
          >
            Fitness
          </div>
          <div ref={weightRef} className="absolute size-45">
            <img
              className="max-md:hidden"
              src="/assets/images/weight.webp"
              alt=""
            />
          </div>
        </div>

        <div ref={spWrapperRef} className="flex h-screen flex-col md:hidden">
          <div className="h-[70vh]">
            <div
              ref={spSlot1Ref}
              className="flex h-[35vh] origin-top items-start"
            >
              <div
                ref={spText1Ref}
                className="text-[clamp(90px,2.828px+100vw*.2448,470px)] leading-[0.8em] text-black uppercase select-none"
              >
                Fitness
              </div>
            </div>
            <div
              ref={spSlot2Ref}
              className="flex h-[35vh] origin-top items-start"
            >
              <div
                ref={spText2Ref}
                className="text-[clamp(90px,2.828px+100vw*.2448,470px)] leading-[0.8em] font-bold text-black uppercase select-none"
              >
                STRONG
              </div>
            </div>
          </div>
          <div className="flex-1">
            <video
              src="/assets/video/web.mp4"
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </div>

      <div
        ref={svgContainerRef}
        className="relative -mt-[50svh] h-[50vh] overflow-hidden md:-mt-[100svh] md:h-screen"
      >
        <div className="absolute inset-0 -z-10">
          <video
            src="/assets/video/web.mp4"
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        <div
          ref={svgWrapRef}
          className="flex h-full w-full items-center justify-center max-md:hidden"
        >
          <div ref={svgBoxRef} className="aspect-[16/4] w-full origin-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1600 400"
              className="h-full w-full"
              aria-label="Yellow outside, video through text"
            >
              <defs>
                <mask id="hole-mask" maskUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="1600" height="400" fill="#fff" />
                  <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontSize="350"
                    fontWeight="700"
                    fill="#000"
                  >
                    STRONG
                  </text>
                </mask>
              </defs>

              <rect
                x="0"
                y="0"
                width="1600"
                height="400"
                fill="#ffe000"
                mask="url(#hole-mask)"
              />

              <text
                ref={blackTextRef}
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="350"
                fontWeight="700"
                fill="#000"
              >
                STRONG
              </text>
            </svg>
          </div>
        </div>

        <div ref={weight2Ref} className="absolute top-full left-1/6 size-45">
          <img
            className="max-md:hidden"
            src="/assets/images/weight.webp"
            alt=""
          />
        </div>
        <div ref={weight3Ref} className="absolute top-full right-1/6 size-45">
          <img
            className="max-md:hidden"
            src="/assets/images/weight.webp"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}
