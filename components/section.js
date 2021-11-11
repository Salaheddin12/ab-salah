import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const Section = ({
  children,
  delay = 0,
  flexDirection = 'row',
  ...otherProps
}) => (
  <StyledDiv
    {...otherProps}
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    mb="9rem"
    display={'flex'}
    flexDirection={flexDirection}
  >
    {children}
  </StyledDiv>
)

export default Section
