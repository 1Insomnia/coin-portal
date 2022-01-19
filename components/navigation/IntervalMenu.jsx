import cn from 'classnames'
// Next
import NextLink from 'next/link'
import { useRouter } from 'next/router'

const Link = ({ href, text }) => {
  const router = useRouter()
  const { asPath } = router

  const active = href === asPath

  return (
    <NextLink href={href}>
      <a
        className={cn(
          active ? 'bg-primary-red text-light' : '',
          'text-xs px-2 py-1 uppercase rounded-sm'
        )}
      >
        {text}
      </a>
    </NextLink>
  )
}

const IntervalMenu = () => {
  return (
    <div className="flex items-center gap-1">
      <Link href="/" text="1d" />
      <Link href="/?interval=7d" text="1w" />
      <Link href="/?interval=30d" text="1m" />
      <Link href="/?interval=365d" text="1y" />
      <Link href="/?interval=ytd" text="ytd" />
    </div>
  )
}

export default IntervalMenu
