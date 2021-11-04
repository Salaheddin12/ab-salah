import { Box, Image } from '@chakra-ui/react'
import ContactForm from './contactForm'
const Footer = () => {
  return (
    <Box>
      <ContactForm />
      <Image
        src="/images/layered-waves.svg"
        bottom={0}
        left={0}
        right={0}
        position="absolute"
        alt="Profile image"
      />
    </Box>
  )
}

export default Footer
