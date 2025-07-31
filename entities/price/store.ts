import { defineStore } from 'pinia'
import { usePriceApi } from './api'
import type { PriceDto } from './types'
import { ref, readonly } from 'vue'

export const usePriceStore = defineStore('Price', () => {
  const priceApi = usePriceApi()
  const prices = ref<PriceDto[]>([])

  async function fetchPrices() {
    const res = await priceApi.getAll()
    if (res.data) {
      prices.value = res.data
      return res.data
    }
  }

  async function fetchPriceById(id: number) {
    const res = await priceApi.getById(id)
    if (res.data) {
      return res.data
    }
  }

  return {
    prices: readonly(prices),
    fetchPrices,
    fetchPriceById,
  }
})
