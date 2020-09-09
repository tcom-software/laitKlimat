import { createGlobalStyle } from "styled-components";
import { fonts, fontfaces } from "./fonts";

const GlobalStyles = createGlobalStyle`
  ${fontfaces()};

  *,
  *::before,
  *::after {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body {
    font-family: ${fonts.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    font-size: 16px;
    
    /* @media (min-width: 1440px) {
		  font-size: 1.18vw;
	  } */
  }

  input,
  select,
  textarea,
  button {
    font-family: ${fonts.primary};

    ::placeholder {
      font-family: inherit;
    }
  }

  input,
  select,
  textarea,
  button {
    outline: none;
    appearance: none;
    border: 0;
  }

  #__next {
    
  }

  button {
    font-family: inherit;
    white-space: nowrap;
    user-select: none;
		appearance: none;
		background: none;
		outline: none;
		border: none;
		cursor: pointer;
  }
  
  li,
  ul {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }

  picture {
    display: contents;
  }

  :root {
    --global-margin: 4vw;

    @media (max-width: 768px) {  
      --global-margin: 2vw;
    }
  }

  .container {
    max-width: 1800px;
    margin: 0 auto;
    padding-right: var(--global-margin);
    padding-left: var(--global-margin);
  }

  .srOnly {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
  }
`;

export default GlobalStyles;
