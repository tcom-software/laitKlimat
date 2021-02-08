import styled from "styled-components";
import theme from "@styles/theme";

export const Container = styled.section`
  padding-top: 1em;
  padding-bottom: 1em;
  display: flex;
  align-items: center;

  ${theme.breakpoints.down("xs")} {
    display: none;
  }

  .logo-wrapper {
    display: contents;

    .logo {
      cursor: pointer;
    }
  }
`;

export const StyledNav = styled.nav`
  margin-left: 60px;

  .menu-list {
    display: flex;
    flex-flow: wrap;

    &_item {
      margin: 0 1em;
      padding: 0.2em 0;
      color: ${theme.colors.primary};

      &:hover {
        a {
          span {
            color: #2591d1;
            text-decoration: underline;
          }
        }
      }

      a {
        color: inherit;

        span {
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
  }
`;
