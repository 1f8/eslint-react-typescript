module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es6: true,
    commonjs: true,
  },
  extends: [
    'eslint:recommended'                          , // eslint default rules
    'plugin:@typescript-eslint/eslint-recommended', // eslint TypeScript rules (github.com/typescript-eslint/typescript-eslint)
    'plugin:@typescript-eslint/recommended'       ,
    'plugin:react/recommended'                    , // react rules (github.com/yannickcr/eslint-plugin-react)
    "plugin:react-hooks/recommended"              , // enforce https://reactjs.org/docs/hooks-rules.html
    'plugin:jsx-a11y/recommended'                 , // accessibility plugin
  ],
  rules: {
    // JS
    // 'import/no-extraneous-dependencies': ['error', {'devDependencies': true}],
    'no-console': 'error',
    'prefer-destructuring': ['error', {
      'AssignmentExpression': {
        'array': false,
      }
    }],
    
    // .next doesnt require React in import
    'react/react-in-jsx-scope': 'off',
    // use typescript rather than prop-types
    'react/prop-types': 'off',
    // annoying to declare types for each react function component by default
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // no implicit any
    '@typescript-eslint/no-explicit-any': 'off',

    // React Rules
    'jsx-quotes': ['error', 'prefer-single'],
    'react/button-has-type': ['error', { button: true, submit: true, reset: false }],
    'react/destructuring-assignment': ['error', 'always'],
    'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],
    'react/jsx-closing-bracket-location': [1, 'after-props'],
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-first-prop-new-line': ['warn', 'never'],
    'react/jsx-indent': ['error', 2],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
    'react/jsx-one-expression-per-line': 'off',
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-danger': 'error',
    'react/no-deprecated': ['error'],
    'react/no-find-dom-node': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-typos': 'warn',
    'react/no-unused-state': 'warn',
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
    'react/void-dom-elements-no-children': 'warn',
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],
    'react/jsx-pascal-case': ['error', {
      allowAllCaps: true,
      ignore: [],
    }],
    'react/jsx-curly-newline': ['error', {
      multiline: 'consistent',
      singleline: 'consistent',
    }],
    'react/function-component-definition': ['off', {
      namedComponents: 'function-expression',
      unnamedComponents: 'function-expression',
    }],

    // Generally styling
    'comma-dangle': ['error', {
      'arrays': 'only-multiline',
      'objects': 'only-multiline',
    }],
    quotes: [2, 'single', 'avoid-escape'],
    semi: [2, 'never'],
  },
}
