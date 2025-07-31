export default {
  content: [
    './app/**/*.{vue,js,ts}',
    './pages/**/*.vue',
    './widgets/**/*.{vue,js,ts}',
    './features/**/*.{vue,js,ts}',
    './entities/**/*.{vue,js,ts}',
    './shared/**/*.{vue,js,ts}',
    './app.vue'
  ],
  theme: {},
  plugins: [
    require('tailwindcss-primeui')
  ]
}
