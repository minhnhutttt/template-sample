'use client'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'
import { useEffect } from 'react'

gsap.registerPlugin(SplitText)

const Kv = () => {
  useEffect(() => {
    const split = new SplitText('.split-text', { type: 'chars' })
    gsap.from(split.chars, {
      opacity: 0,
      y: 30,
      stagger: 0.04,
      duration: 0.6,
      ease: 'power3.out',
    })

    return () => split.revert() // cleanup
  }, [])
  return (
    <section className="relative flex h-screen items-center">
      <div className="">
        <div className="bg-[#ffe000]">
          <span className="split-text">PHIVE PORTO</span>
        </div>
      </div>
    </section>
  )
}

export default Kv
