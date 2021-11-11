import React from 'react'
import { Heading, Box, Image, Button } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Section from '../section'

const Paragraph = styled.p`
  color: #333;
  font-size: 0.75rem;
  font-family: 'NUNITO';
  font-size: 1.5rem;
  line-height: 2.25rem;
  color: #828282;
  padding-bottom: 2rem;
`
// const ButtonTeal = styled.button`
//   background-color: #00a19d;
//   color: #f9faff;
//   border-radius: 8px;
//   padding: 8px 24px;
//   border: 2px solid #00a19d;
//   margin-right: 0.75rem;
// `
const index = () => {
  return (
    <Section
      delay={0.1}
      flexDirection={{ base: 'column-reverse', md: 'row' }}
      alignItems="center"
      p={{ base: '1rem', md: '2rem', lg: 0 }}
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
        <Button variant="base">Projects</Button>
        <Button variant="teal-outlined">Reach out</Button>
      </Box>
      <Image
        src="/images/me.png"
        position="absolute"
        visibility={{ base: 'hidden', lg: 'visible' }}
        zIndex={-1}
        top={0}
        right={0}
        maxWidth="50%"
        alt="Profile image"
      />
      <Image
        src="/images/me-mobile.png"
        visibility={{ base: 'visible', lg: 'hidden' }}
        maxWidth="50%"
        alt="Profile image"
      />
    </Section>
  )
}

export default index
