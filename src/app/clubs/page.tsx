import type { Metadata } from 'next'

import { SITE_URL, OG } from '@/config/constants'

import ClubsBoavista from './components/clubsBoavista'
import ClubsInnovation from './components/clubsInnovation'
import ClubsKV from './components/clubsKv'

export const metadata: Metadata = {
  openGraph: {
    ...OG,
    url: SITE_URL,
  },
  alternates: {
    canonical: SITE_URL,
  },
}

const ClubsPage = () => {
  return (
    <>
      <ClubsKV />
      <ClubsInnovation />
      <ClubsBoavista />
    </>
  )
}

export default ClubsPage
