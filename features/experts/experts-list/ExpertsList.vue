<script setup lang="ts">
import type { ExpertCategoryDto } from '~/entities/expert-category/types'
import { useExpertsListModel } from './useExpertsListModel'

const props = defineProps<{
  category: ExpertCategoryDto
}>()

const { goToExpertProfile } = useExpertsListModel()
</script>

<template>
  <div class="experts-list my-20">
    <h2 class="text-2xl text-center uppercase md:text-4xl font-bold mb-6 md:mb-8">
      {{ category.name }}
    </h2>
    <Divider />

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6 mt-10">
      <Card
        v-for="expert in props.category.experts"
        :key="expert.id"
        class="expert-card overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-xl shadow-cyan-500"
        @click="goToExpertProfile(category.url, expert.id)"
      >
        <template #content>
          <div class="relative h-64 md:h-72 overflow-hidden rounded-lg">
            <!-- Изображение специалиста -->
            <Image
              :src="expert.imageUrl"
              :alt="expert.fullName"
              image-class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />

            <!-- Контент поверх изображения -->
            <div
              class="expert-card__text-content absolute bottom-0 left-0 right-0 p-2 bg-surface-900/70"
            >
              <h3 class="text-lg md:text-xl font-semibold mb-2 line-clamp-2">
                {{ expert.fullName }}
              </h3>
              <p class="text-sm md:text-base leading-relaxed">
                {{ expert.description }}
              </p>
            </div>
          </div>
        </template>
      </Card>
    </div>
    <!-- TODO: вынести в отдельный компонент эту заглушку -->
    <div v-if="!props.category.experts?.length" class="text-center py-12">
      <i class="pi pi-users text-6xl mb-4"></i>
      <p class="text-lg">В данной категории пока нет специалистов</p>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.expert-card {
  .expert-card__text-content p {
    display: none;
  }

  &:hover .expert-card__text-content p {
    @apply line-clamp-6;
  }
}
</style>
