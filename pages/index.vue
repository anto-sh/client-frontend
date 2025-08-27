<script setup lang="ts">
import TreatmentsList from '~/features/treatments-list/TreatmentsList.vue'
import CardsCarousel from '~/widgets/cards-carousel/CardsCarousel.vue'
import { useExpertCategoryStore } from '~/entities/expert-category/store'

const { fetchExpertCategoriesWithExperts } = useExpertCategoryStore()

const { data: expertCategoriesWithExperts } = useAsyncData('expertCategoriesWithExperts', () =>
  fetchExpertCategoriesWithExperts(),
)
</script>

<template>
  <div>
    <h2 class="section-header md:text-4xl mb-4">Что мы лечим</h2>
    <TreatmentsList />

    <h2 class="section-header md:text-4xl mt-10">Наши специалисты</h2>
    <CardsCarousel
      v-for="c in expertCategoriesWithExperts"
      :key="c.id"
      :category="c"
      :items="c.experts || []"
      item-page-route="/experts/profile/"
      main-text-property-name="fullName"
      class="mt-2 mb-8"
    />

    <OnlineAppointmentCalloutBlock class="mt-10" />
  </div>
</template>

<style scoped lang="postcss">
.section-header {
  @apply font-bold text-primary-400 text-3xl text-center uppercase;
}
</style>
