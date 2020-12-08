import styled from "styled-components";
import theme from "@styles/theme";
import { Text, Button } from "@atoms";
import { makePriceView } from "utils/makePriceView";

const StyledSale = styled.div`
  border-radius: 50%;
  background: linear-gradient(180deg, #67ce33 0%, #4c8c2b 100%);
  box-shadow: ${theme.shadow.effect3};

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

export const BtnsGroup = ({ loading, addToBasket }) => (
  <>
    <Button title="в корзину" loading={loading} onClick={addToBasket} />
    <Button title="купить в кредит" variant="secondary" />
    <Button title="Купить в 1 клик" variant="tercary" />
  </>
);

export const Table = ({ characteristic }) => {
  return (
    <table>
      <tbody>
        {characteristic
          .filter(({ value }) => value)
          .map(({ key, value }, idx) => (
            <tr key={idx}>
              <td>
                <Text tag="span" sz="normall">
                  {key}
                </Text>
              </td>
              <td>
                <Text tag="span" sz="normall">
                  {value}
                </Text>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
