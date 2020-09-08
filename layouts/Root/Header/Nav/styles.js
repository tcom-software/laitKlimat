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

  .link-wrapper {
    display: contents;

    .logo {
      cursor: pointer;
    }
  }
`;

export const StyledNav = styled.nav`
  float: right;
  flex: 1;

  .menu-list {
    display: flex;
    float: right;
    flex-flow: wrap;

    &_item {
      margin: 0 1em;
      padding: 0.2em 0;
      text-transform: uppercase;
      color: ${theme.colors.primary};

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
