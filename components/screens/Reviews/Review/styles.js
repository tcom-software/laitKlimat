import styled from "styled-components";
import theme from "@styles/theme";
import { mmp } from "styles/utils/mediaProperty";

export const Container = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-auto-rows: max-content;
  grid-template-areas: "prof title" "prof main";

  grid-column-gap: 3em;
  padding: 2em 3em;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadow.effect1};

  ${theme.breakpoints.down("xs")} {
    grid-template-areas: "prof title" "main main";
    grid-column-gap: 1em;
    padding: 1.5em;
  }

  p,
  span {
    line-height: 1.75em;
  }

  .profile {
    grid-area: prof;

    ${mmp("width", "200px", { lg: "", md: "20vw" })}

    img {
      width: 100%;
    }
  }

  .title {
    display: flex;
    grid-area: title;

    ${theme.breakpoints.down("xs")} {
      flex-direction: column;
      align-self: center;
    }

    .name {
      margin-right: 3em;

      ${theme.breakpoints.down("xs")} {
        margin-bottom: 0.5em;
      }

      h4 {
      }
      .city {
      }
    }

    .stars {
      svg {
        width: 1.2em;
        height: 1.2em;

        ${theme.breakpoints.down("xs")} {
          width: 0.8em;
          height: 0.8em;
        }
      }
    }
  }

  .main {
    grid-area: main;
    margin-top: 0.8em;
    display: grid;
    grid-row-gap: 0.8em;

    .review {
      span {
      }

      p {
      }
    }

    .conditioner {
      li {
        span:first-of-type {
          margin-right: 0.5em;
        }
        span:last-of-type {
        }
      }
    }

    .admin {
      span {
      }

      p {
      }
    }

    .images {
      margin-top: 1em;
      display: flex;
      overflow-x: auto;

      img {
        width: 140px;
        height: 140px;
        object-fit: cover;
      }

      img:not(:last-child) {
        margin-right: 1em;
      }

      ${theme.breakpoints.down("xs")} {
        img {
          width: 130px;
          height: 130px;
        }
      }
    }
  }
`;
