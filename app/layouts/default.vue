<template>
  <div class="default-layout">
    <nav>Навигация</nav>
    <main>
      <slot />
    </main>
    <aside>Сайдбар</aside>
  </div>
</template>
<style lang="scss">
// global styles
@use '@/shared/css/main.scss';
</style>
