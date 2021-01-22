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
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  top: 0;
  right: 0;
  position: absolute;
  padding: 2em 4em 10em;
  background-color: ${theme.colors.blueFon};
  text-align: center;
  overflow: hidden;
  animation: ${animateInMount} 0.5s ease;

  ${theme.breakpoints.down("lg")} {
    padding: 2em 3em 8em;
  }

  > div > svg {
    position: absolute;
    top: 2em;
    right: 2em;
    cursor: pointer;
  }

  div[data-bg-image] {
    position: absolute;
    top: 0;
    left: -100%;
    right: 0;
    bottom: 0;
    background: url(/images/feather-full.png) center/ auto 100%;
    opacity: 0.08;
    pointer-events: none;
    animation: ${backgroundAnim} linear 40s infinite forwards;
    overflow: hidden;
  }

  .logo-wrapper {
    display: content;

    .logo {
      img {
        filter: brightness(0) invert(1);
        margin-bottom: 2em;
        height: 3.5em;

        ${theme.breakpoints.down("lg")} {
          margin-bottom: 1.5em;
        }
      }
    }
  }

  .menu-list {
    text-align: left;

    &_item {
      padding: 0.4em 0;
      cursor: pointer;

      a {
        display: block;
      }

      :hover {
        span {
          text-decoration: underline;
        }
      }

      span {
        color: ${theme.colors.white};
      }

      .active {
        span {
          font-weight: bold;
        }
      }
    }
  }

  address {
    font-style: normal;
    margin-top: 5em;
    text-align: left;

    ${theme.breakpoints.down("lg")} {
      margin-top: 3em;
    }

    .icons {
      display: flex;
      align-items: center;

      svg {
        width: 1.9em;
        height: 1.9em;
        margin-right: 0.4em;
      }

      svg:nth-of-type(2) {
        width: 2.4em;
        height: 2.4em;
      }

      svg:nth-of-type(3) {
        width: 1.8em;
        height: 1.8em;
      }
    }

    .location {
      flex: 1;
      display: flex;
      align-items: center;

      svg {
        width: 2.5em;
        height: 2.5em;
        margin-left: -0.3em;
        margin-right: 0.3em;
      }
    }

    .work-hours {
      display: flex;
      align-items: center;

      svg {
        width: 2.1em;
        height: 2.1em;
        margin-right: 1em;
      }

      span {
        display: block;
      }

      span:first-of-type {
        margin-right: 2em;
      }
    }

    .icons,
    .location,
    .work-hours {
      padding-bottom: 1em;

      span {
        white-space: pre-wrap;
        text-transform: uppercase;
      }
    }
  }

  .close {
  }
`;
