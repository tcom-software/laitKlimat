import styled from "styled-components";
import theme from "@styles/theme";

export const Container = styled.div`
  hgroup {
    h2 {
      ${theme.breakpoints.down("xs")} {
        color: ${theme.colors.primary};
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
        border: 1em solid #eeeeee;
        box-shadow: 7px 7px 11px 0px rgb(0 0 0 / 0.25),
          inset 0px 0px 8px 3px rgb(0 0 0 / 0.2);
        height: 300px;
        transition: 0.5s ease;
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

      p + picture img {
        margin: 0 auto;
        width: 100%;
        height: 1.5em;
        object-fit: contain;
      }
    }
  }
`;
