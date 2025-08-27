export function useEditorJsViewerModel() {
  const getHeaderClasses = (level: number): string => {
    const baseClasses = 'font-bold mb-4 text-gray-900 dark:text-gray-100'
    const levelClasses = {
      1: 'text-4xl',
      2: 'text-3xl',
      3: 'text-2xl',
      4: 'text-xl',
      5: 'text-lg',
      6: 'text-base',
    }
    return `${baseClasses} ${levelClasses[level as keyof typeof levelClasses] || levelClasses[6]}`
  }

  const getListClasses = (style: string): string => {
    const baseClasses = 'mb-4 space-y-1'
    let classes = ''
    if (style === 'ordered') classes = `${baseClasses} list-decimal list-inside`
    else if (style === 'unordered') classes = `${baseClasses} list-disc list-inside`
    else classes = `${baseClasses} list-inside`
    return classes
  }

  const getImageClasses = (data: any): string => {
    const classes = ['relative']

    if (data.withBorder) {
      classes.push('border-2 border-surface-700 rounded-lg overflow-hidden')
    }

    if (data.withBackground) {
      classes.push('bg-surface-900 p-4 rounded-lg')
    }

    if (data.stretched) {
      classes.push('w-full')
    } else {
      classes.push('max-w-4xl mx-auto')
    }

    return classes.join(' ')
  }

  const getTableHeaders = (content: string[][]): string[] => {
    return content[0] || []
  }

  const getTableData = (content: string[][]): Record<string, string>[] => {
    if (content.length <= 1) return []

    return content.slice(1).map((row) => {
      const rowData: Record<string, string> = {}
      row.forEach((cell, index) => {
        rowData[`col${index}`] = cell
      })
      return rowData
    })
  }

  return {
    getHeaderClasses,
    getListClasses,
    getImageClasses,
    getTableHeaders,
    getTableData,
  }
}
