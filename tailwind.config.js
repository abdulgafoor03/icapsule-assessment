/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{.js,jsx,.ts,.tsx}"],
  theme: {
    extend: {
      spacing:{
        '1px':'1px',
        '8px':'8px',
        '15px':'15px',
        '1%':'1%',
        '4%':'4%',
        '25%':'25%',
        '90%':'90%',
        '95%':'95%',
        '83.2vh':'83.2vh'
      },
      colors:{
        'black':'#000000',
        'white':'#ffffff',
        'grey':'#273444'
      }
    },
  },
  plugins: [],
  darkMode: 'selector',
}

