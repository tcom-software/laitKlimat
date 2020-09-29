import styled from "styled-components";
import theme from "@styles/theme";
import { Image, Text, Button } from "@atoms";

const StyledSale = styled.div`
  width: 8em;
  height: 8em;
  border-radius: 50%;
  background: linear-gradient(180deg, #67ce33 0%, #4c8c2b 100%);
  box-shadow: ${theme.shadow.effect3};
  margin-left: -1.3em;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-style: italic;
    text-align: center;
    user-select: none;
    white-space: pre-wrap;
    line-height: normal;
  }
`;

export const Sale = () => (
  <StyledSale className="sale">
    <Text tag="span" sz="small" bold>
      {"Получить\nскидку %"}
    </Text>
  </StyledSale>
);
