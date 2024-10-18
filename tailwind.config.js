/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["playfair Display", "serif"],
      },
      colors: {
        primary: "#ff8901",
        secondary: " #fb923c",
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "2ram",
          lg: "4ram",
          xl: "5ram",
          "2xl": "6ram",
        },
      },
    },
  },
  plugins: [],
};
