<script setup lang="ts">
import { menuItems } from '~/shared/config/menu_items'
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
  <div>
    <Button
      icon="pi pi-bars"
      text
      rounded
      aria-label="Menu"
      class="mobile-menu__burger-button lg:hidden bg-primary-700/50 hover:bg-gray-50"
      @click="visible = true"
    />

    <Drawer v-model:visible="visible" position="right" :show-close-icon="true">
      <template #header>
        <div class="flex items-center gap-3">
          <i class="pi pi-bars text-xl"></i>
          <span class="font-semibold text-lg">Меню</span>
        </div>
      </template>

      <div class="flex flex-col gap-2 pt-4">
        <NuxtLink
          v-for="item in menuItems"
          :key="item.label"
          :to="item.url"
          class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors text-surface-300 hover:text-gray-900"
          @click="visible = false"
        >
          <i :class="item.icon" class="text-lg"></i>
          <span class="font-medium">{{ item.label }}</span>
        </NuxtLink>
      </div>
    </Drawer>
  </div>
</template>

<style scoped lang="postcss">
.mobile-menu__burger-button {
  position: fixed !important;
  top: 15px;
  right: 15px;
  z-index: 2;
  width: 50px !important;
  height: 50px !important;
  padding: 20px;
  @apply text-surface-200;
  @apply transition-colors;

  :deep(.pi) {
    @apply text-xl;
  }
}
</style>
