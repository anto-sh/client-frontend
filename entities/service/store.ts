import { defineStore } from 'pinia'
import { useServiceApi } from './api'
import type { ServiceDto } from './types'
import { ref } from 'vue'

export const useServiceStore = defineStore('Service', () => {
  const serviceApi = useServiceApi()
  const services = ref<ServiceDto[]>([])

  async function fetchServices() {
    const res = await serviceApi.getAll()
    if (res.data) {
      services.value = res.data
      return res.data
    }
  }

  async function fetchServiceById(id: number) {
    const res = await serviceApi.getById(id)
    if (res.data) {
      return res.data
    }
  }

  return {
    services: readonly(services),
    fetchServices,
    fetchServiceById,
  }
})
