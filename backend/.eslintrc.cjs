module.exports = {
  env: {
    node: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: "module", 
  },
  plugins: [
    'import',
  ],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages', 
      {
        js: 'always', 
      },
    ],
    'no-unused-vars': [
      'warn',
      { "varsIgnorePattern": "^_", "argsIgnorePattern": "^_" },
    ],
  },
};
