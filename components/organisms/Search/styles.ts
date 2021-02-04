import styled from "styled-components";
import theme from "@styles/theme";

export const StyledSearch = styled.div`
  display: flex;

  ${theme.breakpoints.down("xs")} {
    grid-area: s;
    padding-top: 0.5em;
    position: relative;
  }

  form {
    display: contents;

    label {
      display: flex;
      position: relative;
      width: 100%;
      flex: 1;

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
          text-transform: capitalize;
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
