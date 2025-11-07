'use client'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import React, { useLayoutEffect, useMemo, useRef } from 'react'
gsap.registerPlugin(Draggable)
type SliderItem = {
  image: string
  title: string
}
type DraggableSliderProps = {
  slides: SliderItem[]
  itemClassName?: string
  useInertia?: boolean
}
export default function DraggableSlider({
  slides,
  itemClassName = '',
  useInertia = true,
}: DraggableSliderProps) {
  const rowRef = useRef<HTMLDivElement | null>(null)
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const proxyRef = useRef<HTMLDivElement | null>(null)
  const progressBarRef = useRef<HTMLDivElement | null>(null)
  const slideRefs = useRef<HTMLDivElement[]>([])
  slideRefs.current = useMemo(
    () => Array(slides.length).fill(null) as HTMLDivElement[],
    [slides.length]
  )
  const draggableRef = useRef<Draggable | null | undefined>(null)
  const offsetRef = useRef(0)

  const updateProgress = (currentX: number, minX: number, maxX: number) => {
    if (!progressBarRef.current) return

    // Tính phần trăm progress (0 - 100%)
    const range = maxX - minX
    if (range === 0) {
      gsap.set(progressBarRef.current, { scaleX: 1 })
      return
    }

    const progress = Math.abs(currentX - maxX) / Math.abs(range)
    const clampedProgress = Math.max(0, Math.min(1, progress))

    gsap.to(progressBarRef.current, {
      scaleX: clampedProgress,
      duration: 0.2,
      ease: 'power2.out',
      overwrite: 'auto',
    })
  }

  const computeAndApplyBounds = () => {
    const row = rowRef.current
    const slider = sliderRef.current
    const proxy = proxyRef.current
    if (!row || !slider || !proxy) return { minX: 0, maxX: 0 }
    let totalWidth = 0
    slideRefs.current.forEach((el) => {
      if (!el) return
      totalWidth += el.offsetWidth
    })
    gsap.set([slider, proxy], { width: totalWidth, x: 0 })
    const maxX = 0
    const minX = row.offsetWidth - totalWidth
    return { minX: Math.min(minX, 0), maxX }
  }

  useLayoutEffect(() => {
    const row = rowRef.current
    const slider = sliderRef.current
    const proxy = proxyRef.current
    if (!row || !slider || !proxy) return
    const ctx = gsap.context(() => {
      const { minX, maxX } = computeAndApplyBounds()
      const getProp = gsap.getProperty(slider) as (
        prop: string
      ) => number | string
      const updateX = () => {
        const newX = (draggableRef.current?.x ?? 0) - offsetRef.current
        gsap.to(slider, {
          x: newX,
          ease: 'power2',
          overwrite: 'auto',
          duration: 0.2,
        })
        updateProgress(newX, minX, maxX)
      }
      type GSAPWithPlugins = typeof gsap & {
        plugins?: { InertiaPlugin?: unknown }
      }
      const gsapWithPlugins = gsap as GSAPWithPlugins
      const hasInertia =
        useInertia &&
        gsapWithPlugins.plugins &&
        gsapWithPlugins.plugins.InertiaPlugin
      const draggable = Draggable.create(proxy, {
        type: 'x',
        edgeResistance: 1,
        bounds: { minX, maxX },
        inertia: !!hasInertia,
        trigger: slider, // Trigger drag từ slider thay vì proxy
        onPress() {
          gsap.to(slider.children, {
            duration: 0.4,
            ease: 'power1.inOut',
            overwrite: true,
          })
          gsap.killTweensOf(slider)
          const currentX = Number(getProp('x')) || 0
          offsetRef.current = (draggableRef.current?.x ?? 0) - currentX
        },
        onRelease() {
          gsap.to(slider.children, {
            duration: 1,
            ease: 'power1.inOut',
            scale: 1,
            overwrite: true,
          })
          offsetRef.current = 0
        },
        onDrag: updateX,
        onThrowUpdate: updateX,
      })[0]
      draggableRef.current = draggable

      // Set initial progress
      updateProgress(0, minX, maxX)

      const ro = new ResizeObserver(() => {
        const { minX: nMin, maxX: nMax } = computeAndApplyBounds()
        if (draggable) {
          draggable.applyBounds({ minX: nMin, maxX: nMax })
          const x = Number(gsap.getProperty(slider, 'x')) || 0
          const clamped = Math.max(nMin, Math.min(nMax, x))
          if (clamped !== x) gsap.set(slider, { x: clamped })
          gsap.set(proxy, { x: clamped })
          draggable.update()
          updateProgress(clamped, nMin, nMax)
        }
      })
      ro.observe(row)
      ro.observe(slider)
      return () => {
        ro.disconnect()
        if (draggable) {
          draggable.kill()
        }
        draggableRef.current = null
      }
    }, row)
    return () => ctx.revert()
  }, [slides.length, useInertia])

  return (
    <div className="w-full">
      <div ref={rowRef} className="relative w-full overflow-hidden select-none">
        <div
          ref={proxyRef}
          className="proxy-slider pointer-events-none absolute inset-0 z-10 h-full w-[90%]"
        />
        <div ref={wrapRef} id="slider-inner" className="relative flex w-screen">
          <div
            ref={sliderRef}
            className="slider flex touch-pan-x items-stretch will-change-transform"
          >
            {slides.map((item, i) => (
              <div
                key={i}
                ref={(el) => {
                  if (el) slideRefs.current[i] = el
                }}
                className={`shrink-0 px-5 ${
                  itemClassName || 'w-[70vw] md:w-[400px]'
                }`}
              >
                <div className="relative h-full border-2 border-transparent duration-300 hover:border-[#ffe000]">
                  <img src={item.image} alt="" />
                  <div className="absolute bottom-5 left-5 text-[clamp(18px,17.415px+100vw*.0015,20px)] font-bold text-white uppercase">
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-6 w-full px-5">
        <div className="relative mx-auto h-1 w-[80vw] overflow-hidden rounded-full bg-gray-200">
          <div
            ref={progressBarRef}
            className="absolute top-0 right-0 left-0 h-full origin-left bg-[#ffe000]"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>
      </div>
    </div>
  )
}
