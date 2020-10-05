import styled from "styled-components";
import theme from "@styles/theme";

export const StyledHgroup = styled.hgroup`
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
