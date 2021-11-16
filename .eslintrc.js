module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended',
    'plugin:radar/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier-vue/recommended',
    'airbnb-base',
    'prettier',
  ],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/attributes-order': 'off',
    'vue/no-v-html': 'off',
    'vue/one-component-per-file': 'off',
    'max-len': 'off',
    'import/prefer-default-export': 'off',
    'consistent-return': 'off',
    'no-irregular-whitespace': 'off',
    'no-underscore-dangle': 'off',
    'radar/no-duplicate-string': 'off',
    'nuxt/no-cjs-in-config': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          res: false,
        },
      },
    ],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '~': __dirname,
              '@': __dirname,
            },
          },
        },
      },
    },
  },
};
