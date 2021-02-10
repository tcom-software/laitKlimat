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
    cursor: pointer;

    input {
      cursor: pointer;
    }

    &.disabled {
      pointer-events: none;

      input {
        pointer-events: none;
        background-color: #e8e8e894;
      }

      span {
        color: #00000036;
      }
    }
  }
`;
