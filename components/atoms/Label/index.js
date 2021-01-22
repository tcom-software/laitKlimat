import styled from "styled-components";
import theme from "@styles/theme";
import { sizes } from "../Text/styles";

export const StyledLabel = styled.label`
  p {
    padding: 0 0 0.7em 0.3em;
  }

  textarea {
    width: 100%;
    resize: none;
    padding: 0.9em 1.875em;
    box-shadow: ${theme.shadow.effect1};
    ${sizes.small}

    ::placeholder {
      text-transform: uppercase;
    }
  }

  input {
    width: 100%;
    padding: 0.9em 1.875em;
    box-shadow: ${theme.shadow.effect1};
    ${sizes.small}

    ::placeholder {
      text-transform: uppercase;
    }
  }
`;
