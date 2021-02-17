import styled, { css, keyframes } from "styled-components";
import theme from "@styles/theme";

const variants = {
  primary: css`
    background-image: ${theme.gradients.primary};
  `,
  secondary: css`
    background-image: ${theme.gradients.secondary};
  `,
  tercary: css`
    background-image: ${theme.gradients.tercary};
  `,
};

export const Container = styled.div`
  height: 395px;
  overflow: hidden;
  position: relative;

  ${theme.breakpoints.down("lg")} {
    height: 330px;
  }

  ${theme.breakpoints.down("xs")} {
    height: 250px;
  }

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;

    svg {
      position: absolute;
    }

    svg[data-circle1] {
      top: 0;
      left: 0;
      animation: svgElemAnimate infinite linear 20s forwards;

      @keyframes svgElemAnimate {
        from {
          transform: translate(0%, 0%);
        }
        25% {
          transform: translate(5%, 5%);
        }
        50% {
          transform: translate(10%, 0%);
        }
        75% {
          transform: translate(5%, 5%);
        }
        to {
          transform: translate(0%, 0%);
        }
      }

      ${theme.breakpoints.down("xs")} {
        top: -5%;
        left: -13%;
        transform: scale(1.1);
        animation: none;
      }
    }

    svg[data-circle2] {
      bottom: 0;
      left: 44%;
      transform: translateY(50%) scale(1.5);
      animation: svgElemAnimate1 infinite linear 20s forwards;

      @keyframes svgElemAnimate1 {
        from {
          transform: translate(0%, 50%) scale(1.5);
        }
        25% {
          transform: translate(5%, 45%) scale(1.5);
        }
        50% {
          transform: translate(10%, 50%) scale(1.5);
        }
        75% {
          transform: translate(5%, 45%) scale(1.5);
        }
        to {
          transform: translate(0%, 50%) scale(1.5);
        }
      }

      ${theme.breakpoints.down("xs")} {
        right: 5%;
        left: unset;
        transform: translateY(60%) scale(1.2);
        animation: none;
      }
    }

    svg[data-circle3] {
      top: 0;
      right: 0;
      transform: translate(25%, -70%) scale(1.5);
      animation: svgElemAnimate3 infinite linear 20s forwards;

      @keyframes svgElemAnimate3 {
        from {
          transform: translate(25%, -70%) scale(1.5);
        }
        25% {
          transform: translate(30%, -75%) scale(1.5);
        }
        50% {
          transform: translate(35%, -70%) scale(1.5);
        }
        75% {
          transform: translate(30%, -75%) scale(1.5);
        }
        to {
          transform: translate(25%, -70%) scale(1.5);
        }
      }

      ${theme.breakpoints.down("xs")} {
        display: none;
      }
    }

    svg[data-group1] {
      bottom: 0;
      left: 5%;

      ${theme.breakpoints.down("xs")} {
        bottom: -42%;
        left: 8%;
      }
    }

    svg[data-group2] {
      top: 3%;
      left: 30%;

      ${theme.breakpoints.down("xs")} {
        top: -10%;
        left: unset;
        right: 4%;
        transform: scale(1.3);
      }
    }

    svg[data-group3] {
      top: 0%;
      left: 56%;

      ${theme.breakpoints.down("xs")} {
        display: none;
      }
    }

    svg[data-group4] {
      bottom: 8%;
      right: 16%;

      ${theme.breakpoints.down("xs")} {
        display: none;
      }
    }
  }

  ${({ variant }) => variants[variant]}
`;

export const Section = styled.section`
  z-index: 1;
  width: 100%;
  margin: auto;
  max-width: 1400px;
  padding: 0 var(--global-margin);

  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${theme.breakpoints.down("xs")} {
    max-width: 600px;
    flex-direction: column-reverse;
  }

  &.team-section {
    max-width: unset;
    background: white;

    ${theme.breakpoints.down("xs")} {
      padding: 0;

      .slick-list {
        width: 100%;

        .slick-slide {
          padding: 0 !important;
        }
      }
    }

    .slick-list {
      width: 100%;

      .slick-slide {
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
        }
      }
    }
  }

  .slick-slider {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    .slick-list {
      height: 100%;

      .slick-track {
        height: inherit;

        .slick-slide {
          outline: none;
          height: inherit;
          overflow: hidden;
          padding: 0 5px;
          cursor: grab;

          :active {
            cursor: grabbing;
          }

          :focus {
            outline: none;
          }

          > div {
            height: inherit;

            .team,
            .wrapper {
              outline: none;
              height: inherit;
            }

            .team {
            }

            .wrapper {
              outline: none;
              height: inherit;
              display: flex !important;
              justify-content: space-between;

              ${theme.breakpoints.up("xs")} {
                padding: 40px;
              }

              .info {
                width: max-content;
                align-self: center;

                ${theme.breakpoints.up("xs")} {
                  align-self: flex-end;
                }

                .texts {
                  p {
                    /* jamanakavor */
                    margin-bottom: 10px;

                    strong {
                      color: white;
                    }
                  }
                }

                .buttons {
                  width: 500px;
                  display: grid;
                  grid-auto-flow: column;
                  grid-column-gap: 1em;
                  margin-top: 2em;

                  ${theme.breakpoints.down("xs")} {
                    margin-top: 1em;
                    width: 100%;
                  }
                }
              }

              .image {
                img {
                  width: 100%;
                  height: 100%;
                  object-fit: contain;
                  filter: ${theme.dropShadow.banner};

                  ${theme.breakpoints.down("xs")} {
                    display: none;
                    /* width: 80%;
                    height: auto;
                    object-fit: contain;
                    flex-direction: column-reverse; */
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
