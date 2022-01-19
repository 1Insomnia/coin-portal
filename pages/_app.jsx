// Styles
import '../styles/globals.css'
import 'inter-ui/inter.css'
// Next
import { ThemeProvider } from 'next-themes'

// Components
import Main from '../components/layouts/Main'

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <ThemeProvider attribute="class">
      <Main>
        <Component {...pageProps} key={router.route} />
      </Main>
    </ThemeProvider>
  )
}

export default MyApp
