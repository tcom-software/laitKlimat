import styled from "styled-components";

import { sizes } from "../../atoms/Text/styles";
import theme from "@styles/theme";

export const StyledFieldSet = styled.fieldset`
  border: none;

  legend {
    padding-bottom: 1em;
  }

  div {
    display: flex;
  }

  label {
    :first-of-type {
      margin-right: 1.125em;

      ${theme.breakpoints.down("md")} {
        margin-right: 0.5em;
      }
    }

    /* hide label */
    p {
      display: none;
    }

    input {
      width: 140px;
      padding: 0.4em 0.75em;
      border: 1px solid ${theme.colors.gray100};
      box-shadow: none;
      ${sizes.smaller}

      ${theme.breakpoints.between("md", "lg")} {
        width: 100px;
      }

      ${theme.breakpoints.between("xs", "md")} {
        width: 80px;
      }

      ${theme.breakpoints.down("xs")} {
        width: 100%;
      }
    }
  }

  &.disabled {
    pointer-events: none;
    
    legend {
      span {
        color: #00000036;
      }
    }
  }
`;
