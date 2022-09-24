import React from 'react'
import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import ContactForm from '~components/sections/Contact'
import Intro from '~/Intro'
import Projects from '~components/sections/Projects'

const HeroImage = styled(Image)`
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  max-width: 50%;
`

const Index = () => {
  return (
    <React.Fragment>
      <Box
        position="absolute"
        top={0}
        right={0}
        maxWidth="50%"
        visibility={{ base: 'hidden', lg: 'visible' }}
      >
        <HeroImage
          src="/images/me.png"
          width={720}
          height={629}
          loading="lazy"
          alt="Profile image desktop"
        />
      </Box>
      <Intro />
      <Projects />
      <ContactForm />
    </React.Fragment>
  )
}

export default Index
