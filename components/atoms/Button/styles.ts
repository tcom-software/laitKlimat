import styled, { css, keyframes } from "styled-components";
import theme from "@styles/theme";
import { Variant } from "./types";

const loopRotate = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const variants = {
  primary: css`
    color: ${theme.colors.white};
    background: ${theme.colors.secondary};
    border: 1px solid ${theme.colors.secondary};
  `,
  secondary: css`
    color: ${theme.colors.secondary};
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.secondary};
  `,
  tercary: css`
    color: ${theme.colors.tercary};
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.tercary};
  `,
};

interface StyledButtonProps {
  variant: Variant;
}

export const StyledButton = styled.button<StyledButtonProps>`
  border-radius: 2em;
  padding: 0.75rem 2em;
  font-family: ${theme.fonts.primary};
  transition: transform 150ms ease;

  /* on mouse move */
  :hover,
  :focus {
  }

  /* on click */
  :active {
    transform: scale(0.985);
    transition: transform 50ms ease;
  }

  font-size: 1.125em;
  line-height: 1.375rem;
  filter: ${theme.dropShadow.btn};

  ${theme.breakpoints.down("lg")} {
    font-size: 1em;
    line-height: 1.25rem;
    padding: 0.625rem 2em;
  }

  ${theme.breakpoints.down("xs")} {
    font-size: 0.75em;
    line-height: 0.9375rem;
    padding: 0.4375rem 2em;
  }

  ${({ variant }) => variants[variant]}

  &.loading {
    span {
      img {
        height: 60%;
        top: 50%;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: ${loopRotate} 0.8s linear infinite;
      }

      &.light {
        img {
          filter: invert(41%) sepia(100%) saturate(341%) hue-rotate(157deg)
            brightness(100%) contrast(107%);
        }
      }

      &:last-of-type {
        opacity: 0;
      }
    }
  }
`;
