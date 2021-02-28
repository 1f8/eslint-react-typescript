# ESlint TYPESCRIPT Setup for 1F8

Helps you with styling your code.
Don't believe there's any correct way, but this way fits our style.

[NPM](https://www.npmjs.com/package/@1f8/eslint-config-typescript)

### Instructions

```
yarn add -D @1f8/eslint-config-typescript
npx install-peerdeps --dev @1f8/eslint-config-typescript
cp node_modules/@1f8/eslint-config-typescript/.eslintignore .eslintignore
cp node_modules/@1f8/eslint-config-typescript/next.eslintrc.js .eslintrc.js
```

You can add these scripts in to lint

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
}
```

You can overwrite rules to fit your needs by changing the eslintfile
```json
{
  "extends": [
    "@1f8/eslint-config-typescript"
  ],
  "rules": {
    "no-console": false,
  }
}
```
