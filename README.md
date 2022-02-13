# @tisoap/eslint-config-ts-react

> ESLint config for React based typescript projects.

# Installation & Usage

```bash
npm install eslint @tisoap/eslint-config-ts-react --save-dev
```

`.eslintrc` configuration:

```js
module.exports = {
	parserOptions: {
		// Put the path to your tsconfig file here
		project: './tsconfig.json'
	},
	extends: ['@tisoap/eslint-config-ts-react']
}
```

## License

This project is licensed under the [MIT License](./LICENSE).
