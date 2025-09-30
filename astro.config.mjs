import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@components': path.resolve('./src/components'),
        '@layouts': path.resolve('./src/layouts'),
        '@lib': path.resolve('./src/lib'),
        '@styles': path.resolve('./src/styles'),
      },
    },
  },
})
