import type { ServiceDto } from './types'
import type { ApiResponseDto } from '@/shared/api/types'

export const useServiceApi = () => {
  const { $api } = useNuxtApp()

  const getAll = async (): Promise<ApiResponseDto<ServiceDto[]>> => {
    return await $api('/services')
  }

  const getById = async (id: number): Promise<ApiResponseDto<ServiceDto>> => {
    return await $api(`/services/${id}`)
  }

  return { getAll, getById }
}
