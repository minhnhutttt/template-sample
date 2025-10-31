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
    <header className="relative bg-gray-100">
      <div className="container">
        <div className="flex h-24 items-center justify-between">
          <div className="max-w-[160px]">
            <Link href="/">
              <img src="/assets/images/logo.png" alt="" />
            </Link>
          </div>
          <div
            className={`max-lg:absolute max-lg:left-0 max-lg:top-0 max-lg:h-screen max-lg:w-full max-lg:overflow-y-scroll max-lg:bg-white max-lg:px-4 max-lg:pb-12 max-lg:pt-20 ${
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
    </header>
  )
}

export default Header
