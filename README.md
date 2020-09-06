# ESlint TYPESCRIPT Setup for 1F8

Helps you with styling your code.
Don't believe there's any correct way, but this way fits our style.

[NPM](https://www.npmjs.com/package/eslint-config-1f8typescript)

### Instructions

```
yarn add -D eslint-config-1f8typescript
npx install-peerdeps --dev eslint-config-1f8typescript
.touch .eslintrc
```

```
# .eslintrc (NextJS with typescript)
module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    '1f8typescript'
  ]
}
```
