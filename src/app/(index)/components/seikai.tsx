'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'

const Seikai = () => {
  const ref = useScrollAnimations()
  return (
    <section ref={ref}>
      <div className="bg-[#FF1744] px-5 py-[62px]">
        <div className="mx-auto w-full max-w-[926px]">
          <p className="fade-up text-center text-[20px] font-semibold tracking-[0.5em] text-white md:text-[40px]">
            それが広告運用の自動化ツール
          </p>
          <p className="fade-up py-6">
            <img src="/assets/images/seikai.png" alt="" />
          </p>
          <p className="fade-up text-right text-[24px] font-semibold text-white md:text-[48px]">
            です。
          </p>
        </div>
      </div>
      <div className="fade-up flex justify-center px-5 py-12">
        <figure>
          <img src="/assets/images/robot-title.png" alt="" />
        </figure>
      </div>
      <div className="space-y-12 max-md:mx-auto max-md:max-w-[500px] md:mt-15 md:space-y-40">
        <div className="fade-up flex max-md:flex-col-reverse">
          <div className="flex-1 px-7 max-md:py-5 md:px-[60px]">
            <p className="border-b-[5px] border-[#00C853] pb-1 text-[22px] font-semibold tracking-[0.15em] md:text-[40px]">
              なぜGoogle広告？
            </p>
            <p className="pt-3 text-[16px] leading-[1.8] tracking-[0.15em] md:pt-6 md:text-[24px]">
              SEIKAI
              Google検索広告版は数ある広告の中で「Google検索広告」だけに特化しています。{' '}
              <br />
              なぜなら、漠然と見ているSNS広告と違い、わざわざ検索している「ニーズのある客」だけをピンポイントで狙い撃ちすることを重視しているからです！
            </p>
          </div>
          <figure className="md:max-xl:w-[50%]">
            <img
              className="md:rounded-l-[30px]"
              src="/assets/images/seikai-img-01.png"
              alt=""
            />
          </figure>
        </div>
        <div className="fade-up flex max-md:flex-col-reverse md:flex-row-reverse">
          <div className="flex-1 px-7 max-md:py-5 md:px-[60px]">
            <p className="border-b-[5px] border-[#00C853] pb-1 text-[22px] font-semibold tracking-[0.15em] md:text-[40px]">
              変な内容の広告は出ない？
            </p>
            <p className="pt-3 text-[16px] leading-[1.8] tracking-[0.15em] md:pt-6 md:text-[24px]">
              SEIKAIはあなたのWEBサイトを分析し、その内容に応じて広告運用をいたします。
              <br />
              重要な要素を判別、不要な要素を排除して運用するので安心してお任せください。
            </p>
          </div>
          <figure className="md:max-xl:w-[50%]">
            <img
              className="md:rounded-r-[30px]"
              src="/assets/images/seikai-img-02.png"
              alt=""
            />
          </figure>
        </div>
      </div>
      <div className="mt-20 px-5 md:mt-39">
        <h4 className="fade-up mx-auto border-b-[5px] border-[#00C853] pb-2 text-center text-[24px] leading-[1.3] font-semibold tracking-[0.09em] md:w-[600px] md:text-[40px]">
          導入するとどんな <br />
          良いことがある？
        </h4>
        <div className="mt-14 flex justify-center max-md:mx-auto max-md:max-w-[400px] max-md:flex-col max-md:items-center md:mt-26">
          <div className="fade-up">
            <figure>
              <img src="/assets/images/img-before.png" alt="" />
            </figure>
            <p className="mx-auto pt-5 text-[16px] leading-[1.7] md:max-w-[410px] md:pt-12 md:text-[24px]">
              複雑な管理画面と、面倒な代理店との打ち合わせ…
            </p>
          </div>
          <div className="fade-up max-md:py-8 md:px-10 md:pt-38">
            <img
              className="max-md:w-16 max-md:rotate-90"
              src="/assets/images/arrow.png"
              alt=""
            />
          </div>
          <div className="fade-up">
            <figure>
              <img src="/assets/images/img-after.png" alt="" />
            </figure>
            <p className="mx-auto pt-5 text-[16px] leading-[1.7] md:max-w-[410px] md:pt-12 md:text-[24px]">
              あなたのWEBサイトの「URL」と、日々の「広告予算」を入れるだけ！あとはAIが自動で働き始めます。
            </p>
          </div>
        </div>
        <div className="fade-up mt-12 mb-16 flex justify-center md:mt-20 md:mb-28">
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
    </section>
  )
}

export default Seikai
