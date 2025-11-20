'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'

import FaqItem from './faqItem'
import { FaqItemPropsType } from './faqItem'

const faqData: FaqItemPropsType[] = [
  {
    id: '1',
    question: '専門知識なしでトラブルにならない？',
    answer: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam modi
        excepturi harum ipsam fugit! Hic error sunt sed dolorem modi in natus
        dolorum fugit temporibus exercitationem inventore sequi, libero iste.
      </>
    ),
  },
  {
    id: '2',
    question: '設定を間違えたらどうしよう？',
    answer: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam modi
        excepturi harum ipsam fugit! Hic error sunt sed dolorem modi in natus
        dolorum fugit temporibus exercitationem inventore sequi, libero iste.
      </>
    ),
  },
  {
    id: '3',
    question: 'やっぱり専門家に任せた方が…',
    answer: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam modi
        excepturi harum ipsam fugit! Hic error sunt sed dolorem modi in natus
        dolorum fugit temporibus exercitationem inventore sequi, libero iste.
      </>
    ),
  },
  {
    id: '4',
    question: '本当に広告のことわからなくても大丈夫？',
    answer: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam modi
        excepturi harum ipsam fugit! Hic error sunt sed dolorem modi in natus
        dolorum fugit temporibus exercitationem inventore sequi, libero iste.
      </>
    ),
  },
  {
    id: '5',
    question: '設定でつまずいたらどうしよう？',
    answer: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam modi
        excepturi harum ipsam fugit! Hic error sunt sed dolorem modi in natus
        dolorum fugit temporibus exercitationem inventore sequi, libero iste.
      </>
    ),
  },
  {
    id: '6',
    question: '代理店みたいな難しいレポートが来る？',
    answer: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam modi
        excepturi harum ipsam fugit! Hic error sunt sed dolorem modi in natus
        dolorum fugit temporibus exercitationem inventore sequi, libero iste.
      </>
    ),
  },
]

const FAQ = () => {
  const ref = useScrollAnimations()

  return (
    <section ref={ref} id="faq" className="px-5 py-24 md:py-[160px]">
      <div className="mx-auto w-full max-w-[880px]">
        <h3 className="text-center text-[32px] font-bold tracking-widest md:text-[48px]">
          よくある質問
        </h3>
        <p className="mt-6 text-center text-[14px] leading-[1.8] font-bold tracking-widest md:mt-12 md:text-[20px]">
          「本当に広告知識ゼロで大丈夫？」
          <br />
          「やっぱり難しいんでしょ？」
          <br />
          そのような疑問にお答えします。
        </p>
        <div className="mx-auto mt-5 w-full space-y-[10px] md:mt-[36px] md:space-y-[24px]">
          {faqData.map(({ id, question, answer }) => (
            <FaqItem key={id} id={id} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
