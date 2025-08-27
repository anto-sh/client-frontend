<script setup lang="ts">
import { useExerciseDetailsModel } from './useExerciseDetailsModel'

const { data: exerciseData } = useExerciseDetailsModel()
</script>
<template>
  <div>
    <h2 class="w-full text-4xl font-bold mb-7">{{ exerciseData?.name }}</h2>
    <Divider />
    <EditorJsViewer
      v-if="exerciseData?.contentJson?.blocks.length"
      :data="exerciseData?.contentJson"
    />
    <!-- TODO: вынести в отдельный компонент эту заглушку -->
    <div v-else class="text-center py-12">
      <i class="pi pi-info-circle text-6xl mb-4"></i>
      <p class="text-lg">
        Более подробной информации об этом упражнении пока что не представлено, но она обязательно
        вскоре появится
      </p>
    </div>
  </div>
</template>
