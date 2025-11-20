'use client'

import { gsap } from 'gsap'
import { ReactNode, useRef } from 'react'

export type FaqItemPropsType = {
  id: string
  question: ReactNode
  answer: ReactNode
}

const FaqItem = ({ id, question, answer }: FaqItemPropsType) => {
  const contentRef = useRef(null)
  const arrowRef = useRef(null)
  const isClosedRef = useRef(true)

  const handleExpanderClick = () => {
    const $content = contentRef.current
    const $arrow = arrowRef.current
    if (isClosedRef.current) {
      gsap.set($content, { height: 'auto' })
      gsap.from($content, { duration: 0.2, height: 0 })
      gsap.to($arrow, { duration: 0.1, rotation: -180 })
    } else {
      gsap.to($content, { duration: 0.2, height: 0 })
      gsap.to($arrow, { duration: 0.1, rotation: 0 })
    }
    isClosedRef.current = !isClosedRef.current
  }

  return (
    <div className="rounded-[14px] border border-[#105F6E] bg-white p-4 md:px-8 md:pt-6 md:pb-6">
      <button
        type="button"
        className="flex w-full items-center justify-between duration-200 hover:cursor-pointer"
        onClick={handleExpanderClick}
      >
        <div className="flex">
          <p className="u-text-gradient gradient-stroke-text font-['inter'] text-[18px] leading-none font-bold tracking-widest text-white uppercase max-md:mt-0.5 md:text-[24px]">
            q{id}
          </p>
          <p className="ml-2 text-left text-[14px] md:ml-7 md:text-[18px]">
            {question}
          </p>
        </div>
        <div
          ref={arrowRef}
          className="relative ml-2 flex w-8 items-center justify-center duration-150 md:w-[50px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <mask
              id="mask0_189_1816"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="32"
              height="32"
            >
              <rect width="32" height="32" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_189_1816)">
              <path
                d="M16.0006 19.5606C15.8399 19.5606 15.6904 19.5349 15.5519 19.4836C15.4135 19.4322 15.2818 19.3442 15.1569 19.2196L9.16457 13.2272C8.98013 13.0426 8.88568 12.8104 8.88124 12.5309C8.87702 12.2516 8.97146 12.0152 9.16457 11.8219C9.35791 11.6288 9.59213 11.5322 9.86724 11.5322C10.1424 11.5322 10.3766 11.6288 10.5699 11.8219L16.0006 17.2529L21.4312 11.8219C21.6159 11.6374 21.848 11.543 22.1276 11.5386C22.4069 11.5343 22.6432 11.6288 22.8366 11.8219C23.0297 12.0152 23.1262 12.2494 23.1262 12.5246C23.1262 12.7997 23.0297 13.0339 22.8366 13.2272L16.8442 19.2196C16.7194 19.3442 16.5877 19.4322 16.4492 19.4836C16.3108 19.5349 16.1612 19.5606 16.0006 19.5606Z"
                fill="url(#paint0_linear_189_1816)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_189_1816"
                x1="8.8811"
                y1="11.5322"
                x2="23.2961"
                y2="11.8498"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00C853" />
                <stop offset="1" stopColor="#19227E" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </button>
      <div ref={contentRef} className="h-0 overflow-hidden md:ml-16">
        <p className="pt-[5px] pb-4 text-[13px] leading-[1.6] text-black md:w-[85%] md:pb-7 md:text-[15px]">
          {answer}
        </p>
      </div>
    </div>
  )
}

export default FaqItem
