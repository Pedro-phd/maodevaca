/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@rocketseat/eslint-config/next'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  overrides: [
    {
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      files: ['./**/*.js'],
    },
  ],
}
