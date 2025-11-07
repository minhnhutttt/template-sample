'use client'

import gsap from 'gsap'
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'

type SliderItems = {
  image: string
  title: string
}

type ModalGalleryProps = {
  images: SliderItems[]
  initialIndex?: number
  openButtonLabel?: string
  autoplayDelay?: number // milliseconds
}

export default function ModalGallery({
  images,
  initialIndex = 0,
  autoplayDelay = 5000,
}: ModalGalleryProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [index, setIndex] = useState(initialIndex)
  const [animating, setAnimating] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const overlayRef = useRef<HTMLDivElement | null>(null)
  const frameRef = useRef<HTMLDivElement | null>(null)
  const slidesRef = useRef<HTMLDivElement[]>([])
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null)
  const progressAnimRef = useRef<gsap.core.Tween | null>(null)

  // Touch/swipe handling
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const isDragging = useRef(false)

  slidesRef.current = useMemo(
    () => Array(images.length).fill(null) as HTMLDivElement[],
    [images.length]
  )

  useEffect(() => {
    const body = document.body
    if (isOpen) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = ''
    }
    return () => {
      body.style.overflow = ''
    }
  }, [isOpen])

  useLayoutEffect(() => {
    if (!isOpen) return
    const ctx = gsap.context(() => {
      slidesRef.current.forEach((el, i) => {
        if (!el) return
        if (i === index) {
          gsap.set(el, {
            opacity: 1,
            scaleX: 1,
            transformOrigin: 'center center',
            zIndex: 10,
          })
        } else {
          gsap.set(el, {
            opacity: 0,
            scaleX: 0,
            transformOrigin: 'right center',
            zIndex: 5,
          })
        }
      })
    }, frameRef)
    return () => ctx.revert()
  }, [isOpen, index])

  // Autoplay & Progress
  useEffect(() => {
    if (!isOpen || isPaused || animating) {
      if (progressAnimRef.current) {
        progressAnimRef.current.kill()
      }
      return
    }

    setProgress(0)

    // Animate progress bar
    progressAnimRef.current = gsap.to(
      {},
      {
        duration: autoplayDelay / 1000,
        onUpdate: function () {
          setProgress(this.progress() * 100)
        },
      }
    )

    // Set autoplay timer
    autoplayTimerRef.current = setTimeout(() => {
      handleNext()
    }, autoplayDelay)

    return () => {
      if (autoplayTimerRef.current) {
        clearTimeout(autoplayTimerRef.current)
      }
      if (progressAnimRef.current) {
        progressAnimRef.current.kill()
      }
    }
  }, [isOpen, index, isPaused, animating, autoplayDelay])

  const clampIndex = (i: number) => {
    const len = images.length
    return (i + len) % len
  }

  const slideTo = (nextIndex: number, dir: 1 | -1) => {
    if (!isOpen || animating) return
    nextIndex = clampIndex(nextIndex)
    if (nextIndex === index) return

    const currentEl = slidesRef.current[index]
    const nextEl = slidesRef.current[nextIndex]
    if (!currentEl || !nextEl) return

    setAnimating(true)

    const currentOrigin = dir === 1 ? 'left center' : 'right center'
    const nextOrigin = dir === 1 ? 'right center' : 'left center'

    gsap.set(nextEl, {
      opacity: 1,
      scaleX: 0,
      transformOrigin: nextOrigin,
      zIndex: 11,
    })
    gsap.set(currentEl, {
      transformOrigin: currentOrigin,
      zIndex: 12,
    })

    const tl = gsap.timeline({
      defaults: { duration: 0.6, ease: 'power2.inOut' },
      onComplete: () => {
        gsap.set(currentEl, {
          opacity: 0,
          scaleX: 1,
          clearProps: 'transformOrigin,zIndex',
        })
        gsap.set(nextEl, {
          opacity: 1,
          scaleX: 1,
          clearProps: 'transformOrigin,zIndex',
        })
        setIndex(nextIndex)
        setAnimating(false)
      },
    })

    tl.to(currentEl, { scaleX: 0 }, 0)
    tl.to(nextEl, { scaleX: 1 }, 0)
  }

  const handleNext = () => slideTo(index + 1, 1)
  const handlePrev = () => slideTo(index - 1, -1)

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      touchStartX.current = e.touches[0].clientX
    }
    isDragging.current = true
    setIsPaused(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return
    if (e.touches[0]) {
      touchEndX.current = e.touches[0].clientX
    }
  }

  const handleTouchEnd = () => {
    if (!isDragging.current) return
    isDragging.current = false

    const diff = touchStartX.current - touchEndX.current
    const threshold = 50 // minimum swipe distance

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        handleNext()
      } else {
        handlePrev()
      }
    }

    setIsPaused(false)
  }

  // Mouse handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    touchStartX.current = e.clientX
    isDragging.current = true
    setIsPaused(true)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    touchEndX.current = e.clientX
  }

  const handleMouseUp = () => {
    if (!isDragging.current) return
    isDragging.current = false

    const diff = touchStartX.current - touchEndX.current
    const threshold = 50

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        handleNext()
      } else {
        handlePrev()
      }
    }

    setIsPaused(false)
  }

  const handleMouseLeave = () => {
    if (isDragging.current) {
      isDragging.current = false
      setIsPaused(false)
    }
  }

  return (
    <div>
      <button type="button" onClick={() => setIsOpen(true)} className="spin">
        <img
          className="max-md:w-[135px]"
          src="/assets/images/view-photo.svg"
          alt=""
        />
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 md:p-10"
          onClick={(e) => {
            if (e.target === overlayRef.current) setIsOpen(false)
          }}
        >
          <div
            ref={frameRef}
            className="relative mx-auto h-full w-full overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: isDragging.current ? 'grabbing' : 'grab' }}
          >
            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 left-4 z-[200] flex size-10 cursor-pointer items-center justify-center rounded-full bg-[#ffe000] text-[20px] font-black text-black hover:bg-[#ffe000]/[0.7] md:size-16 md:text-[24px]"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Slides */}
            <div className="relative h-full w-full">
              {images.map((item, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    if (el) slidesRef.current[i] = el
                  }}
                  className="absolute inset-0 flex items-center justify-center max-md:flex-col"
                  style={{ willChange: 'transform, opacity' }}
                >
                  <img
                    src={item.image}
                    alt={`Slide ${i + 1}`}
                    className="max-h-[calc(100%-144px)] w-full rounded-2xl object-cover max-md:flex-1 md:h-full"
                    draggable={false}
                  />
                  <div className="bottom-0 left-0 p-5 text-[clamp(20px,17.036px+100vw*0076,30px)] font-bold text-white uppercase max-md:h-36 max-md:bg-black md:absolute md:p-10">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Pagination */}
            <div className="absolute right-0 bottom-40 left-0 z-20 flex justify-center gap-2 px-4 md:hidden">
              {images.map((_, i) => (
                <div
                  key={i}
                  className="relative h-1 w-5 overflow-hidden rounded-full bg-white/30"
                >
                  <div
                    className="absolute top-0 left-0 h-full bg-white transition-all"
                    style={{
                      width:
                        i === index
                          ? `${progress}%`
                          : i < index
                            ? '100%'
                            : '0%',
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="absolute right-10 bottom-0 z-20 flex items-center justify-between gap-3 p-4 max-md:hidden">
              <button
                type="button"
                onClick={handlePrev}
                disabled={animating}
                className="pointer-events-auto size-15 rounded-full bg-white text-[20px] text-black backdrop-blur hover:bg-white/20 disabled:opacity-50 md:text-[32px]"
                aria-label="Previous"
              >
                {'<'}
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={animating}
                className="pointer-events-auto size-15 rounded-full bg-white text-[20px] text-black backdrop-blur hover:bg-white/20 disabled:opacity-50 md:text-[32px]"
                aria-label="Next"
              >
                {'>'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
