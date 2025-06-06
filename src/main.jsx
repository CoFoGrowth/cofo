import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.jsx";
import GlobalStyle from "./GlobalStyle.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
);
