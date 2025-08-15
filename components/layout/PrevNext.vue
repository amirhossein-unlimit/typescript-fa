<template>
  <div v-if="page.prevNext ?? true" class="border-t pt-6 lg:flex lg:flex-col xl:flex-row">
    <LayoutPrevNextButton :prev-next="prev" side="left" />
    <span class="flex-1" />
    <LayoutPrevNextButton :prev-next="next" side="right" />
  </div>
</template>

<script setup lang="ts">
const { page, next, prev } = useContent();
</script>
