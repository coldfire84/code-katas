module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-plugin-eslint-comments/recommended',
    'plugin:eslint-plugin-import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
};
