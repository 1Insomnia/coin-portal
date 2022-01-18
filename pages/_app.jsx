import 'inter-ui/inter.css'
// Chakra
import theme from '../lib/theme'
import { ChakraProvider } from '@chakra-ui/react'
// Components
import Main from '../components/layouts/Main'

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Main>
        <Component {...pageProps} key={router.route} />
      </Main>
    </ChakraProvider>
  )
}

export default MyApp
