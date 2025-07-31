import { defineStore } from 'pinia'
import { useExerciseCategoryApi } from './api'
import type { ExerciseCategoryDto } from './types'
import { ref, readonly } from 'vue'

export const useExerciseCategoryStore = defineStore('ExerciseCategory', () => {
  const exerciseCategoryApi = useExerciseCategoryApi()
  const exerciseCategories = ref<ExerciseCategoryDto[]>([])

  async function fetchExerciseCategories() {
    const res = await exerciseCategoryApi.getAll()
    if (res.data) {
      exerciseCategories.value = res.data
      return res.data
    }
  }

  async function fetchExerciseCategoriesWithExercises() {
    const res = await exerciseCategoryApi.getAllWithExercises()
    if (res.data) {
      exerciseCategories.value = res.data
      return res.data
    }
  }

  return {
    exerciseCategories: readonly(exerciseCategories),
    fetchExerciseCategories,
    fetchExerciseCategoriesWithExercises,
  }
})
