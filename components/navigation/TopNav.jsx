import NextLink from 'next/link'

const TopNav = () => {
  return (
    <nav className="py-4 bg-light-light dark:bg-dark-dark">
      <div className="max-w-app px-5">
        <NextLink href="/">
          <a className="font-semibold text-3xl tracking-tight">CoinPortal</a>
        </NextLink>
      </div>
    </nav>
  )
}

export default TopNav
