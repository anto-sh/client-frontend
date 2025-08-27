<script setup lang="ts">
import { usePageTitleModel } from './usePageTitleModel'
const { pageTitle } = usePageTitleModel()
</script>
<template>
  <h2 class="page-title text-2xl md:text-4xl py-2">{{ pageTitle }}</h2>
</template>

<style scoped lang="postcss">
.page-title {
  text-shadow: 2px 2px 2px var(--p-primary-800);
  @apply text-center uppercase mt-10 font-black
}
</style>
