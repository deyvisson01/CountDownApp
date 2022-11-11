import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }

  :root {
    --white: #FFF;
    --yellow: #e5bf00;

    --background-white: #fff;
    --background-button: #03dd8a;
    --background-button-danger: #ee5d6d;
    --input-background: #3d4151;

    --link-color: #ffe581;
    --text-danger: #ee5d6d;

    --text-primary: #fff;
    --text-secundary: #fff;

    --checkbox: #4b4f5f;

    --background-primary: #323647;
    --background-secundary: #2a2e3e;
    --background-secundary-lg: #3a3e4e;
    --background-modal: #343a50;
    --border-line: #343a50;
    --background-degrade: #3b4056;
    --background-grey: #485171;
  }
`
