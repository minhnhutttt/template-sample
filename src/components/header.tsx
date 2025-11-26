'use client'

import Link from 'next/link'

const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0">
      <div className="mx-auto px-5 md:px-[40px]">
        <div className="flex h-20 items-center justify-between md:h-25">
          <div className="max-md:max-w-[100px]">
            <Link href="/">
              <img src="/assets/images/logo.png" alt="" />
            </Link>
          </div>
          <Link
            href="#"
            className="flex h-[50px] w-[200px] items-center justify-center rounded-full bg-[linear-gradient(90deg,_#00DBDE_0%,_#FD3EFF_100%)] p-[3px] text-[13px] font-medium md:h-[70px] md:w-[246px] md:text-[16px]"
          >
            <span className="flex h-full w-full items-center justify-center gap-2 rounded-full bg-white leading-[1.2]">
              <span>
                <img
                  className="max-md:w-7"
                  src="/assets/images/ic-wallet.png"
                  alt=""
                />
              </span>
              <span>
                ウォレットに接続して <br />
                購入履歴を見る
              </span>
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
