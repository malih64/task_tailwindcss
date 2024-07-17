/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'vazir': ['Vazirmatn']
      },
      fontSize: {
        'x': '0.4rem',
        's':'0.5rem',
        'xs':'0.6rem',
        'sm': '0.8rem',
        'base': '1rem',
        'xl': '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      
      colors: {
        'primary-color': '#f3f4f6',
        'secondary-color':'#6A6C87',
        'slate':'#3F4264',
        'blue': '#4A6DFF',
        'gray': '#36385380',
        'red': '#FF0000CC',
        'orange':'#FF9900',
      }
    },
    plugins: [],
  }
}
