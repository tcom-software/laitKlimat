import styled from "styled-components";
import theme from "@styles/theme";
import Color from "color";

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
      > ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 250px);

        ${theme.breakpoints.down("lg")} {
          grid-template-rows: repeat(2, 200px);
        }

        ${theme.breakpoints.down("lg")} {
          grid-template-rows: repeat(2, 200px);
        }

        ${theme.breakpoints.down("xs")} {
          grid-template-columns: 1fr;
          grid-template-rows: initial;
          grid-auto-rows: 300px;
        }

        > li {
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          cursor: pointer;
          overflow: hidden;
          position: relative;

          > div {
            position: absolute;
            width: 100%;
            height: 100%;
            padding: 0 5em;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          &:nth-of-type(1) {
            background-color: ${theme.colors.blue900};
          }
          &:nth-of-type(2) {
            background-color: ${theme.colors.blue700};
          }
          &:nth-of-type(3) {
            background-color: ${theme.colors.blue500};
          }
          &:nth-of-type(4) {
            background-color: ${theme.colors.blue300};
          }
          &:nth-of-type(5) {
            background-color: ${theme.colors.blue100};
          }

          .sub-menu-list {
            padding: 0 3em;
            counter-reset: section;

            &_item {
              padding: 0.3em 0;

              &:not(:last-of-type) {
                border-bottom: 1px solid ${Color(theme.colors.white).fade(0.8)};
              }

              span {
                font-size: 16px;
                line-height: 18px;
                color: ${theme.colors.white};

                :hover {
                  font-weight: bold;
                }
              }

              + .subsub-menu-list {
                position: absolute;
                display: none;

                left: -100%;
                
              }

              + .subsub-menu-list[data-visible="true"] {
                display: block;
              }
            }

            + ul {
            }
          }

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
      }
    }
  }
`;
