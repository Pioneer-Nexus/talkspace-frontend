/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-1': 'rgba(17, 25, 40, 0.75)',
      },
      backdropSaturate: {
        'custom-1': '180%'
      },
      borderColor: {
        'custom-1': 'rgba(255, 255, 255, 0.125)',
        info: '#1758c7',
        success: '#006d3d',
        warning: '#7c5800',
        error: '#ba1a1a',
      },
      color: {
        info: '#1758c7',
        success: '#006d3d',
        warning: '#7c5800',
        error: '#ba1a1a',
      }
    },
  },
  darkMode: ['selector'],
  plugins: [],
}

