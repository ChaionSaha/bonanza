/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.{html,js}'],
	theme: {
		extend: {},
		screens: {
			sm: '576px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '992px',
			// => @media (min-width: 1024px) { ... }

			xl: '1200px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1400px',
			// => @media (min-width: 1536px) { ... }
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
