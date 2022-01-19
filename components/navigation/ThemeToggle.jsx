import useIsMounted from '../../hooks/useIsMounted'
// React Icons
import { FiSun, FiMoon } from 'react-icons/fi'
// Next
import { useTheme } from 'next-themes'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const { isMounted } = useIsMounted()

  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button onClick={handleClick} aria-label="Toggle Dark Mode" type="button">
      {isMounted && theme === 'dark' ? <FiSun /> : <FiMoon />}
    </button>
  )
}

export default ThemeToggle
