<template>
  <NuxtLink
    :to="href"
    :target="target || isExternal ? '_blank' : '_self'"
    :external="isExternal"
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

const prefix = 'http';
const isExternal = external || href.slice(0, prefix.length) === prefix;
</script>
