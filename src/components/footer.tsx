'use client'

import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[#1E2122]">
      <div className="mx-auto w-full max-w-[1000px] pt-25 pb-6 md:pt-[140px]">
        <div className="flex items-center justify-center">
          <Link href="/">
            <img
              className="max-md:w-[240px]"
              src="/assets/images/logo-footer.png"
              alt=""
            />
          </Link>
        </div>
        <div className="mt-8 mb-20 flex justify-center divide-white leading-[1.2] max-md:flex-col max-md:items-center md:mt-12 md:mb-[105px] md:divide-x">
          <Link
            href="#"
            className="block px-6 py-4 text-[16px] font-medium text-white md:px-12 md:py-2.5 md:text-[20px] lg:px-24"
          >
            プライバシーポリシー
          </Link>
          <Link
            href="#"
            className="block px-6 py-4 text-[16px] font-medium text-white md:px-12 md:py-2.5 md:text-[20px] lg:px-24"
          >
            利用規約
          </Link>
          <Link
            href="#"
            className="block px-6 py-4 text-[16px] font-medium text-white md:px-12 md:py-2.5 md:text-[20px] lg:px-24"
          >
            お問い合わせ
          </Link>
        </div>
        <div className="text-center text-[12px] font-light text-white md:text-[14px]">
          &copy; 2025 CHECKOUT NMS. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
