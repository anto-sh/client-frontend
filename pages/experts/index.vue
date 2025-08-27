<script setup lang="ts">
import { useExpertCategoryStore } from '~/entities/expert-category/store'
import CardsGridSection from '~/widgets/cards-grid-section/CardsGridSection.vue'

const { fetchExpertCategoriesWithExperts } = useExpertCategoryStore()

const { data: categories } = useAsyncData('expertCategoriesWithExperts', () =>
  fetchExpertCategoriesWithExperts(),
)
</script>

<template>
  <div>
    <CardsGridSection
      v-for="c in categories"
      :key="c.id"
      :category="c"
      :items="c.experts || []"
      item-page-route="/experts/profile/"
      main-text-property-name="fullName"
    />
  </div>
</template>
