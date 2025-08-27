import { useExpertStore } from '~/entities/expert/store'

export function useExpertProfileModel() {
  const route = useRoute()
  const expertStore = useExpertStore()
  const expertData = useAsyncData(`expert_${route.params.id}`, () =>
    expertStore.fetchExpertById(parseInt(route.params.id as string, 10)),
  )

  const getExpertCategoryName = () => {
    const categoryUrl = route.params.category
    if (categoryUrl === 'trenery') return 'Тренер'
    else if (categoryUrl === 'doktora') return 'Доктор'
  }

  const getExpertCategoryIconCode = () => {
    const categoryUrl = route.params.category
    if (categoryUrl === 'trenery') return 'pi-trophy'
    else if (categoryUrl === 'doktora') return 'pi-heart'
  }

  return {
    expertStore,
    ...expertData,
    getExpertCategoryName,
    getExpertCategoryIconCode,
  }
}
