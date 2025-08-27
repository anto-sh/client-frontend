<script setup lang="ts">
import type { BaseCardItem } from '~/shared/types/BaseCardItem'
import type { CardsGridSectionProps } from '~/widgets/cards-grid-list/CardsGridSection.vue'
import { useItemCardModel } from './useItemCardModel'

export type ItemCardProps = Required<Omit<CardsGridSectionProps, 'items'>> & { item: BaseCardItem }

const props = defineProps<ItemCardProps>()
const {
  goToItemPage,
  getItemImageUrl,
  getItemMainText,
  getItemSubText,
  getTextContentClassObject,
} = useItemCardModel(toRefs(props))
</script>
<template>
  <Card
    class="item-card overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-xl shadow-cyan-500"
    @click="goToItemPage(category.url, item.id)"
  >
    <template #content>
      <div class="relative h-64 md:h-72 overflow-hidden rounded-lg">
        <!-- Изображение -->
        <Image
          v-if="imageOption !== 'noImage'"
          :src="
            imageOption === 'ownImage' ? getItemImageUrl(item) : '/img/card-image-placeholder.jpg'
          "
          image-class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />

        <!-- Контент поверх изображения -->
        <div
          class="item-card__text-content p-2 bg-surface-900/70"
          :class="getTextContentClassObject()"
        >
          <h3 class="text-lg md:text-xl font-semibold mb-2">
            {{ getItemMainText(item) }}
          </h3>
          <p v-if="hasSubText" class="text-sm md:text-base leading-relaxed">
            {{ getItemSubText(item) + (subTextAppendContent ? ` ${subTextAppendContent}` : '') }}
          </p>
        </div>
      </div>
    </template>
  </Card>
</template>

<style scoped lang="postcss">
.item-card {
  .item-card__text-content.is-line-clamp {
    p {
      display: none;
    }
    h3 {
      @apply line-clamp-2;
    }
  }

  &:hover .item-card__text-content.is-line-clamp p {
    @apply line-clamp-6;
  }
}
</style>
