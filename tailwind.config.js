/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tacoYellow: "#F4A625",
        tacoRed: "#D64045",
        fireRed: "#E33E2B",
        fireOrange: "#F39A2E",
        tacoBlack: "#0C0C0C",
        tacoGray: "#3E3D40",
        tacoGreen: "#4C6A3E",
      },
    },
  },
  plugins: [],
};
