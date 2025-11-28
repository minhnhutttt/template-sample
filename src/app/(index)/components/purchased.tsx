'use client'

const Purchased = () => {
  return (
    <section id="purchased">
      <div className="bg-[linear-gradient(90deg,#0773BC_0%,#269BD8_100%)] px-5 py-6 text-white md:py-9">
        <h5 className="text-center text-[32px] font-bold md:text-[48px]">
          すでにNFT商品を購入済みの方はこちら
        </h5>
        <p className="mt-4 text-center text-[16px] font-medium md:text-[20px]">
          ウォレットを接続して、
          <br className="md:hidden" />
          購入履歴を確認できます。
        </p>
      </div>
      <div className="px-5 pb-[200px] md:pb-[364px]">
        <div className="mx-auto flex w-full max-w-[1250px] items-center justify-center gap-10 pt-14 max-md:flex-col md:justify-between md:pt-24">
          <div className="xl:pl-22">
            <img
              className="filter-[drop-shadow(0_22.336px_17.869px_rgba(0,0,0,0.07))_drop-shadow(0_12.522px_10.017px_rgba(0,0,0,0.05))_drop-shadow(0_6.65px_5.32px_rgba(0,0,0,0.04))_drop-shadow(0_2.767px_2.214px_rgba(0,0,0,0.03))] max-md:w-[300px]"
              src="/assets/images/img-phone.png"
              alt=""
            />
          </div>
          <div className="">
            <div className="max-w-[590px]">
              <p className="text-[18px] font-medium md:text-[24px]">
                過去に購入したNFTや配送状況を確認したい方は、
                以下のボタンからウォレットを接続してください。
              </p>
              <div className="mt-6 flex justify-center md:mt-9">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-25 w-[320px] items-center justify-center gap-4 rounded-[10px] bg-[#18539E] duration-300 hover:opacity-75 md:h-[110px] md:w-[376px]"
                >
                  <span>
                    <img
                      className="max-md:w-12"
                      src="/assets/images/ic-wallet3.png"
                      alt=""
                    />
                  </span>
                  <span className="text-[18px] font-bold text-white md:text-[25px]">
                    ウォレットに接続して <br />
                    購入履歴を見る
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Purchased
