module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/recommended',
    '@vue/standard',
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'generator-star-spacing': 'off',
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'vue/no-v-html': 0,
    'vue/html-closing-bracket-newline': ['error', { multiline: 'never' }],
    "vue/max-attributes-per-line": ["error", {
      "singleline": 1,
      "multiline": {
        "max": 1,
        "allowFirstLine": true
      }
    }]
  },

  parserOptions: {
    parser: 'babel-eslint',
  },
}
