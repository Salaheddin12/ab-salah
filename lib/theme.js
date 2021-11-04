import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#F9FAFF')(props)
    }
  })
}

const components = {
  Button: {
    baseStyle: {
      fontSize: '18',
      fontWeight: 'medium',
      color: 'F9FAFF',
      borderRadius: 8,
      bg: ' #00a19d',
      borderRadius: '8px',
      border: '2px solid #00a19d',
      padding: '8px 24px'
    },
    variants: {
      'yellow-outlined': {
        border: '2px solid',
        borderColor: '#FFB344',
        bg: 'transparent',
        color: '#FFB344',
        borderRadius: 24,
        fontFamily: 'NUNITO'
      },
      'teal-outlined': {
        color: '#00a19d',
        bg: 'transparent',
        borderRadius: 8,
        padding: '8px 24px',
        border: '2px solid #00a19d',
        margin: '0.75rem'
      }
    }
  },
  Heading: {
    variants: {
      'section-subtitle': {
        fontSize: 20,
        fontWeight: 700,
        color: '#333333',
        fontFamily: 'Nunito',
        textTransform: 'uppercase',
        marginTop: 3,
        marginBottom: 4
      },
      'section-title': {
        fontSize: '3rem',
        color: '#333333',
        marginTop: 3,
        fontFamily: 'Monumentextended,sans-serif',
        marginBottom: 4
      }
    },
    body: {
      color: '#333333'
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('black', 'black')(props),
      textUnderlineOffset: 0,
      textDecorationThickness: -1,
      fontFamily: 'Comfortaa'
    })
  }
}

const fonts = {
  heading: 'handlee',
  body: 'Nunito'
}

const colors = {
  grassTeal: '#00A19D',
  darkYellow: '#FFB344'
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme