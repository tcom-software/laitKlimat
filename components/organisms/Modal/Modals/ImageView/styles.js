import styled, { keyframes } from "styled-components";
import theme from "@styles/theme";

const backgroundAnim = keyframes`
  from {
    left: -123%;
  }
  to {
    left: 0;
  }
`;

const animateInMount = keyframes`
  from {
    transform: translate(50%, 50%) ;
    opacity: 0;
  }
  to {
    transform: translate(50%, 0);
    opacity: 1;
  }
`;

const animateInMobile = keyframes`
  from {
    transform: translateY(50%) ;
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Container = styled.div`
  height: 100%;
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    width: 2.5em;
    height: 2.5em;
    min-height: 2.5em;
    min-width: 2.5em;
    background-color: ${theme.colors.white};
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
      width: 1.3em;
      height: 1.3em;
      display: block;
    }

    ${theme.breakpoints.down("xs")} {
      width: 2em;
      height: 2em;
      min-height: 2em;
      min-width: 2em;

      svg {
        width: 1em;
        height: 1em;
      }
    }
  }

  picture {
    img {
      width: auto;
      max-width: 80vw;
      height: auto;
      max-height: 100%;
      object-fit: contain;
    }
  }

  /* animation: ${animateInMobile} 0.5s ease; */
`;
