/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ["./src//*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				mts: ["Montserrat"],
			},
			screens: {
				sm: "480px",
				md: "768px",
				lg: "976px",
				xl: "1440px",
			},
			colors: {
				uranianblue: "#A7CCED",
				airsupblue: "#82A0BC",
				yinblue: "#304D6D",
				white: "#FFFFFF",
				black: "#000000",
				transparent: "transparent",
				grey: "#494949",
			},
			background: {},
			fontSize: {
				sm: "0.75rem",
				base: "1rem",
				lg: "1.25rem",
				xl: "2.125rem",
				"2xl": "3rem",
			},
			borderRadius: {
				none: "0",
				rounded: "20px",
			},
			extend: {
				spacing: {
					1: "4px",
					2: "8px",
					3: "12px",
					4: "24px",
					5: "32px",
					6: "64px",
				},
			},
		},
	},
	plugins: [],
};
