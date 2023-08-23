import { createGlobalStyle } from "styled-components";

export const colorTheme = {
    black: "#0F0F0F",
    white: "#E9E9E9",
  };

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    background-color: ${colorTheme.white};
  }
  h2 {
    font-weight:600;
    font-size: 30pt;
  }
  p {
    font-size: 16pt;
  }
  
`;

export default GlobalStyle;