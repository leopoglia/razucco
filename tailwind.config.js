/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue": '#44A2FF',
        "blue-black": '#44A2F0',
        "gray-900": '#30363D',
        "gray-950": '#0D1117',
        "black": '#010409'
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

