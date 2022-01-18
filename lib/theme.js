import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    'html,body': {
      bg: mode('light-grey', 'purple')(props)
    }
  })
}

// const components = {
//   Heading: {
//     variants: {
//       'section-title': {
//         textDecoration: 'underline',
//         fontSize: 20,
//         textUnderlineOffset: 6,
//         textDecorationColor: '#525252',
//         textDecorationThickness: 4,
//         marginTop: 3,
//         marginBottom: 4
//       }
//     }
//   },
//   Link: {
//     baseStyle: props => ({
//       color: mode('#3d7aed', '#ff63c3')(props),
//       textUnderlineOffset: 3
//     })
//   }
// }

const fonts = {
  heading: "'Inter'",
  body: "'Inter'"
}

const colors = {
  grassTeal: '#88ccca',
  purple: '#19191d',
  'purple-light': '#323546',
  'purple-dark': '#17171a',
  'light-grey': '#fdfefe',
  'up-color': '#16c784',
  'down-color': '#ea3943'
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, fonts, colors })
export default theme
