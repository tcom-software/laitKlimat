import styled from "styled-components";
import theme from "@styles/theme";
import { sizes } from "./Text/styles";

export const StyledLabel = styled.label`
  position: relative;

  p {
    padding: 0 0 0.7em 0.3em;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.9em 1.875em;
    box-shadow: ${theme.shadow.effect1};
    ${sizes.small}

    ::placeholder {
      text-transform: uppercase;
      color: ${theme.colors.placeholder};
    }

    :focus {
      box-shadow: ${theme.shadow.effect1Hover};

      ::placeholder {
        color: ${theme.colors.gray100};
      }
    }
  }

  &.select {
    pointer-events: none;

    input {
      pointer-events: painted;
      user-select: none;
      position: relative;
      cursor: pointer;
      z-index: 1;
    }

    .custom-selest {
      pointer-events: all;
      position: absolute;
      overflow: hidden;
      top: 100%;
      width: 100%;
      background-color: #2591d1;
      border-bottom-right-radius: 0.5em;
      border-bottom-left-radius: 0.5em;
      color: white;
      will-change: transform;
      transform: scaleY(0);
      transform-origin: top;
      transition: transform 0.3s ease;

      &.isOpen {
        transform: scaleY(1);
      }

      li {
        padding: 0.4em 1.875em;
        cursor: pointer;

        :hover,
        &.selected {
          background-color: #47abe6;
        }
      }
    }
  }

  textarea {
    resize: none;
  }
`;
