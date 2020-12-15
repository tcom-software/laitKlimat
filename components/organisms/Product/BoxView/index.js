import { useState, useRef, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import { useDispatch } from "react-redux";

import { Sale, BtnsGroup, Table, ProductLinkWrapper } from "../Components";

import { showModal } from "@redux/actions/modal";
import { useOutsideClickClose } from "hooks";
import { Image, Text, Button } from "@atoms";
import { Container } from "../styles";
import eases from "utils/easing";
import Link from "next/link";

const ProductBoxView = ({ data, loading, addToBasket }) => {
  const dispatch = useDispatch();
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

  const handleShowNumberBox = useCallback(style => {
    dispatch(
      showModal({
        modalType: "numberBox",
        modalProps: {
          position: "relative",
          transform: "translate(0, 0)",
          animation: "none",
        },
      })
    );
  }, []);

  const {
    brand,
    brandLogo,
    productName,
    productImageX300,
    characteristics,
    articule,
    setupPrice,
    // price,
    formatedPrice,
    characteristic,
  } = data;

  return (
    <Container ref={productRef} className="potoduct-box-view">
      <section className="product">
        <div className="articule left-side">
          <span className="article">{`Артикул:\n${articule}`}</span>
          <img src="/images/product/market.png" alt="product market" />
        </div>
        <ProductLinkWrapper articule={articule}>
          <a>
            <img
              src={productImageX300}
              className="product-image"
              alt="product image"
            />
          </a>
        </ProductLinkWrapper>
        <div className="right-side">
          <Sale />
          <img src="/images/product/gift.png" className="gift" alt="gift" />
        </div>
      </section>
      <ProductLinkWrapper articule={articule}>
        <a>
          <Text tag="span" sz="larg" clr="secondary" bold className="title">
            {productName}
          </Text>
        </a>
      </ProductLinkWrapper>
      <section className="price row">
        <img src={brandLogo} alt="brand logo" />
        <Button
          variant="tercary"
          title="Купить в 1 клик"
          onClick={handleShowNumberBox}
        />
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
            <BtnsGroup
              loading={loading}
              addToBasket={addToBasket}
              showNumberBox={handleShowNumberBox}
            />
          </animated.section>
        </>
      ) : (
        <section className="btn-group row">
          <Button title="купить в кредит" variant="tercary" />
          <Button title="в корзину" loading={loading} onClick={addToBasket} />
        </section>
      )}
    </Container>
  );
};

export default ProductBoxView;
