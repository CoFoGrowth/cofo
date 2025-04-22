import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.colors.background};
    font-family: "Outfit", sans-serif;
    color: ${({ theme }) => theme.colors.text};
    
    @media (max-width: 768px) {
      overflow-x: hidden;
    }
  }
  
  .container {
    max-width: 1600px;
    margin: 0 auto;
    width: 100%;
    padding: 0 1rem;
    
    @media (max-width: 768px) {
      overflow-x: hidden;
    }
  }
  
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  main {
    flex: 1;
  }
  
  /* Reset styles */
  h1, h2, h3, h4, h5, h6, p {
    margin-top: 0;
  }
  
  /* Fix for mobile horizontal overflow issues */
  * {
    max-width: 100%;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
