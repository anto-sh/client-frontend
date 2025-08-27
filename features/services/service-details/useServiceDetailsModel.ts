import { useServiceStore } from '~/entities/service/store'

export function useServiceDetailsModel() {
  const route = useRoute()
  const { fetchServiceById } = useServiceStore()
  const serviceData = useAsyncData(`service_${route.params.id}`, () =>
    fetchServiceById(parseInt(route.params.id as string, 10)),
  )

  return {
    ...serviceData,
  }
}
