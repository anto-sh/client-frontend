import type { OutputData } from '@editorjs/editorjs'

// Специалист

export interface ExpertDto {
  id: number
  fullName: string
  description: string
  imageUrl: string
  categoryId: number
  contentJson?: OutputData
}
