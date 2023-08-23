import React from "react";
import { styled } from "styled-components";
import { colorTheme } from "../constants/globalStyles";

const Wrapper = styled.div`
  background-color: ${colorTheme.black};
  padding: 5px 10%;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: ${colorTheme.white};
  p {
    font-size: 12pt;
  }
`;

const IconText = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  object-fit: contain;
`;
function Footer() {
  return (
    <Wrapper>
      <IconText>
        <h3 style={{marginRight: '50px'}}>Contact Me</h3>
        <Icon src={require("../assets/icons/material-email.png")} alt="" />
        <p>wijaksanahilmi@gmail.com</p>
      </IconText>
      <IconText>
        <Icon src={require("../assets/icons/awesome-facebook-f.png")} alt="" />
        <Icon src={require("../assets/icons/awesome-twitter.png")} alt="" />
        <Icon src={require("../assets/icons/awesome-instagram.png")} alt="" />
        <p>| hilmiwijaksana</p>
      </IconText>
      <IconText>
        <Icon src={require("../assets/icons/material-location-on.png")} alt="" />
        <p>Bandung, Indonesia</p>
      </IconText>
    </Wrapper>
  );
}

export default Footer;
