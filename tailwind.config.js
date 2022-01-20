module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      light: {
        1: '#fff',
        2: '#fafafa'
      },
      dark: {
        1: '#202023',
        2: '#000'
      },
      accents: {
        1: '#fafafa',
        2: '#eaeaea',
        3: '#999',
        4: '#888',
        5: '#666',
        6: '#444',
        7: '#333',
        8: '#111'
      },
      blue: {
        lighter: '#D3E5FF',
        light: '#3291FF',
        DEFAULT: '#0070F3',
        dark: '#0761D1'
      },
      red: {
        lighter: '#F7D4D6',
        light: '#FF1A1A',
        DEFAULT: '#EE0000',
        dark: '#C50000'
      },
      yellow: {
        lighter: '#FFEFCF',
        light: '#F7B955',
        DEFAULT: '#F5A623',
        dark: '#AB570A'
      },
      cyan: {
        lighter: '#AAFFEC',
        light: '#79FFE1',
        DEFAULT: '#50E3C2',
        dark: '#29BC9B'
      },
      violet: {
        lighter: '#E3D7FC',
        light: '#8A63D2',
        DEFAULT: '#7928ca',
        dark: '#4c2889'
      },
      transparent: {
        light: 'rgb(250, 250, 250, 0.5)',
        dark: 'rgb(18, 18, 18, 0.5)'
      }
    },
    extend: {
      height: {
        'screen-3/4': '75vh',
        'screen-2/3': '66.7vh',
        'screen-1/2': '50vh',
        'screen-1/4': '25vh'
      },
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
