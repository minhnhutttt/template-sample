import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: ['/', '/:path*'],
}

const normalizeDomain = (domain: string) => {
  if (domain.startsWith('www.')) {
    return domain.substring(4)
  }
  return domain
}

export const middleware = (req: NextRequest) => {
  const host = req.headers.get('host') || ''
  const customDomain = process.env.CUSTOM_DOMAIN || ''

  if (normalizeDomain(host) !== normalizeDomain(customDomain)) {
    return new NextResponse(
      JSON.stringify({ success: false, message: 'Forbidden' }),
      { status: 403, headers: { 'content-type': 'application/json' } }
    )
  }

  if (process.env.BASIC_AUTH_ENABLED === 'true') {
    const url = req.nextUrl
    const basicAuth = req.headers.get('authorization')

    const username = process.env.BASIC_AUTH_NAME
    const password = process.env.BASIC_AUTH_PASSWORD

    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1] ?? ''
      const [user, pwd] = atob(authValue).split(':')

      if (user == username && pwd == password) {
        return NextResponse.next()
      }
    }

    url.pathname = '/api/basicAuth'
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}
