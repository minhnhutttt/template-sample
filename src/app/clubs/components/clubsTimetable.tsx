'use client'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'
import { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger, SplitText)
const ClubsTimetable = () => {
  const table = [
    {
      image: '/assets/images/spining.svg',
      class: 'SPINNING',
      schedule: {
        start: '07:00',
        end: '07:00',
      },
      duration: '1H',
      studio: 'Estúdio Ride',
      instructor: 'Gonçalo Oliveira Vaz',
    },
    {
      image: '/assets/images/yoga.svg',
      class: 'YOGA',
      schedule: {
        start: '07:00',
        end: '07:00',
      },
      duration: '1H',
      studio: 'Estúdio Ride',
      instructor: 'Gonçalo Oliveira Vaz',
    },
    {
      image: '/assets/images/pilates.svg',
      class: 'RPM',
      schedule: {
        start: '07:00',
        end: '07:00',
      },
      duration: '1H',
      studio: 'Estúdio Ride',
      instructor: 'Gonçalo Oliveira Vaz',
    },
    {
      image: '/assets/images/spining.svg',
      class: 'SPINNING',
      schedule: {
        start: '07:00',
        end: '07:00',
      },
      duration: '1H',
      studio: 'Estúdio Ride',
      instructor: 'Gonçalo Oliveira Vaz',
    },
    {
      image: '/assets/images/yoga.svg',
      class: 'YOGA',
      schedule: {
        start: '07:00',
        end: '07:00',
      },
      duration: '1H',
      studio: 'Estúdio Ride',
      instructor: 'Gonçalo Oliveira Vaz',
    },
    {
      image: '/assets/images/pilates.svg',
      class: 'RPM',
      schedule: {
        start: '07:00',
        end: '07:00',
      },
      duration: '1H',
      studio: 'Estúdio Ride',
      instructor: 'Gonçalo Oliveira Vaz',
    },
    {
      image: '/assets/images/spining.svg',
      class: 'SPINNING',
      schedule: {
        start: '07:00',
        end: '07:00',
      },
      duration: '1H',
      studio: 'Estúdio Ride',
      instructor: 'Gonçalo Oliveira Vaz',
    },
    {
      image: '/assets/images/yoga.svg',
      class: 'YOGA',
      schedule: {
        start: '07:00',
        end: '07:00',
      },
      duration: '1H',
      studio: 'Estúdio Ride',
      instructor: 'Gonçalo Oliveira Vaz',
    },
    {
      image: '/assets/images/pilates.svg',
      class: 'RPM',
      schedule: {
        start: '07:00',
        end: '07:00',
      },
      duration: '1H',
      studio: 'Estúdio Ride',
      instructor: 'Gonçalo Oliveira Vaz',
    },
  ]

  const wrapperRef = useRef<HTMLDivElement>(null)
  const textMiddleRef = useRef<HTMLSpanElement>(null)
  const textBottomRef = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current
    const middleEl = textMiddleRef.current
    const bottomEl = textBottomRef.current

    if (!wrapper || !middleEl || !bottomEl) return

    const splits: SplitText[] = []

    const ctx = gsap.context(() => {
      const splitMiddle = new SplitText(middleEl, { type: 'chars' })
      const splitBottom = new SplitText(bottomEl, { type: 'chars' })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          invalidateOnRefresh: true,
        },
        defaults: {
          ease: 'none',
          duration: 1.6,
          stagger: { each: 0.06, from: 'start' },
        },
      })

      gsap.set([splitMiddle.chars], {
        scaleY: 0,
      })

      const scaleChars = (
        targets: Element[] | NodeListOf<Element>,
        toScale: number,
        origin: string,
        pos?: gsap.Position
      ) => tl.to(targets, { scaleY: toScale, transformOrigin: origin }, pos)

      scaleChars(splitBottom.chars, 0, '50% 100%')
      scaleChars(splitMiddle.chars, 1, '50% 0%', '<')
    }, wrapper)
    ScrollTrigger.refresh()
    return () => {
      ctx.revert()
      splits.forEach((s) => s.revert())
    }
  }, [])
  return (
    <div
      ref={wrapperRef}
      className="flex flex-col gap-[max(22.8px,22.8px+100vw*.0148)] overflow-hidden py-[max(24px,24px+100vw*.0212)]"
    >
      <div className="mr-auto ml-auto flex w-full justify-center px-5 [flex-flow:row_wrap]">
        <div className="">
          <p className="text-center text-[clamp(16px,14.206px+100vw*.0046,22px)] font-bold text-[#f6c548] uppercase">
            Check out the class schedule at Phive Boavista
          </p>
        </div>
      </div>
      <div className="relative z-10 text-center text-[clamp(60px,calc(30px+10.25vw),240px)] leading-none font-bold tracking-tight whitespace-nowrap text-[#ffe000] will-change-transform">
        <span ref={textMiddleRef} className="inline-block">
          TIMETABLE
        </span>
        <span ref={textBottomRef} className="absolute inset-0 inline-block">
          TIMETABLE
        </span>
      </div>
      <div className="flex items-center justify-center gap-1.5 text-[#ffe000]">
        <ul className="flex flex-wrap justify-center gap-1.5 max-md:flex-1">
          <li className="relative block rounded-[max(21.8px,21.8px+100vw*.0095)] bg-[#ffe000] px-[max(20.4px,20.4px+100vw*.0021)] py-[min(12px,12px+100vw*0)] text-[clamp(10px,9.415px+100vw*.0015,12px)] font-bold text-black">
            MONDAY
          </li>
          <li className="relative block rounded-[max(21.8px,21.8px+100vw*.0095)] px-[max(20.4px,20.4px+100vw*.0021)] py-[min(12px,12px+100vw*0)] text-[clamp(10px,9.415px+100vw*.0015,12px)] font-bold">
            TUESDAY
          </li>
          <li className="relative block rounded-[max(21.8px,21.8px+100vw*.0095)] px-[max(20.4px,20.4px+100vw*.0021)] py-[min(12px,12px+100vw*0)] text-[clamp(10px,9.415px+100vw*.0015,12px)] font-bold">
            WEDNESDAY
          </li>
          <li className="relative block rounded-[max(21.8px,21.8px+100vw*.0095)] px-[max(20.4px,20.4px+100vw*.0021)] py-[min(12px,12px+100vw*0)] text-[clamp(10px,9.415px+100vw*.0015,12px)] font-bold">
            THUEDAY
          </li>
          <li className="relative block rounded-[max(21.8px,21.8px+100vw*.0095)] px-[max(20.4px,20.4px+100vw*.0021)] py-[min(12px,12px+100vw*0)] text-[clamp(10px,9.415px+100vw*.0015,12px)] font-bold">
            FRIDAY
          </li>
          <li className="relative block rounded-[max(21.8px,21.8px+100vw*.0095)] px-[max(20.4px,20.4px+100vw*.0021)] py-[min(12px,12px+100vw*0)] text-[clamp(10px,9.415px+100vw*.0015,12px)] font-bold">
            SATURDAY
          </li>
          <li className="relative block rounded-[max(21.8px,21.8px+100vw*.0095)] px-[max(20.4px,20.4px+100vw*.0021)] py-[min(12px,12px+100vw*0)] text-[clamp(10px,9.415px+100vw*.0015,12px)] font-bold">
            SUNDAY
          </li>
        </ul>
      </div>
      <div className="px-5">
        <div className="mx-auto mt-12 overflow-x-auto max-md:max-w-[500px] md:w-[75%]">
          <table className="w-full table-auto border-collapse rounded-lg whitespace-nowrap shadow-md">
            <thead>
              <tr className="text-left text-[clamp(8px,7.415px+100vw*.0035,14px)] text-[#f3efd7]">
                <th className="sticky left-0 h-[2vw] bg-stone-900 px-[4vw] py-[0.5vw] pl-[calc(3.2vw+32px)] md:px-[1.2vw] md:pl-[calc(3.2vw+48px)]">
                  Class
                </th>
                <th className="h-[2vw] px-[4vw] py-[0.5vw] md:px-[1.2vw]">
                  Schedule
                </th>
                <th className="h-[2vw] px-[4vw] py-[0.5vw] md:px-[1.2vw]">
                  Duration
                </th>
                <th className="h-[2vw] px-[4vw] py-[0.5vw] md:px-[1.2vw]">
                  Studio
                </th>
                <th className="h-[2vw] px-[4vw] py-[0.5vw] md:px-[1.2vw]">
                  Instructor
                </th>
              </tr>
            </thead>
            <tbody>
              {table.map((item, index) => (
                <tr
                  key={index}
                  className="h-[92px] bg-[#f3efd7] text-[clamp(12px,7.415px+100vw*.0035,14px)]"
                >
                  <td className="upppercase sticky left-0 flex h-[92px] items-center gap-[2vw] bg-[#f3efd7] px-[4vw] text-[clamp(13px,14.036px+100vw*.0056,30px)] font-bold tracking-tighter md:px-[1.2vw]">
                    <span className="flex-[0_0_32px] md:flex-[0_0_48px]">
                      <img src={item.image} alt="" />
                    </span>
                    <span className="flex-1">{item.class}</span>
                  </td>
                  <td className="bg-[#f3efd7] px-[4vw] md:px-[1.2vw]">
                    <span className="font-bold">{item.schedule.start}</span>—
                    {item.schedule.end}
                  </td>
                  <td className="bg-[#f3efd7] px-[4vw] font-bold md:px-[1.2vw]">
                    {item.duration}
                  </td>
                  <td className="bg-[#f3efd7] px-[4vw] font-bold md:px-[1.2vw]">
                    {item.studio}
                  </td>
                  <td className="bg-[#f3efd7] px-[4vw] font-bold md:px-[1.2vw]">
                    {item.instructor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ClubsTimetable
