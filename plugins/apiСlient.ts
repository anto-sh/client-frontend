export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const apiClient = $fetch.create({
    baseURL: config.public.apiUrl || '/api',
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
