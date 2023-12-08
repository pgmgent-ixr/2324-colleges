/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      twe_blue: {
        300: '#6674af',
        500: '#3a4b8b',
      },
      twe_yellow: {
        300: '#f7b500',
        500: '#f5a623',
      },
      twe_green: {
        300: '#00b140',
        500: '#009a3d',
      },
    },
  },
  plugins: [],
}

