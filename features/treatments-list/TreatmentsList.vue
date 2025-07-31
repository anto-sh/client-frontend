<script setup lang="ts">
import { useTreatmentsListModel } from './useTreatmentsListModel'
const { data: treatmentsData, pending, error } = useTreatmentsListModel()
</script>
<template>
  <div v-if="pending">ЗАГРУЗКА</div>
  <div v-else-if="error">ОШИБКА</div>
  <div v-else>
    <ul>
      <li v-for="item in treatmentsData" :key="item.id">
        {{ item.name }}
      </li>
      <Button label="Profile" icon="pi pi-user" severity="info" raised rounded size="large" class="p-4"></Button>
    </ul>
  </div>
</template>
