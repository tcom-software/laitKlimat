import styled from "styled-components";
import theme from "@styles/theme";

export const StyledForm = styled.form`
  display: grid;
  max-height: 100vh;
  grid-template-rows: max-content 1fr max-content;

  ${theme.breakpoints.down("xs")} {
    height: 100vh !important;
  }

  header,
  footer {
    min-height: 4em;
    background-color: ${theme.colors.white};
    box-shadow: ${theme.shadow.effect1};
    position: relative;
    z-index: 1;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .close {
      width: 2.5em;
      height: 2.5em;
      margin-right: 0.7em;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      svg {
        width: 1.3em;
        height: 1.3em;
        display: block;
      }

      ${theme.breakpoints.down("xs")} {
        width: 2em;
        height: 2em;

        svg {
          width: 1em;
          height: 1em;
        }
      }
    }
  }

  main {
    background-color: ${theme.colors.white};
    background-image: url(/images/bg-reviw.svg);
    background-size: cover;
    padding: 2em 6em 4em;
    overflow-y: auto;

    ${theme.breakpoints.down("md")} {
      padding: 2em 3em 3em;
    }

    ${theme.breakpoints.down("xs")} {
      padding: 2em 1em;
      width: 100vw;
    }
  }

  footer {
    padding: 0.7em 3em;
  }
`;
