import styled, { keyframes } from "styled-components";
import theme from "@styles/theme";

const backgroundAnim = keyframes`
  from {
    left: -123%;
  }
  to {
    left: 0;
  }
`;

const animateInMount = keyframes`
  from {
    transform: translate(50%, 50%) ;
    opacity: 0;
  }
  to {
    transform: translate(50%, 0);
    opacity: 1;
  }
`;

const animateInMobile = keyframes`
  from {
    transform: translateY(50%) ;
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .wrapper {
    width: 100%;
    overflow: hidden;

    ${theme.breakpoints.down("xs")} {
      display: grid;
      height: 100vh;
    }

    header,
    footer {
      min-height: 3em;
      background-color: ${theme.colors.white};
      box-shadow: ${theme.shadow.effect1};
      position: relative;
    }

    header {
      position: relative;

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

    footer {
      padding: 0.7em 3em;

      button {
        display: block;
        margin-left: auto;
      }
    }

    main {
      display: grid;
      grid-gap: 1.5em;
      grid-template-columns: repeat(2, minmax(300px, 19vw)) 9em;
      background-color: ${theme.colors.white};
      background-image: url(/images/bg-reviw.svg);
      background-size: cover;
      padding: 2em 6em 4em;

      ${theme.breakpoints.down("md")} {
        padding: 2em 3em 3em;
        grid-template-columns: repeat(2, minmax(250px, 19vw)) 9em;
      }

      ${theme.breakpoints.down("xs")} {
        grid-template-columns: initial;
        overflow-y: auto;
        padding: 2em 1em;
        width: 100vw;
      }

      .stars {
        grid-area: 1 / 3 / 3 / 3;

        p {
          padding: 0 0 0.7em 0.3em;
        }

        svg {
          width: 1.5em;
          height: 1.5em;
          cursor: pointer;
          fill: #ffdc64;

          &[data-fill="true"] {
            fill: beige;
          }

          ${theme.breakpoints.down("md")} {
            width: 1.2em;
            height: 1.2em;
          }
        }
      }

      .images {
        grid-area: 3 / 2 / 3 / 4;

        display: grid;
        grid-auto-flow: column;
        grid-column-gap: 0.3em;
        grid-auto-columns: 10em;
        justify-content: start;
        overflow-x: auto;
        overflow-y: hidden;
        height: 9em;

        ${theme.breakpoints.down("lg")} {
          height: 7.6em;
        }

        ${theme.breakpoints.down("xs")} {
          display: grid;
          grid-gap: 0.3em;
          grid-auto-rows: 9em;
          grid-template-columns: 1fr 1fr;
          grid-auto-columns: initial;
          grid-auto-flow: initial;
          overflow: initial;
          height: initial;
        }

        > div {
          height: inherit;
        }

        .add-new {
          background-color: ${theme.colors.gray100};
          display: flex;
          text-align: center;
          align-items: center;
          justify-content: center;
          padding: 0 1em;
        }

        img {
          object-fit: cover;
          height: 100%;
          width: 100%;
        }
      }

      ${theme.breakpoints.down("xs")} {
        .stars,
        .images {
          grid-area: initial;
        }
      }
    }
  }
`;
