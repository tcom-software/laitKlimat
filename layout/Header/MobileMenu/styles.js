import styled from "styled-components";
import theme from "@styles/theme";

export const Container = styled.section`
  display: none;
  top: 128px;
  width: 100%;
  position: fixed;
  overflow: scroll;

  height: calc(100vh - 128px);
  background-color: ${theme.colors.white};
  z-index: 98;

  padding: 0 var(--global-margin);
  padding-bottom: 2em;

  ${theme.breakpoints.down("xs")} {
    display: block;
  }

  ul {
    margin-bottom: 2em;

    li {
      border: 1px solid ${theme.colors.gray100};
      margin-bottom: 0.4em;
      position: relative;

      > span,
      a {
        color: ${theme.colors.fourth};
        text-transform: uppercase;
        color: inherit;
        text-align: left;
        font-weight: normal;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 3em 0 1.5em;
        height: 3.5em;
      }

      &.active {
        background-color: ${theme.colors.secondary};

        span,
        a {
          color: ${theme.colors.white};
        }
      }
    }

    li.categories {
      ::after {
        content: "";
        padding: 4px;
        right: 1.3em;
        top: 50%;
        position: absolute;
        display: inline-block;
        border-style: solid;
        border-width: 0 2px 2px 0;
        border-color: ${theme.colors.gray300};
        transform: rotate(-45deg) translateY(-50%);
        transition: all 0.2s ease;
        transform-origin: 50% 0%;
      }

      &.categories-open {
        background-color: ${theme.colors.tercary};
        color: ${theme.colors.white};

        ::after {
          border-color: ${theme.colors.white};
          transform: rotate(45deg) translateY(-50%);
        }
      }
    }

    li.categories + .category-list {
      position: relative;

      span {
        font-size: 14px;
        line-height: 17px;
        color: ${theme.colors.tercary};
        text-transform: uppercase;
      }

      .category-item[data-arrow="true"] {
        ::after {
          content: "";
          padding: 4px;
          right: 1.3em;
          top: 50%;
          position: absolute;
          display: inline-block;
          border-style: solid;
          border-width: 0 2px 2px 0;
          border-color: ${theme.colors.tercary};
          transform: rotate(-45deg) translateY(-50%);
          transition: all 0.2s ease;
          transform-origin: 50% 0%;
        }
      }

      > .category-item {
        img {
          padding-left: 1.5em;
        }
      }

      .category-item {
        display: flex;
        align-items: center;
        transition: all 0.2s ease;
        cursor: pointer;
      }

      .category-item.category-item_open {
        border-color: ${theme.colors.tercary};

        &[data-arrow="true"] {
          ::after {
            transform: rotate(45deg) translateY(-50%);
          }
        }

        + .category-list {
          display: block;
        }
      }

      .category-list {
        display: none;
        background-color: ${theme.colors.white};

        .category-item {
          position: relative;
          height: 3.5em;

          a {
            width: 100%;
          }

          /* categories leavs without arrow (subcategories) */
          &[data-arrow="false"] {
            padding: 0.5em 1.4em;

            :hover {
              background-color: ${theme.colors.tercary};
              border-color: ${theme.colors.tercary};

              a {
                span {
                  color: ${theme.colors.white};
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const StyledAddress = styled.address`
  color: ${theme.colors.primary};
  font-style: normal;
  padding: 0 5vw;

  > * {
    margin-bottom: 0.9em;
  }

  svg {
    fill: ${theme.colors.secondary};
  }

  .call-us {
    display: flex;

    p {
      word-break: break-word;
    }

    span {
      font-size: 14px;
      line-height: 17px;
    }

    .phone-number {
      font-size: 18px;
      line-height: 22px;
    }

    svg {
      min-width: 2.2em;
      max-width: 2.2em;
      margin-right: 0.4em;
    }
  }

  .icons {
    display: flex;
    align-items: center;

    svg {
      width: 2.4em;
      height: 2.4em;
      margin-right: 0.4em;
    }

    svg:nth-of-type(2) {
      width: 2.8em;
      height: 2.8em;
    }

    svg:nth-of-type(3) {
      width: 2.2em;
      height: 2.2em;
    }
  }

  .address {
    display: flex;
    align-items: center;

    svg {
      min-width: 2.5em;
      max-width: 2.5em;

      margin-right: 0.9em;
      margin-left: -0.2em;
      float: left;
    }
  }

  .work-hours {
    display: flex;
    align-items: center;

    span {
      display: block;
    }

    svg {
      min-width: 2.2em;
      max-width: 2.2em;

      margin-right: 1em;
    }

    span:first-of-type {
      margin-right: 2em;
    }
  }

  .icons,
  .address,
  .call-us,
  .work-hours {
    span {
      text-transform: uppercase !important;
    }
  }
`;
