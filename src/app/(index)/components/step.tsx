'use client'

import Link from 'next/link'

import Accordion from '@/components/accordion'
import FaqItem from '@/components/faqItem'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import useScrollAnimations from '@/hooks/useScrollAnimations'

const dataFaq01 = [
  {
    id: '1',
    question: <>アプリのダウンロードにお金はかかりますか？</>,
    answer: <>完全無料です。安心してダウンロードしてください。</>,
  },
  {
    id: '2',
    question: <>ウォレットの復元フレーズを忘れたらどうなりますか？</>,
    answer: (
      <>
        忘れてもメモなどで保存していればそのウォレットを復元できます。復元フレーズを確認する方法がない場合、ウォレット内の資産にアクセスできなくなります。必ず保存してください。
      </>
    ),
  },
  {
    id: '3',
    question: <>iPhoneとAndroid両方で使えますか？</>,
    answer: <>はい、両方に対応しています。</>,
  },
]

const dataFaq02 = [
  {
    id: '1',
    question: <>コインの購入にいくら必要ですか？ </>,
    answer: (
      <>
        商品の価格＋手数料として、商品価格の1.1倍程度を用意することをおすすめします。
      </>
    ),
  },
  {
    id: '2',
    question: <>ETHやUSDTはどこで買えますか？ </>,
    answer: (
      <>
        ETHは国内の暗号資産取引所（例：bitFlyer、Coincheckなど）で購入できます。USDTは国内の暗号資産取引所では購入できません。ETHを購入後、DIVER
        Wallet Proに移したらDWU GATEへアクセスしてETHとUSDTを交換してください。
      </>
    ),
  },
  {
    id: '3',
    question: <> DWUとDwETHのどちらを準備すればいいですか？ </>,
    answer: (
      <>
        NFTの購入URLにアクセスし、どちらのコインがいくら必要かをご確認ください。
      </>
    ),
  },
  {
    id: '4',
    question: <> 交換に失敗したらどうなりますか？ </>,
    answer: (
      <>
        取引が失敗した場合、コインは元のウォレットに戻ります。再度お試しください。
      </>
    ),
  },
]

const dataFaq03 = [
  {
    id: '1',
    question: <>コインの購入にいくら必要ですか？ </>,
    answer: (
      <>
        商品の価格＋手数料として、商品価格の1.1倍程度を用意することをおすすめします。
      </>
    ),
  },
  {
    id: '2',
    question: <>ETHやUSDTはどこで買えますか？ </>,
    answer: (
      <>
        ETHは国内の暗号資産取引所（例：bitFlyer、Coincheckなど）で購入できます。USDTは国内の暗号資産取引所では購入できません。ETHを購入後、DIVER
        Wallet Proに移したらDWU GATEへアクセスしてETHとUSDTを交換してください。
      </>
    ),
  },
  {
    id: '3',
    question: <> DWUとDwETHのどちらを準備すればいいですか？ </>,
    answer: (
      <>
        NFTの購入URLにアクセスし、どちらのコインがいくら必要かをご確認ください。
      </>
    ),
  },
  {
    id: '4',
    question: <> 交換に失敗したらどうなりますか？ </>,
    answer: (
      <>
        取引が失敗した場合、コインは元のウォレットに戻ります。再度お試しください。
      </>
    ),
  },
]

const StepItem = ({
  id,
  image,
  children,
}: {
  id: string
  image: string
  children: React.ReactNode
}) => {
  return (
    <div className="fade-up w-[320px] space-y-3 md:w-[370px]">
      <figure>
        <img
          className="[filter:drop-shadow(0_22.336px_17.869px_rgba(0,_0,_0,_0.07))_drop-shadow(0_12.522px_10.017px_rgba(0,_0,_0,_0.05))_drop-shadow(0_6.65px_5.32px_rgba(0,_0,_0,_0.04))_drop-shadow(0_2.767px_2.214px_rgba(0,_0,_0,_0.03))]"
          src={image}
          alt=""
        />
      </figure>
      <p className="flex justify-center">
        <span className="flex size-12 items-center justify-center rounded-full bg-black font-['inter'] text-[24px] font-bold text-white md:size-[60px] md:text-[32px]">
          {id}
        </span>
      </p>
      <div className="px-5 text-[17px] md:text-[20px]">{children}</div>
    </div>
  )
}

const Step = () => {
  useInfiniteScroll()
  const ref = useScrollAnimations()
  return (
    <section ref={ref} id="step" className="overflow-hidden">
      {/* Step 1 */}
      <div className="bg-[linear-gradient(90deg,#00DBDE_0%,#FD3EFF_100%)]">
        <h3
          data-infinite-scroll="8:15s"
          className="flex w-max gap-12 whitespace-nowrap md:gap-20"
        >
          <span className="flex h-[100px] shrink-0 items-center md:h-[168px]">
            <img
              className="max-md:w-[200px]"
              src="/assets/images/step-1.svg"
              alt=""
            />
          </span>
        </h3>
      </div>
      <div className="px-5 pb-[120px] md:pb-[240px]">
        <div className="mx-auto mt-12 w-full max-w-[1280px] space-y-24 md:mt-25 md:space-y-[160px]">
          <div className="flex justify-center max-xl:flex-col max-xl:items-center max-xl:gap-8 xl:justify-between">
            <div className="fade-up pt-2 md:w-[580px] md:pt-7">
              <p className="text-center text-[28px] font-bold md:text-[48px]">
                アプリをダウンロード
              </p>
              <span className="block h-1 bg-[linear-gradient(90deg,#00DBDE_0%,#FD3EFF_100%)] md:h-1.5"></span>
              <div className="pt-5 md:pt-[26px]">
                <p className="text-center text-[16px] font-medium md:text-[20px]">
                  DIVER Wallet Proは完全無料のウォレットアプリです。
                  <br />
                  以下のボタンからダウンロードしてください。
                </p>
              </div>
              <div className="mt-7 flex justify-center md:mt-13">
                <img
                  className="max-md:w-[300px]"
                  src="/assets/images/diver-wallet-pro.png"
                  alt=""
                />
              </div>
              <div className="mt-7 flex justify-center gap-5 md:mt-10">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[160px] md:w-[290px]"
                >
                  <img src="/assets/images/btn-apple.png" alt="" />
                </a>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[160px] md:w-[290px]"
                >
                  <img src="/assets/images/btn-google.png" alt="" />
                </a>
              </div>
              <p className="mt-7 text-center text-[14px] font-medium md:mt-10 md:text-[18px]">
                <img
                  src="/assets/images/ic-down.svg"
                  alt=""
                  className="inline max-md:-mt-1 max-md:w-3"
                />{' '}
                すでにDIVER Wallet Proをお持ちの方は
              </p>
              <div className="mt-3 flex justify-center">
                <Link
                  href="#"
                  className="flex h-10 w-[220px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#00DBDE_0%,#FD3EFF_100%)] p-[3px] text-[18px] font-medium text-white md:h-[50px] md:h-[64px] md:w-[15.6cqw] md:w-[320px] md:text-[24px]"
                >
                  <span className="flex h-full w-full items-center justify-center gap-2 rounded-full bg-black leading-[1.2]">
                    STEP 2 へスキップ
                  </span>
                </Link>
              </div>
            </div>
            <div className="fade-up xl:px-20">
              <div className="flex aspect-396/654 w-full max-w-[396px] overflow-hidden rounded-[30px] border-[5px] border-black">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                  poster="/assets/images/movie-poster.png"
                >
                  <source
                    src="/assets/videos/hero.mp4"
                    type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'
                  />
                </video>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center max-xl:flex-col max-xl:gap-8 xl:justify-between">
            <div className="fade-up pt-2 md:w-[580px] md:pt-7">
              <p className="text-center text-[28px] font-bold md:text-[48px]">
                アプリを開いて新規作成
              </p>
              <span className="block h-1 bg-[linear-gradient(90deg,#00DBDE_0%,#FD3EFF_100%)] md:h-1.5"></span>
              <div className="pt-5 md:pt-[26px]">
                <p className="text-[16px] font-medium md:text-[20px]">
                  ダウンロードしたアプリを開き、「新規ウォレット作成」をタップします。
                </p>
              </div>
            </div>
            <div className="fade-up xl:px-20">
              <div className="flex aspect-396/654 w-full max-w-[396px] overflow-hidden rounded-[30px] border-[5px] border-black">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                  poster="/assets/images/movie-poster.png"
                >
                  <source
                    src="/assets/videos/hero.mp4"
                    type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'
                  />
                </video>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center max-xl:flex-col max-xl:gap-8 xl:justify-between">
            <div className="fade-up md:w-[580px]">
              <p className="text-center text-[28px] font-bold md:text-[48px]">
                復元フレーズを
                <br className="md:hidden" />
                安全に保存
              </p>
              <span className="block h-1 bg-[linear-gradient(90deg,#00DBDE_0%,#FD3EFF_100%)] md:h-1.5"></span>
              <div className="pt-5 md:pt-[26px]">
                <p className="text-[16px] font-medium md:text-[20px]">
                  表示される復元フレーズは、あなたのウォレットの鍵です。
                  <br />
                  必ずスクリーンショットまたはメモ(推奨)で保存してください。
                </p>
                <div className="mt-6 flex gap-5 rounded-[10px] border border-[#F22727] bg-[#FEE9E9] p-5 md:mt-10">
                  <div className="">
                    <p>
                      <img src="/assets/images/ic-danger.png" alt="" />
                    </p>
                    <p className="text-center text-[14px] font-bold md:text-[18px]">
                      重要
                    </p>
                  </div>
                  <p className="flex-1 text-[13px] font-medium md:text-[14px]">
                    この復元フレーズを失うと、ウォレットに二度とアクセスできません。
                    <br />
                    ウォレット作成時はメモをスキップしても、後から確認も可能です。
                    <br />
                    あなたが確実にアクセスでき、他者がアクセスできない場所で管理することが推奨されます。
                  </p>
                </div>
              </div>
            </div>
            <div className="fade-up xl:px-20">
              <div className="flex aspect-396/654 w-full max-w-[396px] overflow-hidden rounded-[30px] border-[5px] border-black">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                  poster="/assets/images/movie-poster.png"
                >
                  <source
                    src="/assets/videos/hero.mp4"
                    type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
        <div className="fade-up mt-24 md:mt-42">
          <Accordion>
            <div>
              {dataFaq01.map(({ id, question, answer }) => (
                <FaqItem key={id} id={id} question={question} answer={answer} />
              ))}
            </div>
          </Accordion>
        </div>
      </div>

      {/* Step 2 */}
      <div className="bg-[#EEF5FA]">
        <div className="bg-[linear-gradient(90deg,#00DBDE_0%,#FD3EFF_100%)]">
          <h3
            data-infinite-scroll="8:15s"
            className="flex w-max gap-12 whitespace-nowrap md:gap-20"
          >
            <span className="flex h-[100px] shrink-0 items-center md:h-[168px]">
              <img
                className="max-md:w-[200px]"
                src="/assets/images/step-2.svg"
                alt=""
              />
            </span>
          </h3>
        </div>
        <div className="px-5 pb-[120px] md:pb-[240px]">
          <div className="mx-auto mt-12 w-full max-w-[1280px] space-y-24 md:mt-25 md:space-y-[120px]">
            <div className="flex items-center justify-center max-xl:flex-col max-xl:gap-8 xl:justify-between">
              <div className="fade-up md:w-[580px]">
                <p className="text-center text-[28px] font-bold md:text-[48px]">
                  NFT購入用の専用コイン
                </p>
                <span className="block h-1 bg-[linear-gradient(90deg,#00DBDE_0%,#FD3EFF_100%)] md:h-1.5"></span>
                <p className="text-center text-[28px] font-bold md:text-[48px]">
                  (暗号資産)を準備する
                </p>
                <span className="block h-1 bg-[linear-gradient(90deg,#00DBDE_0%,#FD3EFF_100%)] md:h-1.5"></span>
                <p className="mt-7 text-center text-[14px] font-medium md:mt-10 md:text-[18px]">
                  <img
                    src="/assets/images/ic-down.svg"
                    alt=""
                    className="inline max-md:-mt-1 max-md:w-3"
                  />{' '}
                   すでにDwJPYCをお持ちの方は
                </p>
                <div className="mt-3 flex justify-center">
                  <Link
                    href="#"
                    className="flex h-10 w-[220px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#00DBDE_0%,#FD3EFF_100%)] p-[3px] text-[18px] font-medium text-white md:h-[50px] md:h-[64px] md:w-[15.6cqw] md:w-[320px] md:text-[24px]"
                  >
                    <span className="flex h-full w-full items-center justify-center gap-2 rounded-full bg-black leading-[1.2]">
                      STEP3 へスキップ
                    </span>
                  </Link>
                </div>
              </div>
              <div className="fade-up xl:pr-20">
                <div className="rounded-[60px] border border-black bg-[#F5F6F7] px-5 py-10 text-center md:px-[50px] md:py-[60px]">
                  <p className="text-[24px] font-bold tracking-[0.1em] md:text-[36px]">
                    購入に使えるコインは{' '}
                  </p>
                  <p className="flex items-center justify-center py-5">
                    <img
                      className="max-md:w-[110px]"
                      src="/assets/images/dwjpyc.png"
                      alt=""
                    />
                  </p>
                  <p className="text-[13px] font-bold md:text-[16px]">
                    ディーダブリュージェイピーワイシー
                  </p>
                  <p className="text-[40px] leading-none font-bold md:text-[64px]">
                    DwJPYC
                  </p>
                  <p className="mt-5 text-[22px] font-bold md:mt-8 md:text-[36px]">
                    の1種類です。
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center max-xl:flex-col max-xl:items-center max-xl:gap-8 xl:justify-between">
              <div className="fade-up pt-2 md:w-[580px] md:pt-7">
                <p className="mb-4 flex justify-center md:mb-6">
                  <img src="/assets/images/logo-dwu-gate.png" alt="" />
                </p>
                <div className="relative mx-auto flex h-25 w-[300px] items-center justify-center gap-3 rounded-3xl border-4 border-black bg-white px-5 before:absolute before:-bottom-[26px] before:h-[26px] before:w-[30px] before:bg-black before:[clip-path:polygon(0_0,100%_0,50%_100%)] after:absolute after:bottom-[-20px] after:h-[26px] after:w-[30px] after:bg-white after:[clip-path:polygon(0_0,100%_0,50%_100%)] md:h-[155px] md:w-[404px] md:px-7.5 md:before:-bottom-[36px] md:before:h-[36px] md:before:w-[40px] md:after:bottom-[-28px] md:after:h-[36px] md:after:w-[40px]">
                  <figure>
                    <img
                      className="max-md:w-14"
                      src="/assets/images/ic-right.png"
                      alt=""
                    />
                  </figure>
                  <p className="flex-1 text-[18px] font-bold md:text-[24px]">
                    ここでは初心者向けの「DWU GATE」を使った方法を説明します。
                  </p>
                </div>

                <div className="mt-9 text-center text-[24px] font-bold md:mt-15 md:text-[36px]">
                  DWU GATEでコインの準備
                </div>
                <p className="my-5 text-[18px] font-medium md:my-7 md:text-[24px]">
                  DWU
                  GATEを使えば、JPYCをショッピングで使えるDwJPYCへの変換ができます。
                </p>
                <div className="mt-3 flex justify-center">
                  <Link
                    href="#"
                    className="flex h-10 w-[220px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#0773BC_0%,#269BD8_100%)] p-[3px] text-[16px] font-medium text-white md:h-[50px] md:h-[64px] md:w-[15.6cqw] md:w-[320px] md:text-[20px]"
                  >
                    <span className="flex h-full w-full items-center justify-center gap-2 rounded-full bg-black leading-[1.2]">
                      DWU GATEを開く
                      <img
                        src="/assets/images/external-link.svg"
                        alt=""
                        className="inline"
                      />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="fade-up xl:px-20">
                <div className="flex aspect-396/654 w-full max-w-[396px] overflow-hidden rounded-[30px] border-[5px] border-black">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                    poster="/assets/images/movie-poster.png"
                  >
                    <source
                      src="/assets/videos/hero.mp4"
                      type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-36 w-full max-w-[1280px] md:mt-52">
            <div className="flex flex-wrap justify-center gap-10 md:gap-x-20 md:gap-y-[60px]">
              <StepItem id="1" image="/assets/images/step-img-01.png">
                <>
                  <p className="text-center">DWU GATEにアクセス </p>
                  <div className="mt-3 flex justify-center">
                    <Link
                      href="#"
                      className="flex h-10 w-[220px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#0773BC_0%,#269BD8_100%)] p-[3px] text-[16px] font-medium text-white md:h-[50px] md:h-[64px] md:w-[15.6cqw] md:w-[320px] md:text-[20px]"
                    >
                      <span className="flex h-full w-full items-center justify-center gap-2 rounded-full bg-black leading-[1.2]">
                        DWU GATEを開く
                        <img
                          src="/assets/images/external-link.svg"
                          alt=""
                          className="inline"
                        />
                      </span>
                    </Link>
                  </div>
                </>
              </StepItem>
              <StepItem id="2" image="/assets/images/step-img-02.png">
                右上の「開く」をタップして、
                <br />
                DIVER Wallet Proのアプリブラウザでページを再表示します。
              </StepItem>
              <StepItem id="3" image="/assets/images/step-img-03.png">
                「開く」ボタンをタップすると、
                <br />
                ポップアップで表示されます。画面の指示にしたがい、接続を承認します。
              </StepItem>
              <StepItem id="4" image="/assets/images/step-img-04.png">
                送信先のコインをDwJPYCに指定後、変換する金額を指定し、「コインを交換する」ボタンをタップしてください。
              </StepItem>
              <StepItem id="5" image="/assets/images/step-img-05.png">
                取引の確認・承認が求められますので、それぞれボタンをタップして取引を進めてください。
              </StepItem>
            </div>
          </div>
          <div className="fade-up mt-24 md:mt-50">
            <Accordion>
              <div>
                {dataFaq02.map(({ id, question, answer }) => (
                  <FaqItem
                    key={id}
                    id={id}
                    question={question}
                    answer={answer}
                  />
                ))}
              </div>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Step 3 */}
      <div className="bg-[#FDF4FF]">
        <div className="bg-[linear-gradient(90deg,#00DBDE_0%,#FD3EFF_100%)]">
          <h3
            data-infinite-scroll="8:15s"
            className="flex w-max gap-12 whitespace-nowrap md:gap-20"
          >
            <span className="flex h-[100px] shrink-0 items-center md:h-[168px]">
              <img
                className="max-md:w-[200px]"
                src="/assets/images/step-3.svg"
                alt=""
              />
            </span>
          </h3>
        </div>
        <div className="px-5 pb-[120px] md:pb-[140px]">
          <div className="mx-auto mt-12 w-full max-w-[1280px] space-y-24 md:mt-25 md:space-y-[160px]">
            <div className="flex items-center justify-center max-xl:flex-col max-xl:gap-8 xl:justify-between">
              <div className="fade-up pt-2 md:w-[580px] md:pt-7">
                <p className="text-center text-[28px] font-bold md:text-[48px]">
                  購入ページにアクセス
                </p>
                <span className="block h-1 bg-[linear-gradient(90deg,#00DBDE_0%,#FD3EFF_100%)] md:h-1.5"></span>
                <div className="pt-5 md:pt-[26px]">
                  <p className="text-center text-[16px] font-medium md:text-[20px]">
                    商品ページから「購入する」ボタンをタップします。
                  </p>
                </div>
              </div>
              <div className="fade-up xl:px-20">
                <div className="flex aspect-396/654 w-full max-w-[396px] overflow-hidden rounded-[30px] border-[5px] border-black">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                    poster="/assets/images/movie-poster.png"
                  >
                    <source
                      src="/assets/videos/hero.mp4"
                      type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'
                    />
                  </video>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center max-xl:flex-col max-xl:gap-8 xl:justify-between">
              <div className="fade-up pt-2 md:w-[580px] md:pt-7">
                <p className="text-center text-[28px] font-bold md:text-[48px]">
                  配送先情報を入力
                </p>
                <span className="block h-1 bg-[linear-gradient(90deg,#00DBDE_0%,#FD3EFF_100%)] md:h-1.5"></span>
                <div className="pt-4 md:pt-[20px]">
                  <p className="text-center text-[16px] font-medium md:text-[20px]">
                    以下の情報を入力してください。
                  </p>
                </div>
                <div className="flex justify-center py-5 md:py-7">
                  <ul className="list-disc text-[20px] font-medium md:text-[32px]">
                    <li>お名前</li>
                    <li>郵便番号</li>
                    <li>住所</li>
                    <li>電話番号</li>
                    <li>メールアドレス</li>
                  </ul>
                </div>
                <p className="text-center text-[13px] font-medium md:text-[16px]">
                  ※ 通常のネットショッピングと同じ入力項目です。
                </p>
              </div>
              <div className="fade-up xl:px-20">
                <div className="flex aspect-396/654 w-full max-w-[396px] overflow-hidden rounded-[30px] border-[5px] border-black">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                    poster="/assets/images/movie-poster.png"
                  >
                    <source
                      src="/assets/videos/hero.mp4"
                      type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'
                    />
                  </video>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center max-xl:flex-col max-xl:gap-8 xl:justify-between">
              <div className="fade-up pt-2 md:w-[580px] md:pt-7">
                <p className="text-center text-[28px] font-bold md:text-[48px]">
                  支払い
                </p>
                <span className="block h-1 bg-[linear-gradient(90deg,#00DBDE_0%,#FD3EFF_100%)] md:h-1.5"></span>
                <div className="pt-5 md:pt-[26px]">
                  <p className="text-[16px] font-medium md:text-[20px]">
                    STEP 2で準備したコイン（DwETHまたはDWU）で決済します。
                    画面に表示される承認ボタンをタップして、支払いを完了させてください。
                  </p>
                </div>
              </div>
              <div className="fade-up xl:px-20">
                <div className="flex aspect-396/654 w-full max-w-[396px] overflow-hidden rounded-[30px] border-[5px] border-black">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                    poster="/assets/images/movie-poster.png"
                  >
                    <source
                      src="/assets/videos/hero.mp4"
                      type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'
                    />
                  </video>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center max-xl:flex-col max-xl:gap-8 xl:justify-between">
              <div className="fade-up md:w-[580px]">
                <p className="text-center text-[28px] font-bold md:text-[48px]">
                  購入完了の確認
                </p>
                <span className="block h-1 bg-[linear-gradient(90deg,#00DBDE_0%,#FD3EFF_100%)] md:h-1.5"></span>
                <div className="pt-5 md:pt-[26px]">
                  <p className="text-[16px] font-medium md:text-[20px]">
                    「購入が完了しました」と表示されたら成功です！
                  </p>
                </div>
                <ul className="mt-6 text-[15px] font-medium md:mt-8 md:text-[18px]">
                  {[
                    'NFTがあなたのウォレットに発行されました。 ',
                    '商品は入力した住所に配送されます。（通常3-7営業日）',
                    '購入履歴はこのページ下部の「購入履歴を確認」から見られます。',
                  ].map((item, index) => (
                    <li className="flex items-center gap-2.5" key={index}>
                      <span>
                        <img src="/assets/images/ic-check.svg" alt="" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="fade-up max-w-[515px]">
                <div className="flex items-center">
                  <span>
                    <img src="/assets/images/delivery-man.svg" alt="" />
                  </span>
                  <span className="text-[20px] font-medium md:text-[24px]">
                    商品受け取りまでの流れ
                  </span>
                </div>
                <div className="mt-6 space-y-2.5 md:mt-8">
                  {[
                    {
                      id: '1',
                      title: '購入完了メールが届きます 。',
                      text: '入力したメールアドレスに確認メールが送信されます。',
                    },
                    {
                      id: '2',
                      title: '商品が発送されます。',
                      text: '追跡番号などは販売者にお問い合わせください。',
                    },
                    {
                      id: '3',
                      title: 'ご自宅に商品が届きます。',
                      text: ' 通常のネットショッピングと同じように受け取れます。',
                    },
                    {
                      id: '4',
                      title: 'ご自宅に商品が届きます。',
                      text: 'ウォレット内で確認できます。デジタル証明書として永久保存されます。',
                    },
                  ].map((item, index) => (
                    <div
                      className="relative flex gap-5 after:absolute after:top-10 after:bottom-0 after:left-4 after:w-0.5 after:bg-black last:after:hidden md:gap-8 md:pb-7"
                      key={index}
                    >
                      <p className="flex size-7 items-center justify-center rounded-full bg-black text-[13px] font-semibold text-white md:size-8 md:text-[16px]">
                        {item.id}
                      </p>
                      <div className="flex-1">
                        <p className="text-[17px] font-bold md:text-[22px]">
                          {item.title}
                        </p>
                        <p className="text-[13px] text-[#333] max-md:min-h-10 md:text-[16px]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="fade-up mt-24 md:mt-42">
            <Accordion>
              <div>
                {dataFaq03.map(({ id, question, answer }) => (
                  <FaqItem
                    key={id}
                    id={id}
                    question={question}
                    answer={answer}
                  />
                ))}
              </div>
            </Accordion>
          </div>
          <div className="fade-up mx-auto mt-15 flex w-full max-w-[990px] items-center justify-center gap-3 rounded-[20px] bg-white px-5 py-10 max-md:flex-col md:mt-[150px] md:gap-20 md:rounded-[30px]">
            <figure className="relative">
              <img
                className="relative z-10"
                src="/assets/images/image-job.png"
                alt=""
              />
              <span className="absolute inset-0 rounded-[295.624px] bg-[linear-gradient(118deg,rgba(253,62,255,0.60)_19.19%,rgba(201,94,248,0.60)_42.99%,rgba(127,140,239,0.60)_52.09%,rgba(69,176,231,0.60)_60.61%,rgba(0,219,222,0.60)_80.29%)] blur-[80px] filter"></span>
            </figure>
            <div className="text-center">
              <p className="text-[24px] font-bold md:text-[40px]">
                お疲れさまでした！
              </p>
              <p className="my-2.5 text-[14px] font-medium md:text-[18px]">
                これでNFT購入の準備が整いました。
                <br />
                NFT購入URLにアクセスして購入を
                <br className="md:hidden" />
                進めましょう！
              </p>
              <p className="text-[13px] text-[#333] md:text-[16px]">
                <img
                  src="/assets/images/ic-i.svg"
                  alt=""
                  className="-mt-1 inline"
                />{' '}
                購入後、以下のボタンからいつでも購入履歴を確認できます。
              </p>
              <div className="mt-5 flex justify-center md:mt-7">
                <a
                  href="#"
                  className="flex h-[60px] w-[280px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#00DBDE_0%,#FD3EFF_100%)] text-[16px] font-bold text-white duration-300 hover:opacity-75 md:h-[70px] md:w-[308px] md:text-[20px]"
                >
                  購入履歴を確認する
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fade-up bg-[#0CC755] px-5 py-8 md:py-12">
        <div className="mx-auto flex w-full max-w-[840px] flex-wrap items-center justify-center gap-9 max-md:flex-col">
          <div className="flex items-center gap-4">
            <figure>
              <img
                className="max-md:w-20"
                src="/assets/images/ic-line.svg"
                alt=""
              />
            </figure>
            <p className="text-[32px] font-bold text-white md:text-[48px]">
              LINEサポート
            </p>
          </div>
          <div className="">
            <div className="relative mx-auto h-[45px] w-[246px] bg-[url(/assets/images/line-bubble.png)] bg-cover">
              <p className="pt-1.5 text-center text-[14px] font-medium">
                導入や操作方法のお悩み解決！
              </p>
            </div>
            <div className="mt-2 flex justify-center">
              <a
                href="#"
                className="flex h-16 w-[320px] items-center justify-center gap-2 rounded-full border-3 border-white bg-[#F77913] text-[24px] font-bold text-white [box-shadow:0_7px_0_0_rgba(0,124,48,0.30)] duration-300 hover:opacity-75 md:h-20 md:w-[360px] md:text-[28px]"
              >
                <span>
                  <img src="/assets/images/ic-btn-line.svg" alt="" />
                </span>
                <span>お問い合わせ</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Step
