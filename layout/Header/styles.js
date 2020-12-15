import styled, { keyframes } from "styled-components";
import theme from "@styles/theme";

export const StyledHeader = styled.header`
  position: relative;
  z-index: ${theme.zIndex.header};

  ${theme.breakpoints.down("xs")} {
    padding: 0.5em 0 0.8em;
    margin-bottom: 1.2em;
    box-shadow: 0px 4px 7px rgb(0 0 0 / 22%);
    position: sticky;
    top: 0;
    width: 100vw;
    background-color: ${theme.colors.white};
  }
`;

export const GridRow = styled.section`
  position: relative;
  margin-top: 1em;
  margin-bottom: 2em;
  height: 46px;
  display: grid;
  grid-template-columns: minmax(170px, 270px) minmax(360px, 560px) 1fr repeat(
      3,
      max-content
    );
  grid-template-areas: "categories search-bar phone basket filter humburger";
  z-index: ${theme.zIndex.searchBar};

  ${theme.breakpoints.down("md")} {
    grid-template-columns: minmax(170px, 270px) minmax(360px, 560px) repeat(
        3,
        max-content
      );
    grid-template-areas: "categories search-bar basket filter humburger";
  }

  ${theme.breakpoints.down("xs")} {
    margin-top: 38px;
    margin-bottom: inherit;
    align-content: center;
    grid-template-columns: 1fr repeat(3, max-content);
    grid-template-areas:
      "logo basket filter humburger"
      "s s s s";
  }

  /******** logo ********/

  .logo-wrapper {
    display: none;
    grid-area: logo;
    justify-self: start;

    ${theme.breakpoints.down("xs")} {
      display: block;
    }

    .logo {
      grid-area: logo;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        max-height: 47px;
        object-fit: contain;
      }
    }
  }

  /******** categories ********/

  .categories {
    grid-area: categories;
    display: flex;
    position: relative;

    ${theme.breakpoints.down("xs")} {
      display: none;
    }

    .root {
      width: 100%;
      padding: 0 1em;
      border: 1px solid ${theme.colors.gray100};
    }

    span {
      font-size: 16px;
      line-height: 20px;
    }

    .root,
    span {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: left;
      font-weight: normal;
      color: ${theme.colors.fourth};
      text-transform: uppercase;
    }

    .root,
    .category-item[data-arrow="true"] {
      ::after {
        content: "";
        padding: 3px;
        right: 1.3em;
        top: 50%;
        position: absolute;
        display: inline-block;
        border-style: solid;
        border-width: 0 2px 2px 0;
        border-color: ${theme.colors.gray300};
        transform: rotate(45deg) translateY(-50%);
        transition: all 0.2s ease;
        transform-origin: 50% 0%;
      }
    }

    .root,
    .category-item {
      transition: all 0.2s ease;
      cursor: pointer;
    }

    :hover .root::after {
      border-color: ${theme.colors.primary};
    }

    :hover,
    .category-item:hover {
      > .category-list {
        display: block;
        z-index: 1;
      }
    }

    /* categories will be opened to right */
    .category-list {
      display: none;
      left: 100%;
      top: -1.05em;
      position: absolute;
      padding: 1em 0;
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.gray100};

      .category-item {
        position: relative;
        padding: 0.7em 3.1em 0.7em 1.4em;

        /* categories leavs without arrow (subcategories) */
        &[data-arrow="false"] {
          padding: 0.7em 1.4em 0.7em 1.4em;
        }

        :hover {
          &[data-arrow="true"] {
            ::after {
              border-color: ${theme.colors.secondary};
              transform: rotate(-45deg) translateY(-50%);
            }
          }
          > span,
          > a span {
            color: ${theme.colors.secondary};
            text-decoration: underline;
          }
        }

        > .category-list {
          width: 300px;
        }
      }
    }

    /* first category will be opened to down */
    > .category-list {
      position: absolute;
      top: 100%;
      left: 0;
    }
  }

  /******** search ********/

  .search-bar {
    grid-area: search-bar;
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
              display: grid;
              grid-template-columns: 60px 1fr max-content;
              grid-column-gap: 1em;
              padding: 1em 0.6em;
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
        height: 100%;
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
  }

  .call-us,
  .basket,
  .filter,
  .humburger,
  .search-mobile {
    display: flex;
    cursor: pointer;
    align-self: center;
    margin-left: 1.5em;

    ${theme.breakpoints.down("xs")} {
      align-items: center;
      margin-left: 1.3em;
    }
  }

  /******** phone ********/

  .call-us {
    grid-area: phone;
    flex: 1;
    justify-self: center;
    cursor: default;

    ${theme.breakpoints.down("md")} {
      display: none;
    }
  }

  /******** basket ********/

  .basket {
    grid-area: basket;

    &-inner {
      position: relative;
      display: flex;
      align-items: center;

      ${theme.breakpoints.down("xs")} {
        svg {
          width: 28px;
        }
      }

      .count {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0 0.2em;
        border-radius: 2em;
        color: ${theme.colors.tercary};
        background-color: ${theme.colors.white};
        transform: translateY(-40%);

        ${theme.breakpoints.down("xs")} {
          font-size: 15px;
          padding: 0 0.1em;
          line-height: 1em;
          transform: translateY(-15%);
        }
      }
    }
  }

  /******** filter ********/

  .filter {
    grid-area: filter;

    button {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      justify-content: space-between;
      font-size: 15px;
      width: 2.35em;
      height: 1.35em;

      ${theme.breakpoints.down("xs")} {
        font-size: 15px;
      }

      :hover {
        span {
          :nth-of-type(1) {
            ::before {
              transform: translate(80%, -30%);
            }
          }

          :nth-of-type(2) {
            ::before {
              transform: translate(400%, -30%);
            }
          }

          :nth-of-type(3) {
            ::before {
              transform: translate(80%, -30%);
            }
          }
        }
      }

      span {
        height: 0.135em;
        border-radius: 2em;
        position: relative;
        background-color: ${theme.colors.secondary};
        transition: all 0.2s ease;
        width: 100%;

        ::before {
          content: "";
          width: 0.4em;
          height: 0.4em;
          display: block;
          border-radius: 50%;
          transform: translate(400%, -30%);
          background-color: inherit;
          transition: all 0.2s ease;
        }

        :nth-of-type(1) {
        }

        :nth-of-type(2) {
          ::before {
            transform: translate(80%, -30%);
          }
        }

        :nth-of-type(3) {
        }
      }
    }
  }

  /******** humburger ********/

  .humburger {
    grid-area: humburger;

    button {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      justify-content: space-between;
      font-size: 15px;
      width: 2.35em;
      height: 1.35em;

      ${theme.breakpoints.up("xs")} {
        :hover {
          span {
            :nth-of-type(2) {
              width: 100%;
            }

            :nth-of-type(3) {
              width: 100%;
            }
          }
        }
      }

      span {
        height: 2px;
        border-radius: 1em;
        background-color: ${theme.colors.primary};
        transition: all 0.2s ease;

        :nth-of-type(1) {
          width: 100%;
        }

        :nth-of-type(2) {
          width: 50%;
        }

        :nth-of-type(3) {
          width: 90%;
        }
      }
    }

    button[data-open="true"] {
      span {
        height: 2px;
        border-radius: 1em;
        background-color: ${theme.colors.primary};
        transition: all 0.2s ease;

        :nth-of-type(1) {
          width: 100%;
          transform: rotate(-45deg) translateY(0.85em);
        }

        :nth-of-type(2) {
          width: 0%;
        }

        :nth-of-type(3) {
          width: 100%;
          transform: rotate(45deg) translateY(-0.85em);
        }
      }
    }
  }
`;
