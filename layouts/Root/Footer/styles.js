import styled from "styled-components";
import theme from "@styles/theme";

export const StyledFooter = styled.footer`
  background-color: ${theme.colors.footer};

  .inner {
    padding-top: 3.8em;
    padding-bottom: 5em;

    .link-wrapper {
      display: flex;
      justify-content: center;
      margin-bottom: 3em;

      img {
        filter: brightness(0) invert(1);

        ${theme.breakpoints.down("xs")} {
          width: 60%;
          max-width: 300px;
        }
      }
    }

    .menu {
      > ul {
        display: flex;

        ${theme.breakpoints.down("xs")} {
          flex-direction: column;

          > li {
            margin-bottom: 3em;
          }
        }

        > li {
          flex: 1;
          text-align: center;

          > span {
            font-weight: bold;

            ${theme.breakpoints.down("xs")} {
              font-size: 18px !important;
              line-height: 20px !important;
            }
          }

          span {
            ${theme.breakpoints.down("xs")} {
              font-size: 14px;
              line-height: 17px;
            }
          }

          .list,
          .icons {
            margin-top: 1.2em;

            ${theme.breakpoints.down("xs")} {
              margin-top: 0.6em;
            }
          }

          .list {
            li {
              padding: 0.3em 0;

              span {
              }
            }
          }

          .icons {
            display: flex;
            flex-flow: wrap;
            justify-content: center;
            flex-basis: calc(100% / 3);

            ${theme.breakpoints.down("xs")} {
              max-width: 20em;
              margin-top: 1em;
              margin-right: auto;
              margin-left: auto;
            }

            li {
              padding-bottom: 1.2em;

              img {
                width: 80%;
              }
            }
          }

          .social-icons {
            display: flex;
            margin: 0 auto;
            justify-content: center;
            width: 7em;

            svg {
              height: 2em;

              ${theme.breakpoints.between("xs", "lg")} {
                height: 1.5em;
              }
            }
          }
        }
      }
    }
  }

  article {
    height: 100px;
    background-color: ${theme.colors.footerDark};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 var(--global-margin);

    ${theme.breakpoints.down("xs")} {
      background-color: inherit;
      padding: 0 var(--global-margin) 4em;
    }

    p {
      color: #f2f2f2;
      max-width: 1200px;
      white-space: pre-wrap;
      text-align: center;
      line-height: 150%;
    }
  }
`;
