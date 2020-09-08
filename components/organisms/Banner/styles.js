import styled, { css } from "styled-components";
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

  display: flex;
  align-items: center;

  ${theme.breakpoints.down("xs")} {
    height: 290px;
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

      ${theme.breakpoints.down("xs")} {
        top: -5%;
        left: -13%;
        transform: scale(1.1);
      }
    }

    svg[data-circle2] {
      bottom: 0;
      left: 44%;
      transform: translateY(50%) scale(1.5);

      ${theme.breakpoints.down("xs")} {
        right: 5%;
        left: unset;
        transform: translateY(60%) scale(1.2);
      }
    }

    svg[data-circle3] {
      top: 0;
      right: 0;
      transform: translate(25%, -70%) scale(1.5);

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
  width: 100%;
  max-width: 1400px;
  margin: auto;
  z-index: 1;

  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;

  ${theme.breakpoints.down("xs")} {
    max-width: 600px;
    padding: 0.6em 8vw 1.6em;
    flex-direction: column-reverse;
  }

  .info {
    width: 100%;

    .texts {
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
    display: contents;

    img {
      ${theme.breakpoints.down("xs")} {
        width: 80%;
        flex-direction: column-reverse;
        filter: ${theme.dropShadow.banner};
      }
    }
  }
`;
