'use client'

import Link from 'next/link'
import { useState, useEffect, useCallback, useRef } from 'react'

const Header = () => {
  const [NavOpen, setNavOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const close = useCallback(() => {
    setNavOpen(false)
  }, [])

  useEffect(() => {
    const body = document.body

    if (NavOpen) {
      body.classList.add('overflow-hidden')
    } else {
      body.classList.remove('overflow-hidden')
    }
  }, [NavOpen])

  return (
    <div className="h-[calc(100vh - 16px)] fixed inset-x-0 bottom-[16px] z-50 mx-auto flex w-[326px] items-end justify-center overflow-hidden">
      <div className="relative grid justify-items-start [perspective:1000px]">
        <div
          className={`relative col-[1] row-[1] w-full origin-bottom bg-black text-center text-[#ffe000] uppercase transition-all duration-500 ${NavOpen ? '' : 'invisible h-0 scale-y-0'}`}
        >
          <div>
            <ul className="relative flex flex-col divide-y divide-white/20 bg-black px-6 py-5 text-center text-[clamp(24px,22.791px+100vw*.0021,24px)] leading-[1em] tracking-[-.028em]">
              <li>
                <Link href="/" className="block py-5" onClick={close}>
                  home
                </Link>
              </li>
              <li>
                <Link href="/sample" className="block py-5" onClick={close}>
                  about
                </Link>
              </li>
              <li>
                <Link href="/" className="block py-5" onClick={close}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/444" className="block py-5" onClick={close}>
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center bg-black [backface-visibility:hidden]">
          <div className="relative flex h-16 w-[326px] flex-[1] items-center bg-black">
            <div className="flex w-[70px] flex-[0_0_70px] items-center justify-center">
              <button
                ref={buttonRef}
                onClick={() => setNavOpen((prev) => !prev)}
                className={`group relative z-30 flex h-10 w-10 cursor-pointer flex-col items-center justify-center text-white transition-transform duration-500 ${NavOpen ? 'rotate-180' : 'rotate-0'} `}
              >
                <span
                  className={`my-1 block h-[2px] w-8 bg-[#ffe000] transition-all duration-500 ${NavOpen ? 'translate-y-[5px] rotate-45' : 'group-hover:-translate-y-1'} `}
                ></span>

                <span
                  className={`my-1 block h-[2px] w-8 bg-[#ffe000] transition-all duration-500 ${NavOpen ? '-translate-y-[5px] -rotate-45' : 'group-hover:translate-y-1'} `}
                ></span>
              </button>
            </div>
            <div className="flex flex-[1] items-center justify-center font-bold text-white">
              LOGO
            </div>
            <div className="flex w-[70px] flex-[0_0_70px] items-center justify-center">
              <button></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
