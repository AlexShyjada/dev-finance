import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
  --blue: #387BC9;
  --blueLight: rgba(155, 201, 255, 1);
  --blueDark: #2C4D76;
  --background: #F2F2F2;
  --backgroundDark: #1F1F23;
  --textBlack: #363F5F;
  --textwhite: #F2F2F2;
  --green: #49AA26;
  --red: #E92929;
  --shape: #FFFFFF;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}

body, input, select, textarea, button {
  font-family: 'Poppins', Sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong{
  font-weight: 600;
}


button {
  cursor: pointer;
}

[disabled]{
  opacity: 0.6;
  cursor: not-not-allowed;
}
`