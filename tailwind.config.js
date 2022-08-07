/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  // content: [
  //   "./index.html",
  //   "./src/**/*.{vue,js,ts,jsx,tsx}",
  // ],
  theme: {
    extend: {
      colors: {
        'green-primary': "#389246",
        'green-secondary': "#3E563A"
      },
      padding: {
        '16' : '64px',
        '17' : '68px',
        '18' : '72px',
        '19' : '76px',
        '20' : '80px'
      }
    },
  },
  plugins: [],
}