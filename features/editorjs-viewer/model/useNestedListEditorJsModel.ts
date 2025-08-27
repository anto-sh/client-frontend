export function useNestedListEditorJsModel(listStyleProp: Ref<string>) {
  const isCheckbox = computed(() => listStyleProp.value === 'checklist')

  const getListClasses = (style: string): string => {
    const baseClasses = 'mt-2 ml-6 space-y-1'
    let classes = ''
    if (style === 'ordered') classes = `${baseClasses} list-decimal list-inside`
    else if (style === 'unordered') classes = `${baseClasses} list-disc list-inside`
    else classes = `${baseClasses} list-inside`
    return classes
  }
  return {
    isCheckbox,
    getListClasses,
  }
}
