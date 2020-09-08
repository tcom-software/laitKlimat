import styled, { css } from "styled-components";
import theme from "@styles/theme";

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

export const StyledButton = styled.button`
  padding: 13px 2em;
  border-radius: 2em;
  text-transform: uppercase;
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

  font-size: 18px;
  line-height: 22px;
  filter: ${theme.dropShadow.btn};

  ${theme.breakpoints.down("lg")} {
    font-size: 16px;
    line-height: 19px;
    padding: 10px 2em;
  }

  ${theme.breakpoints.down("xs")} {
    font-size: 12px;
    line-height: 15px;
    padding: 7px 2em;
  }

  ${({ variant }) => variants[variant]}
`;
