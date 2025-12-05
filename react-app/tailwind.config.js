/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#A42125',
          50: '#F9E8E9',
          100: '#F2D1D2',
          200: '#E5A3A6',
          300: '#D87579',
          400: '#CB474D',
          500: '#A42125',
          600: '#831A1E',
          700: '#621316',
          800: '#420D0F',
          900: '#210607',
        },
        dark: {
          DEFAULT: '#1E1D1D',
          100: '#100F0F',
          900: '#000000',
        },
        gray: {
          light: '#EBE3D9',
          DEFAULT: '#D7D3CB',
          dark: '#E2D8CB',
        },
      },
      fontFamily: {
        heading: ['"Roboto Condensed"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Cormorant"', 'serif'],
        special: ['"Quicksand"', 'sans-serif'],
        decorative: ['"Alex Brush"', 'cursive'],
      },
    },
  },
  plugins: [],
}
