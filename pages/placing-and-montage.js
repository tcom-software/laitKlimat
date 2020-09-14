import Head from "next/head";
import { Button, Image, Text } from "@atoms";
import { Product } from "@organisms";
import { initializeStore } from "@redux/index";

import styled from "styled-components";

const info = [
  { title: "Обслуживаемая площадь до", value: "20 м2" },
  { title: "Стоимость установки", value: "14 900 ₽" },
  { title: "Доставка в пределах МКАД", value: "бесплатно" },
  { title: "В кредит от", value: "645 р./месяц" },
];

const PlacingAndMontage = () => {
  return (
    <div className="container">
      <style jsx>{`
        .container {
          margin: 50px 100px;
          padding: 20px;
        }

        p {
          text-align: center;
        }

        .products {
          margin-top: 2em;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 2em;
        }
      `}</style>
      <Text tag="p" sz="larg" clr="primary">
        Кондиционеры и увлажнители
      </Text>
      <Text tag="p" sz="larg" clr="primary">
        Настенные кондиционеры (сплит-системы)
      </Text>
      <div className="products">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export const getServerSideProps = () => {
  const reduxStore = initializeStore();

  return {
    props: {
      bannerVariant: "secondary",
    },
  };
};

export default PlacingAndMontage;
