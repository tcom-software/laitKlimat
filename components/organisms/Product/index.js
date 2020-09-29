import { useSpring, animated } from "react-spring";
import { useState, useRef } from "react";

import { Sale } from "./Sale";

import { useOutsideClickClose } from "hooks";
import { Image, Text, Button } from "@atoms";
import { Container, ContainerSimilarProduct } from "./styles";
import eases from "utils/easing";

const info = [
  { title: "Обслуживаемая площадь до", value: "20 м2" },
  { title: "Стоимость установки", value: "14 900 ₽" },
  { title: "Доставка в пределах МКАД", value: "бесплатно" },
  { title: "В кредит от", value: "645 р./месяц" },
];

const Product = ({ view }) => {
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
    <>
      {view === "box" ? (
        <Container ref={productRef} className="potoduct-box-view">
          <section className="product">
            <div className="articule">
              <Articule value={"1464"} />
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
          <ProductName value={"Besshof STARK-ZS/ZU-T07KC"} />
          <section className="price row">
            <Image path="/images/product/logo" type="png" />
            <Button title="Купить в 1 клик" variant="tercary" />
            <Price value={"15 494 ₽"} />
          </section>
          <section className="info">
            <Table value={info} />
          </section>
          {globalThis.innerWidth <= 768 ? (
            <>
              <section
                className="btn-group-mobile"
                onClick={() => setOpen(true)}
              >
                <Articule value={"1464"} />
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
      ) : (
        <Container ref={productRef} className="potoduct-line-view">
          <section className="product">
            <Sale />
            <Image path="/images/product/product" type="png" />
          </section>
          <section className="info">
            <div className="info-title">
              <ProductName value={"Besshof STARK-ZS/ZU-T07KC"} />
              <Image path="/images/product/logo" type="png" />
            </div>
            <Table value={info} />
          </section>
          <section className="gift">
            <div className="articule">
              <Articule value={"1464"} />
              <Image path="/images/product/market" type="png" />
            </div>
            <Image path="/images/product/gift-big" type="png" />
          </section>
          <section className="btns">
            <div className="price">
              <Text tag="span" sz="normall" clr="primary">
                цена
              </Text>
              <Price value={"15 494 ₽"} />
            </div>
            <div className="btn-group">
              <BtnsGroup />
            </div>
          </section>
        </Container>
      )}
    </>
  );
};

export const SimilarProduct = () => {
  return (
    <ContainerSimilarProduct>
      <section className="product">
        {/* <Image path="/images/product/market" type="png" className="market" /> */}
        <Image path="/images/product/product" type="png" className="product" />
        {/* <Image path="/images/product/gift" type="png" className="gift" /> */}
        {/* <Sale /> */}
      </section>

      <ProductName value={"Besshof STARK-ZS/ZU-T07KC"} />

      <section className="price row">
        <Image path="/images/product/logo" type="png" />
        <Price value={"15 494 ₽"} />
      </section>

      <Articule value={"1464"} />

      <section className="btn">
        <Button title="сделать заказ" />
      </section>
    </ContainerSimilarProduct>
  );
};

const ProductName = ({ value }) => (
  <Text tag="span" sz="larg" clr="secondary" bold className="title">
    {value}
  </Text>
);

const Price = ({ value }) => (
  <Text tag="span" sz="larg" clr="tercary" bold className="price">
    {value}
  </Text>
);

const BtnsGroup = () => (
  <>
    <Button title="в корзину" />
    <Button title="купить в кредит" variant="secondary" />
    <Button title="Купить в 1 клик" variant="tercary" />
  </>
);

const Articule = ({ value }) => (
  <span className="article">{`Артикул:\n${value}`}</span>
);

const Table = ({ value }) => (
  <table>
    {value.map(({ title, value }, idx) => (
      <tr key={idx}>
        <td>
          <Text tag="span" sz="normall">
            {title}
          </Text>
        </td>
        <td>
          <Text tag="span" sz="normall">
            {value}
          </Text>
        </td>
      </tr>
    ))}
  </table>
);

export default Product;
