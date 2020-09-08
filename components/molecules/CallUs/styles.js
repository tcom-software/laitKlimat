import styled from "styled-components";
import theme from "@styles/theme";

export const Container = styled.div`
  svg {
    cursor: pointer;
    transition: 0.2s ease;

    :hover {
      transform: scale(1.05) rotate(-5deg);
    }
  }

  .call-us-inner {
    margin-left: 0.5em;

    span {
      text-transform: capitalize;
      white-space: nowrap;
    }

    .leave-my-number {
      cursor: pointer;
    }

    p {
      .phone-number {
        margin-left: 0.5em;
        color: ${theme.colors.secondary};
      }
    }
  }
`;
