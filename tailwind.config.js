/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.{html,js}'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#181818',
					secondary: '#15562B',
					tertiary: '#1B8900',
					light: '#F7F7F7',
					'base-100': '#ffffff',
				},
			},
			'light',
		],
	},
};
