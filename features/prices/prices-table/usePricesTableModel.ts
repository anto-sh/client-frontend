import { usePriceStore } from '~/entities/price/store'

export function usePricesTableModel() {
  const { fetchPrices } = usePriceStore()
  const pricesData = useAsyncData(`prices`, () => fetchPrices())
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽'
  }
  return {
    ...pricesData,
    formatPrice,
  }
}
