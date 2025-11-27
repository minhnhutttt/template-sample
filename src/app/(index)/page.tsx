import type { Metadata } from 'next'

import { SITE_URL, OG } from '@/config/constants'

import Flow from './components/flow'
import Fv from './components/fv'
import Introduction from './components/introduction'
import Step from './components/step'

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
    <div>
      <Fv />
      <Introduction />
      <Flow />
      <Step />
    </div>
  )
}

export default IndexPage
