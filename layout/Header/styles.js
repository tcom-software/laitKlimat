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
  grid-template-columns: 150px minmax(360px, 560px) 1fr repeat(3, max-content);
  grid-template-areas: "categories search-bar phone basket filter hamburger";
  z-index: ${theme.zIndex.searchBar};

  ${theme.breakpoints.down("md")} {
    grid-template-columns: 150px minmax(360px, 560px) repeat(3, max-content);
    grid-template-areas: "categories search-bar basket filter hamburger";
  }

  ${theme.breakpoints.down("xs")} {
    margin-top: 38px;
    margin-bottom: inherit;
    align-content: center;
    grid-template-columns: 1fr repeat(3, max-content);
    grid-template-areas:
      "logo basket filter hamburger"
      "search-bar search-bar search-bar search-bar";
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
    display: flex;
    grid-area: categories;

    ${theme.breakpoints.down("xs")} {
      display: none;
    }

    ${theme.breakpoints.up("xs")} {
      margin-right: 10px;

      button {
        will-change: transform;
        transition: transform 0.3s ease;
        background-color: ${theme.colors.secondary};

        span {
          font-weight: bold;
          letter-spacing: 0.06em;
          color: ${theme.colors.white};
        }

        svg {
          width: 22px;
          height: 100%;

          line {
            stroke: white;
            transition: all 0.3s ease;
          }
        }

        :active {
          transform: scale(0.97);
        }

        &.open {
          svg {
            line:nth-of-type(1) {
              transform: rotate(-45deg) translate(-45%, 45%);
            }

            line:nth-of-type(2) {
              transform: translateX(100%);
              opacity: 0;
            }

            line:nth-of-type(3) {
              transform: rotate(45deg) translate(20%, -80%);
            }
          }
        }
      }
    }

    .root {
      width: 100%;
      padding: 0 1em;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  /* --------------------------- */
  .catalog-wrapper {
    &.open {
      .category-list {
        display: block;
        z-index: 1;
      }
    }

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

        /* categories leaves without arrow (subcategories) */
        &[data-arrow="false"] {
          padding: 0.7em 1.4em 0.7em 1.4em;
        }

        a {
          width: 100%;
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

    > .category-list {
      left: 0;
      height: 100%;
      top: 0 !important;
      position: relative;
      width: max-content;
    }
  }

  .catalog-wrapper {
    left: 0;
    right: 0;
    top: 100%;
    opacity: 0;
    display: flex;
    min-height: 100vh;
    position: absolute;
    padding-top: 15px;
    visibility: hidden;
    padding-bottom: 15px;
    background-color: #1c1c1cc2;
    box-shadow: 0px 20px 18px 0px #0000002e;
    transition: visibility 0s 0.3s ease, opacity 0.3s ease;
    background-image: linear-gradient(180deg, #f9f9f9 6%, white 10%);

    &.open {
      opacity: 1;
      visibility: visible;
      transition: visibility 0s 0s ease, opacity 0.3s ease;
    }

    .root-category-list {
      padding: 5px 10px;
      max-width: max-content;
      border-right: 1px solid #dddddd;

      .root-category-list-item {
        cursor: pointer;
        position: relative;
        min-width: max-content;
        padding: 0.7em 3.1em 0.7em 1.4em;

        ::after {
          content: "";
          padding: 3px;
          right: 1.3em;
          top: 50%;
          position: absolute;
          display: inline-block;
          border-style: solid;
          border-width: 2px 2px 0 0;
          border-color: ${theme.colors.gray300};
          transform: rotate(45deg) translateY(-50%);
          transition: all 0.2s ease;
          transform-origin: 50% 0%;
        }

        &.selected {
          background-color: #ededed;
        }
      }
    }

    .catalog-content {
      padding: 20px 40px;

      &-title {
        margin-bottom: 30px;
      }

      > .sub-catalog-container {
        display: grid;
        grid-column-gap: 40px;
        grid-template-columns: 1fr 1fr;

        .sub-catalog-column {
          .sub-catalog-item {
            margin-bottom: 20px;

            &-title {
              font-weight: bold;
            }

            &-list {
              margin-left: 30px;
              margin-top: 10px;
              margin-bottom: 10px;

              li {
                padding: 2px 0;

                &.active {
                  pointer-events: none;
                  
                  span {
                    color: ${theme.colors.secondary};
                  }
                }

                :hover:not(.active) {
                  span {
                    text-decoration: underline;
                    color: ${theme.colors.secondary};
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  /* categories will be opened to right */

  /******** search ********/

  .search-bar {
    grid-area: search-bar;

    ${theme.breakpoints.up("xs")} {
      form {
        label {
          input {
            border-width: 1px;
            border-color: ${theme.colors.secondary};
          }
        }

        button {
          svg {
            display: none;
          }
        }
      }
    }
  }

  .basket,
  .filter,
  .call-us,
  .hamburger,
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
      height: 2.35em;

      svg {
        width: 100%;
        fill: ${theme.colors.secondary};
        stroke: ${theme.colors.secondary};

        circle {
          transition: all 0.2s ease;
        }

        :hover {
          circle:nth-of-type(1) {
            transform: translateX(-50%);
          }
          circle:nth-of-type(2) {
            transform: translateX(50%);
          }
          circle:nth-of-type(3) {
            transform: translateX(-50%);
          }
        }
      }
    }
  }

  /******** hamburger ********/

  .hamburger {
    grid-area: hamburger;

    button {
      display: flex;
      width: 2.35rem;
      height: 2.35rem;
      font-size: 15px;
      align-items: flex-end;
      flex-direction: column;
      justify-content: space-between;

      svg {
        width: 100%;

        line {
          transition: all 0.2s ease;
        }

        line:nth-of-type(2) {
          transform: translateX(30%);
        }

        :hover {
          line:nth-of-type(2) {
            transform: translateX(0);
          }
        }
      }
    }

    button.open-mobile-menu {
      svg {
        line:nth-of-type(1) {
          transform: rotate(-45deg) translate(-45%, 45%);
        }

        line:nth-of-type(2) {
          transform: translateX(100%);
        }

        line:nth-of-type(3) {
          transform: rotate(45deg) translate(20%, -80%);
        }
      }
    }
  }
`;
