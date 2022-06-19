import React from 'react'
import { Heading, Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import LinkItem from '~components/link'

const StyledImage = styled(Image)`
  border-radius: 0 24px 24px 0;
`

const index = ({ order = 0, data }) => {
  const { name, image, code_url } = data
  return (
    <Box
      display="flex"
      flexDirection={{ base: 'column', md: 'row' }}
      maxWidth={992}
      borderRadius="24px"
      mx={{ base: 0, md: 100 }}
      bg="#FFFFFF"
      justifyContent="space-between"
      mt="80px"
      filter="drop-shadow(4px 4px 15px #E8ECF4)"
    >
      <Box
        display="flex"
        flexGrow={1}
        padding={{ base: '2rem 1.5rem', lg: 0 }}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        order={order}
      >
        <Heading as="h3" variant="section-subtitle">
          {name}
        </Heading>
        <LinkItem href={code_url} _target="_blank" variant="yellow-outlined">
          View Project
        </LinkItem>
      </Box>
      <StyledImage
        src={`/images/${image}`}
        width={396}
        height={227}
        alt="Profile image"
        loading="lazy"
      />
    </Box>
  )
}

export default index
