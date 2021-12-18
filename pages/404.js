import Image from 'next/image'
import Section from '~components/section'
import { Box, Heading } from '@chakra-ui/react'

export default function Custom404() {
  return (
    <Section
      className="section"
      delay={0.1}
      display="flex"
      flexDirection={'row'}
      mb={{ base: 0 }}
    >
      <Image alt="404 image" src={'/images/404.svg'} width={518} height={518} />
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
        <Heading
          as="h2"
          color={'brandRed'}
          variant="section-title"
          pb="2rem"
          margin={0}
        >
          Whoops!
        </Heading>
        <Heading as="h4" color={'darkgrey'}>
          This page got lost in conversation.
        </Heading>
      </Box>
    </Section>
  )
}
