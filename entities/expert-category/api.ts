import type { ExpertCategoryDto } from './types'
import type { ApiResponseDto } from '@/shared/api/types'

export const useExpertCategoryApi = () => {
  const { $api } = useNuxtApp()

  const getAll = async (): Promise<ApiResponseDto<ExpertCategoryDto[]>> => {
    return await $api('/expert-categories')
  }

  const getAllWithExperts = async (): Promise<ApiResponseDto<ExpertCategoryDto[]>> => {
    return await $api('/expert-categories/with-experts')
  }

  return { getAll, getAllWithExperts }
}
