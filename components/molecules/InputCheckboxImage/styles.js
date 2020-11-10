import styled from "styled-components";
import theme from "@styles/theme";

export const StyledFieldSet = styled.fieldset`
  border: none;
  width: 230px;

  legend {
    padding-bottom: 1em;
  }

  div {
    height: 200px;
    overflow-y: auto;

    label {
      display: grid;
      grid-gap: 0.8em;
      grid-auto-flow: column;
      grid-template-columns: min-content;
      margin-bottom: 0.4em;

      span {
        text-overflow: ellipsis;
        word-break: break-word;
        white-space: nowrap;
        overflow: hidden;
      }

      input {
        margin-left: auto;
      }
    }
  }
`;
