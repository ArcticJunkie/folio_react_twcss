const colors = require('tailwindcss/colors');
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      colors: {
      },
      backgroundImage: theme => ({
        'pattern': "url('../img/pattern.png')",
        'triangle': "url('../img/triangle.png')",
        'dot': "url('../img/dot.png')",
      }),
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
          '0%': { transform: 'translateY(20px)' },
          '100%': { transform: 'translateX(0px)' },
        }
      },
      animation: {
        'slideleft': 'slideleft 0.5s ease-out',
        'slideup': 'slideup 3s ease-in-out'
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
