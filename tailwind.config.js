/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        other: ['Open Sans', 'sans-serif'],
        title: ['Roboto', 'sans-serif']
      },
      colors: {
        jobprimary: '#FF5F2E',
        jobbg: '#E1EEF6',
        jobhover: '#FCBE32',
        jobtitle: '#004E66',
        jobnull: '#00B0F0'
      }
    }
  },
  variants: {},
  plugins: []
}
