import { Fragment, useEffect, useState } from "react";
import { Text } from "@atoms";
import { Hgroup } from "@molecules";

import { Container } from "./styles";

const descriptions = [
  "Все включено без дополнительной оплаты! В стандартный монтаж включены все расходные материалы:",
  "Кронштейн для внешнего блока, для крепления на стену",
  "Фреоновые трубки межблочная трасса до 5м",
  "Теплоизолятор для фреоновых труб",
  "Кабель межблочный",
  "Кабель до розетки 2м",
  "декоративный короб 1м",
  "Дренажный шланг",
];

const table = [
  {
    title: "Доп. трасса",
    list: [
      [
        "Доп. трасса для 14 00 Вт - 17 000 Вт модельный ряд 60",
        "2 000 ₽",
        "5 000 ₽",
      ],
      [
        "Доп. трасса для 14 00 Вт - 17 000 Вт модельный ряд 60",
        "2 000 ₽",
        "5 000 ₽",
      ],
      [
        "Доп. трасса для 14 00 Вт - 17 000 Вт модельный ряд 60",
        "2 000 ₽",
        "5 000 ₽",
      ],
      [
        "Доп. трасса для 14 00 Вт - 17 000 Вт модельный ряд 60",
        "2 000 ₽",
        "5 000 ₽",
      ],
    ],
  },
  {
    title: "Доп. трасса 1",
    list: [
      [
        "Доп. трасса для 14 00 Вт - 17 000 Вт модельный ряд 60",
        "2 000 ₽",
        "5 000 ₽",
      ],
      [
        "Доп. трасса для 14 00 Вт - 17 000 Вт модельный ряд 60",
        "2 000 ₽",
        "5 000 ₽",
      ],
    ],
  },
  {
    title: "Доп. трасса 2",
    list: [
      [
        "Доп. трасса для 14 00 Вт - 17 000 Вт модельный ряд 60",
        "2 000 ₽",
        "5 000 ₽",
      ],
      [
        "Доп. трасса для 14 00 Вт - 17 000 Вт модельный ряд 60",
        "2 000 ₽",
        "5 000 ₽",
      ],
      [
        "Доп. трасса для 14 00 Вт - 17 000 Вт модельный ряд 60",
        "2 000 ₽",
        "5 000 ₽",
      ],
      [
        "Доп. трасса для 14 00 Вт - 17 000 Вт модельный ряд 60",
        "2 000 ₽",
        "5 000 ₽",
      ],
      [
        "Доп. трасса для 14 00 Вт - 17 000 Вт модельный ряд 60",
        "2 000 ₽",
        "5 000 ₽",
      ],
    ],
  },
];

const PlacingAndMontage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/api/getServices")
      .then(response => response.json())
      .then(data => setServices(data));
  }, []);

  return (
    <Container>
      <div className="container">
        <Hgroup
          h1="Установка и монтаж"
          h2="Стандартная установка кондиционеров"
        />
        <Text tag="h4" clr="primary" sz="small">
          {descriptions[0]}
        </Text>
        <ol>
          {descriptions.slice(1).map((text, idx) => (
            <li key={idx}>
              <Text tag="span" clr="primary" sz="small">
                {text}
              </Text>
            </li>
          ))}
        </ol>
      </div>

      <table>
        <thead>
          <tr className="container">
            <th>
              <Text tag="h4" sz="larg">
                Услуга
              </Text>
            </th>
            <th>
              <Text tag="h4" sz="larg">
                Стоимость у нас
              </Text>
            </th>
            <th>
              <Text tag="h4" sz="larg">
                Стоимость Не у нас
              </Text>
            </th>
          </tr>
        </thead>
        <tbody>
          {services.map(({ service_category, services }, idx) => (
            <Fragment key={idx}>
              <tr className="title">
                <td colSpan="3">{service_category}</td>
              </tr>
              {JSON.parse(services).map(
                (
                  { service_name, service_price_our, service_price_other },
                  idx
                ) => (
                  <tr key={idx}>
                    <td>{service_name}</td>
                    <td>{service_price_our}</td>
                    <td>{service_price_other}</td>
                  </tr>
                )
              )}
            </Fragment>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan="3"></th>
          </tr>
        </tfoot>
      </table>
    </Container>
  );
};

export default PlacingAndMontage;
