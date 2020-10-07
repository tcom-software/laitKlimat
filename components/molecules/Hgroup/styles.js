import styled from "styled-components";
import theme from "@styles/theme";

export const StyledHgroup = styled.hgroup`
  margin-top: var(--heading-margin);

  h1 {
    text-align: center;
    font-weight: normal;
    margin-bottom: 1em;

    ${theme.breakpoints.down("xs")} {
      font-weight: revert;
      color: ${theme.colors.secondary};
    }
  }

  h2 {
    font-weight: normal;
    margin-bottom: 1.5em;
    letter-spacing: 0.1em;

    ${theme.breakpoints.down("xs")} {
      margin: 0.625em 0;
      text-align: center;
      letter-spacing: 0.06em;
      color: ${theme.colors.tercary};
    }

    strong {
      font-weight: normal;
      color: ${theme.colors.tercary};
    }
  }
`;
