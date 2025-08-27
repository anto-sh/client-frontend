<template>
  <Card
    class="bg-surface-900 border border-surface-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center"
    :pt="{
      content: 'p-0',
    }"
  >
    <template #content>
      <div class="space-y-4">
        <h2 class="text-2xl font-bold text-surface-0">Запишитесь прямо сейчас!</h2>
        <p class="text-surface-400">Получите консультацию в удобное для вас время</p>
        <div
          class="mx-auto w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center"
        >
          <i class="pi pi-calendar text-primary-400 text-xl"></i>
        </div>

        <Button
          label="Записаться онлайн"
          as="a"
          href="https://n999262.yclients.com/company/927190/record-type?o="
          target="_blank"
          rel="noopener noreferrer"
          size="large"
          icon="pi pi-arrow-right"
          icon-pos="right"
          class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg shadow"
        />

        <div class="text-surface-500 text-sm space-y-1">
          <div class="flex items-center justify-center gap-2">
            <i class="pi pi-check-circle text-green-400"></i>
            <span>Бесплатная консультация</span>
          </div>
          <div class="flex items-center justify-center gap-2">
            <i class="pi pi-clock text-blue-400"></i>
            <span>Мгновенная запись</span>
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>

<style scoped></style>
