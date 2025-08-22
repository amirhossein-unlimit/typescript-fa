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
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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
        {
          rel: 'alternate',
          type: 'application/rss+xml',
          title: `${import.meta.env.NUXT_SITE_NAME} RSS Feed`,
          href: '/rss.xml',
        },
        {
          rel: 'alternate',
          type: 'application/atom+xml',
          title: `${import.meta.env.NUXT_SITE_NAME} Atom Feed`,
          href: '/atom.xml',
        },
        {
          rel: 'alternate',
          type: 'application/feed+json',
          title: 'JSON Feed',
          href: '/feed.json',
        },
      ],
      script: [
        // Prevent flash of light mode on page load
        {
          innerHTML: `
            (function() {
              const savedMode = localStorage.getItem('nuxt-color-mode');
              if (!savedMode || savedMode === 'dark') {
                document.documentElement.classList.add('dark');
              }
            })();
          `,
          type: 'text/javascript',
        },
      ],
    },
  },
  nitro: {
    prerender: {
      routes: ['/rss.xml', '/atom.xml', '/feed.json'],
    },
  },
});
