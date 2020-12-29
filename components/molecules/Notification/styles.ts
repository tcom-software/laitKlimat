import theme from "@styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  font-size: 14px;
  position: fixed;
  z-index: ${theme.zIndex.notification};

  .toast {
    min-width: 200px;
    padding: 16px 32px;
    margin: 8px 0 0 0;
  }

  &.top-right {
    top: 12px;
    right: 12px;
    transition: transform 0.6s ease-in-out;
    animation: toast-in-right 0.7s;
  }

  &.bottom-right {
    bottom: 12px;
    right: 12px;
    transition: transform 0.6s ease-in-out;
    animation: toast-in-right 0.7s;
  }

  &.top-left {
    top: 12px;
    left: 12px;
    transition: transform 0.6s ease-in;
    animation: toast-in-left 0.7s;
  }

  &.bottom-left {
    bottom: 12px;
    left: 12px;
    transition: transform 0.6s ease-in;
    animation: toast-in-left 0.7s;
  }
`;
