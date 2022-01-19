import NextLink from 'next/link'

const TopHeader = () => {
  return (
    <nav className="py-4">
      <div className="container">
        <NextLink href="/">
          <a className="font-semibold text-3xl tracking-tight">CoinPortal</a>
        </NextLink>
      </div>
    </nav>
  )
}

export default TopHeader
