import styled, { css } from "styled-components";
import theme from "@styles/theme";

const sizes = {
  small: css`
    font-size: 1em;
    line-height: 1.25rem;

    ${theme.breakpoints.down("lg")} {
      font-size: 0.875em;
      line-height: 1.0625rem;
    }
  `,
  normal: css`
    font-size: 1.125em;
    line-height: 1.375rem;

    ${theme.breakpoints.down("lg")} {
      font-size: 0.75em;
      line-height: 1rem;
    }
  `,
  larg: css`
    font-size: 1.5em;
    line-height: 1.875rem;

    ${theme.breakpoints.down("lg")} {
      font-size: 1.125em;
      line-height: 1.375rem;
    }
  `,
  larger: css`
    font-size: 2.25em;
    line-height: 2.75rem;
    font-weight: bold;

    ${theme.breakpoints.down("lg")} {
      font-size: 1.5em;
      line-height: 1.875rem;
    }

    ${theme.breakpoints.down("xs")} {
      font-size: 1.125em;
      line-height: 1.375rem;
    }
  `,
};

export const Tag = styled.div`
  text-transform: uppercase;
  color: ${({ clr }) => theme.colors[clr]};

  ${({ sz }) =>
    typeof sz === "number"
      ? css`
          font-size: ${sz}em;
        `
      : sizes[sz]}

  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `};
`;
