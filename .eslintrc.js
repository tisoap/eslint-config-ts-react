module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			impliedStrict: true,
			jsx: true
		}
	},
	settings: {
		react: {
			version: 'detect'
		},
		'import/resolver': {
			node: {
				paths: ['.']
			}
		}
	},
	env: {
		browser: true,
		node: true,
		jest: true
	},
	plugins: [
		'@typescript-eslint',
		'react',
		'react-hooks',
		'jsx-a11y',
		'prettier',
		'import',
		'jest-dom',
		'testing-library',
		'sonarjs',
		'react-prefer-function-component'
	],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:prettier/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:jest-dom/recommended',
		'plugin:testing-library/react',
		'plugin:sonarjs/recommended',
		'plugin:react-prefer-function-component/recommended'
	],
	rules: {
		// Disable
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/unbound-method': 'off',
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		// Enable
		'@typescript-eslint/consistent-type-imports': 'error',
		'@typescript-eslint/no-explicit-any': 'error',
		'prettier/prettier': [
			'error',
			{
				semi: false,
				useTabs: true,
				printWidth: 80,
				singleQuote: true,
				trailingComma: 'none',
				jsxSingleQuote: true
			}
		],
		// Sort imports
		'import/order': [
			'error',
			{
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
					'type',
					'object',
					'unknown'
				],
				'newlines-between': 'never',
				alphabetize: {
					order: 'asc',
					caseInsensitive: false
				}
			}
		]
	}
}
