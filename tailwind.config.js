/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        "main-red": "#904E55",
        "secondary-red": "#905A60",
        "main-background": "#252627",
        "secondary-background": "#F1F1F1",
        "log-in-button": "#B87A82",
        "sign-up-button": "#4E8098",
        grey: "#D9D9D9",
        "log-in-grey": "#CECECE",
        "sign-up-off-white": "#F1FAEE",
        "sign-up-background": "#1D3557",
        "sign-up-accent": "#4E8098",
      },
      dropShadow: {
        arrowsvg: "3px 5px 2px rgb(0 0 0 / 0.4)",
      },
      fontFamily: {
        HinaMincho: ["HinaMincho", "serif"],
      },
      width: {
        "5%": "5%",
        "80%/3": "calc(80% / 3)",
      },
      keyframes: {
        "color-slide": {
          from: { transform: "translateX(-101%)" },
          to: { transform: "translateX(0%)" },
        },
      },
      animation: {
        "color-slide": "color-slide .3s ease-in 1",
      },
    },
  },
  plugins: [],
};
