'use client'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)
const ClubsInnovation = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const item01Ref = useRef<HTMLDivElement>(null)
  const item02Ref = useRef<HTMLDivElement>(null)
  const item03Ref = useRef<HTMLDivElement>(null)
  const item04Ref = useRef<HTMLDivElement>(null)
  const item05Ref = useRef<HTMLDivElement>(null)
  const item06Ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current

    const items = [
      item01Ref.current,
      item02Ref.current,
      item03Ref.current,
      item04Ref.current,
      item05Ref.current,
      item06Ref.current,
    ].filter(Boolean) as HTMLDivElement[]

    if (!wrapper || items.length === 0) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top center',
          end: 'bottom top',
          invalidateOnRefresh: true,
        },
      })

      tl.from(items, {
        top: 'auto',
        left: 'auto',
        duration: 1,
      })
    }, wrapper)
    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <div className="bg-stone-900 px-5 py-8 text-[#f6c548]">
      <h2 className="text-center text-[clamp(68px,46.55px+100vw*.055,140px)] leading-[1.3] tracking-tighter uppercase">
        Club near Casa da Música
      </h2>
      <p className="text-center text-[clamp(36px,28.863px+100vw*.0183,60px)] leading-none tracking-tighter uppercase">
        A space where innovation meets family well-being
      </p>
      <div
        ref={wrapperRef}
        className="relative flex min-h-screen items-center justify-center font-bold text-black"
      >
        <div
          ref={item01Ref}
          className="runner absolute top-[20%] left-[2%] flex rotate-[3deg] flex-col items-center justify-center rounded-2xl bg-[#F6C548] p-[clamp(15px,17.415px+100vw*.0115,80px)] md:top-[10%] md:left-[40%]"
        >
          <p className="text-center text-[clamp(18px,17.415px+100vw*.0015,20px)] uppercase">
            EXERCISE
          </p>
          <div className="runner-img aspect-[72/134] w-[10vw] bg-[url(/assets/images/sprites.png)] bg-[size:auto_100%] bg-left-top bg-no-repeat md:w-[72px]"></div>
          <p className="text-center text-[clamp(18px,17.415px+100vw*.0015,20px)] uppercase">
            ROOM
          </p>
        </div>
        <div
          ref={item02Ref}
          className="runner absolute top-[45%] left-[5%] flex rotate-[-3deg] flex-col items-center justify-center rounded-2xl bg-[#B76EFF] p-[clamp(15px,17.415px+100vw*.0115,80px)] md:top-[35%] md:left-[30%]"
        >
          <p className="text-center text-[clamp(18px,17.415px+100vw*.0015,20px)] uppercase">
            6 STUDIOS
          </p>
          <div className="runner-img aspect-[72/134] w-[10vw] bg-[url(/assets/images/sprites.png)] bg-[size:auto_100%] bg-left-top bg-no-repeat md:w-[72px]"></div>
          <p className="text-center text-[clamp(18px,17.415px+100vw*.0015,20px)] uppercase">
            GROUP
          </p>
        </div>
        <div
          ref={item03Ref}
          className="runner absolute top-[20%] left-[40%] flex rotate-[5deg] flex-col items-center justify-center rounded-2xl bg-[#F5CDA4] p-[clamp(15px,17.415px+100vw*.0115,80px)] md:top-[10%] md:left-[55%]"
        >
          <p className="text-center text-[clamp(18px,17.415px+100vw*.0015,20px)] uppercase">
            CHILDREN
          </p>
          <div className="runner-img aspect-[72/134] w-[10vw] bg-[url(/assets/images/sprites.png)] bg-[size:auto_100%] bg-left-top bg-no-repeat md:w-[72px]"></div>
          <p className="text-center text-[clamp(18px,17.415px+100vw*.0015,20px)] uppercase">
            CLASSES
          </p>
        </div>
        <div
          ref={item04Ref}
          className="runner absolute top-[25%] left-[65%] flex rotate-[2deg] flex-col items-center justify-center rounded-2xl bg-[#D9F7BB] p-[clamp(15px,17.415px+100vw*.0115,80px)] md:top-[30%]"
        >
          <p className="text-center text-[clamp(18px,17.415px+100vw*.0015,20px)] uppercase">
            SAUNA
          </p>
          <div className="runner-img aspect-[72/134] w-[10vw] bg-[url(/assets/images/sprites.png)] bg-[size:auto_100%] bg-left-top bg-no-repeat md:w-[72px]"></div>
          <p className="text-center text-[clamp(18px,17.415px+100vw*.0015,20px)] uppercase">
            BATH
          </p>
        </div>
        <div
          ref={item05Ref}
          className="runner absolute top-[50%] left-[55%] flex rotate-[-2deg] flex-col items-center justify-center rounded-2xl bg-[#E07787] p-[clamp(15px,17.415px+100vw*.0115,80px)] md:top-[60%]"
        >
          <p className="text-center text-[clamp(18px,17.415px+100vw*.0015,20px)] uppercase">
            PILATES
          </p>
          <div className="runner-img aspect-[72/134] w-[10vw] bg-[url(/assets/images/sprites.png)] bg-[size:auto_100%] bg-left-top bg-no-repeat md:w-[72px]"></div>
          <p className="text-center text-[clamp(18px,17.415px+100vw*.0015,20px)] uppercase">
            STUDIO
          </p>
        </div>
        <div
          ref={item06Ref}
          className="runner absolute top-[40%] left-[40%] flex rotate-[7deg] flex-col items-center justify-center rounded-2xl bg-[#8ADCFF] p-[clamp(15px,17.415px+100vw*.0115,80px)] md:top-[65%]"
        >
          <p className="text-center text-[clamp(18px,17.415px+100vw*.0015,20px)] uppercase">
            2 HEATED
          </p>
          <div className="runner-img aspect-[72/134] w-[10vw] bg-[url(/assets/images/sprites.png)] bg-[size:auto_100%] bg-left-top bg-no-repeat md:w-[72px]"></div>
          <p className="text-center text-[clamp(18px,17.415px+100vw*.0015,20px)] uppercase">
            POOLS
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-[max(22.8px,22.8px+100vw*.0148)] px-5 md:px-10">
        <div className="flex flex-col">
          <p className="mb-[0.5em] text-[clamp(12px,11.415px+100vw*.0015,14px)] leading-[1em] font-bold tracking-[.01em] text-[#f6c548] uppercase">
            Find us
          </p>
          <p className="mb-[1em] text-[clamp(12px,11.415px+100vw*.0015,14px)] leading-[1.2em] text-[#fff4a6]">
            Av. da França 132 <br />
            4050-276 Porto
          </p>
        </div>
        <div className="flex flex-col">
          <p className="mb-[0.5em] text-[clamp(12px,11.415px+100vw*.0015,14px)] leading-[1em] font-bold tracking-[.01em] text-[#f6c548] uppercase">
            Schedule
          </p>
          <p className="mb-[1em] text-[clamp(12px,11.415px+100vw*.0015,14px)] leading-[1.2em] text-[#fff4a6]">
            Monday to Friday
            <br />
            06:30 - 22:00
            <br />
            <br />
            Saturdays
            <br />
            09:00 - 14:00
            <br />
            16:00 - 20:00
            <br />
            <br />
            Sundays and Holidays
            <br />
            09:00 - 13:00
          </p>
        </div>
        <div className="flex flex-col">
          <p className="mb-[0.5em] text-[clamp(12px,11.415px+100vw*.0015,14px)] leading-[1em] font-bold tracking-[.01em] text-[#f6c548] uppercase">
            Contact
          </p>
          <p className="mb-[1em] text-[clamp(12px,11.415px+100vw*.0015,14px)] leading-[1.2em] text-[#fff4a6]">
            300 505 180* <br />
            Option 5<br />* Call to landline network
          </p>
        </div>
      </div>
    </div>
  )
}

export default ClubsInnovation
