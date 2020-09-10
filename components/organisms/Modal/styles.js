import styled, { css } from "styled-components";
import theme from "@styles/theme";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.7);
  z-index: ${theme.zIndex.modal};
`;
