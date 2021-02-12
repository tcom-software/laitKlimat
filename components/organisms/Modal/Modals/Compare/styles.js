import theme from "@styles/theme";
import styled from "styled-components";
import { mmp } from "styles/utils/mediaProperty";

export const Container = styled.div`
  overflow: auto;
  max-height: 100%;
  max-width: 100vw;

  ${theme.breakpoints.down("xs")} {
    max-height: 100vh;
  }

  .wrapper {
    padding: 4em;
    padding-bottom: 0;
    width: fit-content;
    background-color: white;

    ${theme.breakpoints.down("xs")} {
      height: 100%;
      padding: 1em;
      padding-top: 5em;
    }
  }

  header {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    min-height: 4em;
    background-color: ${theme.colors.white};
    box-shadow: ${theme.shadow.effect1};
    position: relative;

    ${theme.breakpoints.down("xs")} {
      position: fixed;
      width: 100vw;
      z-index: 1;
    }

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

  .top {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: minmax(260px, 1.1fr) repeat(4, minmax(260px, 1fr));
    padding-bottom: 2em;

    /* ${theme.breakpoints.down("xs")} {
      grid-template-rows: minmax(160px, min-content) min-content;
      grid-template-columns: repeat(5, minmax(260px, 1fr));
    } */

    .selected-names {
      display: grid;
      grid-row-gap: 0.5em;
      grid-auto-rows: minmax(3em, min-content);
      margin-right: 2em;

      /* ${theme.breakpoints.down("xs")} {
        grid-row: 2;
        grid-column: 1 / 5;
        grid-auto-flow: column;
        grid-auto-columns: 1fr;
        margin-right: unset;
        margin-top: 1em;
        grid-auto-rows: minmax(2.5em, min-content);
      } */

      .search-bar {
        transition: box-shadow 0.2s ease;

        :focus-within {
          box-shadow: 4px 4px 0px 0px #2591d175;

          input::placeholder {
            opacity: 0.5;
          }
        }

        input {
          border: 1px solid ${theme.colors.secondary};
          padding: 0 0.6em;
          display: flex;
          align-items: center;
        }

        .search-result {
          z-index: 1;
        }

        button {
          display: none;
        }
      }

      .item,
      .active {
        border: 1px solid ${theme.colors.secondary};
        padding: 0 0.6em;
        display: flex;
        align-items: center;
      }

      .active {
        input {
          ::before {
            transform: scale(1.3);
          }
        }

        span {
          word-break: break-word;
        }
      }
    }

    > .product-wrapper {
      margin: 0 0.5em;
    }

    > .add-new {
    }

    .product-wrapper {
      position: relative;

      > svg {
        position: absolute;
        top: 1em;
        right: 1em;
        z-index: 1;
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }

    .product.add-new {
      box-shadow: ${theme.shadow.effect1};
      display: grid;
      place-content: center;
      cursor: pointer;

      /* ${theme.breakpoints.down("xs")} {
        grid-column: 1;
      } */

      svg {
        transform: rotate(45deg);
      }
    }
  }

  .bottom {
    .row {
      background-image: ${theme.gradients.secondary};
      ${mmp("height", "7em", { xs: "4em" })};
      margin: 0 -4em;
      padding: 0 4em;
      display: flex;
      align-items: center;

      ${theme.breakpoints.down("xs")} {
        margin: 0 -1em;
        padding: 0 1em;
      }

      h3 {
      }
    }

    .characteristics {
      .table-row {
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: 1.1fr repeat(4, 1fr);

        &.title {
          border-top: 1px dashed #2591d142;

          span {
            color: ${theme.colors.secondary};
            font-weight: bold;
            padding-bottom: 0.5em;
          }
        }

        :hover {
          span {
            color: #2591d1;
            background-color: aliceblue;
          }
        }

        span {
          line-height: 1.5em;
        }

        :first-of-type {
          span {
            padding-top: 1em;
          }
        }
        :last-of-type {
          span {
            padding-bottom: 1em;
          }
        }

        span:not(:first-of-type) {
          padding-left: 20%;
          border-left: 1px solid ${theme.colors.secondary};
        }
      }
    }
  }
`;
