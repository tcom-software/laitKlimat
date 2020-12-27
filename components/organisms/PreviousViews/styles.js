import styled from "styled-components";
import theme from "@styles/theme";

export const Container = styled.section`
  margin-top: 4em;

  width: 100%;
  display: flow-root;

  h3 {
    text-align: center;
    margin-bottom: 2em;
    font-weight: normal;
  }

  .no_products {
    text-align: center;
  }

  .prev-products {
    position: relative;
    overflow: hidden;

    ${theme.breakpoints.up("xs")} {
      padding: 0 30px;
    }

    .slick-arrow {
      width: 60px;
      height: 44px;
      cursor: pointer;
      background-color: ${theme.colors.white};
      position: absolute;
      top: 50%;
      transform: translate(10%, -50%);
      display: flex !important;
      align-items: center;
      justify-content: center;
      z-index: 1;
      box-shadow: ${theme.shadow.effect1};

      svg {
        fill: none;
        width: 40px;
        filter: drop-shadow(1px 3px 2px ${theme.colors.gray300});
        transition: transform 0.2s ease;

        g {
          stroke: ${theme.colors.fourth};
        }
      }

      :hover {
        background-color: ${theme.colors.secondary};

        svg {
          filter: none;
          transform: translateX(-10%);

          g {
            stroke: ${theme.colors.white};
          }
        }
      }

      &.slick-prev {
        left: 0;
      }

      &.slick-next {
        right: 0;
        transform: translate(-10%, -50%) scale(-1);

        svg {
          filter: drop-shadow(1px -3px 2px ${theme.colors.gray300});
        }
      }
    }

    .slick-list {
      overflow: hidden;

      .slick-track {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;

        .slick-slide {
          height: auto;
          padding: 0.5em;

          /* ${theme.breakpoints.down("xs")}{
            padding: 0.5em 1em;
          } */
        }
      }
    }
  }
`;
