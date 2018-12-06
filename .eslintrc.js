module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'jest/globals': true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended',
    'airbnb-base',
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    'jest'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/attributes-order': 'off',
    'max-len': 'off',
    'import/prefer-default-export': 'off',
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
          }
        }
      }
    }
  },
};
