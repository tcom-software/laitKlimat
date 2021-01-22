import styled from "styled-components";
import theme from "@styles/theme";

export const Container = styled.div`
  .gallery {
    margin: 4em 0 6em;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 4em;

    ${theme.breakpoints.down("xs")} {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2em 1em;
      margin: 2em 0 3em;
    }

    > div {
      .scene {
        perspective: 600px;
        transition: 0.5s ease;

        :hover .card {
          transform: rotateY(-180deg);
        }

        .card {
          width: 300px;
          margin: 0 auto;
          position: relative;
          height: 200px;
          transform-style: preserve-3d;
          transform-origin: 50% 50%;
          transition: transform 0.5s;
          cursor: pointer;

          ${theme.breakpoints.down("xs")} {
            width: 60%;
            height: 17vw;
          }

          .card__face {
            position: absolute;
            width: 100%;
            backface-visibility: hidden;

            picture {
              img {
                height: auto;
                width: 100%;
              }
            }

            &.card__face--front {
            }

            &.card__face--back {
              transform: rotateY(180deg);
            }
          }
        }
      }

      p {
        text-align: center;
        margin-top: 1em;
      }
    }
  }
`;
