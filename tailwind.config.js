/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./**/*.{js,ts,jsx,tsx,mdx}',
	],
	mode: 'jit',
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '33px',
				sm: '33px',
				lg: '34px',
			},
		},

		extend: {
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1140px',
				// xl: '1140px',
				// '2xl': '1140px',
			},
			maxWidth: {
				'6xl': '1140px',
				'8xl': '1824px',
			},
			fontFamily: {
				mulish: ['var(--mulish)'],
			},
			colors: {
				bgMain: '#131322',
				gray: '#222231',
				lightGray: '#E0E0F0',
				softGray: '#A5A5B8',
				orange: '#FF8411',
				pink: '#FA00FF',
				purple: '#C589ED',
				blue: '#00A2FF',
				darkBlue: '#3721BD',
				underline: '#81818E',
			},
			backgroundImage: {
				contactsTitleMod: 'linear-gradient(180deg, #424254 -16.3%, rgba(66, 66, 84, 0) 98.63%)',
				contactsTitle: 'linear-gradient(180deg, #424254 -16.3%, rgba(66, 66, 84, 0) 78.63%)',
				first: 'linear-gradient(180deg, #171721 32.26%, #12121A 48.67%, #030306 81.33%)',
				'gradient-button': 'linear-gradient(93deg, #ffe8db -108.14%, #fccdb1 90.48%)',
				circle:
					'radial-gradient(50% 50% at 50% 50%, #FFF 0%, #FDF4EC 58.33%, rgba(253, 244, 236, 0.00) 97.4%)',
			},
			boxShadow: {
				btn: '0px 0px 20px 0px #CE8C65',
				underline: 'inset 0px -.5px 0px #81818E',
			},
			aspectRatio: {
				'19/84': '1927 / 848',
				'19/8': '1927 / 860',
				'10/4': '1040 / 467',
				'9/4': '985 / 443',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
