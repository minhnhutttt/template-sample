import type { Metadata } from 'next'
import { Zen_Kaku_Gothic_New, Roboto } from 'next/font/google'
import { ReactNode } from 'react'

import Footer from '@/components/footer'
import Header from '@/components/header'
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_DESCRIPTION,
  OG,
  TWITTER,
} from '@/config/constants'
import './globals.scss'

const zen = Zen_Kaku_Gothic_New({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
})

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL ?? 'http://localhost:3000'),
  icons: [
    { rel: 'icon', url: '/assets/images/favicon.png' },
    { rel: 'apple-touch-icon', url: '/assets/images/apple-touch-icon.png' },
  ],
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    ...OG,
  },
  twitter: {
    ...TWITTER,
  },
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja">
      <body className={`${zen.className} ${roboto.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
