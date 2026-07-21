import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  name: 'portfolio/vue-template-style',
  files: ['**/*.vue'],
  rules: {
    'no-mixed-spaces-and-tabs': 'error',
    'vue/attributes-order': ['error', {
      alphabetical: false,
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        ['UNIQUE', 'SLOT'],
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT'
      ]
    }],
    'vue/block-lang': ['error', {
      script: {
        lang: 'ts'
      }
    }],
    'vue/block-order': ['error', {
      order: ['script', 'template', 'style']
    }],
    'vue/block-tag-newline': ['error', {
      singleline: 'always',
      multiline: 'always',
      maxEmptyLines: 0
    }],
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      registeredComponentsOnly: true
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'always'
    }],
    'vue/html-closing-bracket-spacing': ['error', {
      startTag: 'never',
      endTag: 'never',
      selfClosingTag: 'always'
    }],
    'vue/html-indent': ['error', 2, {
      alignAttributesVertically: true,
      baseIndent: 1,
      closeBracket: 0
    }],
    'vue/html-quotes': ['error', 'double'],
    'vue/multiline-html-element-content-newline': ['error', {
      allowEmptyLines: false
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 3
      },
      multiline: {
        max: 1
      }
    }],
    'vue/no-multiple-template-root': 'off',
    'vue/no-template-shadow': 'error',
    'vue/no-unused-vars': 'error',
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/require-v-for-key': 'error',
    'vue/require-default-prop': 'off',
    'vue/require-prop-types': 'off',
    'vue/singleline-html-element-content-newline': ['error', {
      ignoreWhenNoAttributes: false,
      ignoreWhenEmpty: true
    }],
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always',
        normal: 'always',
        component: 'always'
      },
      svg: 'always',
      math: 'always'
    }],
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/v-slot-style': ['error', {
      atComponent: 'shorthand',
      default: 'shorthand',
      named: 'shorthand'
    }]
  }
})
