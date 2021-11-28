import React from 'react'
import styled from '@emotion/styled'
import mainHeroBaner from '../images/mainHeroBar.jpg'

const Wrapper = styled.section`
  position: relative;
  min-height: 300px;
  height: auto;
  @media (min-width: ${props => props.theme.responsive.small}) {
    height: ${props => props.height || 'auto'};
  }
  margin: 0 auto;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
`

const Title = styled.h1`
  z-index: 2;
  font-size: 1em;
  top: 40%;
  @media (min-width: ${props => props.theme.responsive.small}) {
    font-size: 2em;
    top: 50%;
  }
  font-weight: 200;
  position: absolute;
  width: 50%;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  padding: 0 1rem;
  left: 30%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-style: italic;
`

const Image = styled.img`
  position: absolute;
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  @media (min-width: ${props => props.theme.responsive.small}) {
  }
`

const MainHero = props => (
  <Wrapper>
    <Image src={mainHeroBaner} />
    <Title>
      <p>{`W mojej szafie `}</p>
      <p>{`- w poszukiwaniu własnej drogi`}</p>
    </Title>
    <Title></Title>
  </Wrapper>
)

export default MainHero
