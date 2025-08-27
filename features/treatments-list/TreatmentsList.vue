<script setup lang="ts">
import { useTreatmentsListModel } from './useTreatmentsListModel'
const { data: treatmentsData } = useTreatmentsListModel()
</script>

<template>
  <section>
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          v-for="item in treatmentsData"
          :key="item.id"
          class="transition-shadow duration-300 hover:shadow-lg text-center bg-surface-900"
        >
          <template #title>
            <div class="flex items-center space-x-3">
              <span class="text-xl font-semibold">{{ item.name }}</span>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<style></style>
