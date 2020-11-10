import { useSpring, animated } from "react-spring";
import { useState, useRef } from "react";

import { Sale, BtnsGroup, Table } from "../Components";

import { useOutsideClickClose } from "hooks";
import { Image, Text, Button } from "@atoms";
import { Container } from "../styles";
import eases from "utils/easing";

const ProductBoxView = ({ data }) => {
  const productRef = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const { x } = useSpring({
    x: isOpen ? 0 : -100,
    config: {
      duration: 200,
      easing: eases.OutQuart,
    },
  });

  useOutsideClickClose(productRef, setOpen);

  return (
    <Container ref={productRef} className="potoduct-box-view">
      <section className="product">
        <div className="articule">
          <span className="article">{`Артикул:\n${1464}`}</span>
          <Image path="/images/product/market" type="png" />
        </div>
        <Image
          type="png"
          className="product-image"
          path="/images/product/product"
        />
        <div className="image-wrapper">
          <Sale />
          <Image path="/images/product/gift" type="png" className="gift" />
        </div>
      </section>
      <Text tag="span" sz="larg" clr="secondary" bold className="title">
        {"Besshof STARK-ZS/ZU-T07KC"}
      </Text>
      <section className="price row">
        <Image path="/images/product/logo" type="png" />
        <Button title="Купить в 1 клик" variant="tercary" />
        <Text tag="span" sz="larg" clr="tercary" bold className="price">
          {"15 494 ₽"}
        </Text>
      </section>
      <section className="info">
        <Table value={data} />
      </section>
      {globalThis.innerWidth <= 768 ? (
        <>
          <section className="btn-group-mobile" onClick={() => setOpen(true)}>
            <span className="article">{`Артикул:\n${1464}`}</span>
            <Button title="сделать заказ" />
          </section>
          <animated.section
            className="btn-group-mobile-open row"
            style={{
              transform: x.interpolate(x => `translateX(${x}%)`),
            }}
          >
            <Image
              type="png"
              path="/images/product/arrow"
              responsive
              onClick={() => setOpen(false)}
            />
            <BtnsGroup />
          </animated.section>
        </>
      ) : (
        <section className="btn-group row">
          <Button title="купить в кредит" variant="tercary" />
          <Button title="в корзину" />
        </section>
      )}
    </Container>
  );
};

export default ProductBoxView;
