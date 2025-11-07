'use client'

const ClubsStatistics = () => {
  return (
    <div className="relative w-full pt-[max(30px,30px+100vw*.0529)] pb-[max(24px,24px+100vw*.0212)]">
      <div className="relative flex w-full justify-center text-[#fff4a6]">
        <div className="flex flex-col border border-[#fff4a6]">
          <div className="flex justify-center border-b border-[#fff4a6] py-[min(18px,18px+100vw*0)] text-[clamp(18px,17.415px+100vw*.0015,20px)] uppercase">
            Phive Boavista Health Club
          </div>
          <ul className="flex divide-x divide-[#fff4a6]">
            <li className="relative flex w-[clamp(96px,82.896px+100vw*.0336,140px)] flex-[0_0_clamp(96px,82.896px+100vw*.0336,140px)] items-center justify-center">
              <span className="p-[max(20.4px,20.4px+100vw*.0021)] text-center text-[clamp(10px,9.415px+100vw*.0015,12px)] leading-[1.2em] whitespace-pre-line">
                CITY Porto
              </span>
            </li>
            <li className="relative flex w-[clamp(96px,82.896px+100vw*.0336,140px)] flex-[0_0_clamp(96px,82.896px+100vw*.0336,140px)] items-center justify-center">
              <span className="p-[max(20.4px,20.4px+100vw*.0021)] text-center text-[clamp(10px,9.415px+100vw*.0015,12px)] leading-[1.2em] whitespace-pre-line">
                FOUNDED 2025
              </span>
            </li>
            <li className="relative flex w-[clamp(96px,82.896px+100vw*.0336,140px)] flex-[0_0_clamp(96px,82.896px+100vw*.0336,140px)] items-center justify-center">
              <span className="p-[max(20.4px,20.4px+100vw*.0021)] text-center text-[clamp(10px,9.415px+100vw*.0015,12px)] leading-[1.2em] whitespace-pre-line">
                DIMENSION 4.000m2
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ClubsStatistics
