/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.{html,js}'],
	theme: {
		extend: {},
		screens: {
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			'2xl': '1400px',
		},
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
