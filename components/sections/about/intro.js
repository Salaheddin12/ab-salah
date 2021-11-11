import React from 'react'
import { Heading, Box, Image, Button } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Section from '../../section'

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
    >
      <Box flexGrow={1} mt={4} maxWidth="25rem" mr="2.5rem">
        <Heading as="h2" variant="section-title" pb="2rem" margin={0}>
          About me
        </Heading>
        <Paragraph variant="section-p">
          Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor
          neque auctor dis ipsum. Pretium cras amet odio amet eleifend id sed
          cras sed. Aliquet risus posuere aliquet imperdiet sit.
        </Paragraph>
        <Button variant="base">Resume</Button>
      </Box>
      <Image
        src="/images/me-about.png"
        ml="2.5rem"
        maxWidth="50%"
        alt="Profile image"
      />
    </Section>
  )
}

export default index