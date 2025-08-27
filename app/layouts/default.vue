<script setup lang="ts"></script>

<template>
  <div>
    <MobileMenu />
    <AppHeader />
    <PageTitle />
    <main class="max-w-7xl mx-auto px-4 my-10">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style global lang="scss">
@use '@/shared/css/main.scss';
</style>
