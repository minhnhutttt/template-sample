import type { Metadata } from 'next'

import { SITE_URL, OG } from '@/config/constants'

import ClubsBoavista from './components/clubsBoavista'
import ClubsClasses from './components/clubsClasses'
import ClubsInnovation from './components/clubsInnovation'
import ClubsKV from './components/clubsKv'
import ClubsPorto from './components/clubsPorto'
import ClubsStatistics from './components/clubsStatistics'
import ClubsTimetable from './components/clubsTimetable'

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
      <ClubsStatistics />
      <ClubsClasses />
      <ClubsTimetable />
      <ClubsPorto />
    </>
  )
}

export default ClubsPage
