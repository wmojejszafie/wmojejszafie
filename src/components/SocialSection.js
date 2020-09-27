import React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: flex-end;
`

const Item = styled.li`
  display: inline-block;
  margin: 0 0.2em;
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

const SocialSection = () => (
  <List>
    <Item>
      <a
        href="https://www.facebook.com/Wmojej-Szafie-104806204683071"
        rel="nofollow noopener noreferrer"
        target="_blank"
      >
        <span style={{ color: '#4267B2' }}>
          <FontAwesomeIcon icon={faFacebookSquare} />
        </span>
      </a>
    </Item>
    <Item>
      <a
        href="mailto: wmojejszafie.pl@gmail.com"
        rel="nofollow noopener noreferrer"
      >
        <span style={{ color: '#B23121' }}>
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
      </a>
    </Item>
  </List>
)

export default SocialSection
