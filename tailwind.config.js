module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screen:{
      'md' : '766px',
      'lg' : '990px',
      'xl' : '1200px',
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
