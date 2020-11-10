import styled from "styled-components";
import theme from "@styles/theme";

export const Container = styled.div`
  form {
    main {
      display: grid;
      grid-gap: 1.5em;
      grid-template-columns: repeat(2, minmax(300px, 19vw)) 9em;

      ${theme.breakpoints.down("md")} {
        grid-template-columns: repeat(2, minmax(250px, 19vw)) 9em;
      }

      ${theme.breakpoints.down("xs")} {
        grid-template-columns: initial;
        overflow-y: auto;
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

          margin-bottom: 2em;
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

    footer {
      button {
        display: block;
        margin-left: auto;
      }
    }
  }
`;
