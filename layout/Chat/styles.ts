import theme from "@styles/theme";
import styled, { keyframes } from "styled-components";

const backgroundAnim = keyframes`
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0%);
  }
`;

export const StyledChat = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 100;
  pointer-events: none;

  ${theme.breakpoints.down("xs")} {
    margin: 0 !important;
    padding: 0 !important;
    top: 0;
    bottom: 0;
  }

  .content {
    position: relative;
    pointer-events: none;

    ${theme.breakpoints.down("xs")} {
      height: 100%;
    }

    .chat-icon {
      right: 0;
      bottom: 0;
      position: absolute;
      user-select: none;
      pointer-events: all;

      img {
        filter: drop-shadow(2px 5px 5px rgba(0, 0, 0, 0.25));
        cursor: pointer;

        transform: scale(1);
        transform-origin: bottom right;
        transition: transform 150ms cubic-bezier(0, 1, 1, 1) 270ms;
      }
    }

    .chat {
      width: 350px;
      transform: scale(0);
      transform-origin: bottom right;
      transition: transform 250ms cubic-bezier(0, 1, 1, 1) 0ms;
      box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.3);
      background: #ffffff;

      ${theme.breakpoints.between("xs", "lg")} {
        width: 350px;
      }

      ${theme.breakpoints.down("xs")} {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: max-content 1fr max-content;

        .chat-header {
          height: 60px;
        }

        .chat-main {
          height: 100%;
        }
      }

      &-header {
        height: 80px;
        overflow: hidden;
        position: relative;
        background-color: ${theme.colors.secondary};
        padding: 22px 26px;

        .title {
          color: white;
          width: min-content;
        }

        svg {
          position: absolute;
          right: 26px;
          top: 22px;
          cursor: pointer;
        }

        .background-image {
          position: absolute;
          width: 200%;
          top: 0;
          left: 0%;
          right: 0;
          bottom: 0;
          opacity: 0.15;
          pointer-events: none;
          background: url(/images/feather-full.png) center/ 150% 500%;
          /* animation: ${backgroundAnim} linear 150s infinite forwards; */
          overflow: hidden;
        }
      }

      &-main {
        height: 400px;
        background: #f5f8fb;
        padding: 22px 26px;
        overflow-y: auto;
        overflow-X: hidden;

        display: grid;
        grid-auto-rows: max-content;
        /* grid-row-gap: 30px; */

        ${theme.breakpoints.between("xs", "lg")} {
          height: 300px;
        }
      }

      &-footer {
        height: 120px;
        padding: 14px 26px;
        display: grid;
        grid-template-rows: max-content 1fr max-content;

        .message-options {
          display: flex;
          justify-content: space-between;
          span {
            color: #8cafe5;
            text-transform: none;
          }

          .message-tools {
            button {
              cursor: pointer;
              outline: none;
              transition: transform 0.2s ease;

              :active {
                transform: scale(0.8);
              }

              & + button {
                margin-left: 13px;
              }
            }
          }
        }

        .message-field {
          border-bottom: 1px solid ${theme.colors.gray100};
          resize: none;
          width: 100%;
          height: 100%;
        }

        p {
          text-transform: unset;
          color: "#B9B9B9";
          font-size: 0.875em;
          line-height: 1.0625em;
          text-align: center;
        }
      }
    }

    &.chat-open {
      pointer-events: all;

      .chat-icon {
        img {
          transform: scale(0);
          transition: transform 100ms cubic-bezier(0, 1, 1, 1) 0ms;
        }
      }

      .chat {
        transform: scale(1);
        transition: transform 120ms cubic-bezier(0, 1, 1, 1) 200ms;
      }
    }
  }
`;
