import React from 'react'
import styled from '@emotion/styled'
import mainHeroBaner from '../images/mainHeroBarSmallTitle.jpg'

const Wrapper = styled.section`
  min-height: 100px;
  max-height: 10vh
  height: auto;
  @media (min-width: ${props => props.theme.responsive.small}) {
    height: ${props => props.height || 'auto'};
  }
  display: flex;
  justify-content: center;
  flex-direction: column;
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
  max-width: 1000px;
  object-fit: cover;
  max-height: 300px;
  margin-left: auto;
  margin-right: auto;
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
