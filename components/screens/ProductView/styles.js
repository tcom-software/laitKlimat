import styled from "styled-components";
import theme from "@styles/theme";

export const Container = styled.div`
  .container {
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(var(--global-margin) + 2vw);
    padding-right: calc(var(--global-margin) + 2vw);
  }

  .info {
    white-space: pre-wrap;
    margin-top: 40px;

    p {
      text-transform: initial;
    }
  }

  .product-info {
    display: flex;

    ${theme.breakpoints.down("md")} {
      flex-direction: column;
    }

    .left-side {
      flex: 1;
      display: flex;
      align-items: flex-start;

      ${theme.breakpoints.down("xs")} {
        margin-top: 1em;
      }

      .arrow-back {
        cursor: pointer;

        img {
          transition: transform 0.3s ease;
          :hover {
            transform: translateX(-10%);
          }
        }
      }

      .images {
        margin: 0 3vw;
        display: flex;
        align-items: flex-end;

        ${theme.breakpoints.down(1200)} {
          flex-direction: column;
          align-items: center;
        }

        ${theme.breakpoints.down("md")} {
          flex-direction: row;
        }

        .product--wrapper {
          flex: 1;
          margin-right: 6vw;
          position: relative;

          .sale {
            position: absolute;
            top: -2em;
            right: -3em;
            width: 7em;
            height: 7em;

            ${theme.breakpoints.down("xs")} {
              width: 6em;
              height: 6em;
            }
          }

          img {
            width: 100%;
            object-fit: cover;
          }
        }

        > .certificate {
          flex: 0.5;

          ${theme.breakpoints.down(1200)} {
            margin-top: 2em;
          }

          ${theme.breakpoints.down("md")} {
            margin-top: 0;
          }

          ${theme.breakpoints.down("xs")} {
            display: none;
          }

          > img {
            width: 70px;
            margin-bottom: 0.5em;
            margin: 0 auto;
            display: block;
            margin-bottom: 0.5em;
          }

          .certificate--wrapper {
            display: block;
            border: 1em solid #eeeeee;
            box-shadow: 7px 7px 11px 0px rgb(0 0 0 / 0.25),
              inset 0px 0px 8px 3px rgb(0 0 0 / 0.2);
            width: 100%;

            ${theme.breakpoints.between("md", 1200)} {
              width: 70%;
              margin: 0 auto;
            }

            img {
              padding: 0.1em;
              width: 100%;
            }
          }
        }
      }
    }

    .right-side {
      box-shadow: ${theme.shadow.effect1};
      padding: 2.5em;
      height: max-content;

      ${theme.breakpoints.down("lg")} {
        padding: 1.5em;
      }

      ${theme.breakpoints.down("md")} {
        margin-top: 2em;
      }

      ${theme.breakpoints.down("xs")} {
        box-shadow: none;
        padding: 0;
      }

      table {
        width: 100%;
        border-spacing: 0 4px;

        ${theme.breakpoints.down("xs")} {
          font-size: 1.15em;
        }

        thead,
        tfoot {
          h4 {
            font-weight: normal;
          }
        }

        tr td:nth-of-type(2) {
          text-align: right;
        }

        thead {
          h2 {
            margin: 0;
          }
        }

        tbody {
          tr.price {
            td {
              padding: 0.4em 0;

              ${theme.breakpoints.down("lg")} {
                padding: 0.2em 0;
              }
            }

            td:last-of-type {
              font-weight: bold;
            }
          }

          tr.articule {
            td {
              /* padding-bottom: 1.4em; */
            }
          }

          tr.market {
            &.noactive {
              img {
                filter: drop-shadow(0 0.25em 0.425rem orange) !important;
              }
            }

            td {
              padding: 1.3em 0 2.5em;

              ${theme.breakpoints.down("lg")} {
                padding: 0.5em 0 1.3em;
              }

              ${theme.breakpoints.down("xs")} {
                padding: 0;
              }

              img {
                filter: ${theme.dropShadow.effect2};

                ${theme.breakpoints.down("lg")} {
                  width: 2em;
                }

                ${theme.breakpoints.down("xs")} {
                  width: 1.2em;
                }
              }
            }
          }
        }

        tfoot {
          td {
          }

          img {
            ${theme.breakpoints.down("lg")} {
              width: 3em;
            }

            ${theme.breakpoints.down("xs")} {
              width: 2em;
            }
          }
        }
      }

      .row {
        display: flex;
        align-items: center;
      }

      .filters {
        margin: 0 0 10px 0;

        p {
          color: #2591d1;
          font-size: 14px;
          font-style: italic;
          margin-bottom: 10px;
          text-transform: lowercase;
        }

        ul {
          flex-wrap: wrap;

          > *:not(:last-of-type) {
            margin-right: 5px;
          }

          li {
            margin-bottom: 10px;

            button {
              height: 50px;
              color: #2591d1;
              padding: 0 7px;
              min-width: 80px;
              font-weight: bold;
              will-change: filter;
              border-radius: 999px;
              background-color: white;
              border: 1px solid #2591d1;
              transition: filter 0.1s ease;

              :hover:not(.active) {
                filter: drop-shadow(3px 3px 0px #2591d1);
              }

              &.active {
                color: white;
                background-color: #2591d1;
              }

              ${theme.breakpoints.between("md", "lg")} {
                height: 40px;
                min-width: 65px;
                font-size: 11px;
              }

              ${theme.breakpoints.between("xs", "md")} {
                height: 45px;
                min-width: 80px;
                font-size: 13px;
              }

              ${theme.breakpoints.down("xs")} {
                height: 40px;
                min-width: 65px;
                font-size: 11px;
              }
            }
          }
        }
      }

      svg {
        width: 2.4em;
        height: 2.4em;
        margin: 0 1.2em 0 0.2em;
        cursor: pointer;
      }

      .btn-group {
        display: grid;
        grid-gap: 1em;
        grid-template-columns: 1fr 1fr;
        margin-top: 2em;

        ${theme.breakpoints.down("lg")} {
          margin-top: 1em;
          grid-gap: 0.7em;
        }

        button:last-of-type {
          padding: 0;
          border: none;
          transform: none !important;
          filter: none;
          cursor: default;
        }
      }
    }
  }

  h2 {
    text-align: center;
    font-weight: normal;
    margin: var(--heading-margin) 0;
  }

  .characteristics {
    padding-top: 2em;

    .title {
      height: 7em;
      display: flex;
      align-items: center;
      background-image: ${theme.gradients.secondary};

      ${theme.breakpoints.down("xs")} {
        height: 4em;
      }

      h4 {
        width: 100%;
      }
    }

    .line {
      background-color: ${theme.colors.secondary};

      p {
        font-weight: bold;
        line-height: 165%;
      }
    }

    table {
      width: 100%;
      padding-top: 0.7em;
      padding-bottom: 0.7em;

      tbody {
        tr {
          display: flex;
          justify-content: space-between;
          padding: 2px 0;

          td:last-of-type {
            span {
              text-transform: lowercase;
            }
          }
        }
      }
    }

    > p {
      padding-top: 2em;
      white-space: pre-wrap;
      text-transform: unset;
      line-height: unset;
    }
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

  .previous-views {
    padding-bottom: 50px;
  }
`;
