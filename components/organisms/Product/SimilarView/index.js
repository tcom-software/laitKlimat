import { useEffect, useRef, useState } from "react";
import { UPLOADS_URL } from "constants/api";

import { Text, ProductLinkWrapper } from "@atoms";
import { ContainerSimilarProduct } from "../styles";
import { makePriceView } from "utils/makePriceView";
import ButtonAddToBasket from "@atoms/Button/ButtonAddToBasket";
import {
  makeBrandLogo,
  makeProductName,
  makeProductPhoto,
} from "helper/serializeProduct";

const SimilarProduct = ({ data, ...props }) => {
  const [hasData, setHasData] = useState(false);
  const product = useRef({});

  useEffect(() => {
    if (data) {
      setHasData(true);
      const {
        product: {
          brand,
          series_name,
          model,
          price,
          manufacturer_logo,
          articule,
        },
        photos,
      } = data;
      product.current.price = price;
      product.current.articule = articule;
      product.current.name = makeProductName(data.product);
      product.current.image = makeProductPhoto(UPLOADS_URL, photos[0]);
      product.current.brandLogo = makeBrandLogo(UPLOADS_URL, manufacturer_logo);
    }
  }, []);

  return (
    <ContainerSimilarProduct {...props}>
      <section className="product">
        <ProductLinkWrapper articule={product.current.articule}>
          <img
            className="product"
            alt="product"
            src={hasData ? product.current.image : "/images/product/product"}
          />
        </ProductLinkWrapper>
      </section>
      <ProductLinkWrapper articule={product.current.articule}>
        <Text tag="span" sz="larg" clr="secondary" bold className="title">
          {hasData ? product.current.name : "Besshof STARK-ZS/ZU-T07KC"}
        </Text>
      </ProductLinkWrapper>

      <section className="price row">
        <img
          src={hasData ? product.current.brandLogo : "/images/product/logo"}
          alt="brand logo"
        />
        <Text tag="span" sz="larg" clr="tercary" bold className="price">
          {hasData
            ? makePriceView(product.current.price, { unit: "₽", split: " " })
            : "15 494 ₽"}
        </Text>
      </section>
      <span className="article">{`Артикул:\n${
        hasData ? product.current.articule : 1464
      }`}</span>
      <section className="btn">
        <ButtonAddToBasket
          product={
            hasData
              ? {
                  id: product.current.articule,
                  price: product.current.articule,
                }
              : {}
          }
        />
      </section>
    </ContainerSimilarProduct>
  );
};

export default SimilarProduct;
