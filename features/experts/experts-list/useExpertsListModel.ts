export function useExpertsListModel() {
  const goToExpertProfile = (expertCategoryUrl: string, expertId: number) =>
    navigateTo(`/experts/profile/${expertCategoryUrl}/${expertId}`)

  return {
    goToExpertProfile,
  }
}
