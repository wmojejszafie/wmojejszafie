import React from 'react'
import styled from '@emotion/styled'
import mainHeroBaner from '../images/mainHeroBarSmallTitle.jpg'

const Wrapper = styled.section`
  position: relative;
  min-height: 300px;
  height: auto;
  @media (min-width: ${props => props.theme.responsive.small}) {
    height: ${props => props.height || 'auto'};
  }
`

const Title = styled.h1`
  align-self: center;
  font-size: 3em;
  font-weight: 600;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 0 1rem;
  top: 50%;
  left: 50%;
  text-align: center;
  color: black;
  font-style: italic;
`

const SubTitleSpan = styled.span`
  align-self: center;
  justify-content: center;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin-top: 20px;
`

const SubTitle = styled.h2`
  align-self: flex-end;
  font-size: 2em;
  font-weight: 600;
  font-style: italic;
`

const Image = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  &::before {
    content: '';
    background: rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`

const MainHero = props => (
  <Wrapper>
    {/* <Title>
      W mojej szafie - blog o życiu, emocjach, kobiecości i własnej drodze.
    </Title>
    <SubTitleSpan>
      <SubTitle>jak pokochać siebie</SubTitle>
    </SubTitleSpan> */}
    <Image src={mainHeroBaner} />
  </Wrapper>
)

export default MainHero
