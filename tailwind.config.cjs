/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        yellowDark: '#c47f17',
        yellow: '#dbac2c',
        yellowLight: '#f1e9c9',

        purpleDark: '#4b2995',
        purple: '#8047f8',
        purpleLight: '#ebe5f9',

        baseTitle: '#272221',
        baseSubTitle: '#403937',
        baseText: '#574f4d',
        baseLabel: '#8d8686',
        baseHover: '#d7d5d5',
        baseButton: '#e6e5e5',
        baseInput: '#ededed',
        baseCard: '#f3f2f2',
        background: '#fafafa',
      },
      fontFamily: {
        baloo2: ['"Baloo 2"', 'cursive'],
        roboto: ['"Roboto"', 'sans-serif']
      },
      gridTemplateColumns: {
        row4th: '12.5rem 21.75rem',
        row5th: '12.5rem 17.25rem 3.75rem',
      }
    },
  },
  plugins: [],
}
