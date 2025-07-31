import type { TreatmentDto } from './types'
import type { ApiResponseDto } from '@/shared/api/types'

export const useTreatmentApi = () => {
  const { $api } = useNuxtApp()
  const getAll = async (): Promise<ApiResponseDto<TreatmentDto[]>> => {
    return await $api('/treatments')
  }

  return { getAll }
}
