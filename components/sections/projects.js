import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import Project from '../projectCard'
import Section from '../section'
import { projects } from '../../lib/projects.yaml'

const Index = () => {
  return (
    <Section delay={0.1} flexDirection="column" id="projects">
      <Heading
        as="h2"
        variant="section-subtitle"
        textAlign="center"
        fontSize="3rem"
      >
        Projects
      </Heading>
      <Box display="flex" flexDirection="column">
        {projects.map((project, index) => {
          return <Project key={index} data={project} />
        })}
      </Box>
    </Section>
  )
}

export default Index
