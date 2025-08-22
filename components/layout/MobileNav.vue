<template>
  <UiSheet v-model:open="open">
    <UiSheetTrigger as-child>
      <UiButton
        variant="ghost"
        size="icon"
        class="md:hidden"
      >
        <Icon name="lucide:menu" size="18" />
      </UiButton>
    </UiSheetTrigger>
    <UiSheetContent side="left" class="pl-4 pt-4 pr-0">
      <LayoutHeaderLogo class="mt-3 pr-4 text-right" />
      <LayoutAside is-mobile />
      <UiDialogTitle class="sr-only" />
      <UiDialogDescription class="sr-only" />
    </UiSheetContent>
  </UiSheet>
</template>

<script setup lang="ts">
const open = ref(false);

// Close sheet on navigation
watch(() => useRoute().path, () => {
  open.value = false;
});
</script>
