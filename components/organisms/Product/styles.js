import styled, { css } from "styled-components";
import theme from "@styles/theme";

const Product = styled.div`
  padding: 2em 3em;
  box-shadow: ${theme.shadow.effect1};

  img {
    -webkit-user-drag: none;
  }

  span.price {
    white-space: nowrap;
  }

  .title {
    font-size: 1vw;

    ${theme.breakpoints.down(1200)} {
      font-size: 1.3vw;
    }

    ${theme.breakpoints.down("xs")} {
      font-size: 2.8vw;
    }
  }

  .title,
  .product-image {
    cursor: pointer;
  }

  .sale {
    margin-left: -1.3em;

    ${theme.breakpoints.down("xs")} {
      width: 13vw;
      height: 13vw;
      position: absolute;
      right: 0;
    }

    span {
      ${theme.breakpoints.down("lg")} {
        font-size: 1.175em;
      }

      ${theme.breakpoints.down("xs")} {
        font-size: 2vw;
      }
    }
  }

  .info {
    font-size: 0.8vw;

    ${theme.breakpoints.down(1200)} {
      font-size: 1vw;
    }

    ${theme.breakpoints.down("xs")} {
      display: none;
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
          span {
            color: ${theme.colors.secondary};
            font-style: italic;
          }
        }
      }
    }
  }
`;

export const Container = styled(Product)`
  &.potoduct-box-view {
    display: grid;
    grid-row-gap: 1.5em;

    font-size: 0.6vw;

    ${theme.breakpoints.down("md")} {
      padding: 2em 2em;
    }

    ${theme.breakpoints.down("xs")} {
      padding: 3em 3em 7em;
      grid-row-gap: 2.5em;
      position: relative;
      overflow: hidden;
    }

    .row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .row.price {
      font-style: italic;
      justify-content: space-between;

      ${theme.breakpoints.down("xs")} {
        margin-top: 5em;
      }

      source {
        display: none;
      }

      img {
        width: 30%;
      }

      button {
        border: none;
        filter: none;
        font-style: inherit;
        padding: 0;
        font-size: 0.9vw;

        ${theme.breakpoints.down(1200)} {
          font-size: 1vw;
        }

        ${theme.breakpoints.down("xs")} {
          display: none;
        }
      }

      span.price {
        white-space: nowrap;
        justify-self: flex-end;
        font-size: 1.1vw;

        ${theme.breakpoints.down(1200)} {
          font-size: 1.3vw;
        }

        ${theme.breakpoints.down("xs")} {
          font-size: 4vw;
        }
      }
    }

    .row.btn-group {
      margin-top: 0.5em;
      font-size: 0.8vw;

      ${theme.breakpoints.down(1200)} {
        font-size: 1vw;
      }

      button {
        flex: 1;

        font-size: 1em;
        padding: 0.4rem 1.7em;

        ${theme.breakpoints.down(1200)} {
          padding: 0.225rem 2em;
        }

        :first-of-type {
          margin-right: 0.5em;
        }

        :last-of-type {
          margin-left: 0.5em;
        }
      }
    }

    .btn-group-mobile {
      > span {
        font-size: 2.2vw;
      }

      .article {
        font-size: 10px;
      }

      button {
        margin-top: 1em;
        width: 100%;
        border-radius: 10em;
        font-size: 2.7vw;
        padding: 0.75rem 2em;
      }
    }

    .btn-group-mobile-open {
      width: 100%;
      height: 100%;
      display: grid;
      grid-row-gap: 3em;
      align-content: center;
      justify-content: stretch;
      background-color: ${theme.colors.white};
      position: absolute;
      padding: 0 3em;
      z-index: 2;

      button {
        width: 100%;
        border-radius: 10em;
        font-size: 2.7vw;
        padding: 0.75rem 2em;
      }

      img {
        position: absolute;
        top: 4em;
        left: 4em;
        width: 8em;
        height: auto;
        user-select: none;
        pointer-events: all;
      }
    }

    .product {
      display: flex;
      align-items: flex-start;
      position: relative;
      user-select: none;

      .articule {
        font-size: 0.8vw;
        z-index: 1;

        ${theme.breakpoints.down(1200)} {
          font-size: 1vw;
        }

        span {
          display: block;
          text-align: left;
          text-transform: uppercase;
          white-space: pre-wrap;

          ${theme.breakpoints.down("xs")} {
            display: none;
          }
        }

        img {
          filter: ${theme.dropShadow.effect2};
          width: 60%;
          /* 
          ${theme.breakpoints.down(
            "xs"
          )} {
            width: 100%;
          } */
        }
      }

      picture.product-image {
        img {
          width: 70%;

          ${theme.breakpoints.up("xs")} {
            margin-left: -2em;
          }

          ${theme.breakpoints.down("xs")} {
            padding-top: 4em;
            padding-right: 8em;
          }
        }
      }

      .image-wrapper {
        z-index: 1;

        .sale {
          ${theme.breakpoints.down(1200)} {
            font-size: 0.9vw;
          }
        }

        .gift {
          img {
            margin-top: 1.5em;
            width: 60%;

            ${theme.breakpoints.down("xs")} {
              position: absolute;
              left: 2em;
              bottom: 2em;
              width: 8vw;
            }
          }
        }
      }
    }
  }

  &.potoduct-line-view {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > *:not(:last-child) {
      margin-right: 1em;
    }

    ${theme.breakpoints.down("lg")} {
      padding-left: 1vw;
      padding: 1em 1em;
    }

    .product {
      position: relative;

      .sale {
        position: absolute;
        top: 0;
        right: 0;
        height: 105px;
        width: 105px;
        transform: translate(10%, 10%);

        ${theme.breakpoints.down("lg")} {
          height: 6.5vw;
          width: 6.5vw;

          span {
            font-size: 1vw;
          }
        }
      }

      img {
        max-width: 15vw;

        ${theme.breakpoints.down("lg")} {
          width: 13vw;
        }
      }
    }

    .info {
      display: flex;
      flex-direction: column;

      &-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2em;
      }

      table {
        tr {
          td:last-of-type {
            padding-left: 3em;
            white-space: nowrap;

            ${theme.breakpoints.down("lg")} {
              padding-left: 1vw;
            }
          }

          td {
            span {
              ${theme.breakpoints.down("lg")} {
                font-size: 1vw;
              }
            }
          }
        }
      }
    }

    .gift {
      width: 180px;

      ${theme.breakpoints.down("lg")} {
        width: 12vw;
      }

      .articule {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1em;

        ${theme.breakpoints.down(1200)} {
          font-size: 1.3vw;
        }

        img {
          height: 2.2em;
          filter: ${theme.dropShadow.effect2};
        }
      }

      > picture {
        display: flex;
        justify-content: center;

        img {
          height: 7em;
          margin: 0 auto;

          ${theme.breakpoints.down("lg")} {
            height: 5vw;
          }
        }
      }
    }

    .btns {
      max-width: 250px;

      > .price {
        padding: 0 1em;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1em;

        span:not(.price) {
          font-size: 1vw;
        }
      }

      .btn-group {
        display: grid;
        grid-row-gap: 0.7em;

        button {
          /* padding: 0.4rem 2em; */

          ${theme.breakpoints.down("lg")} {
            font-size: 1vw;
            padding: 0.4rem 2em;
          }
        }
      }
    }
  }
`;

export const ContainerSimilarProduct = styled(Product)`
  padding: 1.3em 1.7em;

  ${theme.breakpoints.down("xs")} {
    padding: 1em 0.7em;
  }

  > .product {
    position: relative;

    .product img {
      width: 100%;
    }

    .market img {
      filter: drop-shadow(0 0.25em 0.625rem #59b52a);
      width: 13%;
      position: absolute;

      ${theme.breakpoints.down("xs")} {
        width: 20wv;
      }
    }

    .gift img {
      position: absolute;
      left: 0;
      width: 17%;
      bottom: 5%;
    }

    .sale {
      position: absolute;
      top: 0;
      right: 0;
      /* max-width: 6em;
      max-height: 7em; */
      width: 5.5em;
      height: 5.5em;

      ${theme.breakpoints.down("lg")} {
        width: 5em;
        height: 5em;
      }

      ${theme.breakpoints.down("xs")} {
        width: 12vw;
        height: 12vw;
      }

      span {
        font-size: 0.7em;

        ${theme.breakpoints.down("xs")} {
          font-size: 1.7vw;
        }
      }
    }
  }

  .title {
    padding-bottom: 0.5em;
    display: block;

    ${theme.breakpoints.up("lg")} {
      font-size: 1.2em;
    }
  }

  .price.row {
    display: flex;
    align-items: center;
    justify-content: space-between;

    picture {
      display: block;

      img {
        width: 80%;
      }
    }
  }

  .article {
    padding: 0.5em 0 1em;
    display: block;

    ${theme.breakpoints.down("lg")} {
      font-size: 0.9em;
    }
  }

  .btn {
    button {
      width: 100%;
    }
  }
`;