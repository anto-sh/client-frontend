import { useExerciseStore } from '~/entities/exercise/store'

export function useExerciseDetailsModel() {
  const route = useRoute()
  const { fetchExerciseById } = useExerciseStore()
  const exerciseData = useAsyncData(`exercise_${route.params.id}`, () =>
    fetchExerciseById(parseInt(route.params.id as string, 10)),
  )

  return {
    ...exerciseData,
  }
}
