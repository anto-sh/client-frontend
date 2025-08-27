<script setup lang="ts">
import { useExerciseCategoryStore } from '~/entities/exercise-category/store'
import CardsGridSection from '~/widgets/cards-grid-section/CardsGridSection.vue'

const { fetchExerciseCategoriesWithExercises } = useExerciseCategoryStore()

const { data: categories } = useAsyncData('exerciseCategoriesWithExercises', () =>
  fetchExerciseCategoriesWithExercises(),
)
</script>

<template>
  <div>
    <CardsGridSection
      v-for="c in categories"
      :key="c.id"
      :category="c"
      :items="c.exercises || []"
      item-page-route="/exercises/"
      image-option="placeholderImage"
      :text-content-line-clamp="false"
      :has-sub-text="false"
    />
  </div>
</template>
