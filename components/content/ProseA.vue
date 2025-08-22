<template>
  <NuxtLink
    :to="href"
    :target="target || href.startsWith('http') ? '_blank' : '_self'"
    :external="external ?? href.startsWith('http')"
    class="text-blue-500 dark:text-blue-400 font-semibold underline underline-offset-6"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
const {
  href = '',
  external = false,
} = defineProps<{
  href?: string;
  target?: Target;
  external?: boolean;
}>();
</script>
