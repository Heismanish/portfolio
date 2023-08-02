/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			gridTemplateColumns: {
				// Complex site-specific row configuration
				"hero-layout": "80px repeat(2, 1fr ) ",
				"project-layout": "repeat(3, 1fr ) ",
			},
			gridTemplateRows: {
				"hero-layout-mobile-row": " 1fr minmax(0,1fr) 1rem ",
				"project-row": "1fr 1fr",
			},

			backgroundImage: {
				"home-pfp": "url('./src/assets/profile-pic.png')",
			},
			boxShadow: {
				pfp: "inset 0 0 0 9px rgb(255, 255,255, 0.3)",
				pfpDark: "inset 0 0 0 9px rgb(55, 55,55, 0.3)",
			},
			animation: {
				profile__animate: "profile__animate 8s ease-in-out infinite 0.1s",
			},
			keyframes: {
				profile__animate: {
					"0%": {
						"border-radius": "60% 40% 30% 70% / 60% 30% 70% 40%",
					},
					"50%": {
						"border-radius": "30% 60% 70% 40% / 50% 60% 30% 60%",
					},
					"100%": {
						"border-radius": "60% 40% 30% 70% / 60% 30% 70% 40%",
					},
				},
			},
		},
	},
	plugins: [],
};
