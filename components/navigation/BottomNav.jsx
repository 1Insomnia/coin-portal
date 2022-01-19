import IntervalMenu from './IntervalMenu'
import ThemeToggle from './ThemeToggle'

const BottomNav = () => {
  return (
    <nav className="py-2 sticky -top-1 z-50 bg-light-light dark:bg-dark-dark">
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
