/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          base: '#0F2270',
          royal: '#1A3BB8',
          accent: '#2E5DE6',
          hover: '#6E92F2',
          text: '#0F2270',
          soft: '#F8FAFC',
          border: '#AFD5F8'
        }
      }
    },
  },
  plugins: [],
}
