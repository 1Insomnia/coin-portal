import PropTypes from 'prop-types'
// Chakra
import { Box, Container } from '@chakra-ui/react'
// Components
import Header from '../navigation/Header'
import Footer from '../navigation/Footer'

const Main = ({ children }) => {
  return (
    <Box>
      <Container maxW="container.xl">
        <Header />
        <Box as="main" minH="100vh">
          {children}
        </Box>
        <Footer />
      </Container>
    </Box>
  )
}

Main.propTypes = {
  children: PropTypes.node
}

export default Main
