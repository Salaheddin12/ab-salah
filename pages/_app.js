import { ChakraProvider } from '@chakra-ui/react'
import Layout from '~components/layouts/main'
import Fonts from '~components/Fonts'
import theme from '../lib/theme'

function Website({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default Website
