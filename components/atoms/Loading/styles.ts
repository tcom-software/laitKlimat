import styled from "styled-components";

export const Container = styled.span`
  @keyframes loop-rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  img {
    margin: 0 auto;
    display: block;
    animation: loop-rotate 0.8s linear infinite;

    &.dark {
      filter: invert(41%) sepia(99%) saturate(525%) hue-rotate(161deg)
        brightness(98%) contrast(82%);
    }
  }
`;
