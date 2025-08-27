<script setup lang="ts">
import { menuItems } from '~/shared/config/menu_items'
</script>

<template>
  <header class="shadow-lg">
    <!-- Верхний блок с контактами и названием -->
    <div class="border-b border-surface-800 py-3">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">
          <!-- Левый блок - контактная информация -->
          <div class="hidden lg:flex flex-1 items-center gap-4 sm:gap-6">
            <Chip>
              <PhoneLink />
            </Chip>
          </div>

          <!-- Центральный блок - название центра -->
          <NuxtLink to="/" class="text-center flex-2 mt-4">
            <h1 class="text-xl md:text-2xl font-bold uppercase text-primary-500 tracking-wide mb-1">
              Реабилитационный центр амплитуда
            </h1>
            <Tag value="Восстановление & Терапия" severity="secondary" class="text-xs italic" />
          </NuxtLink>

          <!-- Правый блок - онлайн запись -->
          <div class="flex flex-1 items-center justify-center lg:justify-end flex-wrap gap-3 mb-4">
            <Chip class="lg:hidden">
              <PhoneLink />
            </Chip>
            <Button
              label="Онлайн-запись"
              as="a"
              href="https://n999262.yclients.com/company/927190/record-type?o="
              target="_blank"
              severity="primary"
              size="small"
              raised
              class="font-bold uppercase px-4 py-2 text-sm"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Нижний блок - навигация -->
    <div class="py-2 hidden lg:block">
      <div class="max-w-7xl mx-auto px-4">
        <Menubar :model="menuItems" class="border-0 bg-transparent p-0" :breakpoint="'1024px'">
          <template #item="{ item }">
            <NuxtLink :key="item.url" :to="item.url" class="p-menubar-item-link">
              <i :class="item.icon" class="p-menubar-item-icon"></i>
              <span class="p-menubar-item-label">{{ item.label }}</span>
            </NuxtLink>
          </template>
        </Menubar>
      </div>
    </div>
  </header>
</template>

<style></style>
