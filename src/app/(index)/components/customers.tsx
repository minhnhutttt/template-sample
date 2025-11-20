'use client'
import useScrollAnimations from '@/hooks/useScrollAnimations'

export default function Customers() {
  const ref = useScrollAnimations()
  return (
    <section ref={ref}>
      <div className="fade-up relative flex justify-center max-md:flex-col">
        <h2 className="absolute inset-x-0 top-[10vw] px-5 text-center text-[5.5vw] leading-[1.1] font-semibold tracking-[0.15em] md:top-[120px] md:text-[clamp(20px,4.44vw,64px)]">
          そんな「漠然とした不安」で、
          <br />
          集客を後回しにしてしまうと…
        </h2>
        <div className="flex justify-center bg-[url(/assets/images/store-bg-01.png)] bg-cover px-8 py-10 max-md:pt-[32vw] md:w-[60%] md:justify-end md:pt-[388px] md:pb-[134px] lg:px-[60px]">
          <div>
            <p className="mb-5 text-center text-[20px] font-bold md:mb-[45px] md:text-[24px]">
              行列のできるライバル店
            </p>
            <figure>
              <img src="/assets/images/store-01.png" alt="" />
            </figure>
          </div>
        </div>
        <div className="flex bg-[#CBCBCB] bg-cover px-8 py-10 max-md:justify-center md:w-[40%] md:pt-[388px] md:pb-[134px] lg:px-[60px]">
          <div>
            <p className="mb-5 text-center text-[20px] font-bold md:mb-[45px] md:text-[24px]">
              閑散とした自分の店
            </p>
            <figure>
              <img src="/assets/images/store-02.png" alt="" />
            </figure>
          </div>
        </div>
      </div>
      <div className="fade-up pt-10 md:pt-18">
        <h3 className="text-center text-[24px] font-bold md:text-[50px] lg:text-[64px]">
          その間にライバルは広告で、
          <br />
          「あなたの未来のお客さん」を
          <br />
          根こそぎ奪っています！
        </h3>
      </div>
      <div className="fade-up mb-6 flex items-center justify-center md:mt-15 md:mt-22 md:mb-10">
        <img src="/assets/images/advertise.png" alt="" />
      </div>
      <div className="fade-up mb-8 flex justify-center md:mb-14">
        <img className="max-md:w-25" src="/assets/images/fv-arrow.png" alt="" />
      </div>
      <div className="fade-up flex justify-center">
        <div>
          <h4 className="flex items-center justify-center gap-2 bg-[url(/assets/images/underline.png)] bg-bottom bg-no-repeat pb-5 max-md:bg-size-[auto_20px] md:tracking-[0.5em]">
            <span>
              <img
                className="max-md:w-10"
                src="/assets/images/ic-title.png"
                alt=""
              />
            </span>
            <span className="text-[32px] font-semibold md:text-[80px]">
              と思いはしても…
            </span>
          </h4>
        </div>
      </div>
      <div className="mx-auto mt-7 flex w-full max-w-[1340px] items-center justify-between gap-5 px-5 max-lg:flex-wrap max-lg:justify-center md:mt-20">
        {[
          {
            image: '/assets/images/img-01.png',
            title: (
              <>
                専門用語だらけの管理
                <br />
                画面は意味不明…
              </>
            ),
          },
          {
            image: '/assets/images/img-02.png',
            title: (
              <>
                代理店に頼むと
                <br />
                初期費用で数十万円？
              </>
            ),
          },
          {
            image: '/assets/images/img-03.png',
            title: (
              <>
                本業が忙しくて広告
                <br />
                なんて考えられない！
              </>
            ),
          },
        ].map((item, index) => (
          <div
            className="fade-up rounded-[30px] border-[5px] border-[#999] bg-[#F0F0F0] p-5 md:px-[30px] md:py-10"
            key={index}
          >
            <figure>
              <img src={item.image} alt="" />
            </figure>
            <p className="mt-4 text-center text-[20px] font-semibold md:mt-5 md:text-[32px]">
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <p className="fade-up mt-15 text-center text-[24px] font-semibold md:mt-22 md:text-[48px]">
        そう肩を落とすオーナーさんが <br />
        全国に何万人といらっしゃいます…
      </p>
      <h4 className="mt-16 text-center text-[clamp(24px,6.67vw,96px)] leading-[1.2] font-semibold md:mt-24">
        <span className="marker bg-[linear-gradient(to_top,#F7CA15_35%,transparent_35%)]">
          予算が足りないオーナーは
        </span>{' '}
        <br />
        代理店にとって
        <br />
        <span className="marker bg-[linear-gradient(to_top,#F7CA15_35%,transparent_35%)]">
          「存在しない」も同然
        </span>
      </h4>
      <p className="fade-up mt-15 mb-4 text-center text-[24px] font-semibold md:mt-28 md:mb-5 md:text-[48px]">
        それが広告運用の常識でした
      </p>
      <div className="bg-[url(/assets/images/bg.png)] bg-size-[100%_auto] bg-top bg-no-repeat pt-32 pb-14 md:pt-60 md:pb-[85px]">
        <p className="fade-up text-center text-[40px] font-bold md:text-[50px] lg:text-[80px]">
          ですがもう諦める <br />
          必要はありません!
        </p>
        <div className="fade-up mt-3 px-5">
          <div className="mx-auto flex w-full max-w-[1250px] items-center justify-between max-xl:flex-col-reverse">
            <p className="text-[32px] font-semibold max-md:text-center md:text-[60px]">
              <span className="block text-center">
                <span className="text-[22px] md:text-[42px]">
                  専用
                  <span className="text-[32px] text-[#FF1744] md:text-[75px]">
                    AI
                  </span>
                  が{' '}
                </span>
              </span>
              <span className="text-[22px] md:text-[42px]">その</span>
              <span className="text-[36px] md:text-[54px]">
                常識を壊します。
              </span>
              <br />
              低予算<span className="text-[22px] md:text-[42px]">でも、</span>
              全自動<span className="text-[22px] md:text-[42px]">で</span>
              <br />
              代理店以上
              <span className="text-[22px] md:text-[42px]">の成果を。</span>
            </p>
            <div className="">
              <img
                className="max-md:w-[350px]"
                src="/assets/images/robot.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
