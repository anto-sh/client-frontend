import { menuItems } from '~/shared/config/menu_items'

export function usePageTitleModel() {
  const route = useRoute()
  const pageTitle = ref<string | undefined>()
  pageTitle.value = menuItems.find((mi) => route.fullPath === mi.url)?.pageTitle

  watch(
    () => route.fullPath,
    (newPath) => {
      console.log('ROUTE CHANGED: ', newPath)
      pageTitle.value = menuItems.find((mi) => newPath === mi.url)?.pageTitle
    },
  )

  return { pageTitle }
}
