import { defineStore } from 'pinia'
import { useExerciseApi } from './api'
import type { ExerciseDto } from './types'
import { ref, readonly } from 'vue'

export const useExerciseStore = defineStore('Exercise', () => {
  const exerciseApi = useExerciseApi()
  const exercises = ref<ExerciseDto[]>([])

  async function fetchExercises() {
    const res = await exerciseApi.getAll()
    if (res.data) {
      exercises.value = res.data
      return res.data
    }
  }

  async function fetchExerciseById(id: number) {
    const res = await exerciseApi.getById(id)
    if (res.data) {
      return res.data
    }
  }

  return {
    exercises: readonly(exercises),
    fetchExercises,
    fetchExerciseById,
  }
})
