const color = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["'Montserrat Alternative'", ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        gray: color.trueGray,
        emerald: color.emerald,
        cyan: color.cyan,
        amber: color.amber
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
