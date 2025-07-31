import { defineStore } from 'pinia'
import { useServiceCategoryApi } from './api'
import type { ServiceCategoryDto } from './types'
import { ref } from 'vue'

export const useServiceCategoryStore = defineStore('ServiceCategory', () => {
  const serviceCategoryApi = useServiceCategoryApi()
  const serviceCategories = ref<ServiceCategoryDto[]>([])

  async function fetchServiceCategories() {
    const res = await serviceCategoryApi.getAll()
    if (res.data) {
      serviceCategories.value = res.data
      return res.data
    }
  }

  async function fetchServiceCategoriesWithServices() {
    const res = await serviceCategoryApi.getAllWithServices()
    if (res.data) {
      serviceCategories.value = res.data
      return res.data
    }
  }

  return {
    serviceCategories: readonly(serviceCategories),
    fetchServiceCategories,
    fetchServiceCategoriesWithServices,
  }
})
