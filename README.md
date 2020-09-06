# ESlint TYPESCRIPT Setup for 1F8

Helps you with styling your code.
Don't believe there's any correct way, but this way fits our style.

[NPM](https://www.npmjs.com/package/eslint-config-1f8typescript)

### Instructions

```
yarn add -D @1f8/eslint-config-typescript
npx install-peerdeps --dev @1f8/eslint-config-typescript
.touch .eslintrc
```

```
# .eslintrc (NextJS with typescript)
module.exports = {
  extends: [
    '@1f8/eslint-config-typescript'
  ]
}
```
