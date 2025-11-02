'use client'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function FitnessScaleY() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const svgContainerRef = useRef<HTMLDivElement>(null)
  const svgWrapRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const el = textRef.current
    const svgWrapEl = svgWrapRef.current
    const svgContainerEl = svgContainerRef.current
    const svgEl = svgRef.current
    if (!section || !el || !svgWrapEl || !svgContainerEl || !svgEl) return

    const MAX_SCALE = 10

    // Đo chiều cao thực bất kể transform hiện tại
    const getBaseHeight = () => {
      const currentScale = Number(gsap.getProperty(el, 'scaleY')) || 1
      // Ưu tiên clientHeight (không bị transform); nếu vì lý do nào đó =0, fallback sang rect/scale
      const hClient = el.clientHeight
      if (hClient > 0) return hClient
      const rect = el.getBoundingClientRect()
      return (rect.height || 1) / currentScale
    }

    // Tính scale đích để full chiều cao viewport
    const getTargetScale = () => {
      const baseH = getBaseHeight()
      const vh = section.getBoundingClientRect().height
      return Math.min(vh / baseH, MAX_SCALE)
    }

    const getSvgBaseHeight = () => {
      // Lấy bề rộng thực, rồi suy ra chiều cao từ aspect ratio 16/4
      const w = svgEl.clientWidth || svgEl.getBoundingClientRect().width || 1
      const ratio = 4 / 16 // khớp với aspect-[16/4]
      return Math.max(1, w * ratio)
    }

    const getSvgScale = () => {
      const baseH = getSvgBaseHeight()
      const vh = svgContainerEl.getBoundingClientRect().height || 1
      return Math.min(vh / baseH, MAX_SCALE)
    }

    console.log(getSvgScale())

    const ctx = gsap.context(() => {
      // Chuẩn bị

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

      tl.to(el, {
        scaleY: () => getTargetScale(),
        duration: 0.5,
      })

      tl.to(el, {
        scaleY: 0.001,
        duration: 0.5,
      })

      gsap.set(svgEl, {
        scaleY: getSvgScale(),
        transformOrigin: 'center center',
        willChange: 'transform',
      })

      const svgTl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: svgContainerEl,
          start: 'top top',
          end: '+=100%',
          scrub: true,
          pin: true,
          markers: true,
          invalidateOnRefresh: true,
        },
      })

      svgTl.to(svgWrapEl, {
        scale: 3,
        duration: 0.5,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="relative bg-[#ffe000]">
      <div className="flex min-h-[200svh] justify-center">
        <div
          ref={sectionRef}
          className="sticky top-0 right-0 left-0 h-[50vh] md:h-screen"
        >
          <div
            ref={textRef}
            className="text-[clamp(110px,2.828px+100vw*.2748,470px)] leading-[0.8em] text-black select-none"
          >
            Fitness
          </div>
        </div>
      </div>
      <div ref={svgContainerRef} className="-mt-[100svh] h-[50vh] md:h-screen">
        <div ref={svgWrapRef} className="flex h-full w-full justify-center">
          <div
            ref={svgRef}
            className="aspect-[16/4] w-full max-w-[1600px] origin-top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
              aria-label="Strong video mask"
            >
              <mask id="strong-mask">
                <rect x="0" y="0" fill="black" />
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="white"
                  className="bg-black text-[380px] leading-[0.1em] font-bold"
                >
                  STRONG
                </text>
              </mask>

              <g mask="url(#strong-mask)">
                <foreignObject x="0" y="0" className="h-full w-full">
                  <video
                    src="/assets/video/web.mp4"
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </foreignObject>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
