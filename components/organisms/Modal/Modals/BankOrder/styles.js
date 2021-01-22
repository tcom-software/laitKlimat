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
  /* top: 0;
  right: 0; */
  position: absolute;
  padding: 40px 60px 40px;
  background-color: ${theme.colors.white};
  text-align: center;
  overflow: hidden;

  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;

  /* animation: ${animateInMobile} 0.5s ease;

  ${theme.breakpoints.up("xs")} {
    animation: ${animateInMount} 0.5s ease forwards;
  } */

  .modal-header {
    margin-bottom: 1.2em;

    p {
      text-transform: unset;
    }
  }

  .modal-body {
    text-align: left;

    h1 {
      margin-bottom: 1.2em;
    }

    p {
      margin-bottom: 0.6em;
      text-transform: unset;
    }

    .banks {
      cursor: pointer;
      text-align: center;

      img {
        display: block;
        margin: 0 auto;
        margin-bottom: 1.2em;
      }
    }

    form {
      display: grid;

      input {
        padding: 0.6em 1.2em;
        font-size: 0.9em;
      }

      .btn-group {
        display: flex;
        justify-content: space-between;
        margin-top: 1.8em;

        button {
          font-size: 14px !important;
          padding: 0.45em 2em !important;
        }
      }
    }
  }
`;
