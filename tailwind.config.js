/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#c82617",
          200: "#A41F13",
          300: "#56100a",
        },
        secondary: {
          50: "#c9cfd6",
          100: "#454f5b",
          200: "#292F36",
          300: "#0e1012",
        },
      },
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  plugins: [],
};
