export const siteUrl = 'https://deepreshion.github.io/profile'
export const siteName = 'Ruslan Vorontsov Portfolio'
export const seoImageUrl = `${siteUrl}/og-image.png`
export const logoUrl = `${siteUrl}/rv-logo.svg`

export const absoluteUrl = (path = '/') => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  return `${siteUrl}${normalizedPath}`
}

export const portfolioPagePaths = {
  en: '/',
  ru: '/ru'
} as const

export const cvPagePaths = {
  en: '/cv',
  ru: '/ru/cv'
} as const

export const localeAlternates = (paths: typeof portfolioPagePaths | typeof cvPagePaths) => [
  { rel: 'alternate', hreflang: 'en', href: absoluteUrl(paths.en) },
  { rel: 'alternate', hreflang: 'ru', href: absoluteUrl(paths.ru) },
  { rel: 'alternate', hreflang: 'x-default', href: absoluteUrl(paths.en) }
]
