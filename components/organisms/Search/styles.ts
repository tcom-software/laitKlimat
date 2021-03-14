import styled from "styled-components";
import theme from "@styles/theme";

export const StyledSearch = styled.div`
  display: flex;

  ${theme.breakpoints.down("xs")} {
    grid-area: s;
    height: 40px;
    padding-top: 8px;
    position: relative;
  }

  form {
    display: contents;

    .category-switcher {
      z-index: 1;
      height: 100%;
      position: absolute;

      + label input {
        padding: 0 1.5em 0 calc(1.5em + 100px);
      }

      &.open {
        .category-switcher__popup {
          transform: scaleY(1);
          transform-origin: top;
          transition: transform 0.2s ease, visibility 0s 0s;
          visibility: visible;
        }
      }

      .category-switcher__button {
        margin: 5px;
        width: 100px;
        height: calc(100% - 10px);
        padding: 0 12px 0 9px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #e8e8e8;
        cursor: pointer;

        > span {
          max-width: 80%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        svg {
          margin-left: 5px;
        }
      }

      .category-switcher__popup {
        visibility: hidden;
        transform: scaleY(0);
        transform-origin: top;
        transition: transform 0.2s ease, visibility 0s 0.2s;

        margin-top: 5px;
        width: max-content;
        position: absolute;
        padding: 20px 0 40px;
        background-color: white;
        box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%),
          0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%);

        .category-list {
          .category-item {
            font-size: 14px;
            padding: 7px 30px;
            cursor: pointer;

            :hover {
              background-color: aliceblue;
            }

            &.selected {
              color: white;
              background-color: #2591d1;
            }
          }
        }
      }

      ${theme.breakpoints.down("xs")} {
        margin: 3px;
        height: calc(100% - 14px);

        border-top-left-radius: 0.4em;
        border-bottom-left-radius: 0.4em;
      }
    }

    label {
      flex: 1;
      width: 100%;
      display: flex;
      position: relative;

      ${theme.breakpoints.down("xs")} {
        position: static;
      }

      input {
        flex: 1;
        padding: 0 1.5em;
        border: solid ${theme.colors.gray100};
        border-width: 1px 0 1px 0;

        ${theme.breakpoints.down("xs")} {
          border-width: 1px;
          padding: 0.5em 1.5em;
          border-top-left-radius: 0.6em;
          border-bottom-left-radius: 0.6em;
        }

        ::placeholder {
          font-size: 16px;
          line-height: 120%;
          color: ${theme.colors.gray300};

          ${theme.breakpoints.down("xs")} {
            font-size: 14px;
          }
        }
      }

      .search-result {
        position: absolute;
        top: 100%;
        background: white;
        box-shadow: ${theme.shadow.effect1};
        padding: 0 0.5em;
        height: 400px;
        width: inherit;
        overflow-y: scroll;

        p {
          font-size: 0.8em;
          margin: 0 -0.5em;
          text-align: center;
          border-bottom: 1px solid #8080801f;
          box-shadow: 0px 4px 8px 0px #0000000a;
          padding: 0.7em 0;
          background: white;
          position: sticky;
          top: 0;
        }

        ul {
          li {
            border-bottom: 1px solid #d6d4d44d;
            align-items: center;
            cursor: pointer;

            ${theme.breakpoints.down("md")} {
              grid-template-columns: 40px 1fr max-content;
            }

            :hover {
              background-color: #2591d10d;
            }

            ${theme.breakpoints.down("lg")} {
              font-size: 13px;
            }

            a {
              display: grid;
              grid-template-columns: 60px 1fr max-content;
              grid-column-gap: 1em;
              padding: 1em 0.6em;

              img {
                width: 100%;
                height: 100%;
                min-height: 40px;
                object-fit: contain;
              }

              span:first-of-type {
                color: ${theme.colors.secondary};
                font-weight: bold;
                word-break: break-all;
              }

              span:last-of-type {
                color: ${theme.colors.tercary};
                font-weight: bold;
                white-space: nowrap;
                justify-self: end;
              }
            }
          }
        }

        button {
          display: block;
          margin: 0 auto;
          font-weight: bold;
          padding: 1em 0;
          color: ${theme.colors.secondary};
          transition: transform 0.2s ease;
          will-change: transform;
          cursor: default;

          ${theme.breakpoints.down("lg")} {
            font-size: 13px;
          }

          :hover {
            transform: scaleX(1.1);
          }
        }
      }
    }

    > button {
      height: initial;
      padding: 0 1.7em;
      background-color: ${theme.colors.secondary};
      display: flex;
      align-items: center;

      :active {
        transform: scale(0.98);
      }

      svg {
        margin-left: 0.5em;
      }

      ${theme.breakpoints.down("xs")} {
        padding: 0 0.7em;
        border-top-right-radius: 0.5em;
        border-bottom-right-radius: 0.5em;

        span {
          display: none;
        }

        svg {
          width: 20px;
          margin-left: 0.2em;
        }
      }
    }
  }
`;
