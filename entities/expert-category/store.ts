import { defineStore } from 'pinia'
import { useExpertCategoryApi } from './api'
import type { ExpertCategoryDto } from './types'
import { ref, readonly } from 'vue'

export const useExpertCategoryStore = defineStore('ExpertCategory', () => {
  const expertCategoryApi = useExpertCategoryApi()
  const expertCategories = ref<ExpertCategoryDto[]>([])

  async function fetchExpertCategories() {
    const res = await expertCategoryApi.getAll()
    if (res.data) {
      expertCategories.value = res.data
      return res.data
    }
  }

  async function fetchExpertCategoriesWithExperts() {
    const res = await expertCategoryApi.getAllWithExperts()
    if (res.data) {
      expertCategories.value = res.data
      return res.data
    }
  }

  return {
    expertCategories: readonly(expertCategories),
    fetchExpertCategories,
    fetchExpertCategoriesWithExperts,
  }
})
