import styled from "styled-components";
import theme from "@styles/theme";
import Color from "color";

export const Container = styled.div`
  padding-top: 0;
  padding-bottom: 3rem;

  ${theme.breakpoints.down("xs")} {
    padding-right: 0;
    padding-left: 0;
  }

  h1 {
    font-weight: normal;
    text-align: center;
    padding: var(--heading-margin) 1.5em;

    ${theme.breakpoints.down("xs")} {
      font-weight: bold;
      color: ${theme.colors.secondary};
    }
  }

  .categories {
    display: grid;
    grid-template-columns: 1fr 3fr;
    margin: 0 8rem;

    /* ${theme.breakpoints.down("lg")} {
      height: 400px;
    } */

    ${theme.breakpoints.down("xs")} {
      grid-template-columns: 1fr;
      margin: 0;
      height: auto;
    }

    .sidebox {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid ${theme.colors.blue100};
      padding: 0 0.7em;

      ${theme.breakpoints.down("xs")} {
        display: none;
      }

      ul {
        li {
          padding: 0.5em 0;
          color: ${theme.colors.primary};

          ${theme.breakpoints.down("lg")} {
            padding: 0.3em 0;
          }

          :hover {
            a {
              span {
                color: ${theme.colors.secondary};
                text-decoration: underline;
              }
            }
          }
        }
      }
    }

    .boxes {
      > ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 250px);

        ${theme.breakpoints.down("lg")} {
          grid-template-rows: repeat(2, 200px);
        }

        ${theme.breakpoints.down("xs")} {
          grid-template-columns: 1fr;
          grid-template-rows: initial;
          grid-auto-rows: 300px;
        }

        > li {
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          cursor: pointer;
          overflow: hidden;
          position: relative;

          > div {
            position: absolute;
            width: 100%;
            height: 100%;
            padding: 0 5em;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            img {
              ${theme.breakpoints.down("lg")} {
                width: 100px;
              }
            }

          }

          &:nth-of-type(1) {
            background-color: ${theme.colors.blue900};
          }
          &:nth-of-type(2) {
            background-color: ${theme.colors.blue700};
          }
          &:nth-of-type(3) {
            background-color: ${theme.colors.blue500};
          }
          &:nth-of-type(4) {
            background-color: ${theme.colors.blue300};
          }
          &:nth-of-type(5) {
            background-color: ${theme.colors.blue100};
          }

          .sub-menu-list {
            padding: 0 3em;
            counter-reset: section;
            width: 100%;
            height: 100%;
            display: grid;
            place-content: center;

            div[data-go-back] {
              position: absolute;
              bottom: 1em;
              right: 2em;
              width: 2em;
              height: 1em;
              display: flex;
              align-items: center;
              justify-content: center;

              div {
                width: 100%;
                height: 2px;
                background-color: white;

                ::before {
                  content: "";
                  width: 0.5em;
                  height: 0.5em;
                  border: 2px solid white;
                  border-left-width: 0;
                  border-bottom-width: 0;
                  position: absolute;
                  left: 0;
                  top: 50%;
                  transform: translateY(-50%) rotate(-135deg);
                }
              }
            }

            li {
              padding: 0.3em 0;

              &:not(:last-of-type) {
                border-bottom: 1px solid ${Color(theme.colors.white).fade(0.8)};
              }

              span {
                font-size: 16px;
                line-height: 18px;
                color: ${theme.colors.white};

                :hover {
                  font-weight: bold;
                }
              }
            }

            &_item {
              + .subsub-menu-list {
                padding: 0 3em;
                width: 100%;
                height: 100%;

                display: grid;
                align-content: center;
                position: absolute;
                top: 50%;
                left: -100%;
                transform: translateY(-50%);

                visibility: hidden;
                transition: visibility 0s 0.5s;
              }

              + .subsub-menu-list[data-visible="true"] {
                visibility: visible;
                transition: visibility 0s 0s;
              }
            }

            /* ${theme.breakpoints.between("md", "lg")} {
              padding: 0 3em;

              img {
                transform: scale(0.7);
              }
            }

            ${theme.breakpoints.between("xs", "md")} {
              padding: 0 1em;

              img {
                transform: scale(0.6);
              }
            } */
          }

          span {
            text-align: center;
            margin-top: 1em;

            ${theme.breakpoints.down("xs")} {
              font-size: 18px;
              line-height: 22px;
            }
          }
        }
      }
    }
  }
`;
