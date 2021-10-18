module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extends: {
      backgroundImage: {
        'hero-pattern': "url('./components/mountains.jpg')"
      }
    },
    fontFamily: {
      'abril': ['"Abril Fatface"'],
      'cursive': ['"Nothing You Could Do"']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
