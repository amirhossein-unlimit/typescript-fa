<template>
  <UiBreadcrumb dir="ltr">
    <UiBreadcrumbList>
      <template v-for="(breadcrumb, index) in breadcrumbs" :key="breadcrumb.title">
        <UiBreadcrumbItem>
          <NuxtLink
            :href="breadcrumb.href"
            class="hover:text-foreground transition-colors"
            :class="{ 'text-foreground': index === breadcrumbs.length - 1 }"
          >
            {{ breadcrumb.title }}
          </NuxtLink>
        </UiBreadcrumbItem>
        <UiBreadcrumbSeparator v-if="index !== breadcrumbs.length - 1" />
      </template>
    </UiBreadcrumbList>
  </UiBreadcrumb>
</template>

<script setup lang="ts">
const route = useRoute();

const breadcrumbs = useBreadcrumb(route.path);
</script>
