const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      },
      colors: {
        teal: colors.teal,
        lime: colors.lime,
        orange: colors.orange,
      },
      spacing: {
        100: '30rem'
      },
      
    },
  },
  variants: {
    extend: {
      textDecoration: ['checked']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
