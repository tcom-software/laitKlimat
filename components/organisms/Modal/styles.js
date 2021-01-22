import styled, { css } from "styled-components";
import theme from "@styles/theme";

export const Container = styled.div`
  width: 100vw;
  position: fixed;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.8);
  z-index: ${theme.zIndex.modal};

  ${theme.breakpoints.down('xs')}{
    bottom: 0;
  }
`;
