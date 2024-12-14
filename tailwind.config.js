/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './*.js', './src/**/*.{html,js}', './pages/**/*.html'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
