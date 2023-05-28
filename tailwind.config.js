/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontSize:{
        "extra-large":["48px"]
      },
      fontFamily:{
        "poppins":["Poppins"]
      },
      backgroundImage:{
        "background":"url('../images/img/restaurant-image.png')",
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

