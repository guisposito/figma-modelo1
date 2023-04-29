/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'josefins': ['Josefins Sans', 'sans-serif'],
    },
    extend: {
      colors:{
        'foundation-grey':'#EAEAEA',
        'foundation-grey-200':'#9D9D9D',
        'foundation-grey-400':'#545454',
        'foundation-grey-800':'#171717',  
        'bg-grey-100':'#939498',
        'bg-grey-200':'#7B7E83',
        'ft-grey-100':'#383838',
        'ft-grey-200':'#E6E6E6',
        'b-white-100':'#E9EEEE',
      },
    },
  },
  plugins: [],
}