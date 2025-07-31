import type { ServiceCategoryDto } from './types'
import type { ApiResponseDto } from '@/shared/api/types'

export const useServiceCategoryApi = () => {
  const { $api } = useNuxtApp()

  const getAll = async (): Promise<ApiResponseDto<ServiceCategoryDto[]>> => {
    return await $api('/service-categories')
  }

  const getAllWithServices = async (): Promise<ApiResponseDto<ServiceCategoryDto[]>> => {
    return await $api('/service-categories/with-services')
  }

  return { getAll, getAllWithServices }
}
