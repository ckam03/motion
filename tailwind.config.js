const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Rubik', 'sans-serif'],
      },
      colors: {
        teal: colors.teal,
        lime: colors.lime,
        orange: colors.orange,
      },
      spacing: {
        100: '30rem'
      },
      backgroundImage: theme => ({
        'plus': "url('/backgrounds/plus.svg')"
      })
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
