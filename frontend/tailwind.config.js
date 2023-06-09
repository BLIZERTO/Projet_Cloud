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
				greylight: "#EEEFF0",
				red: "#E90606"
			},
			background: {},
			fontSize: {
				sm: "14px",
				base: "16px",
				lg: "20px",
				xl: "2.125rem",
				medium: "1.62rem",
				"2xl": "3rem",
			},
			borderRadius: {
				none: "0",
				rounded: "10px",
				roundedbig: "20px",
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
