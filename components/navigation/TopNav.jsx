import NextLink from 'next/link'

const TopNav = () => {
  return (
    <nav className="py-4 bg-light-2 dark:bg-dark-1">
      <div className="max-w-app px-5 mx-auto">
        <NextLink href="/">
          <a className="font-semibold text-3xl tracking-tight">CoinPortal</a>
        </NextLink>
      </div>
    </nav>
  )
}

export default TopNav
