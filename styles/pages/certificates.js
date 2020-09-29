import styled from "styled-components";
import theme from "@styles/theme";

export const Container = styled.div`
  hgroup {
    margin-top: var(--heading-margin);

    h1 {
      text-align: center;
      font-weight: normal;

      ${theme.breakpoints.down("xs")} {
        color: ${theme.colors.secondary};
        font-weight: revert;
      }
    }

    h2 {
      font-weight: normal;
      margin: 1.5em 0;

      ${theme.breakpoints.down("xs")} {
        margin: 0.625em 0;
        text-align: center;
      }

      strong {
        font-weight: normal;
        color: ${theme.colors.tercary};
      }
    }
  }

  .gallery {
    padding-top: 1em;

    display: flex;
    flex-flow: wrap;
    justify-content: space-around;

    > div {
      margin: 0 3em 3em 0;

      ${theme.breakpoints.down("xs")} {
        margin: 0 1em 3em;
      }

      .certificate--wrapper {
        display: block;
        border: 1em solid #eeeeee;
        box-shadow: 7px 7px 11px 0px rgb(0 0 0 / 0.25),
          inset 0px 0px 8px 3px rgb(0 0 0 / 0.2);
        /* width: 100%; */

        height: 300px;
        cursor: pointer;

        ${theme.breakpoints.down("xs")} {
          height: 200px;
        }

        img {
          padding: 0.1em;
          height: 100%;
          /* width: 100%; */
        }
      }

      > p {
        margin: 0.8em 0;
        text-align: center;
      }

      p + img {
        margin: 0 auto;
        width: 100%;
        height: 1.5em;
        object-fit: contain;
      }
    }
  }
`;
