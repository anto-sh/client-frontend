import type { ExerciseCategoryDto } from './types'
import type { ApiResponseDto } from '@/shared/api/types'

export const useExerciseCategoryApi = () => {
  const { $api } = useNuxtApp()

  const getAll = async (): Promise<ApiResponseDto<ExerciseCategoryDto[]>> => {
    return await $api('/exercise-categories')
  }

  const getAllWithExercises = async (): Promise<ApiResponseDto<ExerciseCategoryDto[]>> => {
    return await $api('/exercise-categories/with-exercises')
  }

  return { getAll, getAllWithExercises }
}
