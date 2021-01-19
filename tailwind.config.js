module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screen:{
      'md' : '768px',
      'lg' : '992px',
      'xl' : '1216px',
      '2xl': '1920px'
    }
  },
  variants: {
    extend: {
      display: ['first'],
      width: ['first'],
      height: ['hover'],
      scale: ['hover']
    }
  },
  plugins: [],
}
