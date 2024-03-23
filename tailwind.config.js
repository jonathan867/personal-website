/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        purple0: "#eeebf5",
        purple1: "#e8e1f7",
        purple5: "#350199",
        purple6: "#21015C",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "sun-background": "url('/src/assets/forest_background.png')",
        "forest1": "url('/src/assets/forest1.png')",
        "forest2": "url('/src/assets/forest2.png')",
        "forest3": "url('/src/assets/forest3.png')",
        "forest4": "url('/src/assets/forest4.png')",
        "forest5": "url('/src/assets/forest5.png')",
      },
    },
  },
  plugins: [],
};

