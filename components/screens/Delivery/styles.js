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

  .main {
    > div:first-of-type {
      display: flex;
      justify-content: space-between;

      ${theme.breakpoints.down("xs")} {
        flex-direction: column-reverse;
      }

      .left-side {
        h3 {
          margin: 1em 0 0.3em;
        }

        ul {
          li {
            span {
              line-height: 1.875em;
            }
          }
        }

        .payment-icons {
          display: flex;
          flex-flow: wrap;
          justify-content: center;
          max-width: 20em;
          margin-top: 2em;

          ${theme.breakpoints.down("xs")} {
            margin-top: 1em;
            margin-right: auto;
            margin-left: auto;
          }

          li {
            padding-bottom: 1.2em;
            flex-basis: calc(100% / 3);

            img {
              width: 80%;
            }
          }
        }
      }

      .right-side {
        align-self: center;
        margin: 0 auto;
        width: auto;

        ${theme.breakpoints.down("xs")} {
          width: 90%;
          margin: 1em auto;
        }

        img {
          ${mmp("width", "unset", { lg: "40vw", xs: "100%" })};
        }
      }
    }
  }

  .delivery-in,
  .delivery-out {
    p {
      font-weight: bold;
      line-height: 1.875em;
    }
  }

  .delivery-in {
    background-color: ${Color(theme.colors.secondary).fade(0.9)};
    ${mmp("margin-top", "1.5em", { xs: "1em" })};
  }

  .delivery-out {
    background-color: ${Color(theme.colors.tercary).fade(0.9)};
    ${mmp("margin-bottom", "1.5em", { xs: "1em" })};
  }

  .delivery-out + div {
    ${mmp("margin-bottom", "1.5em", { xs: "1em" })};
  }

  .about-delivary {
    h5,
    h4 {
      width: 100%;
    }

    .title {
      display: flex;
      align-items: center;
      background-image: ${theme.gradients.secondary};

      ${mmp("height", "7em", { xs: "4em" })};
    }

    dl {
      :last-of-type {
        padding-bottom: 2em;
      }

      dt {
        display: flex;
        align-items: center;
        background-color: ${theme.colors.secondary};

        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
      }

      dd {
        margin: 1em auto;

        p {
          width: 100%;
          line-height: 1.875em;
          white-space: pre-wrap;
        }
      }
    }
  }
`;
