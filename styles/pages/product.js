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
    margin-bottom: var(--heading-margin);

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

      ${theme.breakpoints.down("lg")} {
        padding: 0 7vw;
      }

      ${theme.breakpoints.down("xs")} {
        display: none;
      }
    }

    .pagination--wrapper {
      display: flex;
      justify-content: center;
      padding: 2em 0 1em;

      .pagination {
        display: flex;
        position: relative;

        li {
          font-size: 18px;

          width: 2em;
          height: 2em;
          margin: 0 0.2em;

          background-color: ${theme.colors.white};

          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;

          &.previous,
          &.next {
            transition: transform 0.2s ease;
          }

          &.previous:hover {
            transform: translateX(-10%);
          }

          &.next:hover {
            transform: translateX(10%);
          }

          :not(.next):not(.previous) {
            box-shadow: ${theme.shadow.effect1};
          }

          &.selected,
          :focus,
          :hover:not(.next):not(.previous) {
            background-color: ${theme.colors.secondary};

            a {
              color: ${theme.colors.white};
            }
          }

          ${theme.breakpoints.down("xs")} {
            font-size: 16px;
          }

          a {
            color: ${theme.colors.primary};

            :focus {
              outline: none;
            }
          }
          span {
            font-size: 1em;
          }
        }
      }
    }

    .similiar-product {
      margin-top: 4em;

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
