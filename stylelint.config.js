export default {
  extends: ['stylelint-config-standard', 'stylelint-config-standard-scss'],
  plugins: ['stylelint-scss'],
  rules: {
    'color-no-invalid-hex': true,
    'selector-class-pattern': '^[a-z0-9]+(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)*$',
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind']
      }
    ],
    'scss/dollar-variable-pattern': '^_?[a-z]+[a-z0-9-]*$'
  },
  ignoreFiles: ['**/node_modules/**', '**/dist/**', '**/vendor/**', '**/.nuxt/**']
}