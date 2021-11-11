import React from 'react'
import { Heading, Box, Image } from '@chakra-ui/react'
import LinkItem from './link'

const index = ({ order = 0, data }) => {
  const { name, image, code_url } = data
  return (
    <Box
      display="flex"
      flexDirection={{ base: 'column', lg: 'row' }}
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
        {/* <Paragraph variant="section-p">
          I created this personal project in order to show how to create an
          interface in Figma using a portfolio as an example.
        </Paragraph> */}
        <LinkItem
          href={code_url}
          _target="_blank"
          variant="yellow-outlined"
          passHref
        >
          View Project
        </LinkItem>
      </Box>
      <Image
        src={`/images/${image}`}
        maxWidth={{ lg: '50%' }}
        alt="Profile image"
        borderRadius="0 24px 24px 0"
      />
    </Box>
  )
}

export default index
