import React from 'react'
import { Heading, Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Section from '../section'
import LinkItem from './../link'
import Image from 'next/image'

const HeroImageMobile = styled(Image)`
  max-width: 50%;
`

const HeroImage = styled(Image)`
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  max-width: 50%;
`
const Paragraph = styled.p`
  color: #333;
  font-size: 0.75rem;
  font-size: 1.5rem;
  line-height: 2.25rem;
  color: #828282;
  padding-bottom: 2rem;
`

const index = () => {
  return (
    <Section
      delay={0.1}
      flexDirection={{ base: 'column-reverse', md: 'row' }}
      alignItems="center"
    >
      <Box flexGrow={1} mt={4} maxWidth="25rem">
        <Heading as="h4" variant="section-subtitle">
          frontend web developer
        </Heading>
        <Heading as="h2" variant="section-title" pb="2rem" margin={0}>
          Hello, my name is Salah Eddine
        </Heading>
        <Paragraph variant="section-p">
          I am a front end developer based in Rabat, Morocco. I studied
          programming for two years then specialized in web development, I use
          React, NextJs and familiar with vuejs.
        </Paragraph>
        <LinkItem href="#projects" variant="teal">
          Projects
        </LinkItem>
        <LinkItem href="#contact" variant="teal-outlined">
          Reach out
        </LinkItem>
      </Box>
      <Box visibility={{ base: 'visible', lg: 'hidden' }}>
        <HeroImageMobile
          src="/images/me-mobile.png"
          alt="Profile image mobile"
          width={265}
          height={292}
        />
      </Box>
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
          alt="Profile image desktop"
        />
      </Box>
    </Section>
  )
}

export default index
