import { createDefu } from 'defu';

const customDefu = createDefu((obj, key, value) => {
  if (Array.isArray(value) && value.every((x: any) => typeof x === 'string')) {
    obj[key] = value;
    return true;
  }
});

const { NUXT_SITE_NAME: siteName, NUXT_SITE_DESC: siteDesc, NUXT_AUTHOR_NAME: authorName } = import.meta.env;
const defaultConfig: DefaultConfig = {
  site: {
    name: siteName,
    description: siteDesc,
    author: authorName,
    favicon: '/favicon.ico',
    ogImage: '/hero.png',
    ogImageComponent: 'doc',
    ogImageColor: 'light',
  },
  theme: {
    customizable: false,
    color: 'zinc',
    radius: 0.5,
  },
  header: {
    showLoadingIndicator: true,
    title: 'shadcn-docs',
    showTitle: true,
    logo: {
      light: '/logo.svg',
      dark: '/logo-dark.svg',
    },
    showTitleInMobile: false,
    border: false,
    darkModeToggle: true,
    nav: [],
    links: [],
  },
  aside: {
    useLevel: true,
    levelStyle: 'aside',
    headerLevelNavAlign: 'start',
    collapse: false,
    collapseLevel: 1,
    folderStyle: 'default',
  },
  main: {
    breadCrumb: true,
    showTitle: true,
    codeCopyToast: false,
    codeCopyIcon: 'lucide:clipboard',
    codeCopyToastText: 'Copied to clipboard!',
    fieldRequiredText: 'required',
    padded: true,
    editLink: {
      enable: true,
      pattern: 'https://github.com/amirhossein-unlimit/typescript-fa/edit/main/content/:path',
      text: 'ویرایش کردن',
      icon: 'lucide:square-pen',
      placement: ['toc', 'docsFooter'],
    },
    backToTop: true,
    pm: ['npm', 'pnpm', 'bun', 'yarn'],
    imageZoom: true,
    codeIcon: {
      'package.json': 'vscode-icons:file-type-node',
      'tsconfig.json': 'vscode-icons:file-type-tsconfig',
      '.npmrc': 'vscode-icons:file-type-npm',
      '.editorconfig': 'vscode-icons:file-type-editorconfig',
      '.eslintrc': 'vscode-icons:file-type-eslint',
      '.eslintrc.cjs': 'vscode-icons:file-type-eslint',
      '.eslintignore': 'vscode-icons:file-type-eslint',
      'eslint.config.js': 'vscode-icons:file-type-eslint',
      'eslint.config.mjs': 'vscode-icons:file-type-eslint',
      'eslint.config.cjs': 'vscode-icons:file-type-eslint',
      '.gitignore': 'vscode-icons:file-type-git',
      'yarn.lock': 'vscode-icons:file-type-yarn',
      '.env': 'vscode-icons:file-type-dotenv',
      '.env.example': 'vscode-icons:file-type-dotenv',
      '.vscode/settings.json': 'vscode-icons:file-type-vscode',
      'nuxt': 'vscode-icons:file-type-nuxt',
      '.nuxtrc': 'vscode-icons:file-type-nuxt',
      '.nuxtignore': 'vscode-icons:file-type-nuxt',
      'nuxt.config.js': 'vscode-icons:file-type-nuxt',
      'nuxt.config.ts': 'vscode-icons:file-type-nuxt',
      'nuxt.schema.ts': 'vscode-icons:file-type-nuxt',
      'tailwind.config.js': 'vscode-icons:file-type-tailwind',
      'tailwind.config.ts': 'vscode-icons:file-type-tailwind',
      'vue': 'vscode-icons:file-type-vue',
      'ts': 'vscode-icons:file-type-typescript',
      'tsx': 'vscode-icons:file-type-typescript',
      'mjs': 'vscode-icons:file-type-js',
      'cjs': 'vscode-icons:file-type-js',
      'js': 'vscode-icons:file-type-js',
      'jsx': 'vscode-icons:file-type-js',
      'md': 'vscode-icons:file-type-markdown',
      'mdc': 'vscode-icons:file-type-markdown',
      'css': 'vscode-icons:file-type-css',
      'py': 'vscode-icons:file-type-python',
      'npm': 'vscode-icons:file-type-npm',
      'pnpm': 'vscode-icons:file-type-pnpm',
      'pnpm-lock.yaml': 'vscode-icons:file-type-pnpm',
      'pnpm-workspace.yaml': 'vscode-icons:file-type-pnpm',
      'npx': 'vscode-icons:file-type-npm',
      'yarn': 'vscode-icons:file-type-yarn',
      'bun': 'vscode-icons:file-type-bun',
      'bun.lock': 'vscode-icons:file-type-bun',
      'deno': 'vscode-icons:file-type-deno',
      'yml': 'vscode-icons:file-type-light-yaml',
      'json': 'vscode-icons:file-type-json',
      'terminal': 'lucide:terminal',
    },
  },
  footer: {
    border: true,
    credits: '',
    links: [],
  },
  toc: {
    enable: true,
    enableInMobile: false,
    enableInHomepage: false,
    title: 'در این صفحه',
    links: [],
    iconLinks: [],
  },
  search: {
    enable: true,
    inAside: false,
    style: 'input',
    placeholder: 'جست و جو ...',
    placeholderDetailed: 'جست و جوی اسناد',
  },
};

export function useConfig() {
  const appConfig = computed(() => useAppConfig()?.docs || {});

  const { navKeyFromPath } = useContentHelpers();
  const { navigation, page } = useContent();
  const route = useRoute();

  return computed(
    () => {
      const processedConfig = customDefu(appConfig.value, defaultConfig);
      const header = processedConfig.header;
      const main = processedConfig.main;
      const aside = processedConfig.aside;
      const footer = processedConfig.footer;
      const toc = processedConfig.toc;

      return {
        ...appConfig.value,
        ...processedConfig,
        header: {
          ...header,
          ...navKeyFromPath(route.path, 'header', navigation.value || []),
          ...page.value?.header,
        } as (typeof header & DefaultConfig['header']),
        main: {
          ...main,
          ...navKeyFromPath(route.path, 'main', navigation.value || []),
          ...page.value?.main,
        } as (typeof main & DefaultConfig['main']),
        aside: {
          ...aside,
          ...navKeyFromPath(route.path, 'aside', navigation.value || []),
          ...page.value?.aside,
        } as (typeof aside & DefaultConfig['aside']),
        toc: {
          ...toc,
          ...navKeyFromPath(route.path, 'toc', navigation.value || []),
          ...page.value?.toc,
        } as (typeof toc & DefaultConfig['toc']),
        footer: {
          ...footer,
          ...navKeyFromPath(route.path, 'footer', navigation.value || []),
          ...page.value?.footer,
        } as (typeof footer & DefaultConfig['footer']),
      };
    },
  );
}

export function useServerConfig() {
  return useAppConfig()?.docs || defaultConfig;
}
