import styled from "styled-components";
import theme from "@styles/theme";
import Color from "color";

export const Container = styled.div`
  margin-top: 2em;
  position: relative;

  .title {
    .viewVariants {
      position: absolute;
      display: flex;
      align-items: center;

      span {
        margin-right: 1em;
      }

      svg {
        width: 30px;
        height: 30px;
      }

      button:first-of-type {
        svg.line {
          path:first-of-type {
            fill: ${theme.colors.secondary};
          }
          path:last-of-type {
            fill: ${theme.colors.white};
          }
        }

        svg {
          path:first-of-type {
            fill: ${theme.colors.gray000};
          }

          path:last-of-type {
            fill: ${theme.colors.secondary};
          }
        }
      }

      button:last-of-type {
        svg.box {
          path:first-of-type {
            fill: ${theme.colors.secondary};
          }
          path:last-of-type {
            fill: ${theme.colors.white};
          }
        }

        path:first-of-type {
          fill: ${theme.colors.gray000};
        }

        path:last-of-type {
          fill: ${theme.colors.secondary};
        }
      }

      ${theme.breakpoints.down("xs")} {
        display: none;
      }
    }

    hgroup {
      text-align: center;
      display: block;

      h1,
      h2 {
        font-weight: normal;
      }

      ${theme.breakpoints.down("xs")} {
        h1 {
          font-weight: bold;
          color: ${theme.colors.secondary};
          padding-bottom: 0.5em;
          font-size: 4vw;
        }

        h2 {
          color: ${theme.colors.tercary};
          font-size: 3.5vw;
        }
      }
    }
  }

  .main-content {
    margin: 2em auto;

    .products {
      display: grid;
      grid-gap: 1em;
    }

    .box-view {
      grid-template-columns: repeat(3, 1fr);

      ${theme.breakpoints.down(1200)} {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .line-view {
      grid-auto-rows: max-content;

      ${theme.breakpoints.down("xs")} {
        grid-auto-rows: initial;
        grid-template-columns: repeat(2, 1fr) !important;
      }
    }

    .filters {
      float: left;
      padding: 0 7em;
      margin-right: 1.5em;
      box-shadow: ${theme.shadow.effect1};
      height: 100vh;

      ${theme.breakpoints.down("xs")} {
        display: none;
      }
    }
  }
`;
