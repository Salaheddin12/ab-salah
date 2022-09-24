import { Heading, Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Section from '~components/Section'
import LinkItem from '~components/Link'

const HeroImageMobile = styled(Image)`
  max-width: 50%;
  margin: 0 auto;
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
      justifyContent="space-between"
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
      <Box
        visibility={{ base: 'visible', lg: 'hidden' }}
        display="flex"
        width="50%"
      >
        <HeroImageMobile
          src="/images/me-mobile.png"
          alt="Profile image mobile"
          width={265}
          height={292}
        />
      </Box>
    </Section>
  )
}

export default index
