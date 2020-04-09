import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
  }
  
  html {
    font-size: 62.5%; 
  }
  
  body {
    padding: 10rem 3rem;
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
    background-color: black;
    color: white;
  }
`;

export default GlobalStyle;
