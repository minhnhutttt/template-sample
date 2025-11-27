'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

import useScrollAnimations from '@/hooks/useScrollAnimations'

gsap.registerPlugin(ScrollTrigger)
gsap.config({
  nullTargetWarn: false,
})

const Introduction = () => {
  const ref = useScrollAnimations()

  const sectionRef = useRef<HTMLDivElement>(null)
  const item01 = useRef<HTMLDivElement>(null)
  const item02 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 768px)', () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: '+=100%',
              invalidateOnRefresh: true,
            },
          })
          .from(
            item01.current,
            {
              left: '25%',
              duration: 0.6,
              ease: 'power1.in',
            },
            0
          )
          .from(
            item02.current,
            {
              right: '25%',
              duration: 0.6,
              ease: 'power1.in',
            },
            0
          )
      })

      return () => mm.revert()
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ref}
      id="introduction"
      className="bg-[#FDF4FF] pt-14 md:pt-20"
    >
      <div ref={sectionRef} className="bg-[#FDF4FF] px-5 pt-10 pb-7 md:pt-18">
        <div className="relative z-10 text-center">
          <h2 className="text-[32px] font-bold md:text-[45px] lg:text-[64px]">
            新しいお買い物体験
          </h2>
          <p className="pt-1 text-[20px] leading-none font-bold md:text-[22px] lg:text-[32px]">
            知らないあなたも、3ステップで完了
          </p>
        </div>
        <div className="relative pb-20 md:pb-[160px]">
          <span className="absolute inset-0 flex justify-center pt-30">
            <img src="/assets/images/checkout.svg" alt="" />
          </span>
          <div className="relative z-20 mx-auto flex w-full max-w-[960px] justify-between gap-60 pt-60 max-md:flex-col max-md:items-center md:gap-7 md:pt-42">
            <div
              ref={item01}
              className="card-item relative w-full max-md:max-w-[420px] md:w-[400px]"
            >
              <figure className="absolute bottom-full left-0">
                <img
                  className="max-md:w-30"
                  src="/assets/images/img-boy.png"
                  alt=""
                />
              </figure>
              <div className="flex flex-col items-center rounded-[20px] border-3 border-[#FD3EFF] bg-white/[0.94] px-5 py-5 md:rounded-[30px] md:border-5 md:py-7">
                <span>
                  <img src="/assets/images/ic-wakaba.png" alt="" />
                </span>
                <p className="flex h-20 w-full items-center justify-center border-b border-[#999] text-center text-[28px] font-bold md:h-[120px] md:text-[48px]">
                  全部初めて
                </p>
                <p className="mt-3 text-center text-[16px] font-medium md:text-[20px]">
                  NFT購入が初めての方
                </p>
                <span className="my-4">
                  <img src="/assets/images/arrows3.svg" alt="" />
                </span>
                <div className="flex items-center gap-1">
                  <span className="rounded-full bg-black px-4 text-[20px] font-black text-white md:text-[28px]">
                    STEP 1
                  </span>
                  <span className="text-[20px] md:text-[28px]">
                    から順番に見る
                  </span>
                </div>
                <span className="mt-4">
                  <img src="/assets/images/triangle.png" alt="" />
                </span>
              </div>
            </div>
            <div
              ref={item02}
              className="card-item relative w-full max-md:max-w-[420px] md:w-[400px]"
            >
              <figure className="absolute right-0 bottom-full">
                <img
                  className="max-md:w-27"
                  src="/assets/images/img-girl.png"
                  alt=""
                />
              </figure>
              <div className="flex flex-col items-center rounded-[20px] border-3 border-[#00DBDE] bg-white/[0.94] px-5 py-5 md:rounded-[30px] md:border-5 md:py-7">
                <span>
                  <img src="/assets/images/ic-wallet2.png" alt="" />
                </span>
                <p className="flex h-20 w-full items-center justify-center border-b border-[#999] text-center text-[24px] leading-[1.1] font-bold md:h-[120px] md:text-[38px]">
                  ウォレットは
                  <br />
                  持ってる
                </p>
                <p className="mt-3 text-center text-[16px] font-medium md:text-[20px]">
                  {' '}
                  DIVER Wallet Proをお持ちの方
                </p>
                <span className="my-4">
                  <img src="/assets/images/arrows3.svg" alt="" />
                </span>
                <div className="flex items-center gap-1">
                  <span className="rounded-full bg-black px-4 text-[20px] font-black text-white md:text-[28px]">
                    STEP 2
                  </span>
                  <span className="text-[20px] md:text-[28px]">
                    から順番に見る
                  </span>
                </div>
                <span className="mt-4">
                  <img src="/assets/images/triangle.png" alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction
