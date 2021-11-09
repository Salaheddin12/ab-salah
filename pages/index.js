import React from 'react'
import ContactForm from '../components/sections/contactForm'
import Intro from '../components/sections/intro'
import Projects from '../components/sections/projects'

const Index = () => {
  return (
    <React.Fragment>
      <Intro />
      <Projects />
      <ContactForm />
    </React.Fragment>
  )
}

export default Index
