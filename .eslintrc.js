module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  extends: [
    '@nuxtjs',
    'plugin:vue/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier-vue/recommended',
    'airbnb-base',
    'prettier',
  ],
  // required to lint *.vue files
  plugins: ['vue', 'jest'],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/attributes-order': 'off',
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    'max-len': 'off',
    'import/prefer-default-export': 'off',
    'consistent-return': 'off',
    'no-irregular-whitespace': 'off',
    'no-underscore-dangle': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/explicit-length-check': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/prefer-module': 'off',
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
