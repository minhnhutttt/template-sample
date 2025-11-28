import type { Metadata } from 'next'

import { SITE_URL, OG } from '@/config/constants'

import Faq from './components/faq'
import Flow from './components/flow'
import Fv from './components/fv'
import Introduction from './components/introduction'
import Purchased from './components/purchased'
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
      <Faq />
      <Purchased />
    </div>
  )
}

export default IndexPage
