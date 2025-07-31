export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const apiClient = $fetch.create({
    baseURL: config.public.apiUrl,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })

  return {
    provide: {
      api: apiClient,
    },
  }
})
