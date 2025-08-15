<template>
  <footer dir="rtl" class="text-muted-foreground py-4 md:px-8">
    <div class="container flex flex-col items-center justify-between gap-1">
      <MDC :value="footer.credits" class="text-sm" />
      <span class="flex-1" />
      <div class="flex flex-wrap gap-2 justify-center md:justify-end">
        <NuxtLink
          v-for="(link, i) in footer.links"
          :key="i"
          :to="link?.to"
          :target="link?.target"
        >
          <UiButton variant="ghost" :size="link?.icon && !link?.title ? 'icon' : 'default'" class="flex gap-2">
            <SmartIcon v-if="link?.icon" :name="link.icon" :size="20" />
            <span v-if="link?.title">{{ link.title }}</span>
          </UiButton>
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { footer } = useConfig().value;
</script>
