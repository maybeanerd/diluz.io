module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    '@nuxtjs',
    'eslint:recommended',
    'plugin:vue/recommended',
    'prettier',
    'airbnb-base',
  ],
  rules: {
    'import/no-unresolved': 'error', //maybe we do not need this
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', 'always', {
      ignorePackages: true,
      pattern: {
        "ts": "never"
      }
    }],
    "vue/multi-word-component-names": ["error", {
      "ignores": ['error'] // error page needs to be named that way
    }],
    'no-shadow': 'off', // let TS version handle this
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-extra-semi': 0,
    semi: 2,
    indent: ['warn', 2],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: false,
        avoidEscape: true,
      },
    ],
    camelcase: 0,
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/attribute-hyphenation': 0,
    'no-plusplus': 0,
    'class-methods-use-this': 0, // Nuxt sometimes needs functions without this , to use them in our html part
    "no-useless-constructor": "off", // TS has some issues with this, so we use their check
    "@typescript-eslint/no-useless-constructor": "error",
  },
  globals: {
    $nuxt: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      // use <root>/tsconfig.json
      node: {},
      typescript: {},
    },
  },
};
