import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    width: 100%;
    padding: 50px 10%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
const Quote = styled.p`
    width: 70%;
    font-size: 28pt;
    font-weight: 600;
    text-align: center;
    align-self: center;
    margin: 0 0 120px 0;
`
const AboutMe = styled.div`
    width: 50%;
`
const Skills = styled.div`
    align-self: flex-end;
`
function Section2() {
  return (
    <Container>
        <Quote>"Use creativity for solving and analyzing the problem to make perfect solution."</Quote>
        <AboutMe>
            <h2>About Me</h2>
            <p>I am a bachelor of computer science from Padjadjaran University. My professional skill is web/app developer as a frontend, UI/UX design and also data scientist. I have experienced scholarship in machine learning and I interest to learn the new things like technologies, trends or ideas about website and mobile apps. Creating innovation with creativity make me challanged.</p>
        </AboutMe>
        <Skills>
        <p>
            <b>Skills</b><br/>
            - UI/UX Design <br/>
            - Frontend Developer (ReactJs, React Native) <br/>
            - Programing (C,C#, JavaScript, Typescript)
        </p>
        </Skills>
    </Container>
  )
}

export default Section2