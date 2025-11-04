import type { Metadata } from 'next'

import { SITE_URL, OG } from '@/config/constants'

import Classes from './components/classes'
import Club from './components/club'
import Download from './components/download'
import Fitness from './components/fitness'
import Join from './components/join'
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
      <Fitness />
      <Classes />
      <Download />
      <Join />
    </>
  )
}

export default IndexPage
