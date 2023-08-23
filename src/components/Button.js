import React, { Children } from 'react'
import { styled } from 'styled-components'
import { colorTheme } from '../constants/globalStyles'

const StyledButton = styled.button`
    width: 160px;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: transparent;
    cursor: pointer;
    margin: 20px;
    font-size: 12pt;
`
function Button({width, height, ...props}) {
  return (
    <StyledButton {...props} >{props.children}</StyledButton>
  )
}

export default Button