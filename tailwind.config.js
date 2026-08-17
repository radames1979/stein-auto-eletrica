/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0a0a0b',
          900: '#111113',
          800: '#1a1a1d',
          700: '#26262b',
          600: '#3a3a41',
        },
        bone: {
          50: '#faf9f7',
          100: '#f2f0ec',
          200: '#e6e3dc',
        },
        accent: {
          DEFAULT: '#e2231a',
          light: '#f1453a',
          dark: '#a8180f',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
