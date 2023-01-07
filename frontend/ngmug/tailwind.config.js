/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './apps/**/*.{html,ts}',
    './libs/**/*.{html,ts}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2F3E46',
          50: '#829DAB',
          100: '#7693A3',
          200: '#607F8F',
          300: '#506977',
          400: '#3F545E',
          500: '#2F3E46',
          600: '#182024',
          700: '#020303',
          800: '#000000',
          900: '#000000',
        },
        accent: {
          DEFAULT: '#354F52',
          50: '#8BB0B4',
          100: '#7EA7AC',
          200: '#66969C',
          300: '#557F84',
          400: '#45676B',
          500: '#354F52',
          600: '#1F2E30',
          700: '#090D0E',
          800: '#000000',
          900: '#000000',
        },
        highlight: {
          DEFAULT: '#52796F',
          50: '#B5CDC7',
          100: '#A9C5BE',
          200: '#91B4AB',
          300: '#79A499',
          400: '#629185',
          500: '#52796F',
          600: '#3B5850',
          700: '#253632',
          800: '#0E1513',
          900: '#000000',
        },
        background: {
          DEFAULT: '#CAD2C5',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#F4F6F3',
          400: '#DFE4DC',
          500: '#CAD2C5',
          600: '#ADB9A5',
          700: '#90A186',
          800: '#748668',
          900: '#596750',
        },
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('@tailwindcss/forms'),
    function ({ addVariant }) {
      addVariant('active', '&.active');
      addVariant('selected', '&.selected');
      addVariant('linkactive', '&.link-active');
    },
  ],
};
