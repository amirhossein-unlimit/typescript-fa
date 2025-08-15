// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  extends: ['..'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'fa',
      },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'google-site-verification',
          content: 'ua4tu0Nwkv-0Bw9_AvDyHJxlZ7F-GKrymz_rAWb8wXA',
        },
        { name: 'robots', content: 'index, follow' },
        { name: 'rating', content: 'general' },
        {
          name: 'theme-color',
          content: '#020817',
        },
        { name: 'msapplication-TileColor', content: '#020817' },
        { name: 'apple-mobile-web-app-status-bar-style', content: '#020817' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '192x192',
          href: '/android-chrome-192x192.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '512x512',
          href: '/android-chrome-512x512.png',
        },
        {
          rel: 'apple-touch-icon',
          type: 'image/png',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
      ],
    },
  },
});
