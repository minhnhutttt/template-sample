import type { Metadata } from 'next'

import { SITE_URL, OG, TWITTER } from '@/config/constants'

export const metadata: Metadata = {
  title: 'sample',
  openGraph: {
    ...OG,
    title: 'sample',
    url: SITE_URL + '/sample',
  },
  twitter: {
    ...TWITTER,
    title: 'sample',
  },
  alternates: {
    canonical: SITE_URL + '/sample',
  },
}

const SamplePage = () => {
  return (
    <>
      <div className="">sample</div>
    </>
  )
}

export default SamplePage
