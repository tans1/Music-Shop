/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xsm: "100px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      backgroundImage: {
        "music-background": "url('./assets/music background.png')"
      }
    }
  },
  plugins: []
};
