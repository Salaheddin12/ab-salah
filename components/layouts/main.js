import Head from 'next/head'
import NavBar from '~components/Navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '~components/Footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8} minH={'100vh'}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta name="description" content="Salah's homepage" /> */}
        <meta name="author" content="Ait Balkacm Salah Eddine" />
        <meta name="author" content="Ab-Salah" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@SalahEddine12_" />
        <meta name="twitter:creator" content="@SalahEddine12_" />
        <meta name="twitter:image" content="/card.png" />
        <meta
          property="og:site_name"
          content="Salah eddin Ait belkacem's Homepage"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Salah Eddin Ait Belkacm - Homepage</title>
      </Head>
      <NavBar path={router.asPath} />
      <Container maxW="container.lg" pt={14}>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
