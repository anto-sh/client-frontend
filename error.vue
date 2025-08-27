<script setup lang="ts">
interface Props {
  error: {
    statusCode: number
    statusMessage: string
  }
}

defineProps<Props>()
</script>

<template>
  <div class="min-h-screen flex items-center justify-center px-4">
    <Card class="w-full max-w-md text-center p-8">
      <template #content>
        <div class="mb-6">
          <i class="pi pi-exclamation-triangle text-6xl text-orange-400 mb-4"></i>
          <h1 class="text-2xl font-bold mb-2">
            {{ error.statusCode }}
          </h1>
          <p>
            {{ error.statusCode === 404 ? 'Страница не найдена' : 'Произошла ошибка' }}
          </p>
        </div>

        <div class="space-y-3">
          <Button label="На главную" icon="pi pi-home" class="w-full" @click="navigateTo('/')" />
          <Button
            label="Назад"
            icon="pi pi-arrow-left"
            severity="secondary"
            outlined
            class="w-full"
            @click="$router.go(-1)"
          />
        </div>
      </template>
    </Card>
  </div>
</template>
