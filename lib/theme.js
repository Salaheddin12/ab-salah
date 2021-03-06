import { extendTheme } from '@chakra-ui/react'

const styles = {
  global: {
    body: {
      bg: '#F9FAFF'
    }
  }
}

const components = {
  FormLabel: {
    baseStyle: {
      color: '#333'
    }
  },
  TextArea: {
    baseStyle: {
      color: '#333'
    }
  },
  Link: {
    baseStyle: {
      textDecoration: 'none',
      p: 2,
      fontFamily: 'Comfortaa',
      _focus: {
        boxShadow: 'none'
      },
      _hover: {
        textDecoration: 'none'
      }
    },
    variants: {
      navLink: {
        color: '#202023',
        _active: {
          color: '#E05D5D'
        },
        _hover: {
          textDecoration: 'none',
          color: '#E05D5D'
        },
        _focus: {
          boxShadow: 'none'
        }
      },
      'yellow-outlined': {
        border: '2px solid',
        color: '#FFB344',
        borderColor: '#FFB344',
        bg: 'transparent',
        borderRadius: 24,
        fontFamily: 'NUNITO',
        boxShadow: 'none',
        p: 2,
        _hover: {
          textDecoration: 'none',
          color: '#00a19d',
          borderColor: '#00a19d'
        }
      },
      teal: {
        fontSize: '18',
        fontWeight: 'medium',
        color: '#F9FAFF',
        borderRadius: 8,
        bg: ' #00a19d',
        borderRadius: '8px',
        border: '2px solid #00a19d',
        padding: '8px 24px',
        boxShadow: 'none'
      },
      'teal-outlined': {
        color: '#00a19d',
        bg: '#F9FAFF',
        borderRadius: 8,
        padding: '8px 24px',
        border: '2px solid #00a19d',
        margin: '0.75rem'
      }
    }
  },
  Button: {
    baseStyle: {
      fontSize: '18',
      fontWeight: 'medium',
      color: '#F9FAFF',
      borderRadius: 8,
      bg: ' #00a19d',
      borderRadius: '8px',
      border: '2px solid #00a19d',
      padding: '8px 24px',
      boxShadow: 'none',
      _focus: {
        boxShadow: 'none'
      }
    },
    variants: {
      'yellow-outlined': {
        border: '2px solid',
        borderColor: '#FFB344',
        bg: 'transparent',
        color: '#FFB344',
        borderRadius: 24,
        fontFamily: 'Nunito Sans'
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
        textTransform: 'uppercase',
        marginTop: 3,
        marginBottom: 4
      },
      'section-title': {
        fontSize: '3rem',
        color: '#333333',
        marginTop: 3,
        marginBottom: 4
      }
    },
    body: {
      color: '#333333'
    }
  }
}

const fonts = {
  heading: 'Nunito',
  // body: 'Comfortaa'
  body: 'Comfortaa'
}

const colors = {
  grassTeal: '#00A19D',
  darkYellow: '#FFB344',
  brandRed: '#E05D5D'
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
