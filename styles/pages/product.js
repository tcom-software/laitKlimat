import styled from "styled-components";
import theme from "@styles/theme";

export const Container = styled.div`
  position: relative;

  > .title {
    margin: var(--heading-margin) auto;

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
          font-size: 4vw;
        }

        h2 {
          color: ${theme.colors.tercary};
          color: #59b52a;
          font-size: 3.5vw;
          line-height: 4vw;
        }
      }
    }
  }

  .main-content {
    margin-bottom: var(--heading-margin);
    position: relative;

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
      width: min-content;
      padding: 3.25em 2.5em;
      margin-right: 1.5em;
      box-shadow: ${theme.shadow.effect1};

      ${theme.breakpoints.down("lg")} {
        padding: 1.5em;
      }

      ${theme.breakpoints.down("md")} {
        padding: 0.875em;
      }

      ${theme.breakpoints.down("xs")} {
        display: none;
      }

      > div {
        fieldset {
          width: 100%;
        }
      }

      button {
        display: block;
        margin: 2em 0 0 auto;
      }
    }

    .no-products {
      top: 0;
      left: 50%;
      position: absolute;
      transform: translateX(-50%);
    }

    .slick-slider {
      .slick-track {
        align-items: stretch !important;

        > div {
          > div {
            height: 100%;
          }
        }
      }
    }

    .similiar-product {
      width: 100%;
      margin-top: 4em;
      display: flow-root;

      h3 {
        text-align: center;
        margin-bottom: 2em;
        font-weight: normal;
      }

      > section {
        display: flex;
        justify-content: space-between;

        /* product wrapper */
        > div {
          width: 19%;

          .product {
          }
        }
      }
    }
  }
`;
