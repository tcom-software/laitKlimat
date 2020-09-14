import styled from "styled-components";
import theme from '@styles/theme'

export const Container = styled.div`

  .inner {
    padding: 1.5em 2em;
    box-shadow: ${theme.shadow.effect1};
    width: 100%;
    display: grid;
    grid-row-gap: 1.5em;

    .row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .row.price {
      font-style: italic;
      justify-content: start;

      button {
        border: none;
        filter: none;
        font-style: inherit;

        span {
          font-size: 18px;
          line-height: 22px;
        }
      }
    }

    .row.btn-group {
      margin-top: 0.5em;

      button {
        flex: 1;

        :first-of-type {
          margin-right: 0.5em;
        }

        :last-of-type {
          margin-left: 0.5em;
        }
      }
    }

    .info {
      table {
        width: 100%;
      }
    }

    > picture:first-of-type img {
      filter: ${theme.dropShadow.effect2};
    }

    .product {
      display: flex;
      align-items: flex-start;

      .articule {
        span {
          display: block;
          text-align: left;
          text-transform: uppercase;
          white-space: pre-wrap;
        }

        img {
          filter: ${theme.dropShadow.effect2};
        }
      }

      .image-wrapper {
        .sale {
          width: 105px;
          height: 105px;
          border-radius: 50%;
          background: linear-gradient(180deg, #67ce33 0%, #4c8c2b 100%);
          box-shadow: ${theme.shadow.effect3};
          margin-left: -1.3em;

          display: flex;
          align-items: center;
          justify-content: center;

          span {
            font-style: italic;
            text-align: center;
            user-select: none;
          }
        }

        .gift {
          img {
            margin-top: 1.5em;
          }
        }
      }
    }

    .info {
      table {
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
  }
`;
