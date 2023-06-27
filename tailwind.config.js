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
					primary: '#4F5955',
					secondary: '#15562B',
					accent: '#1B8900',
					light: '#F7F7F7',
					'base-100': '#ffffff',
				},
			},
			'light',
		],
	},
};
