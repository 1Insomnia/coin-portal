// Chakra
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode } from '@chakra-ui/react'

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      onClick={toggleColorMode}
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    ></IconButton>
  )
}

export default ThemeToggle
