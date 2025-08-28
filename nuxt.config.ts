import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import { defineWebSite } from 'nuxt-schema-org/schema';

const currentDir = dirname(fileURLToPath(import.meta.url));
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      siteUrl: import.meta.env.NUXT_SITE_URL || 'https://typescript-fa.ir',
      siteName: import.meta.env.NUXT_SITE_NAME || 'مستندات فارسی تایپ اسکریپت',
      siteDesc: import.meta.env.NUXT_SITE_DESC || 'مرجع کامل آموزش و مستندات تایپ اسکریپت به زبان فارسی برای توسعه‌دهندگان ایرانی',
      authorName: import.meta.env.NUXT_AUTHOR_NAME || 'امیرحسین عظیمی',
    },
  },
  modules: [
    'shadcn-nuxt',
    '@vueuse/nuxt',
    '@ztl-uwu/nuxt-content',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    'nuxt-og-image',
    '@nuxtjs/sitemap',
    'nuxt-schema-org',
  ],
  sitemap: {
    defaults: {
      changefreq: 'weekly',
    },
    xsl: false,
    sources: ['/api/__sitemap__/urls'],
  },
  schemaOrg: {
    identity:
      defineWebSite({
        name: import.meta.env.NUXT_SITE_NAME,
        alternateName: 'TypeScript Persian Docs',
        description: import.meta.env.NUXT_SITE_DESC,
        url: import.meta.env.NUXT_SITE_URL,
        inLanguage: 'fa-IR',
        sameAs: [
          'https://github.com/amirhossein-unlimit/typescript-fa',
        ],
        about: [
          {
            '@type': 'Thing',
            'name': 'TypeScript',
            'sameAs': 'https://www.wikidata.org/wiki/Q978185',
          },
          {
            '@type': 'Thing',
            'name': 'JavaScript',
            'sameAs': 'https://www.wikidata.org/wiki/Q2005',
          },
        ],
      }),
  },
  ogImage: {
    fonts: [
      'Vazirmatn:400',
      'Vazirmatn:700',
    ],
    defaults: {
      component: 'doc',
    },
  },
  shadcn: {
    prefix: 'Ui',
    componentDir: join(currentDir, './components/ui'),
  },
  components: {
    dirs: [
      {
        path: './components',
        ignore: ['**/*.ts'],
      },
    ],
  },
  colorMode: {
    classSuffix: '',
    disableTransition: true,
  },
  css: [
    join(currentDir, './assets/css/themes.css'),
    '~/assets/css/tailwind.css',
  ],
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'mdc', 'yaml', 'bash', 'ini', 'dotenv'],
    },
    navigation: {
      fields: [
        'icon',
        'navBadges',
        'navTruncate',
        'badges',
        'toc',
        'sidebar',
        'collapse',
        'editLink',
        'prevNext',
        'breadcrumb',
        'fullpage',
      ],
    },
    experimental: {
      search: {
        indexed: true,
      },
    },
  },
  icon: {
    clientBundle: {
      scan: true,
      sizeLimitKb: 512,
    },
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        baseUrl: '.',
      },
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
    optimizeDeps: {
      include: ['debug'],
    },
  },
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
          title: `${import.meta.env.NUXT_SITE_NAME} JSON Feed`,
          href: '/feed.json',
        },
      ],
    },
  },
  nitro: {
    prerender: {
      routes: ['/rss.xml', '/atom.xml', '/feed.json', '/sitemap.xml'],
    },
  },
  compatibilityDate: '2025-05-13',
});
