import type { Metadata } from 'next'

import { SITE_URL, OG } from '@/config/constants'

// remove
import Sample from './components/sample'

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
      <Sample />
    </>
  )
}

export default IndexPage
