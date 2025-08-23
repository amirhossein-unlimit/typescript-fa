<template>
  <div
    v-if="!page?.body"
    dir="rtl"
    class="flex h-[calc(100vh-3.5rem)] items-center justify-center"
  >
    <h3 class="scroll-m-20 border-l px-4 py-3 text-2xl font-semibold">
      404
    </h3>
    <span class="scroll-m-20 px-4">
      صفحه مورد نظر یافت نشد !
    </span>
  </div>

  <template v-else>
    <div
      v-if="page?.fullpage"
      class="px-4 py-6 md:px-8"
      :class="[config.main.padded && 'container']"
    >
      <ContentRenderer
        :key="page._id"
        :value="page"
        :data="(appConfig.shadcnDocs as any)?.data"
      />
    </div>
    <main
      v-else
      class="relative py-6"
      :class="[config.toc.enable && (page.toc ?? true) && 'lg:grid lg:grid-cols-[1fr_220px] lg:gap-14 lg:py-8']"
    >
      <div dir="rtl" class="mx-auto w-full min-w-0">
        <LayoutBreadcrumb v-if="page?.body && config.main.breadCrumb && (page.breadcrumb ?? true)" class="mb-4" />
        <LayoutTitle
          v-if="config.main.showTitle"
          :title="page?.title"
          :description="page?.description"
          :badges="page?.badges"
          :authors="page?.authors"
        />

        <Alert
          v-if="page?.body?.children?.length === 0"
          icon="lucide:circle-x"
          title="صفحه خالی"
        >
          <template #fileLink>
            <ProseCodeInline>content/{{ page?._file }}</ProseCodeInline>
          </template>
        </Alert>

        <ContentRenderer
          v-else
          :key="page._id"
          :value="page"
          :data="(appConfig.shadcnDocs as any)?.data"
          class="docs-content"
        />

        <LayoutDocsFooter />
      </div>
      <div v-if="config.toc.enable && (page.toc ?? true)" class="hidden text-sm lg:block">
        <div
          class="sticky"
          :class="[
            (config.aside.useLevel && config.aside.levelStyle === 'aside') ? 'md:top-[91px]' : 'md:top-[133px]',
          ]"
        >
          <LayoutToc :is-small="false" />
        </div>
      </div>
    </main>
  </template>
</template>

<script setup lang="ts">
const { page } = useContent();
const config = useConfig();
const appConfig = useAppConfig();
const { siteUrl } = useRuntimeConfig().public;
useSeoMeta({
  title: `${page.value?.title ?? '404'} - ${config.value.site.name}`,
  ogTitle: page.value?.title,
  twitterTitle: page.value?.title,
  description: page.value?.description,
  ogDescription: page.value?.description,
  twitterDescription: page.value?.description,
  ogType: 'article',
  ogLocale: 'fa_IR',
  ogSiteName: config.value.site.name,
  twitterCard: 'summary_large_image',
  twitterCreator: config.value.site.author,
  author: config.value.site.author,
  xUaCompatible: 'IE=edge',
});

const route = useRoute();

if (page.value?.body) {
  useHead({
    link: [
      {
        rel: 'canonical',
        href: siteUrl + route.path,
      },
    ],
  });
}

defineOgImage({
  component: config.value.site.ogImageComponent,
  props: {
    title: page.value?.title || 'صفحه مورد نظر یافت نشد',
    description: page.value?.description,
  },
  sharp: {
    quality: 70,
  },
});

if (page.value?.body) {
  useSchemaOrg([
    defineWebPage({
      name: page.value?.title,
      url: siteUrl + route.path,
    }),

    defineArticle({
      description: page.value?.description,
      datePublished: new Date(page.value?.createdAt || null).toISOString(),
      dateModified: new Date(page.value?.updatedAt || page.value?.createdAt || null).toISOString(),
    }),

    defineBreadcrumb({
      itemListElement: useBreadcrumb(route.path).map(({ title, href }) => ({ name: title, item: href })),
    }),

    definePerson({
      name: config.value.site.author,
      alternateName: 'Amirhossein Azimi',
      sameAs: [
        'https://github.com/amirhossein-unlimit',
        'https://twitter.com/amirhosseinUnl',
        'https://t.me/amirhossein_unlimit',
        'https://instagram.com/amirhossein_unlimit',
      ],
    }),
  ]);
}
</script>
