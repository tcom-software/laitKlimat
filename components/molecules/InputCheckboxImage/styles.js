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
    -webkit-overflow-scrolling: touch;

    label {
      display: grid;
      grid-gap: 0.8em;
      grid-auto-flow: column;
      grid-template-columns: min-content;
      margin-bottom: 0.4em;
      cursor: pointer;

      img {
        width: 30px;
        height: auto;
      }

      span {
        text-overflow: ellipsis;
        word-break: break-word;
        white-space: nowrap;
        overflow: hidden;
      }

      input {
        margin-left: auto;
        cursor: pointer;
      }

      &.disabled {
        pointer-events: none;
        
        img {
          filter: grayscale(1);
        }

        input {
          background-color: #e8e8e894;
        }

        span {
          color: #00000036;
        }
      }
    }
  }
`;
