import type { ExerciseDto } from './types'
import type { ApiResponseDto } from '@/shared/api/types'

export const useExerciseApi = () => {
  const { $api } = useNuxtApp()

  const getAll = async (): Promise<ApiResponseDto<ExerciseDto[]>> => {
    return await $api('/exercises')
  }

  const getById = async (id: number): Promise<ApiResponseDto<ExerciseDto>> => {
    return await $api(`/exercises/${id}`)
  }

  return { getAll, getById }
}
