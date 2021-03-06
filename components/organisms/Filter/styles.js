import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-row-gap: 1em;

  .column {
    display: contents;
  }
`;

export const OtherFilters = styled.div`
  display: grid;
  margin-top: 1em;
  grid-row-gap: 1em;
`;

export const ShowOtherFilters = styled.button`
  width: 100%;
  color: #2591d1;
  margin-top: 1.5em;
  text-align: center;
  text-transform: uppercase;
`;
