import styled, { keyframes } from "styled-components";
import theme from "@styles/theme";

export const Container = styled.div`
  height: 100%;
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .close {
    width: 2.5em;
    height: 2.5em;
    min-height: 2.5em;
    min-width: 2.5em;
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

  .next,
  .prev {
    width: 2em;
    height: 2em;
    position: absolute;
    border: 3px solid white;
    border-right: none;
    border-bottom: none;
    background: transparent;
    cursor: pointer;

    ::before {
      content: "";
      width: 150%;
      height: 150%;
      transform: translate(-40%, -40%);
      display: block;
    }
  }

  .next {
    right: 0;
    transform: translateX(100%) rotate(135deg);
  }

  .prev {
    left: 0;
    transform: translateX(-100%) rotate(-45deg);
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
`;
