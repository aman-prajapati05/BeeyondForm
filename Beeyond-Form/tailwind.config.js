/** @type {import('tailwindcss').Config} */
export default {
  content: ['./pages/**/*.{html,js}',
  ["./src/**/*.{html,js}"],
  './components/**/*.{html,js}',
  "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        cream: "#E7E4E5"
      },
      fontFamily: {
        merri: ["Merriweather", "serif"],
        nunito: ["Nunito", "sans-serif"]
      }
    },
  },
  plugins: [],
}

