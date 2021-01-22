import styled from "styled-components";
import theme from "@styles/theme";

export const StyledFieldSet = styled.fieldset`
  border: none;

  legend {
    padding-bottom: 1em;
  }

  label {
    display: flex;
    align-items: center;
    margin-bottom: 0.4em;
  }
`;
