import { defineMiddleware } from 'astro:middleware'

export const onRequest = defineMiddleware((context, next) => {
  const { pathname } = context.url

  if (pathname.startsWith('/en/') || pathname.startsWith('/es/')) {
    return next()
  }

  return next()
})
