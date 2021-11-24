// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="../public/fonts/Comfortaa/Comfortaa-Regular.woff"
            rel="preload"
          />
          <link
            href="../public/fonts/Nunito/Nunito-Regular.woff"
            rel="preload"
          />
          <link href="../public/fonts/Nunito/Nunito-bold.woff" rel="preload" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
