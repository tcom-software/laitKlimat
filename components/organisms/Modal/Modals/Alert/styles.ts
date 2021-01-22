import styled, { keyframes } from "styled-components";
import theme from "@styles/theme";

const anim = keyframes`
  from {
    opacity: 0;
    transform: translateY(80%);
  }

  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

export const Container = styled.div`
  width: 500px;
  max-width: 90vw;
  max-height: 80vh;
  padding: 4em 2em;
  background-color: white;
  border-radius: 5px;
  border: 2px solid #2591d1;
  position: relative;

  opacity: 0;
  transform: translateY(80%);
  animation: ${anim} 600ms ease forwards;

  display: grid;
  place-items: center;
  grid-row-gap: 1em;
  align-content: center;

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

    right: 0;
    top: -2.5em;
    position: absolute;

    svg {
      width: 1.3em;
      height: 1.3em;
      display: block;

      fill: #7b7b7b;
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

  .done {
    width: 80px;
    height: 80px;
  }
`;
