import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  #root {
    overflow: hidden;
  }

  * {
    padding: 0;
    margin: 0;
    outline: none;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: #fff;
  }

  h4 {
    color: #000;
    padding-bottom: 10px;
    font-weight: bolder;
  }

  h4::after {
    content: "";
    height: 2px;
    width: 170px;
    display: block;
    background-color: rgb(234, 75, 18);
    margin-top: 5px;
  }

  a {
    text-decoration: none;
  }

  h5 {
    color: #000;
  }
  h5::after {
    content: "";
    height: 2px;
    width: 170px;
    display: block;
    background-color: rgb(234, 75, 18);
    margin-top: 10px;
  }
`

