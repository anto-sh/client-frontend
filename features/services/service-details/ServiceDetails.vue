<script setup lang="ts">
import { useServiceDetailsModel } from './useServiceDetailsModel'

const { data: serviceData } = useServiceDetailsModel()
</script>

<template>
  <div class="px-4 py-8">
    <div class="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
      <Image
        :src="serviceData?.imageUrl"
        alt="Фото услуги"
        class="w-full md:w-1/3"
        image-class="w-full rounded-lg shadow-lg object-cover mx-auto"
      />
      <div class="w-full md:flex-1">
        <h2 class="text-3xl font-bold mb-2">{{ serviceData?.name }}</h2>
        <h2 class="text-xl font-bold mb-4">
          Стоимость: <span class="text-primary-400">{{ serviceData?.price }} ₽</span>
        </h2>
        <Divider />
        <h3 class="text-3xl mb-3">Список входящих в услугу процедур:</h3>
        <ol class="list-decimal text-xl ml-5">
          <li v-for="(p, index) in serviceData?.procedures" :key="index">
            {{ p }}
          </li>
        </ol>
        <Button
          label="Записаться онлайн"
          as="a"
          href="https://n999262.yclients.com/company/927190/record-type?o="
          target="_blank"
          rel="noopener noreferrer"
          size="large"
          rounded
          class="online-appointment-btn bg-primary-500/80 text-color mt-6 px-6 py-3 shadow"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.online-appointment-btn {
  border: none;
  &:hover {
    border: none;
    @apply bg-primary-900;
    @apply text-color;
  }
}
</style>
