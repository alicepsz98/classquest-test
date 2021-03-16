import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body, input, button {
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`