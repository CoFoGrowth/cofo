import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
  
  body {
    margin: 0px;
    padding: 50px;
    background: #000000;
    font-family: "Outfit", sans-serif;
  }
  
  .container {
    max-width: 1600px;
    margin: 0 auto;
    width: 100%;
  }
`;

export default GlobalStyle;
