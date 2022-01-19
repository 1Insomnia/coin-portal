module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '20px'
    },
    colors: {
      dark: {
        light: '#323546',
        DEFAULT: '#1c1d23',
        dark: '#17171a'
      },
      light: {
        light: '#fff',
        DEFAULT: '#f7f9fc',
        dark: '#f8fafd'
      },
      primary: {
        green: '#16c784',
        red: '#ea3943'
      }
    },
    extend: {
      colors: {}
    }
  },
  plugins: []
}
