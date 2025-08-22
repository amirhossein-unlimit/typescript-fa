<template>
  <div v-if="page.prevNext ?? true" class="border-t pt-6 lg:flex lg:flex-row lg:gap-4 " :class="{ 'justify-end': !!next }">
    <LayoutPrevNextButton :prev-next="prev" side="left" />
    <LayoutPrevNextButton :prev-next="next" side="right" />
  </div>
</template>

<script setup lang="ts">
const { page, next, prev } = useContent();
</script>
