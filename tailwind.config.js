/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "390px",
        big: "1512px",
      },
      colors: {
        lightSand: "#FCF7E6",
        modalBG: "#1E1E1E",
        backdrop: "rgba(0, 0, 0, 0.2)",
      },
      fontFamily: {
        main: ["Space Grotesk", "sans-serif"],
        footer: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
