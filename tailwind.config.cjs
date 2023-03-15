/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'windows': {
          'background': '#008080',
          'gray-light': '#c3c3c3',
          'gray-dark': '#818181',
          'blue': '#010081',
        }
      },
    }
  },
  plugins: [],
}
