import { defineStore } from 'pinia'
import { useTreatmentApi } from './api'
import type { TreatmentDto } from './types'
import { ref } from 'vue'

export const useTreatmentStore = defineStore('Treatment', () => {
  const treatmentApi = useTreatmentApi()
  const treatments = ref<TreatmentDto[]>([])

  async function fetchTreatments() {
    const res = await treatmentApi.getAll()
    if (res.data) {
      treatments.value = res.data
      return res.data
    }
  }

  return {
    treatments: readonly(treatments),
    fetchTreatments,
  }
})
