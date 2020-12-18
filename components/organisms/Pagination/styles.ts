import theme from "@styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 2em 0 1em;

  .pagination {
    display: flex;
    position: relative;

    li {
      font-size: 18px;

      width: 2em;
      height: 2em;
      margin: 0 0.2em;

      background-color: ${theme.colors.white};
      cursor: pointer;

      &.previous,
      &.next {
        transition: transform 0.2s ease;
      }

      &.previous:hover {
        transform: translateX(-10%);
      }

      &.next:hover {
        transform: translateX(10%);
      }

      :not(.next):not(.previous) {
        box-shadow: ${theme.shadow.effect1};
      }

      &.selected,
      :focus,
      :hover:not(.next):not(.previous) {
        background-color: ${theme.colors.secondary};

        a {
          color: ${theme.colors.white};
        }
      }

      ${theme.breakpoints.down("xs")} {
        font-size: 16px;
      }

      a {
        color: ${theme.colors.primary};
        width: inherit;
        height: inherit;
        display: grid;
        place-content: center;

        :focus {
          outline: none;
        }
      }
      span {
        font-size: 1em;
      }
    }
  }
`;
