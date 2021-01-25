import { useState, useRef } from "react";
import { useSpring, animated } from "react-spring";
import cn from "classnames";

import { Sale, Table } from "../Common";

import { useOutsideClickClose } from "hooks";
import { Image, Text, Button, ProductLinkWrapper } from "@atoms";
import { Container } from "../styles";
import eases from "utils/easing";
import Link from "next/link";

// buttons
import ButtonOrderOneClick from "@atoms/Button/ButtonOrderOneClick";
import ButtonAddToBasket from "@atoms/Button/ButtonAddToBasket";
import ButtonCredit from "@atoms/Button/ButtonCredit";

const ProductBoxView = ({ data, loading, addToPreviousViews }) => {
  const productRef = useRef(null);
  const [isOpen, setOpen] = useState(false);
  useOutsideClickClose(productRef, setOpen);
  const { x } = useSpring({
    x: isOpen ? 0 : -100,
    config: {
      duration: 200,
      easing: eases.OutQuart,
    },
  });

  const {
    brand,
    brandLogo,
    productName,
    productImageX300,
    characteristics,
    articule,
    setupPrice,
    price,
    formatedPrice,
    characteristic,

    hasSale,
    hasChat,
    available,
    priceWithSetup,
    priceWithoutSetup,
  } = data;

  return (
    <Container
      ref={productRef}
      className={cn("potoduct-box-view", {
        "g-loading": loading,
        inactive: !available,
      })}
    >
      <section className="product">
        <div className={"articule left-side"}>
          <span className="article">{`Артикул:\n${articule}`}</span>
          <img src="/images/product/market.png" alt="product market" />
        </div>
        <ProductLinkWrapper articule={articule} onClick={addToPreviousViews}>
          <img
            src={productImageX300}
            className="product-image"
            alt="product image"
          />
        </ProductLinkWrapper>
        <div className="right-side">
          {hasSale && <Sale data={{ priceWithSetup, priceWithoutSetup }} />}
          <img src="/images/product/gift.png" className="gift" alt="gift" />
        </div>
      </section>
      <ProductLinkWrapper articule={articule} onClick={addToPreviousViews}>
        <Text tag="span" sz="larg" clr="secondary" bold className="title">
          {productName}
        </Text>
      </ProductLinkWrapper>
      <section className="price row">
        <img src={brandLogo} alt="brand logo" />
        <ButtonOrderOneClick />
        <Text tag="span" sz="larg" clr="tercary" bold className="price">
          {formatedPrice}
        </Text>
      </section>
      <section className="info">
        <Table characteristic={characteristic} />
      </section>
      {globalThis.innerWidth <= 768 ? (
        <>
          <section className="btn-group-mobile" onClick={() => setOpen(true)}>
            <span className="article">{`Артикул:\n${articule}`}</span>
            <Button title="сделать заказ" />
          </section>
          <animated.section
            className="btn-group-mobile-open row"
            style={{
              transform: x.interpolate(x => `translateX(${x}%)`),
            }}
          >
            <img
              src="/images/product/arrow_mobile.png"
              onClick={() => setOpen(false)}
              alt="arrow"
            />
            <ButtonOrderOneClick />
            <ButtonAddToBasket product={{ id: articule, price }} />
            <ButtonCredit creditData={{ price, productName }} />
          </animated.section>
        </>
      ) : (
        <section className="btn-group row">
          <ButtonCredit creditData={{ price, productName }} />
          <ButtonAddToBasket product={{ id: articule, price }} />
        </section>
      )}
    </Container>
  );
};

export default ProductBoxView;
