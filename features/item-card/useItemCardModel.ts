import type { ToRefs } from 'vue'
import type { ItemCardProps } from './ItemCard.vue'
import type { BaseCardItem } from '~/shared/types/BaseCardItem'

export function useItemCardModel(propRefs: ToRefs<ItemCardProps>) {
  const {
    imageOption,
    itemPageRoute,
    imageUrlPropertyName,
    mainTextPropertyName,
    subTextPropertyName,
    textContentLineClamp,
  } = propRefs

  const goToItemPage = (categoryUrl: string, itemId: number) =>
    navigateTo(`${itemPageRoute.value}${categoryUrl}/${itemId}`)

  const getItemImageUrl = (item: BaseCardItem) => item[imageUrlPropertyName.value]
  const getItemMainText = (item: BaseCardItem) => item[mainTextPropertyName.value]
  const getItemSubText = (item: BaseCardItem) => item[subTextPropertyName.value]
  const getTextContentClassObject = () => ({
    'absolute bottom-0 left-0 right-0': imageOption.value !== 'noImage',
    'is-line-clamp': textContentLineClamp.value,
  })
  return {
    goToItemPage,
    getItemImageUrl,
    getItemMainText,
    getItemSubText,
    getTextContentClassObject,
  }
}
