import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import { defineOrganization } from 'nuxt-schema-org/schema';

const currentDir = dirname(fileURLToPath(import.meta.url));
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      siteUrl: import.meta.env.NUXT_SITE_URL || 'https://typescript-fa.ir',
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
    '@nuxt/scripts',
    '@nuxt/fonts',
    '@nuxtjs/sitemap',
    'nuxt-schema-org',
  ],
  sitemap: {
    defaults: {
      changefreq: 'weekly',
    },
    sources: ['/api/__sitemap__/urls'],
  },
  site: {
    enabled: true,
    indexable: true,
  },
  schemaOrg: {
    identity: defineOrganization({
      'name': import.meta.env.NUXT_SITE_NAME,
      'alternateName': 'TypeScript Persian Docs',
      'description': import.meta.env.NUXT_SITE_DESC,
      'url': import.meta.env.NUXT_SITE_URL,
      'logo': '/logo.png',
      '@type': ['Organization', 'EducationalOrganization'],
      'inLanguage': 'fa-IR',
      'keywords': [
        'تایپ اسکریپت',
        'TypeScript',
        'جاوا اسکریپت',
        'JavaScript',
        'آموزش برنامه نویسی تایپ اسکریپت',
        'داکیومنت تایپ اسکریپت',
      ],
      'educationalUse': [
        'learning',
        'reference',
        'tutorial',
        'documentation',
      ],
      'sameAs': [
        'https://github.com/amirhossein-unlimit',
        'https://twitter.com/amirhosseinUnl',
        'https://t.me/amirhossein_unlimit',
        'https://instagram.com/amirhossein_unlimit',
      ],
      'about': [
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
      'foundingDate': '2024-01-01',
      'status': 'active',
      'creativeWorkStatus': 'Published',
    }),
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
  fonts: {
    defaults: {
      weights: ['300 800'],
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
  compatibilityDate: '2025-05-13',
});
