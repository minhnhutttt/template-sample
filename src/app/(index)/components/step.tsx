'use client'

import Link from 'next/link'

import Accordion from '@/components/accordion'
import FaqItem from '@/components/faqItem'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'

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

const Step = () => {
  useInfiniteScroll()
  return (
    <section id="step" className="overflow-hidden">
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
            <div className="pt-2 md:w-[580px] md:pt-7">
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
            <div className="xl:px-20">
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
            <div className="pt-2 md:w-[580px] md:pt-7">
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
            <div className="xl:px-20">
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
            <div className="md:w-[580px]">
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
            <div className="xl:px-20">
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
        <div className="mt-24 md:mt-42">
          <Accordion>
            <div>
              {dataFaq01.map(({ id, question, answer }) => (
                <FaqItem
                  key={id}
                  id={id}
                  question={question}
                  answer={answer}
                  color="#111111"
                />
              ))}
            </div>
          </Accordion>
        </div>
      </div>

      {/* Step 2 */}
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
            <div className="md:w-[580px]">
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
            <div className="xl:pr-20">
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
            <div className="pt-2 md:w-[580px] md:pt-7">
              <p className="mb-4 flex justify-center md:mb-6">
                <img src="/assets/images/logo-dwu-gate.png" alt="" />
              </p>
              <div className="fade-up relative mx-auto flex h-25 w-[300px] items-center justify-center gap-3 rounded-3xl border-4 border-black bg-white px-5 before:absolute before:-bottom-[36px] before:h-[36px] before:w-[40px] before:bg-black before:[clip-path:polygon(0_0,100%_0,50%_100%)] after:absolute after:bottom-[-28px] after:h-[36px] after:w-[40px] after:bg-white after:[clip-path:polygon(0_0,100%_0,50%_100%)] md:h-[155px] md:w-[404px] md:px-7.5">
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
                  className="flex h-10 w-[220px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#00DBDE_0%,#FD3EFF_100%)] p-[3px] text-[16px] font-medium text-white md:h-[50px] md:h-[64px] md:w-[15.6cqw] md:w-[320px] md:text-[20px]"
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
            <div className="xl:px-20">
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
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="flex flex-wrap justify-center">
            <div className="w-[350px] md:w-[370px]"></div>
          </div>
        </div>
        <div className="mt-24 md:mt-42">
          <Accordion>
            <div>
              {dataFaq01.map(({ id, question, answer }) => (
                <FaqItem
                  key={id}
                  id={id}
                  question={question}
                  answer={answer}
                  color="#111111"
                />
              ))}
            </div>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Step
