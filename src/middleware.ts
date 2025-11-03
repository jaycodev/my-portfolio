import { defineMiddleware } from 'astro:middleware'

export const onRequest = defineMiddleware((context, next) => {
  const pathname = context.url.pathname

  if (pathname.startsWith('/en/') || pathname.startsWith('/es/')) {
    return next()
  }

  if (pathname === '/' || !pathname.startsWith('/')) {
    const acceptLanguage = context.request.headers.get('accept-language') || 'es'
    const lang = acceptLanguage.toLowerCase().startsWith('en') ? 'en' : 'es'

    return context.redirect(`/${lang}/`, 307)
  }

  return next()
})
