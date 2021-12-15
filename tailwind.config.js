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
        "3xl": "2000px",
        'desktop': { 'min': '1660px', 'max': '1920px' },
        'mini-mob': { 'max': '450px' }
      },
      inset: {
        '1600': '38.5%'
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide'),
  require('@tailwindcss/line-clamp'),
  require("tailwindcss-scoped-groups"),
  ],
};
