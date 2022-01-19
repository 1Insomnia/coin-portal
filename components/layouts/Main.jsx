import PropTypes from 'prop-types'
// Components
import Header from '../navigation/Header'
import Footer from '../navigation/Footer'

const Main = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}

Main.propTypes = {
  children: PropTypes.node
}

export default Main
