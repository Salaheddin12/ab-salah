import React from 'react'
import { Heading, Box, Image, Button } from '@chakra-ui/react'
// import styled from '@emotion/styled'

// const Paragraph = styled.p`
//   color: #333;
//   font-size: 0.75rem;
//   font-family: 'NUNITO';
//   font-size: 1.5rem;
//   line-height: 2.25rem;
//   color: #828282;
//   padding-bottom: 2rem;
// `

const index = ({ order = 0, data }) => {
  const { name, image } = data
  return (
    <Box
      display="flex"
      maxWidth={992}
      borderRadius="24px"
      mx={100}
      bg="#FFFFFF"
      justifyContent="space-between"
      mt="80px"
      filter="drop-shadow(4px 4px 15px #E8ECF4)"
    >
      <Box
        display="flex"
        flexGrow={1}
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
        <Button variant="yellow-outlined">View Project</Button>
      </Box>
      <Image
        src={`/images/${image}`}
        maxWidth="50%"
        alt="Profile image"
        borderRadius="0 24px 24px 0"
      />
    </Box>
  )
}

export default index
