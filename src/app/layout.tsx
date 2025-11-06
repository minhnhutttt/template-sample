import type { Metadata } from 'next'
import { Roboto, Creepster } from 'next/font/google'
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
import { SlideThemeProvider } from '@/providers/slide-theme'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

const creepster = Creepster({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-creepster',
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
      <body
        className={`bg-stone-900 ${roboto.className} ${creepster.variable}`}
      >
        <SlideThemeProvider>
          <Header />
          {children}
          <Footer />
        </SlideThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
