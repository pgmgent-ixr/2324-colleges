/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      openSans: ['Open Sans Variable', 'sans-serif'],
      raleway: ['Raleway Variable', 'sans-serif'],
      body: ['Open Sans Variable', 'sans-serif'],
      heading: ['Raleway Variable', 'sans-serif'],
      sans: ['Open Sans Variable', 'sans-serif'],
      serif: ['Raleway Variable', 'sans-serif'],
    },
    colors: {
      twe_blue: {
        300: '#6674af',
        500: '#3a4b8b',
      },
      twe_yellow: {
        300: '#f7b500',
        500: '#f5a623',
      },
      twe_red: {
        300: '#f05d5e',
        500: '#e84c4e',
      },
      twe_green: {
        300: '#00b140',
        500: '#009a3d',
      },
    },
  },
  plugins: [],
}

