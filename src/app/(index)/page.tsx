import type { Metadata } from 'next'

import { SITE_URL, OG } from '@/config/constants'

import Customers from './components/customers'
import Fv from './components/fv'

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
    </>
  )
}

export default IndexPage
