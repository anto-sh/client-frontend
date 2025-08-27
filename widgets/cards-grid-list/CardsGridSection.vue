<script setup lang="ts">
import type { BaseCardCategory } from '~/shared/types/BaseCardCategory'
import type { BaseCardItem } from '~/shared/types/BaseCardItem'

// TODO: по хорошему вынести в shared и подумать над названием
// наверное еще стоит переработать, чтобы расширения типов были снизу вверх - от ItemCard
export interface CardsGridSectionProps {
  category: BaseCardCategory
  items: BaseCardItem[]
  // Конфигурация свойств отображения
  imageOption?: 'ownImage' | 'placeholderImage' | 'noImage'
  textContentLineClamp?: boolean
  hasSubText?: boolean
  // Конфигурация маршрутов
  itemPageRoute: string
  // Конфигурация имён свойств
  mainTextPropertyName?: string
  subTextPropertyName?: string
  imageUrlPropertyName?: string
  // Дополнительный контент
  subTextAppendContent?: string
}

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
</script>

<template>
  <div class="my-20">
    <h2 class="text-2xl text-center uppercase md:text-4xl font-bold mb-6 md:mb-8">
      {{ category.name }}
    </h2>
    <Divider />

    <div
      v-if="items.length"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6 mt-10"
    >
      <ItemCard v-for="item in items" :key="item.id" :item="item" v-bind="itemCardProps" />
    </div>
    <!-- TODO: вынести в отдельный компонент эту заглушку -->
    <div v-if="!items.length" class="text-center py-12">
      <i class="pi pi-users text-6xl mb-4"></i>
      <p class="text-lg">В данной категории пока ничего нет</p>
    </div>
  </div>
</template>
