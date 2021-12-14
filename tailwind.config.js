module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "3xl": "2000px"
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide'),
  require('@tailwindcss/line-clamp'),
  require("tailwindcss-scoped-groups"),
  ],
};
