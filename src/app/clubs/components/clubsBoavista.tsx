'use client'

import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'

const ClubsBoavista = () => {
  useInfiniteScroll()
  return (
    <div className="relative flex h-screen bg-black">
      <div className="grid flex-[0_0_50%] items-center justify-center">
        <div className="relative col-[1] row-[1] h-full">
          <div className="relative h-full w-full">
            <img
              className="h-full w-full object-cover"
              src="/assets/images/club-img-01.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          data-infinite-scroll="2:60s"
          data-infinite-direction="vertical"
          data-infinite-flow="down"
          className="relative flex h-full h-max flex-col overflow-hidden bg-[#ffe000]"
        >
          <div className="flex shrink-0 flex-col items-center gap-[max(30px,30px+100vw*.0529)]">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="relative flex items-center justify-center [writing-mode:vertical-rl]"
              >
                <p className="text-[max(41px,41px+100vw*.1112)] font-bold tracking-tighter whitespace-nowrap uppercase">
                  Phive Boavista
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-hidden">
        <div
          data-infinite-scroll="2:10s"
          data-infinite-direction="vertical"
          className="relative flex h-full h-max w-full flex-col items-start justify-start overflow-hidden text-[clamp(18px,17.415px+100vw*.0015,20px)] font-bold text-white uppercase"
        >
          <div className="relative h-[max(50px,50px+100vw*.1588)] w-full">
            <img src="/assets/images/club-img-02.jpg" alt="" />
            <div className="absolute inset-0 z-10 flex items-end bg-black/20 p-5">
              Bathhouses
            </div>
          </div>
          <div className="relative h-[max(50px,50px+100vw*.1588)] w-full">
            <img src="/assets/images/club-img-03.jpg" alt="" />
            <div className="absolute inset-0 z-10 flex items-end bg-black/20 p-5">
              Bathhouses
            </div>
          </div>
          <div className="relative h-[max(50px,50px+100vw*.1588)] w-full">
            <img src="/assets/images/club-img-04.jpg" alt="" />
            <div className="absolute inset-0 z-10 flex items-end bg-black/20 p-5">
              Bathhouses
            </div>
          </div>
          <div className="relative h-[max(50px,50px+100vw*.1588)] w-full">
            <img src="/assets/images/club-img-05.jpg" alt="" />
            <div className="absolute inset-0 z-10 flex items-end bg-black/20 p-5">
              Bathhouses
            </div>
          </div>
          <div className="relative h-[max(50px,50px+100vw*.1588)] w-full">
            <img src="/assets/images/club-img-06.jpg" alt="" />
            <div className="absolute inset-0 z-10 flex items-end bg-black/20 p-5">
              Bathhouses
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClubsBoavista
