import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { colorTheme } from '../constants/globalStyles'

const Menu = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 75px;
  width: 100%;
  padding: 0px 10%;
  box-sizing: border-box;
  column-gap: 50px;
  background-color: ${colorTheme.white};
`
const StyledNavlink = styled(NavLink)`
  text-decoration: none;
  /* margin: 0 20px; */
  color: ${colorTheme.black};
  font-weight: 500;
  
`
function topMenu() {
  return (
    <Menu>
      <StyledNavlink to='/'>Home</StyledNavlink>
      <StyledNavlink to='/'>About</StyledNavlink>
      <StyledNavlink to='/'>Works & Project</StyledNavlink>
    </Menu>
  )
}

export default topMenu