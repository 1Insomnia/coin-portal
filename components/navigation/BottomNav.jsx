import IntervalMenu from './IntervalMenu'
import ThemeToggle from './ThemeToggle'

const BottomNav = () => {
  return (
    <nav className="py-2 bg-dark-dark sticky top-0 left-0">
      <div className="container">
        <div className="flex items-center gap-5">
          <ThemeToggle />
          <IntervalMenu />
        </div>
      </div>
    </nav>
  )
}

export default BottomNav
