'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

import useScrollAnimations from '@/hooks/useScrollAnimations'

gsap.registerPlugin(ScrollTrigger)
gsap.config({
  nullTargetWarn: false,
})

const Flow = () => {
  const ref = useScrollAnimations()
  const sectionRef = useRef<HTMLDivElement>(null)
  const card01 = useRef<HTMLDivElement>(null)
  const card02 = useRef<HTMLDivElement>(null)
  const card03 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(card01.current, {
        scale: 0.9,
        rotate: gsap.utils.random(-10, 10),
        duration: 0.5,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: card01.current,
          scrub: true,
          start: 'top top',
          end: '+=100%',
        },
      })

      gsap.to(card02.current, {
        scale: 0.9,
        rotate: gsap.utils.random(-10, 10),
        duration: 0.5,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: card02.current,
          scrub: true,
          start: 'top top',
          end: '+=100%',
        },
      })

      gsap.to(card03.current, {
        scale: 0.9,
        rotate: gsap.utils.random(-10, 10),
        duration: 0.5,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: card03.current,
          scrub: true,
          start: 'top top',
          end: '+=100%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])
  return (
    <section ref={ref} id="flow" className="relative overflow-clip">
      <div className="fade-up relative mx-auto -mt-12 flex h-25 w-[300px] items-center justify-center gap-3 rounded-3xl border-4 border-black bg-white px-5 before:absolute before:-bottom-[26px] before:h-[26px] before:w-[30px] before:bg-black before:[clip-path:polygon(0_0,100%_0,50%_100%)] after:absolute after:bottom-[-20px] after:h-[26px] after:w-[30px] after:bg-white after:[clip-path:polygon(0_0,100%_0,50%_100%)] md:-mt-23 md:h-[155px] md:w-[404px] md:px-7.5 md:before:-bottom-[36px] md:before:h-[36px] md:before:w-[40px] md:after:bottom-[-28px] md:after:h-[36px] md:after:w-[40px]">
        <figure>
          <img
            className="max-md:w-14"
            src="/assets/images/ic-right.png"
            alt=""
          />
        </figure>
        <p className="flex-1 text-[18px] font-bold md:text-[24px]">
          迷ったら、STEP 1から見るのがおすすめです
        </p>
      </div>
      <div className="mt-16 md:mt-24">
        <div className="fade-up flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            <span>
              <img
                className="max-md:w-[120px]"
                src="/assets/images/ic-title.png"
                alt=""
              />
            </span>
            <h3 className="absolute text-center text-[40px] font-bold whitespace-nowrap md:text-[64px]">
              商品の購入手順
            </h3>
          </div>
        </div>
        <p className="fade-up mt-6 text-center text-[15px] font-bold md:mt-8 md:text-[24px]">
          <img
            src="/assets/images/ic-clock.svg"
            alt=""
            className="mb-1 inline w-6"
          />
          合計15分で完了！
          <br />
          途中で分からなくなっても、このページを見ればOK
        </p>
      </div>
      <div ref={sectionRef} className="relative">
        <div
          ref={card01}
          className="sticky top-0 left-0 flex h-screen items-center justify-center px-5"
        >
          <div className="@container relative h-[600px] max-h-[90vh] w-full max-w-[1280px] rounded-[30px] bg-[#FECCFF] md:h-[660px] md:rounded-[60px]">
            <span className="absolute top-0 left-[3.13cqw]">
              <img
                className="w-[240px] md:w-[50.8cqw]"
                src="/assets/images/flow-01.svg"
                alt=""
              />
            </span>
            <div className="relative flex h-full items-center justify-center gap-5 max-md:flex-col md:justify-center md:gap-10 md:p-[3.1cqw]">
              <div className="">
                <p className="text-center leading-none font-bold">
                  <img
                    src="/assets/images/ic-clock.svg"
                    alt=""
                    className="-mt-5 inline w-8 md:-mt-[4.7cqw] md:w-[5.6cqw]"
                  />
                  <span className="text-[64px] md:text-[9.4cqw]">2</span>
                  <span className="text-[36px] md:text-[5cqw]">分</span>
                </p>
                <p className="text-center text-[40px] font-bold max-md:leading-[1.2] md:text-[6.4cqw]">
                  無料アプリを
                  <br />
                  ダウンロード
                </p>
                <div className="flex justify-center max-md:mt-4">
                  <Link
                    href="#"
                    className="flex h-10 w-[220px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#00DBDE_0%,#FD3EFF_100%)] p-[3px] text-[16px] font-medium text-white md:h-[50px] md:h-[64px] md:w-[15.6cqw] md:w-[320px] md:text-[1.88cqw]"
                  >
                    <span className="flex h-full w-full items-center justify-center gap-2 rounded-full bg-black leading-[1.2]">
                      STEP 1 へスキップ
                    </span>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span>
                  <img
                    className="max-md:w-28"
                    src="/assets/images/wallet-pro.png"
                    alt=""
                  />
                </span>
                <p className="mt-3 mb-6 text-[16px] font-bold md:mt-5 md:mb-10 md:text-[24px]">
                  DIVER Wallet Proを入れるだけ
                </p>
                <div className="flex justify-center gap-5 max-md:flex-col">
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[160px] md:w-[21.88cqw]"
                  >
                    <img src="/assets/images/btn-apple.png" alt="" />
                  </a>
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[160px] md:w-[21.88cqw]"
                  >
                    <img src="/assets/images/btn-google.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={card02}
          className="sticky top-0 left-0 flex h-screen items-center justify-center px-5"
        >
          <div className="@container relative h-[600px] max-h-[90vh] w-full max-w-[1280px] rounded-[30px] bg-[#A2FFFD] md:h-[660px] md:rounded-[60px]">
            <span className="absolute top-0 left-[3.13cqw]">
              <img
                className="w-[240px] md:w-[53.44cqw]"
                src="/assets/images/flow-02.svg"
                alt=""
              />
            </span>
            <div className="relative flex h-full items-center justify-center gap-5 max-md:flex-col md:justify-center md:gap-10 md:p-[3.1cqw]">
              <div className="">
                <p className="text-center leading-none font-bold">
                  <img
                    src="/assets/images/ic-clock.svg"
                    alt=""
                    className="-mt-5 inline w-8 md:-mt-[4.7cqw] md:w-[5.6cqw]"
                  />
                  <span className="text-[64px] md:text-[9.4cqw]">10</span>
                  <span className="text-[36px] md:text-[5cqw]">分</span>
                </p>
                <p className="text-center text-[40px] font-bold max-md:leading-[1.2] md:text-[6.4cqw]">
                  支払い用の
                  <br />
                  コインを準備
                </p>
                <div className="flex justify-center max-md:mt-4">
                  <Link
                    href="#"
                    className="flex h-10 w-[220px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#00DBDE_0%,#FD3EFF_100%)] p-[3px] text-[16px] font-medium text-white md:h-[50px] md:h-[64px] md:w-[15.6cqw] md:w-[320px] md:text-[1.88cqw]"
                  >
                    <span className="flex h-full w-full items-center justify-center gap-2 rounded-full bg-black leading-[1.2]">
                      STEP 2 へスキップ
                    </span>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center max-md:px-5">
                <div className="rounded-lg bg-white p-5 md:px-7.5 md:py-[66px]">
                  <p className="mt-3 mb-6 text-center text-[16px] font-bold md:mt-5 md:mb-10 md:text-[1.88cqw]">
                    日本円からコインへ交換して準備完了
                  </p>
                  <span>
                    <img
                      className="w-[300px] md:w-[39.45cqw]"
                      src="/assets/images/coins.png"
                      alt=""
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={card03}
          className="sticky top-0 left-0 flex h-screen items-center justify-center px-5"
        >
          <div className="@container relative h-[600px] max-h-[90vh] w-full max-w-[1280px] rounded-[30px] bg-[#CACBFB] md:h-[660px] md:rounded-[60px]">
            <span className="absolute top-0 left-[3.13cqw]">
              <img
                className="w-[240px] md:w-[53.12cqw]"
                src="/assets/images/flow-03.svg"
                alt=""
              />
            </span>
            <div className="relative flex h-full items-center justify-center gap-5 max-md:flex-col md:justify-center md:gap-10 md:p-[3.1cqw]">
              <div className="">
                <p className="text-center leading-none font-bold">
                  <img
                    src="/assets/images/ic-clock.svg"
                    alt=""
                    className="-mt-5 inline w-8 md:-mt-[4.7cqw] md:w-[5.6cqw]"
                  />
                  <span className="text-[64px] md:text-[9.4cqw]">3</span>
                  <span className="text-[36px] md:text-[5cqw]">分</span>
                </p>
                <p className="text-center text-[40px] font-bold max-md:leading-[1.2] md:text-[6.4cqw]">
                  配送先を入力
                  <br />
                  して購入
                </p>
                <div className="flex justify-center max-md:mt-4">
                  <Link
                    href="#"
                    className="flex h-10 w-[220px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#00DBDE_0%,#FD3EFF_100%)] p-[3px] text-[16px] font-medium text-white md:h-[50px] md:h-[64px] md:w-[15.6cqw] md:w-[320px] md:text-[1.88cqw]"
                  >
                    <span className="flex h-full w-full items-center justify-center gap-2 rounded-full bg-black leading-[1.2]">
                      STEP 3 へスキップ
                    </span>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center max-md:px-5">
                <div className="rounded-lg bg-white p-5 md:px-7.5 md:py-[66px]">
                  <p className="mt-3 mb-6 text-center text-[14px] font-bold md:mt-5 md:mb-10 md:text-[1.56cqw]">
                    いつものネットショッピングと同じ
                  </p>
                  <span>
                    <img
                      className="w-[300px] md:w-[36.88cqw]"
                      src="/assets/images/flows.png"
                      alt=""
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Flow
