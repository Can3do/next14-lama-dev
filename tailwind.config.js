/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				bgColor: '#0d0c22',
				bgColorSoft: '#2d2b42',
				textColor: '#fff',
				textColorSoft: '#e5e5e5',
				btnColor: '#3673fd',
			},
		},
	},
	plugins: [],
};
