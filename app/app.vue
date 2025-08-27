<script setup lang="ts">
// Обработка ошибки вследствие неверного кэширования чанков при некоторых переходах между страницами
const router = useRouter()
router.onError((error, to) => {
  if (
    error.message.includes('Failed to fetch dynamically imported module') ||
    error.message.includes('error loading dynamically imported module')
  ) {
    // Принудительная перезагрузка страницы
    window.location.href = to.fullPath
  }
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
