<script setup lang="ts">
import { usePricesTableModel } from './usePricesTableModel'

const { data: pricesData, formatPrice } = usePricesTableModel()
</script>

<template>
  <div class="price-table">
    <!-- Десктоп -->
    <div class="hidden md:block">
      <DataTable :value="pricesData" class="rounded-lg overflow-hidden">
        <Column field="name" header="Услуга" />
        <Column field="price" header="Стоимость" class="text-right">
          <template #body="{ data }">
            <span class="font-semibold text-primary-300 text-lg">
              {{ formatPrice(data.price) }}
            </span>
          </template>
        </Column>
      </DataTable>
    </div>

    <!-- Мобилки -->
    <div class="md:hidden space-y-3">
      <div
        v-for="item in pricesData"
        :key="item.id"
        class="bg-surface-800 rounded-lg p-4 shadow-sm border"
      >
        <div>
          <p class="font-medium">{{ item.name }}</p>
          <Divider />
          <p class="font-bold text-primary-300 text-lg">{{ formatPrice(item.price) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
