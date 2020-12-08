import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 1em;

  .inner {
    padding: 5px;
    display: flex;
    border-radius: 0.3em;

    .filter-button {
      height: 40px;
      padding: 5px 15px;
      display: flex;
      align-items: center;
      border-radius: 20em;
      mix-blend-mode: soft-light;
      background-color: #2591d1;
      width: max-content;
      margin-right: 1em;
      color: #ffffff;
      font-weight: bold;
      cursor: pointer;

      .filter-title {
        margin-right: 0.7em;
        position: relative;
        overflow: hidden;

        span {
          text-transform: uppercase;
        }
      }

      .filter-values {
        display: grid;
        grid-auto-flow: column;
        column-gap: 0.5em;

        > span {
          background-color: #ffffff;
          border-radius: 20em;
          padding: 0.2em 0.7em;
          font-size: 0.8em;
          color: #2591d1;
          position: relative;
          overflow: hidden;
        }
      }

      .filter-title,
      .filter-values > span {
        :hover {
          span {
            transform: translateY(-110%);
          }
        }

        span {
          display: block;
          transform: translateY(0%);
          will-change: transform;
          transition: transform 0.2s ease;

          ::before {
            content: "x";
            left: 50%;
            bottom: -100%;
            transform: translateX(-50%) scale(1.3);
            position: absolute;
          }
        }
      }
    }
  }
`;
