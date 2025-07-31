import { useTreatmentStore } from '@/entities/treatment/store'

export function useTreatmentsListModel() {
  const treatmentStore = useTreatmentStore()
  const treatmentsAsyncData = useAsyncData('treatments', () => treatmentStore.fetchTreatments())
  return {
    treatmentStore,
    ...treatmentsAsyncData,
  }
}
