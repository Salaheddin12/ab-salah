import { Box, Image } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box>
      <Image
        src="/images/layered-waves.svg"
        bottom={0}
        left={0}
        right={0}
        width="100%"
        position="absolute"
        zIndex={-1}
        alt="Profile image"
      />
    </Box>
  )
}

export default Footer
