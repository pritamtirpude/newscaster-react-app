import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html{
    font-size: 62.5%;
}

html:focus-within {
  scroll-behavior: smooth;
}

body{
    font-family: 'Open Sans', sans-serif;
    font-size: 1.6rem;
    min-height: 100vh;
}

ul{
    list-style-type: none;
}

a{
    text-decoration: none;
}

@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;

export default GlobalStyles;
