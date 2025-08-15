<template>
  <div v-if="isBackToTopEnabled" class="w-fit">
    <UiButton variant="link" class="text-primary text-sm font-semibold cursor-pointer" @click="y = 0">
      <div class="flex items-center gap-2 ">
        <SmartIcon name="lucide:arrow-up" />
        <span>بازگشت به بالا</span>
      </div>
    </UiButton>
  </div>
</template>

<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core';

const config = useConfig().value.main;
const isBackToTopEnabled = config.backToTop;

const { y } = useWindowScroll({ behavior: 'smooth' });
</script>
