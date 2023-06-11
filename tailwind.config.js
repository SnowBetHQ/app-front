/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        custom: ['PP-Neue-Machina', 'Kiwari-Mono', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: {

      },
    },
  },
  plugins: [],
}
