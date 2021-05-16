import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import SocialSection from './SocialSection'

import { useSiteMetadata } from '../hooks/use-site-metadata'

const Header = styled.header`
  background: ${props => props.theme.colors.primary};
  width: 100%;
  padding: 0.2em 0;
`

const LiWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

const SocialWrapper = styled.span`
  padding: 0 0.5em;
`

const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0.5em 1.5em;
  display: flex;
  justify-content: flex-end;
  ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-of-type {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }

  a {
    width: max-content;
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all 0.2s;
    border-bottom: 2px solid ${props => props.theme.colors.text};
    &:hover {
      color: white;
    }
  }
`

const activeLinkStyle = {
  color: 'white',
}

const Menu = () => {
  const { menuLinks } = useSiteMetadata()
  return (
    <Header>
      <Nav>
        <ul>
          {menuLinks.map(link => (
            <li key={link.name}>
              <LiWrapper>
                {link.name === 'O mnie' && (
                  <SocialWrapper>
                    <SocialSection />
                  </SocialWrapper>
                )}
                <Link to={link.slug} activeStyle={activeLinkStyle}>
                  {link.name}
                </Link>
              </LiWrapper>
            </li>
          ))}
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
