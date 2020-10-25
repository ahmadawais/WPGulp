module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true
	},
	extends: ['eslint:recommended', 'wordpress'],
	parserOptions: {
		sourceType: 'module'
	},
	rules: {
		// Disable weird WP spacing rules.
		// 'space-before-function-paren': 'off',
		// 'space-in-parens': 'off',
		// 'array-bracket-spacing': 'off', // Disable weird WP spacing rules.
		indent: ['error', 'tab'],
		semi: ['error', 'always'],
		quotes: ['error', 'single'],
		'linebreak-style': ['error', 'unix']
	}
};
``;
