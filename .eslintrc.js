module.exports = {
	root: true,
	parserOptions: {
		sourceType: 'script',
	},
	extends: [
		'prettier'
	],
	rules: {
		// Only allow debugger in development
		// Only allow `console.log` in development
		'no-console': 'off',
		'vue/component-name-in-template-casing': [
			'error',
			'PascalCase',
			{
				ignores: [
					'component',
					'template',
					'transition',
					'transition-group',
					'keep-alive',
					'slot',
				],
			},
		],
	}
}
