import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  return (
    <NextLink href={href}>
      <Link
        p={2}
        color={active ? '#E05D5D' : '#202023'}
        _target={_target}
        _hover={{
          textDecoration: 'none',
          color: '#E05D5D'
        }}
        _focus={{
          boxShadow: 'none'
        }}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        py={2}
        maxW="container.lg"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <LinkItem href="/" pl={0}>
            Ab.Salah
          </LinkItem>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          mt={{ base: 4, md: 0 }}
          ml={{ base: 'auto' }}
        >
          <LinkItem href="/about" path={path}>
            About
          </LinkItem>
          <LinkItem href="/#projects" path={path}>
            Projects
          </LinkItem>
          <LinkItem href="#contact" path={path}>
            Contact
          </LinkItem>
        </Stack>

        <Box
          flex={1}
          align="right"
          display={{ base: 'inline-block', md: 'none' }}
        >
          <Box ml={2}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
                _hover="none"
                _active="none"
                transition="none"
              />
              <MenuList bg="#F9FAFF" color="#333">
                <NextLink href="/about">
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="#projects">
                  <MenuItem as={Link}>Projects</MenuItem>
                </NextLink>
                <NextLink href="#contact">
                  <MenuItem as={Link}>Contact</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
