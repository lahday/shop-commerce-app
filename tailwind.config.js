/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-primary': "#389246",
        'green-secondary': "#3E563A"
      },
      padding: {
        '16' : '64px',
        '17' : '68',
        '18' : '72',
        '19' : '76',
        '20' : '80px'
      }
    },
  },
  plugins: [],
}