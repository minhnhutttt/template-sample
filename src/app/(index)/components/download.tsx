'use client'

const Download = () => {
  return (
    <div className="gap-[min(20px, 20px + 100vw * 0)] relative flex w-full flex-col overflow-hidden bg-[#161003] text-[#ffe000] max-md:pt-20 md:bg-[radial-gradient(82%_72%_at_74%_82%,_#3b2d10_10%,_#161003_96%)]">
      <div className="top-0 right-0 bottom-0 left-0 z-10 mr-auto ml-auto flex w-full max-w-none pt-[clamp(0px,-80.964px+100vw*.2076,272px)] pr-[20px] pl-[20px] [flex-flow:row_wrap] md:absolute">
        <div className="flex flex-col gap-[max(20.4px,20.4px+100vw*.0021)] uppercase md:ml-[12.5%] md:max-w-[37.5%] md:flex-[0_0_37.5%]">
          <p className="text-[clamp(68px,46.55px+100vw*.055,140px)] leading-none">
            Phive App
          </p>
          <p className="text-[clamp(14px,13.415px+100vw*.0015,16px)] text-[#fff4a6]">
            Schedule and manage your classes, access your training plan, book
            appointments, and much more!
          </p>
          <div className="flex gap-5">
            <a href="#" className="">
              <img src="/assets/images/apple-download.svg" alt="" />
            </a>
            <a href="#" className="">
              <img src="/assets/images/google-download.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="relative w-full md:h-screen">
        <div data-component="image-asset-static">
          <img
            className="max-md:hidden"
            src="/assets/images/phive-app.jpg"
            alt=""
          />
          <img
            className="md:hidden"
            src="/assets/images/phive-app-mobile.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Download
