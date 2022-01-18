import NextLink from 'next/link'
// Components
import ThemeToggle from './ThemeToggle'
// Chakra
import { Box, Flex } from '@chakra-ui/react'

const Header = () => {
  return (
    <Box as="header" py={2}>
      <Flex alignItems="center" justifyContent="space-between">
        <NextLink href="/" passHref>
          <a>Coin Portal</a>
        </NextLink>
        <ThemeToggle />
      </Flex>
    </Box>
  )
}

export default Header
