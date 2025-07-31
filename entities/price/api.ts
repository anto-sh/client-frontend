import type { PriceDto } from './types'
import type { ApiResponseDto } from '@/shared/api/types'

export const usePriceApi = () => {
  const { $api } = useNuxtApp()

  const getAll = async (): Promise<ApiResponseDto<PriceDto[]>> => {
    return await $api('/prices')
  }

  const getById = async (id: number): Promise<ApiResponseDto<PriceDto>> => {
    return await $api(`/prices/${id}`)
  }

  return { getAll, getById }
}
