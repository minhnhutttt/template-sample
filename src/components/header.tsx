'use client'

import Link from 'next/link'
const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 flex h-20 items-center justify-center md:h-[140px]">
      <div className="w-full max-w-[1440px] px-5 md:px-8">
        <div className="flex items-center justify-between">
          <div className="max-md:w-[120px]">
            <Link href="/">
              <img src="/assets/images/logo.png" alt="" />
            </Link>
          </div>

          <div className="">
            <a
              href="#"
              className="flex h-[60px] w-[180px] items-center justify-center gap-2 rounded-[10px] bg-[#FF1744] text-white md:h-[90px] md:w-[308px] md:gap-4"
            >
              <span>
                <img
                  className="max-md:w-8"
                  src="/assets/images/ic-robot.png"
                  alt=""
                />
              </span>
              <span className="text-[14px] font-semibold md:text-[20px]">
                今すぐAIに依頼する
                <br />
                無料登録
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
