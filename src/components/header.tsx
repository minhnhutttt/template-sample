'use client'

import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'

const Header = () => {
  const [NavOpen, setNavOpen] = useState(false)

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
    <div className="h-[calc(100vh - 16px)] fixed bottom-[16px] z-50 flex w-[100dvw] items-end justify-center overflow-hidden">
      <div className="relative flex flex-col [perspective:1000px]">
        <div className="relative grid justify-items-start [perspective:1000px]"></div>
        <div className="flex bg-black [backface-visibility:hidden]">
          <div className="relative h-16 w-[326px] flex-[1] bg-black">
            <div className="flex w-[70px] flex-[0_0_70px] items-center justify-center">
              <button></button>
            </div>
            <div className="flex flex-[1] items-center justify-center"></div>
            <div className="flex w-[70px] flex-[0_0_70px] items-center justify-center">
              <button></button>
            </div>
          </div>
        </div>
        <div className="flex h-24 items-center justify-between">
          <div
            className={`max-lg:absolute max-lg:top-0 max-lg:left-0 max-lg:h-screen max-lg:w-full max-lg:overflow-y-scroll max-lg:bg-white max-lg:px-4 max-lg:pt-20 max-lg:pb-12 ${
              NavOpen ? '' : 'max-lg:invisible max-lg:opacity-0'
            }`}
          >
            <ul className="lg:flex lg:gap-6">
              <li>
                <Link href="/" className="inline-block py-3" onClick={close}>
                  home
                </Link>
              </li>
              <li>
                <Link
                  href="/sample"
                  className="inline-block py-3"
                  onClick={close}
                >
                  about
                </Link>
              </li>
              <li>
                <Link href="/" className="inline-block py-3" onClick={close}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/444" className="inline-block py-3" onClick={close}>
                  contact
                </Link>
              </li>
            </ul>
          </div>
          <button
            className="relative z-30 h-10 w-10 bg-black text-white lg:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            {NavOpen ? <div>閉</div> : <div>開</div>}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
