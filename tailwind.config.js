module.exports = {
  theme: {
    fontFamily: {
      serif: ['Comfortaa', 'Source Sans Pro', 'Open Sans', 'Helvetica Neue'],
      sans: [
        'Montserrat',
        'Georgia',
        'Cambria',
        'Times New Roman',
        'Times',
        'serif',
      ],
    },
    opacity: {
      0: '0',
      10: '.1',
      20: '.2',
      25: '.25',
      30: '.3',
      40: '.4',
      50: '.5',
      60: '.6',
      70: '.7',
      75: '.75',
      80: '.8',
      90: '.9',
      98: '.98',
      100: '1',
    },
    extend: {
      colors: {
        green: {
          100: '#f0fff4',
          200: '#c6f6d5',
          300: '#9ae6b4',
          400: '#74B757' /** Change this color */,
          500: '#48bb78',
          600: '#38a169',
          700: '#2f855a',
          800: '#276749',
          900: '#22543d',
        },
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'active', 'hover', 'focus'],
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
