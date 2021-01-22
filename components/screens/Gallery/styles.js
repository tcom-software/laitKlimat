import styled from "styled-components";
import theme from "@styles/theme";
import { mmp } from "@styles/utils/mediaProperty";

export const Container = styled.div`
  margin-bottom: 4em;

  hgroup {
  }

  .gallery {
    display: grid;
    grid-gap: 3vw;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: 200px;

    ${theme.breakpoints.down("xs")} {
      grid-template-columns: 1fr 1fr;
    }

    .image--wrapper {
      overflow: hidden;
      cursor: pointer;

      picture {
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;
