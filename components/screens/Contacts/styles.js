import styled from "styled-components";
import Color from "color";
import theme from "@styles/theme";
import { mmp } from "styles/utils/mediaProperty";

export const Container = styled.div`
  p {
    white-space: pre-wrap;
    line-height: 1.875em;

    strong {
      color: ${theme.colors.tercary};
      font-size: 1.2em;
    }
  }

  #map {
    width: 100%;
    height: 600px;
    background-color: grey;

    ${mmp("height", "600px", { md: "500px", xs: "300px" })};

  }

  .main {
    h2 {
      width: 100%;
    }

    .title {
      display: flex;
      align-items: center;
      background-image: ${theme.gradients.secondary};

      ${mmp("height", "7em", { xs: "4em" })};
    }

    .line {
      display: flex;
      align-items: center;
      background-color: ${theme.colors.secondary};

      ${mmp("height", "45px", { xs: "28px" })};
    }

    .line + div {
      margin: 1em auto;

      p {
        width: 100%;
        line-height: 1.875em;
        white-space: pre-wrap;
      }
    }

    .footer {
      ${theme.breakpoints.down("md")} {
        height: auto;
      }

      span {
        font-weight: bold;

        ${theme.breakpoints.down("xs")} {
          font-size: 15px;
        }
      }

      svg {
        fill: ${theme.colors.secondary};
      }

      > div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        ${theme.breakpoints.down("md")} {
          flex-direction: column;
          align-items: flex-start;

          > * {
            margin-bottom: 0.8em;
          }

          > *:first-child {
            margin-top: 0.8em;
          }
        }

        ${theme.breakpoints.down("xs")} {
        }

        .location {
          display: flex;
          align-items: center;

          svg {
            width: 3em;
            height: 3em;

            ${theme.breakpoints.down("md")} {
              margin: 0 1.2em 0 0.4em;
            }

            ${theme.breakpoints.down("xs")} {
              width: 2.6em;
              height: 2.6em;
            }
          }
        }

        .work-hours {
          display: flex;
          align-items: center;

          svg {
            width: 3em;
            height: 3em;
            margin-right: 1em;

            ${theme.breakpoints.down("md")} {
              margin: 0 1.2em 0 0.5em;
            }

            ${theme.breakpoints.down("xs")} {
              width: 2.1em;
              height: 2.1em;
            }
          }

          > span {
            span {
              display: block;

              ${theme.breakpoints.down("xs")} {
                display: inline-block;
                margin-right: 1em;
              }
            }
          }
        }

        .call-us {
          display: flex;
          align-items: center;

          svg {
            width: 3em;
            height: 3em;

            ${theme.breakpoints.down("md")} {
              margin: 0 0.6em;
            }

            ${theme.breakpoints.down("xs")} {
              width: 2.1em;
              height: 2.1em;
            }
          }

          .call-us-inner {
            span {
              color: ${theme.colors.white};
            }

            p {
              ${theme.breakpoints.down("xs")} {
                line-height: initial;
              }

              span {
              }

              span.phone-number {
                color: ${theme.colors.secondary};
              }
            }

            span.leave-my-number {
            }
          }
        }
      }
    }
  }
`;
