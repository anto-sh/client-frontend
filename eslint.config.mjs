import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue,js,jsx}'],
  },
  {
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/.nuxt/**']
  },
  {
    files: ['**/*.ts', '**/*.vue', '**/*.js'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'vue/multi-word-component-names': 'off',
      'vue/html-self-closing': 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    }
  }
)
