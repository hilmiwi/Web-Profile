import React from 'react'
import { styled } from 'styled-components'
import { colorTheme } from '../constants/globalStyles'
import Button from '../components/Button'
const Container = styled.div`
    width: 100%;
    padding: 50px 10%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    row-gap: 20px;
`
const ProjectPic = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 15px;
    /* border: 1px solid ${colorTheme.black}; */
    box-shadow: 0px 6px 15px -5px rgba(0,0,0,0.46);
    object-fit: cover;
`
const PicWrapper = styled.div`
    max-width: 500px;
    min-width: 300px;
    min-height: 175px;
    max-height: 300px;
`
function Section3() {
    const works = [
        {
            name: "Sukses Mandiri",
            pic: require('../assets/SuksesMandiri.jpg'),
            role: "UI/UX Designer"
        },
        {
            name: "Mount Stuff",
            pic: require('../assets/mountstuff.jpg'),
            role: "UI/UX Designer"
        },
        {
            name: "Nike React",
            pic: require('../assets/nike.jpg'),
            role: "UI/UX Designer"
        },
        {
            name: "Candle Light",
            pic: require('../assets/Candlelight.jpg'),
            role: "UI/UX Designer"
        },
        {
            name: "Zio Art",
            pic: require('../assets/ZioArt.jpg'),
            role: "UI/UX Designer"
        },
        {
            name: "Sinikukami",
            pic: require('../assets/Sinikukami.png'),
            role: "UI/UX Designer"
        },
    ]
  return (
    <Container>
        <h2>Works & Projects</h2>
        <Wrapper>
            {works.map(dt => {
                return <PicWrapper><ProjectPic src={dt.pic} /></PicWrapper>
                })}
        </Wrapper>
        <Button width='150px' height='40px' style={{alignSelf:'center', marginTop:'50px'}}>See more</Button>
    </Container>
  )
}

export default Section3