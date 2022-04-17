# @tisoap/eslint-config-ts-react

> ESLint config for React based TypeScript projects.

## Rules

This config assumes that your project uses:

- A recent version of React with Hooks
- A recent version of Typescript
- [Jest](https://jestjs.io/) as your test runner
- [Testing Library](https://testing-library.com/) as your test utils
- [Absolute imports with `baseUrl`](https://stackoverflow.com/questions/43281741/how-to-use-paths-in-tsconfig-json)

For the full list of rules, check the [`.eslintrc.js` file](./.eslintrc.js) in this repo.

## Installation & Usage

With NPM:

```bash
npm install --save-dev eslint typescript @tisoap/eslint-config-ts-react @shopify/eslint-plugin @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import eslint-plugin-jest-dom eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-prefer-function-component eslint-plugin-sonarjs eslint-plugin-testing-library eslint-plugin-unicorn
```

With Yarn:

```bash
yarn add -D eslint typescript @tisoap/eslint-config-ts-react @shopify/eslint-plugin @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import eslint-plugin-jest-dom eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-prefer-function-component eslint-plugin-sonarjs eslint-plugin-testing-library eslint-plugin-unicorn
```

`.eslintrc` configuration:

```js
module.exports = {
	parserOptions: {
		// Replace with the path to your project's tsconfig file
		project: './tsconfig.json'
	},
	extends: ['@tisoap/eslint-config-ts-react']
}
```

### Usage With Prettier

You can skip this section if you don't plan on using [Prettier](https://prettier.io/) on your project.

Install the plugin and config:

With NPM:

```bash
npm install prettier eslint-plugin-prettier eslint-config-prettier --save-dev
```

With Yarn:

```bash
yarn add -D prettier eslint-plugin-prettier eslint-config-prettier
```

Update your `.eslintrc` configuration:

```js
module.exports = {
	parserOptions: {
		project: ['./tsconfig.json']
	},
	plugins: ['prettier'],
	extends: ['@tisoap/eslint-config-ts-react', 'plugin:prettier/recommended'],
	rules: {
		'prettier/prettier': ['error', {}, { usePrettierrc: true }]
	}
}
```

Add a [`.prettierrc` file](https://prettier.io/docs/en/configuration.html) with your configurations.

## License

This project is licensed under the [MIT License](./LICENSE).

### Support

Liked this project and want to show your support? Buy me a coffee:

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/J3J472RAJ)
