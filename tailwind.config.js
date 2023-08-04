/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "390px",
      },
      colors: {
        lightSand: "#FCF7E6",
      }
    },
  },
  plugins: [],
}

