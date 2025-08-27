<script setup lang="ts">
//TODO: вынести
import type { CardsGridSectionProps } from '../cards-grid-list/CardsGridSection.vue'

const props = withDefaults(defineProps<CardsGridSectionProps>(), {
  imageOption: 'ownImage',
  textContentLineClamp: true,
  hasSubText: true,
  mainTextPropertyName: 'name',
  subTextPropertyName: 'description',
  imageUrlPropertyName: 'imageUrl',
  subTextAppendContent: '',
})

const itemCardProps = computed(() => {
  const { items, ...rest } = props
  return rest
})

const carouselResponsiveOptions = ref([
  {
    breakpoint: '5000px',
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: '1200px',
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '767px',
    numVisible: 1,
    numScroll: 1,
  },
])
</script>

<template>
  <div>
    <h3 class="text-2xl text-center uppercase md:text-3xl font-bold mb-3 md:mb-4">
      {{ category.name }}
    </h3>
    <Carousel
      v-if="items"
      :value="items"
      :responsive-options="carouselResponsiveOptions"
      class="mt-5"
    >
      <template #item="slotProps">
        <ItemCard :item="slotProps.data" v-bind="itemCardProps" />
      </template>
    </Carousel>

    <!-- TODO: вынести в отдельный компонент эту заглушку -->
    <div v-if="!items?.length" class="text-center py-12">
      <i class="pi pi-users text-6xl mb-4"></i>
      <p class="text-lg">В данной категории пока ничего нет</p>
    </div>
  </div>
</template>
