module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '20px',
      maxWidth: '1400px'
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
      },
      table: {
        divider: {
          dark: 'rgb(34,37,49)',
          light: '##eff2f5'
        }
      }
    },
    extend: {
      maxWidth: {
        app: '1400px'
      },
      backgroundColor: {
        'pattern-light':
          'linear-gradient(rgb(248, 250, 253) 0%, rgba(248, 250, 253, 0) 413px)',
        'pattern-dark':
          'linear-gradient(rgb(34, 37, 49) 0%, rgba(34, 37, 49, 0) 413px)'
      }
    }
  },
  plugins: []
}
