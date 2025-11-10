import { defineMiddleware } from 'astro:middleware'

import { defaultLang, getLangFromUrl, type Language } from './i18n'

export const onRequest = defineMiddleware((context, next) => {
  const lang = (context.currentLocale as Language) || getLangFromUrl(context.url) || defaultLang
  context.locals.lang = lang
  return next()
})
