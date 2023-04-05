import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;

    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto';
  }

  button {
    cursor: pointer;
  }
`
