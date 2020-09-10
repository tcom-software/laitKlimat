import styled, { css } from "styled-components";
import theme from "@styles/theme";

const sizes = {
  small: css`
    font-size: 16px;
    line-height: 20px;

    ${theme.breakpoints.down("lg")} {
      font-size: 14px;
      line-height: 17px;
    }
  `,
  normal: css`
    font-size: 18px;
    line-height: 22px;

    ${theme.breakpoints.down("lg")} {
      font-size: 12px;
      line-height: 15px;
    }
  `,
  larg: css`
    font-size: 24px;
    line-height: 29px;

    ${theme.breakpoints.down("lg")} {
      font-size: 18px;
      line-height: 22px;
    }
  `,
  larger: css`
    font-size: 36px;
    line-height: 44px;
    font-weight: bold;

    ${theme.breakpoints.down("lg")} {
      font-size: 24px;
      line-height: 30px;
    }

    ${theme.breakpoints.down("xs")} {
      font-size: 18px;
      line-height: 22px;
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
