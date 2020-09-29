import styled, { css } from "styled-components";
import theme from "@styles/theme";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.8);
  z-index: ${theme.zIndex.modal};
`;
