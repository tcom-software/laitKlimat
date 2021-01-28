import theme from "@styles/theme";
import styled, { keyframes } from "styled-components";

const messageAnim = (pos: boolean) => keyframes`
  0% {
    transform: translate(${pos ? "-100%" : "100%"});  
  }
  100% {
      transform: translate(0);
  }
`;

type MessageProps = {
  inComing: boolean;
};

export const StyledMessage = styled.div<MessageProps>`
  display: grid;
  grid-column-gap: 8px;
  grid-template-columns: ${(p) =>
    p.inComing ? `max-content 1fr` : `1fr max-content`};
  grid-template-areas: "first two";
  padding-bottom: 30px;

  animation: ${(p) => messageAnim(p.inComing)} 0.2s ease;

  &.operator + .operator {
    margin-top: -20px;

    .avatar {
      /* visibility: hidden; */
    }
  }

  &.user + .user {
    margin-top: -20px;

    .avatar {
      visibility: hidden;
    }
  }

  .avatar {
    grid-area: ${(p) => (p.inComing ? "first" : "two")};
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${(p) => (p.inComing ? "gray" : "none")};
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .message-container {
    grid-area: ${(p) => (p.inComing ? "two" : "first")};

    .message {
      border-radius: 10px;
      background-color: ${(p) =>
        p.inComing ? theme.colors.secondary : theme.colors.gray100};
      padding: 10px 16px;

      width: fit-content;
      ${(p) => (p.inComing ? "margin-right: auto;" : "margin-left: auto;")}

      .loader {
        svg {
          fill: white;
          height: 11px;
        }
      }

      p {
        color: ${(p) => (p.inComing ? "white" : "black")};
        white-space: pre-wrap;
        display: flex;
      }
    }

    .message {
      .fielads {
        display: grid;
        grid-row-gap: 5px;

        legend {
          color: white;
          font-weight: bold;
        }

        label {
          display: flex;
          justify-content: space-between;

          span {
            color: white;
            font-size: 14px;
            white-space: nowrap;
          }

          input {
            font-size: 16px;
            padding: 0 8px;
            max-width: 110px;
            margin-left: 20px;
          }
        }

        button {
          margin-top: 10px;
          padding: 0.15em 2em;
          font-size: 0.725em;
        }
      }
    }

    .bts-group {
      margin-top: 7px;
      display: flex;

      button {
        flex: 1;
        font-size: 0.875em;
        padding: 0.3em 2em;

        & + button {
          margin-left: 6px;
        }
      }
    }
  }
`;
