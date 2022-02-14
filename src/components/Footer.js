import React from 'react'
import styled from '@emotion/styled'
import CookieConsent from 'react-cookie-consent'

import SocialSection from './SocialSection'

const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
`

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.secondary};
  padding: 1em 0 2em;
  margin: 0 1.5em;
`

const Item = styled.li`
  display: inline-block;
  padding: 0.25em 0;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: auto;
  }
  a {
    font-weight: 600;
    transition: all 0.2s;
    color: ${props => props.theme.colors.text};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    &:visited {
      color: ${props => props.theme.colors.text};
    }
  }
`

const Footer = () => (
  <Wrapper>
    <CookieConsent
      location="bottom"
      buttonText="OK"
      cookieName="gatsby-gdpr-google-analytics"
      style={{
        background: 'rgba(93, 96, 96, 0.97)',
        fontWeight: 100,
        fontSize: '1rem',
      }}
      buttonStyle={{
        background: '#e1e1e1',
        fontSize: '0.75rem',
      }}
    >
      Strona wykorzystuje pliki cookies do przechowywania Twoich ustawień oraz
      do zbierania anonimowych danych o ruchy użytkowników na stronie.
      Korzystanie ze strony oznacza zgodę na zapis lub odczyt podstawowych
      plików cookie zgodnie z ustawieniami przeglądarki. Jeśli nie zgadasz się
      na wykorzystywanie cookies, zmień proszę swoje ustawienia przeglądarki.
    </CookieConsent>
    <List>
      <Item>
        <a
          href="https://www.contentful.com/"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <img
            src="https://images.ctfassets.net/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg"
            style={{ width: '100px' }}
            alt="Powered by Contentful"
          />
        </a>
      </Item>
      <SocialSection />
    </List>
  </Wrapper>
)

export default Footer
