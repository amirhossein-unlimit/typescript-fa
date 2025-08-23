<template>
  <!-- lg:flex lg:flex-row lg:gap-4 lg:items-stretch -->
  <!-- class="border-t pt-6 pb-4 grid grid-cols-1 lg:grid-cols-2 gap-4" -->
  <div v-if="page.prevNext ?? true" class="border-t pt-6 pb-4 lg:flex lg:flex-row lg:items-stretch gap-4" :class="{ 'justify-end': !!next }">
    <LayoutPrevNextButton :prev-next="prev" side="left" />
    <LayoutPrevNextButton :prev-next="next" side="right" />
  </div>
</template>

<script setup lang="ts">
const { page, next, prev } = useContent();
</script>
