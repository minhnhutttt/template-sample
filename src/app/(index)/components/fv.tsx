'use client'
import useScrollAnimations from '@/hooks/useScrollAnimations'

export default function Fv() {
  const ref = useScrollAnimations()
  return (
    <section ref={ref}>
      <div className="relative z-10 flex min-h-[660px] justify-center text-white max-md:items-center md:min-h-[850px] md:pt-40">
        <div className="absolute inset-0">
          <div className="absolute inset-0 z-10 bg-[url(/assets/images/fv-bg.png)] bg-cover bg-center"></div>
          <video
            className="relative h-full w-full object-cover"
            data-lazy-video=""
            data-lazy=""
            data-autoplay="true"
            preload="none"
            loop
            muted
            autoPlay
            src="/assets/videos/fv-movie.mp4"
            playsInline
            data-loaded="true"
          ></video>
        </div>
        <div className="relative z-10 flex flex-col items-center px-5">
          <h1 className="">
            <img src="/assets/images/fv-text.svg" alt="" />
          </h1>
        </div>
      </div>
      <div className="relative bg-[linear-gradient(180deg,#000_0%,#000_13.28%,#FFF_52.13%)] max-md:px-5">
        <div className="absolute top-[-120px] right-0 md:top-[-300px]">
          <img
            className="fade-up max-[1440px]:w-[55vw]"
            src="/assets/images/fv-img.png"
            alt=""
          />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1440px] pt-36 pb-24 md:pt-14 md:pb-[140px] md:pl-[86px]">
          <div className="flex items-center">
            <p className="fade-up">
              <img src="/assets/images/fv-logo.png" alt="" />
            </p>
          </div>
          <div className="fade-up mt-20 flex max-md:justify-center md:mt-44">
            <p className="text-center text-[24px] font-bold text-white underline decoration-[#F7CA15] underline-offset-10 md:text-[64px]">
              経営に重要な「集客」
              <br />
              後回しにしていませんか？
            </p>
          </div>
          <div className="fade-up mt-12 flex items-center justify-center md:mt-20">
            <img src="/assets/images/fv-bubbles.png" alt="" />
          </div>
          <div className="fade-up mt-5 mb-3 flex justify-center md:mt-10 md:mb-5">
            <img
              className="max-md:w-25"
              src="/assets/images/fv-arrow.png"
              alt=""
            />
          </div>
          <p className="fade-up text-center text-[30px] font-bold text-black md:text-[64px]">
            集客するには広告が必要だけど…
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 md:mt-9 md:gap-10">
            <p className="fade-up flex items-center gap-2 bg-[#DCDCDC] md:gap-3">
              <span className="h-16 w-6 border-4 !border-r-0 border-[#6f6f6f] md:h-[122px] md:w-10 md:border-8"></span>
              <span className="text-[22px] font-bold md:text-[48px]">
                難しそう
              </span>
              <span className="h-16 w-6 border-4 !border-l-0 border-[#6f6f6f] md:h-[122px] md:w-10 md:border-8"></span>
            </p>
            <p className="fade-up flex items-center gap-2 bg-[#DCDCDC] md:gap-3">
              <span className="h-16 w-6 border-4 !border-r-0 border-[#6f6f6f] md:h-[122px] md:w-10 md:border-8"></span>
              <span className="text-[22px] font-bold md:text-[48px]">
                高そう
              </span>
              <span className="h-16 w-6 border-4 !border-l-0 border-[#6f6f6f] md:h-[122px] md:w-10 md:border-8"></span>
            </p>
            <p className="fade-up flex items-center gap-2 bg-[#DCDCDC] md:gap-3">
              <span className="h-16 w-6 border-4 !border-r-0 border-[#6f6f6f] md:h-[122px] md:w-10 md:border-8"></span>
              <span className="text-[22px] font-bold md:text-[48px]">
                面倒くさそう
              </span>
              <span className="h-16 w-6 border-4 !border-l-0 border-[#6f6f6f] md:h-[122px] md:w-10 md:border-8"></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
