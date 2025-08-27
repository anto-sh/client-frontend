<script setup lang="ts">
import { useExpertProfileModel } from './useExpertProfileModel'

const {
  data: expertData,
  getExpertCategoryName,
  getExpertCategoryIconCode,
} = useExpertProfileModel()
</script>

<template>
  <div>
    <div class="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
      <Image
        :src="expertData?.imageUrl"
        alt="Фото специалиста"
        class="w-full md:w-1/3"
        image-class="w-full rounded-lg shadow-lg object-cover mx-auto"
      />
      <div class="w-full md:flex-1">
        <h2 class="text-3xl font-bold mb-2">{{ expertData?.fullName }}</h2>
        <Chip
          class="bg-primary-500/80 font-semibold rounded-none pr-20 uppercase"
          :label="getExpertCategoryName()"
          :icon="`pi ${getExpertCategoryIconCode()}`"
        />
        <Divider />
        <p class="text-xl my-4">{{ expertData?.description }}</p>
      </div>
    </div>
    <Divider />
    <EditorJsViewer v-if="expertData?.contentJson?.blocks.length" :data="expertData?.contentJson" />
    <!-- TODO: вынести в отдельный компонент эту заглушку -->
    <div v-else class="text-center py-12">
      <i class="pi pi-info-circle text-6xl mb-4"></i>
      <p class="text-lg">
        Более подробной информации о нашем специалисте пока что не представлено, но она обязательно
        вскоре появится
      </p>
    </div>
  </div>
</template>
