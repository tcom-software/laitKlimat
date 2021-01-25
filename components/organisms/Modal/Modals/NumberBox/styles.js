import styled, { keyframes } from "styled-components";
import theme from "@styles/theme";
import Color from "color";

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
    transform: translate(-50%, 0%);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -50%);
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
  top: 50%;
  left: 50%;
  position: absolute;
  padding: 4em 4em 3em;
  transform: translate(-50%, -50%);
  background-color: ${theme.colors.secondary};
  overflow: hidden;
  text-align: center;
  animation: ${animateInMount} 0.5s ease;

  /* ${theme.breakpoints.up("xs")} {
    animation: ${animateInMount} 0.5s ease forwards;
  } */

  ${theme.breakpoints.down("lg")} {
    padding: 4em 4em 3em;
  }

  ${theme.breakpoints.down("xs")} {
    top: auto !important;
    right: auto !important;

    margin: 0 var(--global-margin);
    width: 100%;
    width: -moz-available;
    width: -webkit-fill-available;
    width: fill-available;
  }

  > div > svg {
    position: absolute;
    top: 1.5em;
    right: 1.5em;
    cursor: pointer;
  }

  div[data-bg-image] {
    position: absolute;
    top: 0;
    left: -100%;
    right: 0;
    bottom: 0;
    background: url(/images/feather-full.png) center/ auto 200%;
    opacity: 0.15;
    pointer-events: none;
    animation: ${backgroundAnim} linear 80s infinite forwards;
    overflow: hidden;
  }

  form {
    display: grid;
    grid-row-gap: 1em;

    ${theme.breakpoints.down("lg")} {
      grid-row-gap: 0.8em;
    }

    legend {
      text-align: left;
      white-space: nowrap;
    }

    > input {
      padding: 0.6em;
      font-size: 16px;
      line-height: 18px;

      ::-webkit-inner-spin-button,
      ::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      ::placeholder {
        text-transform: capitalize;
      }
    }

    > div {
      display: flex;

      label:first-of-type {
        margin-right: 0.7em;
      }

      label {
        display: flex;

        input {
          width: 1.7em;
          height: 1.7em;
          padding: 0.6em;
          margin-left: 0.5em;
          background-color: ${theme.colors.white};
          border: 1px solid ${theme.colors.secondary};
          display: grid;
          place-content: center;

          ${theme.breakpoints.down("lg")} {
            width: 1.3em;
            height: 1.3em;
          }

          :checked::before {
            content: url(/images/checkbox.svg);
          }
        }
      }
    }

    button[type="submit"] {
    }
  }
`;
