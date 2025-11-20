'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'

const Business = () => {
  const ref = useScrollAnimations()
  return (
    <section ref={ref}>
      <div className="bg-[#1A237E] px-5 pt-24 md:pt-40">
        <div className="relative mx-auto w-full max-w-[1070px] pb-55 md:pb-[160px]">
          <div className="absolute right-0 bottom-4">
            <img
              className="fade-up max-md:w-[120px]"
              src="/assets/images/walk-robot.png"
              alt=""
            />
          </div>
          <div className="flex justify-center">
            <h4 className="fade-up border-b-[5px] border-[#FF1744] pb-4 text-center text-[28px] leading-[1.2] font-semibold text-white md:border-b-[7px] md:pb-6 md:text-[64px]">
              AIが集客してくれるから
              <br />
              本業に集中できる
            </h4>
          </div>
          <p className="fade-up pt-3 text-center text-[16px] text-white md:pt-5 md:text-[20px]">
            SEIKAIを利用することに、リスクは一切ありません！
          </p>
          <div className="relative mt-10 flex justify-between max-lg:flex-wrap max-lg:items-center max-lg:justify-center max-lg:gap-10 md:mt-15">
            <div className="fade-up relative flex size-[300px] flex-col items-center justify-center overflow-hidden rounded-full border-2 border-white/70 p-5 md:size-[350px]">
              <span className="absolute inset-0 bg-white/10 blur-[15px]"></span>
              <div className="max-md:w-[180px]">
                <img src="/assets/images/price-0.png" alt="" />
              </div>
              <p className="text-cenrer mt-2 text-[16px] font-bold text-white md:text-[24px]">
                初期費用
              </p>
            </div>
            <div className="fade-up relative flex size-[300px] flex-col items-center justify-center overflow-hidden rounded-full border-2 border-white/70 p-5 md:size-[350px] lg:mt-42">
              <span className="absolute inset-0 bg-white/10 blur-[15px]"></span>
              <div className="max-md:w-[180px]">
                <img src="/assets/images/price-0.png" alt="" />
              </div>
              <p className="text-cenrer mt-2 text-[16px] font-bold text-white md:text-[24px]">
                月額固定費
              </p>
            </div>
            <div className="fade-up relative flex size-[300px] flex-col items-center justify-center overflow-hidden rounded-full border-2 border-white/70 p-5 md:size-[350px]">
              <span className="absolute inset-0 bg-white/10 blur-[15px]"></span>
              <div className="max-md:w-[180px]">
                <img src="/assets/images/price-percent.png" alt="" />
              </div>
              <p className="text-cenrer mt-2 text-[16px] font-bold text-white md:text-[24px]">
                成果手数料のみ
              </p>
            </div>
          </div>
          <p className="fade-up relative mt-10 text-center text-[24px] font-semibold text-white md:mt-14 md:text-[36px]">
            今すぐ、めんどうな集客をAIに「丸投げ」しませんか？
          </p>
          <div className="fade-up relative mt-7 flex justify-center md:mt-12">
            <h5 className="text-center text-[15px] font-semibold tracking-[0.55em] text-white md:text-[20px]">
              <p>30秒で登録完了！</p>
              <p className="mt-2 md:mt-4">
                <img src="/assets/images/underline2.png" alt="" />
              </p>
            </h5>
          </div>
          <div className="fade-up relative mt-4 flex justify-center md:mt-5">
            <a
              href="#"
              className="flex h-[80px] w-[280px] items-center justify-center gap-2 rounded-[10px] bg-[#FF1744] text-white md:h-[120px] md:w-[434px] md:gap-4"
            >
              <span>
                <img
                  className="max-md:w-11 md:w-[90px]"
                  src="/assets/images/ic-robot.png"
                  alt=""
                />
              </span>
              <span className="text-[20px] font-semibold md:text-[32px]">
                今すぐAIに依頼する
                <br />
                無料登録
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Business
