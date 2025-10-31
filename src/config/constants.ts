export const SITE_URL = 'https://localhost:3000' // No trailing slash is required
export const SITE_NAME = 'SITE NAME'
export const DEFAULT_DESCRIPTION = 'description'
export const OG = {
  title: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  siteName: SITE_NAME,
  locale: 'ja_JP',
  type: 'website',
  images: SITE_URL + '/assets/images/og_image.png',
}
export const TWITTER = {
  card: 'summary_large_image',
  title: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  images: SITE_URL + '/assets/images/og_image.png',
}
