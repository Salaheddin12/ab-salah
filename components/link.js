import { Link } from '@chakra-ui/react'
import NextLink from 'next/link'
const LinkItem = ({ href, _target, rel, children, ...props }) => {
  return (
    <NextLink href={href}>
      <Link target={_target} href={href} rel={rel} {...props}>
        {children}
      </Link>
    </NextLink>
  )
}

export default LinkItem
