/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pastel-yellow': '#FFF9C4',
        'dark-green': '#2E7D32',
      },
    },
  },
  plugins: [],
}