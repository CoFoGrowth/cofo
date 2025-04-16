import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 50px;
    background: #000000;
    font-family: "Outfit", sans-serif;
    
    @media (max-width: 768px) {
      padding: 10px;
      overflow-x: hidden;
    }
  }
  
  .container {
    max-width: 1600px;
    margin: 0 auto;
    width: 100%;
    
    @media (max-width: 768px) {
      overflow-x: hidden;
    }
  }
  
  /* Fix for mobile horizontal overflow issues */
  * {
    max-width: 100%;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
