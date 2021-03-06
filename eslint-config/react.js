module.exports = {
  extends: ['plugin:react/recommended'],
  plugins: ['react-hooks'],
  env: {
    browser: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/next-env.d.ts'],
      rules: {
        'react/react-in-jsx-scope': 'off',
      },
    },
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/forbid-foreign-prop-types': [
      'warn',
      {
        allowInPropTypes: true,
      },
    ],
    'react/jsx-no-comment-textnodes': 'warn',
    'react/jsx-no-duplicate-props': 'warn',
    'react/jsx-no-target-blank': 'warn',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': [
      'warn',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/no-danger-with-children': 'warn',
    'react/no-direct-mutation-state': 'warn',
    'react/no-is-mounted': 'warn',
    'react/no-typos': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',
    'react/style-prop-object': 'warn',
    'jsx-quotes': ['error', 'prefer-double'],
  },
};
