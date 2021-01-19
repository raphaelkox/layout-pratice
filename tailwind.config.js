module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screen:{
      's0' : '640px',
      's1' : '768px',
      's2' : '992px',
      's3' : '1216px',
      's4': '1920px'
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
