import styled from "styled-components";
import theme from "@styles/theme";

export const StyledCeckbox = styled.input`
  width: 1.7em;
  height: 1.7em;
  padding: 0.6em;
  margin-right: 1em;
  background-color: ${theme.colors.gray100};

  ${theme.breakpoints.down("lg")} {
    width: 1.3em;
    height: 1.3em;
  }

  :checked {
    background-color: ${theme.colors.secondary};
    display: grid;
    place-content: center;

    ::before {
      content: url(/images/checkbox.svg);
      filter: brightness(10);
    }
  }
`;
