/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-gray': '#1A1A1A', // Base background
        'off-white': '#E0E0E0', // Primary text
        'muted-gold': '#B08D57', // Accent
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'], // Set Nunito Sans as default sans-serif
      },
    },
  },
  plugins: [],
}
