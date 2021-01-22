import styled from "styled-components";
import theme from "@styles/theme";
import { mmp } from "styles/utils/mediaProperty";

export const Container = styled.div`
  hgroup {
    h2 {
      line-height: 161.61%;
      font-weight: bold;
      color: ${theme.colors.secondary};
      margin-bottom: 0.3em;

      ${mmp("font-size", "24px", { lg: "14px" })};
    }
  }

  > .container {
    h4 {
      font-weight: normal;
      line-height: 1.875em;
    }

    ol {
      padding: 0 1em 0;

      li {
        list-style: decimal;

        span {
          line-height: 1.875em;
        }
      }
    }
  }

  table {
    width: 100%;
    border-spacing: 0;
    text-align: center;
    margin-top: 1.5em;

    ${theme.breakpoints.down("xs")} {
      font-size: 14px;
    }

    td,
    th {
      ${mmp("white-space", "nowrap", { xs: "normal" })};
      ${mmp("letter-spacing", "0.1em", { xs: "0.06em" })};
    }

    tr td:first-of-type,
    tr th:first-of-type {
      padding-left: var(--global-margin);
      text-align: left;
    }

    tr td:last-of-type,
    tr th:last-of-type {
      padding-right: var(--global-margin);
    }

    thead,
    tfoot {
      tr {
        background-image: ${theme.gradients.secondary};

        th {
          ${mmp("height", "7em", { xs: "4em" })};
        }
      }
    }

    thead th:not(:first-of-type) {
      padding: 0 0.5em;
    }

    .title {
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.white};
      font-weight: bold;

      td {
        box-sizing: content-box;
        border-bottom: 1em solid white;
        
        padding-top: 0.7rem;
        padding-bottom: 0.7rem;
      }

      :not(:first-of-type) {
        td {
          border-top: 1em solid white;
        }
      }
    }

    tbody {
      tr:not(.title) {
        line-height: 161.61%;

        :hover {
          background-color: rgba(37, 145, 209, 0.1);
          color: ${theme.colors.secondary};

          /* font-weight: bold; */

          td {
            letter-spacing: 0.1em;
          }
        }

        :last-of-type {
          td {
            border-bottom: 1em solid white;
          }
        }
      }
    }
  }
`;
