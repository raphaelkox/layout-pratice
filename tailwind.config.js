module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screen:{
      'md' : '769px',
      'lg' : '991px',
      'xl' : '1201px'
    }
  },
  variants: {
    extend: {
      display: ['first'],
      width: ['first'],
    }
  },
  plugins: [],
}
