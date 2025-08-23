<template>
  <div
    class="flex size-full flex-col justify-center p-12"
    :class="[colorMode === 'light' ? 'bg-white' : 'bg-zinc-950']"
    :style="`background-size: 40px 40px; background-image: linear-gradient(to right, ${colorMode === 'light' ? '#e5e7ebb3' : '#101828'} 1px, transparent 1px), linear-gradient(to bottom, ${colorMode === 'light' ? '#e5e7ebb3' : '#101828'} 1px, transparent 1px); font-family: IRANSansXV;`"
  >
    <div
      class="mb-14 flex"
    >
      <img v-if="colorMode === 'light'" :src="logo.light" height="70">
      <img v-else :src="logo.dark" height="70">
      <span
        v-if="showTitle && siteTitle"
        class="ml-4 self-center text-4xl font-bold whitespace-nowrap"
        :class="[colorMode === 'light' ? 'text-zinc-900' : 'text-zinc-100']"
      >
        {{ reverseText(siteTitle) }}
      </span>
    </div>
    <div
      class="w-full relative flex flex-col"
    >
      <h1
        class="text-7xl font-bold m-0 mb-5"
        :class="[colorMode === 'light' ? 'text-zinc-900' : 'text-zinc-100']"
      >
        {{ title }}
      </h1>
      <p
        class="text-[26px] leading-tight whitespace-nowrap m-0"
        :class="[colorMode === 'light' ? 'text-zinc-500' : 'text-zinc-400']"
      >
        {{ reverseText(description) }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  colorMode?: 'dark' | 'light';
  title: string;
  description: string;
}>();

const { logo, title: siteTitle, showTitle } = useConfig().value.header;

const colorMode = computed(() => {
  return props.colorMode || useConfig().value.site.ogImageColor || 'light';
});

function reverseText(text: string) {
  // 小 : means little in Chinese
  // Can be replaced with any character that's not defined in your font
  return text.split(' ').reverse().join('、');
}
</script>
