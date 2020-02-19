import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    @import url("https://rsms.me/inter/inter.css");
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-weight: 700 !important;
  }

  p {
    font-weight: 500;
  }

`;

export default GlobalStyle;
