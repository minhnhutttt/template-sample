import type { Metadata } from 'next'

import { SITE_URL, OG } from '@/config/constants'

import Business from './components/business'
import Customers from './components/customers'
import FAQ from './components/faq/faq'
import Fv from './components/fv'
import Seikai from './components/seikai'

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
      <Customers />
      <Seikai />
      <Business />
      <FAQ />
    </>
  )
}

export default IndexPage
