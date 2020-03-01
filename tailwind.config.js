/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
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
        'serif'
      ]
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
          900: '#22543d'
        }
      }
    }
  },
  variants: {},
  plugins: []
}
