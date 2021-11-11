import { Link } from '@chakra-ui/react'
import NextLink from 'next/link'
const LinkItem = ({ href, _target, children, ...props }) => {
  return (
    <NextLink href={href} passHref>
      <Link target={_target} {...props}>
        {children}
      </Link>
    </NextLink>
  )
}

export default LinkItem
