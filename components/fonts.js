import { Global } from '@emotion/react'

const Fonts = () => (
  //       @font-face {
  //   font-family: 'Roboto';
  //   font-style: normal;
  //   font-weight: 400;
  //   font-display: swap;
  //   src: local('Comfortaa'), url(/fonts/Comfortaa/Roboto-Regular.woff) format('woff');
  // }
  <Global
    styles={`
      @font-face {
          font-family: 'Comfortaa';
          src: local('Comfortaa'), url(/fonts/Comfortaa/Comfortaa-Bold.eot?#iefix) format('embedded-opentype'),
              url(/fonts/Comfortaa/Comfortaa-Bold.woff2) format('woff2'),
              url(/fonts/Comfortaa/Comfortaa-Bold.woff) format('woff');
          font-weight: bold;
          font-style: normal;
          font-display: optional;
      }

      @font-face {
          font-family: 'Comfortaa';
          src: url(/fonts/Comfortaa/Comfortaa-Regular.eot?#iefix) format('embedded-opentype'),
              url(/fonts/Comfortaa/Comfortaa-Regular.woff2) format('woff2'),
              url(/fonts/Comfortaa/Comfortaa-Regular.woff) format('woff');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
      }

      @font-face {
          font-family: 'Nunito';
          src: url(/fonts/Nunito/Nunito-Bold.eot?#iefix) format('embedded-opentype'),
              url(/fonts/Nunito/Nunito-Bold.woff2) format('woff2'),
              url(/fonts/Nunito/Nunito-Bold.woff) format('woff');
          font-weight: bold;
          font-style: normal;
          font-display: swap;
      }

      @font-face {
          font-family: 'Nunito';
          src: url(/fonts/Nunito/Nunito-Regular.eot?#iefix) format('embedded-opentype'),
              url(/fonts/Nunito/Nunito-Regular.woff2) format('woff2'),
              url(/fonts/Nunito/Nunito-Regular.woff) format('woff');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
      }

      `}
  />
)

export default Fonts
