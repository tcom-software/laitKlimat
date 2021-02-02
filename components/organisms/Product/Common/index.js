import styled from "styled-components";
import theme from "@styles/theme";
import { Text, Button } from "@atoms";
import { makePriceView } from "utils/makePriceView";
import Link from "next/link";

import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { showChat } from "@redux/actions/site";

const StyledSale = styled.div`
  border-radius: 50%;
  background: linear-gradient(180deg, #67ce33 0%, #4c8c2b 100%);
  box-shadow: ${theme.shadow.effect3};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  :hover {
    transform: scale(1.02);
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.25);
  }

  :active {
    transform: scale(0.98);
  }

  span {
    font-style: italic;
    text-align: center;
    user-select: none;
    white-space: pre-wrap;
    line-height: normal;
  }
`;

export const Sale = ({
  data: { priceWithSetup, priceWithoutSetup, hasSale, price },
}) => {
  const dispatch = useDispatch();
  const showChatHandler = useCallback(
    () =>
      dispatch(
        showChat({
          type: "productSale",
          text: `<span>На эту модель есть дополнительная скидка${
            messageText ? messageText + "\n\n" : ""
          }<span>Хотите узнать больше ?</span>`,
        })
      ),
    []
  );

  let messageText;
  switch (hasSale) {
    case 1:
      messageText = `\n\n<b>Цена с установкой</b>
<em style='display: inline-block; margin-bottom: 4px;'>${priceWithSetup} ₽</em>
<b>Цена без установки</b>
<em>${priceWithoutSetup} ₽</em></span>`;
      break;
    case 2:
      let sale = ((price - priceWithoutSetup) * 100) / price;
      messageText = `\nдо ${sale | 0} %`;
      break;
    case 3:
      messageText = ``;
      break;
    default:
      messageText = ``;
  }

  return (
    <StyledSale className="sale" onClick={showChatHandler}>
      <Text tag="span" sz="small" bold>
        {"Получить\nскидку"}
      </Text>
    </StyledSale>
  );
};

export const ProductLinkWrapper = ({ children, articule }) => {
  return (
    <Link href={`products/[product]`} as={`products/${articule}`}>
      {children}
    </Link>
  );
};

export const Table = ({ characteristic, productName }) => {
  let isMitsubishi = false;
  if (
    productName
      .toLocaleLowerCase()
      .includes("MITSUBISHI HEAVY".toLocaleLowerCase())
  ) {
    isMitsubishi = true;
  }

  return (
    <table>
      <tbody>
        {characteristic
          .filter(({ value }) => value)
          .map(({ key, value }, idx) => {
            let value1 =
              key
                .toLocaleLowerCase()
                .includes("ДОСТАВКА В ПРЕДЕЛАХ МКАД".toLocaleLowerCase()) &&
              isMitsubishi
                ? "1000 ₽"
                : value;

            return (
              <tr key={idx}>
                <td>
                  <Text tag="span" sz="normall">
                    {key}
                  </Text>
                </td>
                <td>
                  <Text tag="span" sz="normall">
                    {value1}
                  </Text>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
