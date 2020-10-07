import styled from "styled-components";
import theme from "@styles/theme";
import { mmp } from "styles/utils/mediaProperty";

export const Container = styled.div`
  margin-bottom: 3em;

  > div:not(:last-of-type) {
    margin-bottom: 1em;
  }

  > div:last-of-type {
    margin-bottom: 2em;
  }

  > span {
    ${theme.breakpoints.down("xs")} {
      display: block;
      margin-bottom: 1em;
    }
  }

  > button {
    float: right;

    ${theme.breakpoints.down("xs")} {
      float: unset;
      display: block;
      margin-left: auto;
    }
  }
`;
