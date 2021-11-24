import React from 'react'
import { Heading, Box, Button } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Section from '../../section'
import Image from 'next/image'

const Paragraph = styled.p`
  color: #333;
  font-size: 0.75rem;
  font-family: 'NUNITO';
  font-size: 1.5rem;
  line-height: 2.25rem;
  color: #828282;
  padding-bottom: 2rem;
`

const index = () => {
  return (
    <Section
      delay={0.1}
      justifyContent="space-between"
      alignItems="center"
      mt="1.5rem"
      flexDirection={{ base: 'column-reverse', md: 'row' }}
      p={{ base: '1rem', md: '2rem', lg: 0 }}
    >
      <Box flexGrow={1} mt={4} maxWidth="25rem" mr="2.5rem">
        <Heading as="h2" variant="section-title" pb="2rem" margin={0}>
          About me
        </Heading>
        <Paragraph variant="section-p">
          I am a front end developer based in Rabat, Morocco. I studied
          programming for two years then specialized in web development, I use
          React, NextJs and familiar with vuejs.
        </Paragraph>
        <Button variant="base">Resume</Button>
      </Box>
      <Image
        src="/images/me-about.png"
        ml="2.5rem"
        width={529}
        height={523}
        maxWidth="50%"
        alt="Profile image"
      />
    </Section>
  )
}

export default index
