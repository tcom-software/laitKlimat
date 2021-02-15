import styled from "styled-components";
import theme from "@styles/theme";

export const StyledAddress = styled.address`
  background: url(/images/feather.png) center center/auto 100% repeat-x
    ${theme.colors.secondary};
  font-style: normal;

  .inner {
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${theme.colors.white};

    .icons {
      display: flex;
      align-items: center;

      svg {
        width: 1.5em;
        height: 1.5em;
        margin-right: 0.4em;
      }

      svg:nth-of-type(2) {
        width: 2em;
        height: 2em;
      }

      svg:nth-of-type(3) {
        width: 1.4em;
        height: 1.4em;
      }
    }

    .location {
      flex: 1;
      margin-left: 5vw;
      display: flex;
      align-items: center;

      svg {
        width: 1.2em;
        height: 1.2em;
        margin-right: 0.4em;
      }

      ${theme.breakpoints.down(1100)} {
        justify-self: flex-end;
        flex-grow: 0;
      }
    }

    .work-hours {
      display: flex;
      align-items: center;

      svg {
        width: 1.2em;
        height: 1.2em;
        margin-right: 1em;
      }

      span:first-of-type {
        margin-right: 2em;
      }

      ${theme.breakpoints.down(1100)} {
        display: none;
      }
    }

    .icons,
    .location,
    .work-hours {
      span {
        font-size: 0.85em;
        white-space: nowrap;
      }
    }
  }

  ${theme.breakpoints.down("xs")} {
    display: none;
  }
`;
