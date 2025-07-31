import type { ExerciseDto } from '../exercise/types'

export interface ExerciseCategoryDto {
  id: number
  name?: string
  url?: string
  exercises?: ExerciseDto[]
}
