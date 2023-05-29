/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontSize:{
        "extra-large":["48px"]
      },
      colors:{
        "primary":["#212121"],
        "secondary":["#F5F5F5"],
        "main":["#A36D3D"]
      },
      fontFamily:{
        "poppins":["Poppins"]
      },
      backgroundImage:{
        "background":"url('../images/img/restaurant-image.png')",
        "background-two":"url('../images/img/bg.png')"
      },
      screens:{
        'small': '640px',
        // => @media (min-width: 640px) { ... }
  
        'medium': '768px',
        // => @media (min-width: 768px) { ... }
  
        'large': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'extra-large': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        'double-extra-large': '1536px',
        // => @media (min-width: 1536px) { ... }
        'tripple-extra-large':'1920px',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

