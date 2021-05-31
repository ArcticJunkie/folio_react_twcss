const colors = require('tailwindcss/colors');
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      colors: {
      },
      spacing: {
        '128': '32rem',
        '160': '40rem'
      },
      transitionProperty: {
        'height': 'height'
      },
      fontFamily: {
        poppins: ['Poppins'],
        dmono: ['DM Mono']
      },
      keyframes: {
        slideleft: {
          '0%': { transform: 'translateX(40px)' },
          '100%': { transform: 'translateX(0px)' },
        },
        slideup: {
          '0%': { transform: 'translateY(-45px)' },
          '100%': { transform: 'translateX(0px)' },
        }
      },
      animation: {
        'slideleft': 'slideleft 1s ease-in-out',
        'slideup': 'slideup 1s ease-in-out'
      },
    },
  },
  variants: {
    extend: {
      height: ['group-hover'],
    },
  },
  plugins: [],
}
