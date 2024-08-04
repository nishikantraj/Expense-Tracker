/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['jacques-francois-regular'],
      },
      rotate: {
        '12': '12deg',
      },
      colors: {
        'nishi': '#836BA9',
        'viol': '#371D61'
      }
    },
  },
  plugins: [],
}

