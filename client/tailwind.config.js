/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      borderRadius:{
        'custom':'10% 0 10% 0'
      },
      backgroundColor:{
        'app-bg-blue':'#ffffff',
        'app-bg-head':'#450920',
        'footer':'#02c39a'

      },
      colors:{
        'home':'#231942',
        'nav':'#212529',
        'nav-btn':'#0b090a',
      }
    },
  },
  plugins: [],
}

