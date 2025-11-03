import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@/': path.resolve('./src') + '/',
      },
    },
  },
})
