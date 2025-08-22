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
      component: 'ShadcnDocs',
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

  compatibilityDate: '2025-05-13',
});
