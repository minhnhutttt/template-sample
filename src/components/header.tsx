'use client'

import Link from 'next/link'
import { useState, useEffect, useCallback, useRef } from 'react'

const Header = () => {
  const [NavOpen, setNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const close = useCallback(() => {
    setNavOpen(false)
  }, [])

  useEffect(() => {
    const body = document.body
    if (NavOpen) body.classList.add('overflow-hidden')
    else body.classList.remove('overflow-hidden')
  }, [NavOpen])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const accentColor = scrolled ? '#ffe000' : 'var(--accent)'

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 mx-auto flex w-[326px] items-end justify-center overflow-hidden md:bottom-[16px] ${NavOpen ? 'z-[99]' : 'z-50'}`}
    >
      <div className="relative grid justify-items-start [perspective:1000px]">
        <div
          className={`relative col-[1] row-[1] w-full origin-bottom bg-black text-center uppercase transition-all duration-500 ${NavOpen ? '' : 'invisible h-0 scale-y-0'}`}
        >
          <div>
            <ul
              className="relative flex flex-col divide-y divide-white/20 px-6 py-5 text-center text-[clamp(24px,22.791px+100vw*.0021,24px)] leading-[1em] tracking-[-.028em]"
              style={{ color: accentColor }}
            >
              <li>
                <Link href="/" className="block py-5" onClick={close}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/clubs" className="block py-5" onClick={close}>
                  Clubs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/*  Nút menu + logo  */}
        <div className="flex items-center [backface-visibility:hidden] max-md:h-16">
          <div
            className={`relative flex h-12 w-[326px] flex-[1] items-center md:h-16 md:bg-black ${scrolled ? 'max-md:bg-[#ffe000]' : 'max-md:bg-[var(--accent)]'}`}
          >
            <div className="flex w-[70px] flex-[0_0_70px] items-center justify-center">
              <button
                ref={buttonRef}
                onClick={() => setNavOpen((prev) => !prev)}
                className={`group relative z-30 flex h-10 w-10 cursor-pointer flex-col items-center justify-center text-white transition-transform duration-500 ${NavOpen ? 'rotate-180' : 'rotate-0'}`}
              >
                <span
                  className={`my-1 block h-[2px] w-8 transition-all duration-500 max-md:!bg-black ${NavOpen ? 'translate-y-[5px] rotate-45' : 'group-hover:-translate-y-1'}`}
                  style={{ background: accentColor }}
                ></span>

                <span
                  className={`my-1 block h-[2px] w-8 transition-all duration-500 max-md:!bg-black ${NavOpen ? '-translate-y-[5px] -rotate-45' : 'group-hover:translate-y-1'}`}
                  style={{ background: accentColor }}
                ></span>
              </button>
            </div>

            <div
              className="flex flex-[1] items-center justify-center font-bold max-md:!text-black"
              style={{ color: accentColor }}
            >
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
