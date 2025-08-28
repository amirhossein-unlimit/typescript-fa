<template>
  <div
    dir="rtl"
    class="px-4 py-6 md:px-8"
    :class="[config.main.padded && 'container']"
  >
    <ContentRenderer
      :key="page._id"
      :value="page"
      :data="(appConfig.docs as any)?.data"
    />
  </div>
</template>

<script setup lang="ts">
const { page } = useContent();
const config = useConfig();
const appConfig = useAppConfig();

const { siteUrl } = useRuntimeConfig().public;

useSeoMeta({
  title: config.value.site.name,
  description: page.value?.description,
  ogTitle: config.value.site.name,
  ogDescription: page.value?.description,
  twitterTitle: config.value.site.name,
  twitterDescription: page.value?.description,
  twitterCard: 'summary_large_image',
  ogUrl: siteUrl,
});

defineOgImageComponent(config.value.site.ogImageComponent, {
  title: '',
  description: page.value?.description,
});
</script>
