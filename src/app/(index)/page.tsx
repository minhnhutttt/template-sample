import type { Metadata } from 'next'

import { SITE_URL, OG } from '@/config/constants'

// remove
import Club from './components/club'
import Kv from './components/kv'
import Senses from './components/senses'

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
      <Kv />
      <Senses />
      <Club />
    </>
  )
}

export default IndexPage
