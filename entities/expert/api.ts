import type { ExpertDto } from './types'
import type { ApiResponseDto } from '@/shared/api/types'

export const useExpertApi = () => {
  const { $api } = useNuxtApp()

  const getAll = async (): Promise<ApiResponseDto<ExpertDto[]>> => {
    return await $api('/experts')
  }

  const getById = async (id: number): Promise<ApiResponseDto<ExpertDto>> => {
    return await $api(`/experts/${id}`)
  }

  return { getAll, getById }
}
