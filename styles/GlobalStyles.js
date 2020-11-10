import { createGlobalStyle } from "styled-components";
import { fonts, fontfaces } from "./fonts";
import theme from "./theme";

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

    ::-webkit-scrollbar {
      width: 12px;
    }
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

  img {
    -webkit-user-drag: none;
  }
  
  :root {
    --global-margin: 4vw;
    --heading-margin: 36px;

    @media (max-width: 768px) {  
      --global-margin: 3vw;
      --heading-margin: 25px;
    }
  }

  .container {
    max-width: 1900px;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--global-margin);
    padding-right: var(--global-margin);
  }

  .scroll-hidden {
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: 100%;
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

  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
    
    &-track {
      background: #f1f1f1;
    }

    &-thumb {
      background-color: ${theme.colors.secondary};
      border-radius: 1000em;
    }

    /* &-thumb:hover {
      background: #555;
    } */
  }
`;

export default GlobalStyles;
