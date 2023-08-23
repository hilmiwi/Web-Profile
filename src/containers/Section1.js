import React from 'react'
import { styled } from 'styled-components'
import { colorTheme } from '../constants/globalStyles'
import Button from '../components/Button'

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    background-color: ${colorTheme.white};
    padding: 75px 10% 0 10%;
    box-sizing: border-box;
`
const Intro = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    & Button{
        margin: 20px 0 0 0;
    }
`
const Hello = styled.text`
    font-size: 50pt;
    font-weight: 800;
`
const Name = styled.text`
    font-size: 40pt;
    text-align: start;
    font-weight: 800;
`
const Role = styled(Name)`
    font-weight: 500;
`
const Pics = styled.img`
    border-radius: 15px;
    max-width: 400px;
`
function section1() {
  return (
    <Container>
        <Intro>
            <Hello>Hello!</Hello>
            <Name>I'am Hilmi Wijaksana</Name>
            <Role>A Web Developer</Role>
            <Button>Read More</Button>
        </Intro>
        <Intro style={{alignItems: 'flex-end'}}>
            <Pics src={require('../assets/pics.png')}/>
        </Intro>
    </Container>
  )
}

export default section1