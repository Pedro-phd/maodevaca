/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@rocketseat/eslint-config/node'],
  rules: [
    "no-useless-constructor" = "off"
  ]
}
