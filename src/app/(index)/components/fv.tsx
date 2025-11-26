'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'

const Fv = () => {
  const ref = useScrollAnimations()
  return (
    <section ref={ref} id="fv">
      <div className="bg-[url(/assets/images/bg-fv.png)] bg-left bg-no-repeat px-5 pt-25 max-md:bg-size-[auto_100%] max-md:pb-14 md:pt-38">
        <div className="@container mx-auto flex w-full max-w-[1200px] items-center justify-center max-md:flex-col md:items-start">
          <span className="zoom-out max-md:max-w-[400px] md:w-[46.25cqw]">
            <img src="/assets/images/img-nms.png" alt="" />
          </span>
          <div className="zoom-out flex-1 font-bold max-md:-mt-10">
            <p className="text-[24px] leading-[1.3] tracking-[0.1em] max-md:text-center md:text-[4cqw]">
              初回のあなたも迷いなく。
            </p>
            <h1 className="text-center text-[70px] leading-none font-black md:text-[11.67cqw]">
              <span className="font-roboto u-text-gradient text-[120px] md:text-[18.33cqw]">
                NFT
              </span>
              <span className="text-[50px] md:text-[10cqw]">で</span>
              <br />
              商品購入
            </h1>
            <p className="mx-auto mt-5 text-center text-[24px] md:mt-[3.4cqw] md:w-[35vw] md:text-[4cqw]">
              デジタル購入証明
              <br />
              がスマホに残る！
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fv
