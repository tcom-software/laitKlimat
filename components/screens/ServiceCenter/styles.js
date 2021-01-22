import styled from "styled-components";
import theme from "@styles/theme";
import { mmp } from "@styles/utils/mediaProperty";

export const Container = styled.div`
  hgroup {
    h2 {
      font-weight: bold;
      color: ${theme.colors.secondary};
    }
  }

  .form--wrapper {
    margin-bottom: 2em;

    ${theme.breakpoints.down("xs")} {
      margin-top: 1em;
    }

    form {
      width: 50%;

      ${mmp("width", "50%", { md: "70%", xs: "100%" })}

      > label {
        display: block;

        p {
          margin: 0.75em 0;

          ${theme.breakpoints.down("xs")} {
            font-size: 0.875em;
            margin: 0.5em 0;
            color: ${theme.colors.secondary};
          }
        }

        input {
          width: 100%;
          font-size: 1.1em;
          padding: 0.6em 1em;
          border: 1px solid ${theme.colors.gray100};
          box-shadow: ${theme.shadow.effect1};

          ${theme.breakpoints.down("xs")} {
            font-size: 0.875em;
          }
        }
      }

      fieldset {
        margin: 3em 0;
        border: 0;

        ${theme.breakpoints.down("xs")} {
          margin: 2em 0;
        }

        legend {
          p {
            ${theme.breakpoints.down("xs")} {
              font-size: 0.875em;
            }
          }
        }

        label {
          display: block;
          padding: 0.5em 0;

          ${theme.breakpoints.down("lg")} {
            padding: 0.3em 0;
          }

          p {
            ${theme.breakpoints.down("xs")} {
              font-size: 0.875em;
            }
          }

          input {
            margin-right: 1em;
            /* padding: 0.6em; */
            /* border: 1px solid ${theme.colors.secondary}; */
            background-color: ${theme.colors.gray100};
            width: 1.7em;
            height: 1.7em;
            display: flex;
            align-items: center;
            justify-content: center;
            float: left;

            ${theme.breakpoints.down("lg")} {
              width: 1.3em;
              height: 1.3em;
            }

            ${theme.breakpoints.down("xs")} {
              font-size: 0.875em;
            }

            :checked {
              background-color: ${theme.colors.secondary};

              ::before {
                content: url(/images/checkbox.svg);
                filter: brightness(10);
              }
            }
          }
        }
      }

      button[type="submit"] {
        ${theme.breakpoints.down("xs")} {
          width: 50%;
        }
      }
    }
  }
`;
