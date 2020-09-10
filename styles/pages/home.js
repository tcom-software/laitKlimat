import styled from "styled-components";
import theme from "@styles/theme";

export const Container = styled.div`
  max-width: 1478px;
  box-sizing: content-box;
  padding-top: 1.5em;
  padding-bottom: 1.5em;

  ${theme.breakpoints.down("xs")} {
    padding-right: 0;
    padding-left: 0;
  }

  h1 {
    font-weight: normal;
    text-align: center;
    padding: 0.5em 0 1.5em;

    ${theme.breakpoints.down("xs")} {
      font-weight: bold;
      color: ${theme.colors.secondary};
    }
  }

  .categories {
    height: 500px;
    display: grid;
    grid-template-columns: 1fr 3fr;

    ${theme.breakpoints.down("lg")} {
      height: 400px;
    }

    ${theme.breakpoints.down("xs")} {
      grid-template-columns: 1fr;
      height: auto;
    }

    .sidebox {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid ${theme.colors.blue100};
      padding: 0 0.7em;

      ${theme.breakpoints.down("xs")} {
        display: none;
      }

      ul {
        li {
          padding: 0.5em 0;
          color: ${theme.colors.primary};

          ${theme.breakpoints.down("lg")} {
            padding: 0.3em 0;
          }

          :hover {
            a {
              span {
                color: ${theme.colors.secondary};
                text-decoration: underline;
              }
            }
          }
        }
      }
    }

    .boxes {
      ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 250px);
        justify-items: center;
        align-items: center;

        ${theme.breakpoints.down("lg")} {
          grid-template-rows: repeat(2, 200px);
        }

        ${theme.breakpoints.down("lg")} {
          grid-template-rows: repeat(2, 200px);
        }

        ${theme.breakpoints.down("xs")} {
          grid-template-columns: 1fr;
          grid-auto-rows: 250px;
        }

        li {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          padding: 0 5em;
          cursor: pointer;

          ${theme.breakpoints.between("md", "lg")} {
            padding: 0 3em;

            img {
              transform: scale(0.7);
            }
          }

          ${theme.breakpoints.between("xs", "md")} {
            padding: 0 1em;

            img {
              transform: scale(0.6);
            }
          }

          span {
            text-align: center;
            margin-top: 1em;

            ${theme.breakpoints.down("xs")} {
              font-size: 18px;
              line-height: 22px;
            }
          }
        }

        li:nth-of-type(1) {
          background-color: ${theme.colors.blue900};
        }
        li:nth-of-type(2) {
          background-color: ${theme.colors.blue700};
        }
        li:nth-of-type(3) {
          background-color: ${theme.colors.blue500};
        }
        li:nth-of-type(4) {
          background-color: ${theme.colors.blue300};
        }
        li:nth-of-type(5) {
          background-color: ${theme.colors.blue100};
        }
      }
    }
  }
`;
