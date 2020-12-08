import styled from "styled-components";
import theme from "@styles/theme";
import { sizes } from "../../atoms/Text/styles";

export const StyledFieldSet = styled.fieldset`
  border: none;
  width: 310px;

  legend {
    padding-bottom: 1em;
  }

  .wrapper {
    max-height: 400px;
    overflow-y: auto;

    .no-search {
      text-transform: unset;
    }

    label {
      display: grid;
      grid-gap: 0.8em;
      grid-auto-flow: column;
      align-items: center;
      grid-template-columns: 70px min-content 1fr min-content;
      margin-bottom: 0.4em;

      img {
      }

      span:first-of-type {
        text-overflow: ellipsis;
        word-break: break-word;
        white-space: nowrap;
        overflow: hidden;
      }

      span:last-of-type {
        margin-left: auto;
      }

      input {
      }
    }
  }

  .search {
    margin-top: 1em;
    display: flex;

    label {
      flex: 1;

      p {
        display: none;
      }

      input {
        padding: 0.4em 0.75em;
        border: 1px solid ${theme.colors.gray100};
        box-shadow: none;
        ${sizes.smaller}
      }
    }

    button {
      padding: 0 0.1em;
      background-color: ${theme.colors.secondary};

      padding: 0 0.6em;
      display: grid;
      place-content: center;

      :active {
        transform: scale(0.98);
      }

      svg {
        width: 16px;
        height: 16px;
      }
    }
  }
`;
