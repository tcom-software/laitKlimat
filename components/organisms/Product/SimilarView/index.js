import { useEffect, useRef, useState } from "react";
import getConfig from "next/config";

import ButtonAddToBasket from "@atoms/Button/ButtonAddToBasket";
import { Text, ProductLinkWrapper } from "@atoms";
import { ContainerSimilarProduct } from "../styles";
import { makePriceView } from "utils/makePriceView";

const {
  publicRuntimeConfig: { uploadsUrl },
} = getConfig();

const SimilarProduct = ({ data, ...rest }) => {
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
        photos: [{ folder, file_name, file_format }],
      } = data;
      product.current.brandLogo = `${uploadsUrl}brands/${manufacturer_logo}`;
      product.current.name = `${brand} ${series_name}-${model}`;
      product.current.articule = articule;
      product.current.price = price;
      product.current.image = `${uploadsUrl}${
        folder === "product_series0" ? "product_series" : "products"
      }/${folder}/size800/${file_name}.${file_format}`;
    }
  }, []);

  return (
    <ContainerSimilarProduct {...rest}>
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
