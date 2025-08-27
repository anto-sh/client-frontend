<script setup lang="ts">
import { useServiceCategoryStore } from '~/entities/service-category/store'
import CardsGridSection from '~/widgets/cards-grid-section/CardsGridSection.vue'

const { fetchServiceCategoriesWithServices } = useServiceCategoryStore()

const { data: categories } = useAsyncData('serviceCategoriesWithServices', () =>
  fetchServiceCategoriesWithServices(),
)
</script>

<template>
  <div>
    <CardsGridSection
      v-for="c in categories"
      :key="c.id"
      :category="c"
      :items="c.services || []"
      item-page-route="/services/"
      sub-text-property-name="price"
      sub-text-append-content="₽"
      :text-content-line-clamp="false"
    />
  </div>
</template>
