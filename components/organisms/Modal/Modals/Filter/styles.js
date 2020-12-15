import styled from "styled-components";
import theme from "@styles/theme";

import { mmp } from "styles/utils/mediaProperty";

export const Container = styled.div`
  form {
    display: grid;
    height: 80vh;
    grid-template-rows: max-content 1fr max-content;

    ${theme.breakpoints.between("xs", "md")} {
      width: 100vw;
    }

    main {
      overflow-y: auto;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;

      ${theme.breakpoints.between("xs", "lg")} {
        padding: 1.5em 4em 2em;
      }

      /*${theme.breakpoints.between("xs", "md")} {
        display: flex;
        justify-content: center;
      }*/

      ::-webkit-scrollbar {
        width: 12px;
      }

      > div {
        ${mmp("grid-column-gap", "3em", { lg: "2em", md: "1em" })}
        grid-template-columns: repeat(4, min-content);
        grid-template-rows: repeat(7, max-content);

        .column {
          display: grid;
          grid-row-gap: 1em;
          grid-auto-rows: max-content;
        }

        ${theme.breakpoints.down("xs")} {
          margin: 0 auto;
          width: fit-content;
          grid-template-columns: unset;

          fieldset {
            grid-area: unset !important;
            width: 100%;

            legend {
              span {
                font-size: 1em;
              }
            }
          }
        }

        fieldset {
          /* :nth-of-type(1) {
            grid-area: 1 / 1 / 6 / 2;

            ${theme.breakpoints.between("xs", "lg")} {
              width: 250px;
            }
          }
          :nth-of-type(2) {
            grid-area: 6 / 1 / 8 / 2;
          }
          :nth-of-type(3) {
            grid-area: 1 / 2 / 2 / 3;
          }
          :nth-of-type(4) {
            grid-area: 2 / 2 / 3 / 3;
          }
          :nth-of-type(5) {
            grid-area: 3 / 2 / 4 / 3;
          }
          :nth-of-type(6) {
            grid-area: 4 / 2 / 5 / 3;
          }
          :nth-of-type(7) {
            grid-area: 5 / 2 / 6 / 3;
          }
          :nth-of-type(8) {
            grid-area: 6 / 2 / 7 / 3;
          }
          :nth-of-type(9) {
            grid-area: 7 / 2 / 8 / 3;
          }
          :nth-of-type(10) {
            grid-area: 1 / 3 / 5 / 4;
          }
          :nth-of-type(11) {
            grid-area: 5 / 3 / 8 / 4;
          }
          :nth-of-type(12) {
            grid-area: 1 / 4 / 4 / 5;
          }
          :nth-of-type(13) {
            grid-area: 4 / 4 / 8 / 5;
          } */
        }
      }
    }

    footer {
      .btns_group {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: 1fr;
        grid-column-gap: 1em;
        width: fit-content;
        margin-left: auto;
      }
    }
  }
`;
