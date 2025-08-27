import type { ServiceDto } from '../service/types'

export interface ServiceCategoryDto {
  id: number
  name?: string
  url: string
  services?: ServiceDto[]
}
