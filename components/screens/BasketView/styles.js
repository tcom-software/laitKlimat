import styled from "styled-components";
import theme from "@styles/theme";
import { mmp } from "@styles/utils/mediaProperty";

export const Container = styled.div`
  margin-bottom: 4em;

  .loader {
    img {
      width: 150px;
      padding: 50px;
    }
  }

  ${theme.breakpoints.down("xs")} {
    margin-bottom: 2em;
  }

  .basket {
    margin-bottom: 2em;

    ${theme.breakpoints.down("xs")} {
      margin-bottom: 1em;
    }

    .product {
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: 3fr 5fr 1fr max-content;
      ${mmp("grid-column-gap", "5em", {
        lg: "4em",
        md: "1em",
      })};
      padding: 2em 3em;
      box-shadow: ${theme.shadow.effect1};
      margin-bottom: 2em;
      position: relative;

      ${theme.breakpoints.down("lg")} {
        padding-left: 1vw;
        padding: 1em 1em;
      }

      ${theme.breakpoints.down("xs")} {
        grid-auto-flow: row;
        grid-template-columns: none;
      }

      img {
        -webkit-user-drag: none;
      }

      .title,
      .image {
        cursor: pointer;
      }

      span.price {
        white-space: nowrap;
      }

      > *:not(:first-child) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-top: 2em;

        ${theme.breakpoints.down("md")} {
          margin-top: 1em;
        }

        > :first-child {
          margin-bottom: 2em;

          ${theme.breakpoints.down("md")} {
            margin-bottom: 1em;
          }
        }

        > :last-child {
          margin-bottom: auto;
        }
      }

      .trash {
        position: absolute;
        right: 2em;
        top: 1em;
        margin-top: 0;
        cursor: pointer;
      }

      .image {
        position: relative;
        height: 16em;
        /* min-width: 15em; */

        ${theme.breakpoints.down("md")} {
          height: 14em;
        }

        ${theme.breakpoints.down(920)} {
          height: 12em;
        }

        ${theme.breakpoints.down("xs")} {
          width: 100%;
          height: 100%;
        }

        .sale {
          position: absolute;
          top: 0;
          right: 0;
          height: 105px;
          width: 105px;
          transform: translate(10%, 10%);

          ${theme.breakpoints.down("lg")} {
            height: 80px;
            width: 80px;

            span {
              font-size: 0.7em;
            }
          }

          ${theme.breakpoints.down("xs")} {
            top: 2em;
            width: 80px;
            height: 80px;

            span {
              font-size: 0.7em;
            }
          }
        }

        img {
          height: 100%;
          width: 100%;
          object-fit: contain;
        }
      }

      .info {
        display: flex;
        flex-direction: column;

        ${theme.breakpoints.down("xs")} {
          flex-direction: column;
          align-items: flex-start;
        }

        &-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2em;

          ${theme.breakpoints.down("xs")} {
            white-space: pre-wrap;
            flex-direction: column;
            align-items: flex-start;
          }
        }

        img {
          ${theme.breakpoints.down(920)} {
            width: 8vw;
          }

          ${theme.breakpoints.down("xs")} {
            width: 30%;
          }
        }

        table {
          width: 100%;

          tr {
            td:first-of-type {
              span {
                color: ${theme.colors.primary};
              }
            }

            td:last-of-type {
              padding-left: 6em;
              white-space: nowrap;

              span {
                color: ${theme.colors.secondary};
                font-style: italic;
              }

              ${theme.breakpoints.down("lg")} {
                padding-left: 1vw;
              }

              ${theme.breakpoints.down("xs")} {
                text-align: right;
              }
            }

            td {
              span {
                ${theme.breakpoints.down("lg")} {
                  font-size: 0.7em;
                }

                ${theme.breakpoints.down("xs")} {
                  font-size: 0.8em;
                }
              }
            }
          }
        }
      }

      .count {
        display: flex;
        align-items: center;
        flex-direction: column;

        ${theme.breakpoints.down("xs")} {
          align-self: flex-start;
          flex-direction: row;
        }

        > span {
          line-height: 1.7em;

          ${theme.breakpoints.down("xs")} {
            margin: 0 !important;
          }
        }

        > div {
          display: flex;
          align-items: center;

          ${theme.breakpoints.down("xs")} {
            margin-left: 1.5em;
          }

          span {
          }

          button {
            width: 1.1em;
            height: 1.1em;
            line-height: 0;
            display: grid;
            place-items: center;
            color: #2591d1;
            font-size: 1.4em;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.19999999999999996);
            transition: transform 0.3s ease;

            :active {
              transform: scale(0.85);
            }
          }

          button:first-of-type {
            color: #2591d1;
            font-size: 1.4em;
            margin: 0 0.4em 0 0.6em;
          }

          button:last-of-type {
            color: white;
            background-color: #2591d1;
          }
        }
      }

      .btns {
        max-width: 250px;

        ${theme.breakpoints.down("xs")} {
          max-width: 100%;
        }

        > .price {
          padding: 0 1em;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1em;

          ${theme.breakpoints.down("md")} {
          }

          ${theme.breakpoints.down("xs")} {
            padding: unset;

            span {
              font-size: 1.325em;
            }
          }

          span:not(.price) {
            font-size: 0.925em;
          }
        }

        .btn-group {
          display: grid;
          grid-row-gap: 0.7em;

          ${theme.breakpoints.down("xs")} {
            grid-column-gap: 0.7em;
            grid-template-columns: 1fr 1fr;
          }

          button {
            /* padding: 0.4rem 2em; */

            ${theme.breakpoints.down("lg")} {
              font-size: 0.9em;
              line-height: 1.25rem;
              padding: 0.625rem 1.5em;
            }

            ${theme.breakpoints.down("xs")} {
              font-size: 0.7em;
              line-height: 1.25rem;
              padding: 0.4rem 1.5em;
            }
          }
        }
      }
    }
  }

  .basket__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${theme.breakpoints.down("xs")} {
      flex-direction: column;
      align-items: flex-start;
    }

    .basket-empty {
      text-align: center;
      width: 100%;
    }

    &__value {
      ${theme.breakpoints.down("xs")} {
        order: -1;
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 0.7em;
      }

      span:last-of-type {
        margin: 0 3em 0 1em;

        ${theme.breakpoints.down("xs")} {
          margin: unset;
        }
      }
    }
  }

  form {
    margin-top: 4em;

    ${theme.breakpoints.down("xs")} {
      margin-top: 1em;
    }

    .inputs {
      display: grid;
      grid-gap: 2em;
      grid-template-columns: repeat(3, 1fr);
      position: relative;
      z-index: 1;

      ${theme.breakpoints.down("xs")} {
        grid-gap: 1em;
        grid-template-columns: 1fr;
      }

      label:nth-of-type(5) {
        z-index: 2;
      }
      label:nth-of-type(6) {
        z-index: 1;
      }
    }

    button[type="submit"] {
      margin-top: 2em;

      ${theme.breakpoints.down("xs")} {
        margin-left: auto;
        display: block;
      }
    }
  }
`;
