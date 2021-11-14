import Github from './Github'
import Email from './Email'
import { socialLinks, colors } from '../../lib/data'
import styled from '@emotion/styled'

export const Links = styled.div`
  display: flex;
  padding-top: 1rem;
  justify-content: space-between;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  svg {
    width: 24px;
  }
  a {
    margin: 1rem;
    /* &:first-child,
    &:last-child {
      margin: 0.5rem;
    } */
  }
  @media (max-width: 1000px) {
    position: inherit;
    flex-direction: row;
  }
`

const Index = () => (
  <Links>
    {socialLinks.email && (
      <a
        href={socialLinks.email}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get in touch with me Telegram"
      >
        <Email color={colors.yellow} />
      </a>
    )}
    {socialLinks.github && (
      <a
        href={socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Folow me on GitHub"
      >
        <Github color={colors.yellow} />
      </a>
    )}
  </Links>
)

export default Index
