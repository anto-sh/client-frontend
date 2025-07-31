import type { OutputData } from '@editorjs/editorjs'

// Упражнение

export interface ExerciseDto {
  id: number
  name: string
  categoryId: number
  contentJson?: OutputData
}
