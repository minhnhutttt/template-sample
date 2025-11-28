'use client'

import FaqItem from '@/components/faqItem'

const dataFaq = [
  {
    id: '1',
    question: <>暗号資産を持っていないのですが、購入できますか？ </>,
    answer: (
      <>
        {' '}
        指定のコインを準備いただければ購入が可能です。販売者により別の決済方法を用意している場合もございますので、まずは販売者にお問い合わせください。
        <br />
        このページのSTEP 2で、暗号資産の準備方法を詳しく説明しています。
        国内の取引所でETHを購入し、STEP 2の手順にしたがって進めてください。
      </>
    ),
  },
  {
    id: '2',
    question: <>ウォレットとは何ですか？ </>,
    answer: (
      <>
        暗号資産やNFTを保管するデジタルウォレットのことです。DIVER Wallet
        Pro（ダイバーウォレットプロ）は無料で作成でき、このページの手順通りに進めれば簡単に作れます。
      </>
    ),
  },
  {
    id: '3',
    question: <>NFTとは何ですか？</>,
    answer: (
      <>
        デジタル証明書のことです。あなたが商品を購入した証明として、ずっとウォレットに残ります。
        本物であることを証明できるため、安心して所有できます。
      </>
    ),
  },
  {
    id: '4',
    question: <>途中で失敗したらどうなりますか？</>,
    answer: (
      <>
        大丈夫です。このページに戻ってきて、該当するステップからやり直せば問題ありません。
      </>
    ),
  },
  {
    id: '5',
    question: <>スマートフォンだけで購入できますか？</>,
    answer: <>はい、スマートフォンだけで完結します。パソコンは不要です。</>,
  },
  {
    id: '6',
    question: <>どのくらいお金がかかりますか？</>,
    answer: (
      <>
        商品の価格＋手数料（数百円程度）がかかります。詳しい金額は購入画面で確認できます。
      </>
    ),
  },
  {
    id: '7',
    question: <>本当に商品は届きますか？</>,
    answer: (
      <>
        はい、通常のネットショッピングと同じように、入力した住所に配送されます。
        <br />
        追跡番号は販売者にお問い合わせください。
      </>
    ),
  },
  {
    id: '8',
    question: <>セキュリティは大丈夫ですか？</>,
    answer: (
      <>
        はい、DIVER Wallet
        Proは軍事レベルのセキュリティ対策がされたウォレットです。復元フレーズさえしっかり保管すれば、安全に使用できます。
      </>
    ),
  },
  {
    id: '9',
    question: <>購入履歴はどこで確認できますか？</>,
    answer: (
      <>
        このページの一番下にある「購入履歴を確認」ボタンから確認できます。ウォレットを接続すると、過去の購入履歴が表示されます。
      </>
    ),
  },
  {
    id: '10',
    question: <>わからないことがあったら、どこに問い合わせればいいですか？</>,
    answer: (
      <>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          NMS公式LINE
        </a>
        にお問い合わせください。サポートチームが対応します。
      </>
    ),
  },
]
const Faq = () => {
  return (
    <section id="faq" className="px-5">
      <div className="mx-auto mt-20 mb-20 w-full max-w-[1180px] md:mt-44 md:mb-40">
        <h5 className="text-center text-[26px] font-bold md:text-[48px]">
          困ったときは、ここを確認
        </h5>
        <p className="text-center text-[18px] font-bold md:text-[24px]">
          よくある質問
        </p>
        <div className="mt-10 md:mt-13">
          <div>
            {dataFaq.map(({ id, question, answer }) => (
              <FaqItem
                key={id}
                id={id}
                question={question}
                answer={answer}
                isGradient
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
