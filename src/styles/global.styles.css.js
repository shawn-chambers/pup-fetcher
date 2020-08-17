import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  .break {
    flex-basis: 100%;
    height: 0;
  }
  .header-container {
    text-align: center;
    margin: 15px 0px 15px 0px;
  }
  .error {
    margin-top: 15px;
  }
  .picture-container {
    margin-top: 15px;
  }
  h1 {
    margin: 30px 0px 5px 0px;
  }
  h3 {
    margin: 0px 0px 15px 0px;
  }
  .ui.input {
    margin-left: -85px;
  }
  img {
    max-height: 40em;
  }
  .app-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }
`;