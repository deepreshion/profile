export default {
  extends: ['stylelint-config-standard-vue'],
  ignoreFiles: [
    '.nuxt/**',
    '.output/**',
    'dist/**',
    'node_modules/**'
  ],
  plugins: ['@stylistic/stylelint-plugin'],
  rules: {
    '@stylistic/block-closing-brace-newline-before': 'always',
    '@stylistic/block-opening-brace-newline-after': 'always',
    '@stylistic/declaration-block-semicolon-newline-after': 'always',
    '@stylistic/declaration-block-trailing-semicolon': 'always',
    '@stylistic/indentation': 2,
    '@stylistic/no-missing-end-of-source-newline': true,
    '@stylistic/no-multiple-whitespaces': true,
    '@stylistic/selector-list-comma-newline-after': 'always',
    'at-rule-empty-line-before': null,
    'declaration-block-single-line-max-declarations': 1,
    'property-no-deprecated': null,
    'rule-empty-line-before': null,
    'selector-pseudo-element-colon-notation': null,
    'value-keyword-case': null
  }
}
