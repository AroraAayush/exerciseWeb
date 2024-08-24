/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '3.5rem',
      '7xl': '4rem',
      '8xl': '4.5rem',
      '9xl': '5rem',
      '10xl': '9rem',
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

