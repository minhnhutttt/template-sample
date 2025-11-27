'use client'

import { gsap } from 'gsap'
import { ReactNode, useRef } from 'react'

export type FaqItemPropsType = {
  id: string
  question: ReactNode
  answer: ReactNode
  color?: string
}

const FaqItem = ({
  id,
  question,
  answer,
  color = '#000000',
}: FaqItemPropsType) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const arrowRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isClosedRef = useRef(true)

  const handleExpanderClick = () => {
    const $content = contentRef.current
    const $arrow = arrowRef.current
    const $container = containerRef.current

    if (!$content || !$arrow || !$container) return

    if (isClosedRef.current) {
      gsap.set($content, { height: 'auto' })
      gsap.from($content, { duration: 0.2, height: 0 })
      gsap.to($arrow, { duration: 0.1, rotation: -135 })
      $container.classList.add('is-open')
    } else {
      gsap.to($content, { duration: 0.2, height: 0 })
      gsap.to($arrow, { duration: 0.1, rotation: 0 })
      $container.classList.remove('is-open')
    }

    isClosedRef.current = !isClosedRef.current
  }

  return (
    <div
      ref={containerRef}
      className="group border-b bg-white duration-300 [&.is-open]:bg-[#F5F6F7]"
      style={{ borderColor: color }}
    >
      <button
        type="button"
        className="flex w-full items-center justify-between p-4 duration-200 hover:cursor-pointer md:p-14 md:group-[.is-open]:pb-3"
        onClick={handleExpanderClick}
      >
        <div className="flex flex-1 items-center gap-3 md:gap-12">
          <p
            className="text-left font-['inter'] text-[22px] leading-none font-bold tracking-widest uppercase md:text-[48px]"
            style={{ color: color }}
          >
            q{id}
          </p>
          <p className="flex-1 text-left text-[17px] font-medium md:text-[28px]">
            {question}
          </p>
        </div>
        <div
          ref={arrowRef}
          className="relative ml-3 flex size-8 items-center justify-center rounded-full duration-150 md:size-12"
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="48"
              height="48"
              rx="24"
              className="fill-black group-[.is-open]:fill-white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25 17H23V23H17V25H23V31H25V25H31V23H25V17Z"
              className="fill-white group-[.is-open]:fill-black"
            />
          </svg>
        </div>
      </button>
      <div
        ref={contentRef}
        className="ml-[32px] h-0 overflow-hidden md:ml-[180px]"
      >
        <p className="pt-[15px] pb-5 text-[14px] leading-[1.6] font-medium text-black md:w-[85%] md:pb-11 md:text-[18px]">
          {answer}
        </p>
      </div>
    </div>
  )
}

export default FaqItem
