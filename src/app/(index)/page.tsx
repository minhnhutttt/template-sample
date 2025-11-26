import type { Metadata } from 'next'

import { SITE_URL, OG } from '@/config/constants'

import Fv from './components/fv'
import Introduction from './components/introduction'

export const metadata: Metadata = {
  openGraph: {
    ...OG,
    url: SITE_URL,
  },
  alternates: {
    canonical: SITE_URL,
  },
}

const IndexPage = () => {
  return (
    <>
      <Fv />
      <Introduction />
    </>
  )
}

export default IndexPage
