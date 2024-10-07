
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'custom-dark-header': '#2f57a4',
        'custom-dark-background': '#A3C1D9',
      },
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'], 
      },
    },
  },
  plugins: [
    
  ],
}

