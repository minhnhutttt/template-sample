'use client'

import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[#F6F6F7]">
      <div className="container mx-auto pt-25 pb-6 md:pt-[154px]">
        <div className="mb-20 flex items-center justify-center gap-20 max-md:flex-col md:mb-[113px] md:gap-[148px]">
          <div className="max-md:w-[150px]">
            <Link href="/">
              <img src="/assets/images/logo-footer.png" alt="" />
            </Link>
          </div>
          <div className="flex gap-10 text-center text-[15px] font-bold max-md:flex-col md:gap-[120px] md:text-[18px]">
            <Link href="#">利用規約</Link>
            <Link href="#">プライバシーポリシー</Link>
          </div>
        </div>
        <div className="text-center text-[13px] text-[#999]">
          &copy; 2025 SEIKAI
        </div>
      </div>
    </footer>
  )
}

export default Footer
