module.exports = {
	plugins: {
		'tailwindcss/nesting': {},
		'postcss-simple-vars': {},
		'postcss-import': {},
		'postcss-mixins': {},
		tailwindcss: {},
		'postcss-preset-env': {
			autoprefixer: { grid: true },
			stage: 0,
			features: {
				clamp: true,
				'logical-properties-and-values': true,
				'media-query-ranges': {
					preserve: true,
				},
				'custom-properties': true,
			},
		},
	},
};
