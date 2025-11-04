import type { Metadata } from 'next'

import { SITE_URL, OG } from '@/config/constants'

import Classes from './components/classes'
import Club from './components/club'
import Fitness from './components/fitness'
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
    </>
  )
}

export default IndexPage
