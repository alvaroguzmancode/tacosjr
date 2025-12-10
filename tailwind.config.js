/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand identity
        brandWhite: "#FFFFFF",
        brandBlack: "#0C0C0C",
        brandGray: "#3E3D40",

        // Fire palette
        fireRed: "#E33E2B",
        fireOrange: "#F39A2E",
        fireYellow: "#F4A625",

        // Natural accent
        brandGreen: "#4C6A3E",
      },
    },
  },
  plugins: [],
};
