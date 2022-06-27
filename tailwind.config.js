/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        arrowsvg: "3px 5px 2px rgb(0 0 0 / 0.4)",
      },
      fontFamily: {
        HinaMincho: ["HinaMincho", "regular"],
      },
      width: {
        "5%": "5%",
        "80%/3": "calc(80% / 3)",
      },
    },
  },
  plugins: [],
};
