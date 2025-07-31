import { defineStore } from 'pinia'
import { useExpertApi } from './api'
import type { ExpertDto } from './types'
import { ref, readonly } from 'vue'

export const useExpertStore = defineStore('Expert', () => {
  const expertApi = useExpertApi()
  const experts = ref<ExpertDto[]>([])

  async function fetchExperts() {
    const res = await expertApi.getAll()
    if (res.data) {
      experts.value = res.data
      return res.data
    }
  }

  async function fetchExpertById(id: number) {
    const res = await expertApi.getById(id)
    if (res.data) {
      return res.data
    }
  }

  return {
    experts: readonly(experts),
    fetchExperts,
    fetchExpertById,
  }
})
