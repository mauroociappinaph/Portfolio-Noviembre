// tailwind.config.js
const windi = require('windicss')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'rgb(54, 48, 98)',
        secondary: 'rgb(67, 85, 133)',
        tertiary: 'rgb(129, 143, 180)',
        quaternary: 'rgb(245, 232, 199)',
        black: '#000000',
        white: '#ffffff',
      },
      maxWidth: {
        'screen-xl': '1280px',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'), // Plugin de formularios
  ],
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  },
}
