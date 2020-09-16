import { useSpring, animated } from "react-spring";
import { useEffect, useState, useRef } from "react";

import { useForceUpdate, useOutsideClickClose } from "hooks";
import { Image, Text, Button } from "@atoms";
import { Container } from "./styles";
import eases from "utils/easing";

const info = [
  { title: "Обслуживаемая площадь до", value: "20 м2" },
  { title: "Стоимость установки", value: "14 900 ₽" },
  { title: "Доставка в пределах МКАД", value: "бесплатно" },
  { title: "В кредит от", value: "645 р./месяц" },
];

const Product = ({ view }) => {
  const forceUpdate = useForceUpdate();
  const productRef = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const { x } = useSpring({
    x: isOpen ? 0 : -100,
    config: {
      duration: 200,
      easing: eases.OutQuart,
    },
  });

  console.log(view)


  useOutsideClickClose(productRef, setOpen);
  useEffect(() => {
    globalThis.addEventListener("resize", () => forceUpdate());
    return () => forceUpdate();
  }, []);

  return (
    <Container ref={productRef}>
      <div className="inner">
        {view === "box" || globalThis.innerWidth <= 768 ? (
          <>
            <section className="product">
              <div className="articule">
                <span>{"Артикул:\n1464"}</span>
                <Image path="/images/product/market" type="png" />
              </div>
              <Image
                path="/images/product/product"
                type="png"
                className="product"
              />
              <div className="image-wrapper">
                <div className="sale">
                  <Text tag="span" sz="small" bold>
                    {"Получить\nскидку %"}
                  </Text>
                </div>
                <Image
                  path="/images/product/gift"
                  type="png"
                  className="gift"
                />
              </div>
            </section>
            <Text tag="span" sz="larg" clr="secondary" bold className="title">
              Besshof STARK-ZS/ZU-T07KC
            </Text>
            <section className="price row">
              <Image path="/images/product/logo" type="png" />
              <Button title="Купить в 1 клик" variant="tercary" />
              <Text tag="span" sz="larg" clr="tercary" bold className="price">
                15 494 ₽
              </Text>
            </section>
            <section className="info">
              <table>
                {info.map(({ title, value }, idx) => (
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
            </section>
            {globalThis.innerWidth <= 768 ? (
              <>
                <section
                  className="btn-group-mobile"
                  onClick={() => setOpen(true)}
                >
                  <span>{"Артикул:\n1464"}</span>
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
                    onClick={() => setOpen(false)}
                  />
                  <Button title="купить" />
                  <Button title="купить в кредит" variant="secondary" />
                  <Button title="Купить в 1 клик" variant="tercary" />
                </animated.section>
              </>
            ) : (
              <section className="btn-group row">
                <Button title="купить в кредит" variant="tercary" />
                <Button title="купить" />
              </section>
            )}
          </>
        ) : (
          <>
            <section className="btn-group-line-view">
              <Button title="купить" />
              <Button title="купить в кредит" variant="secondary" />
              <Button title="Купить в 1 клик" variant="tercary" />
            </section>
          </>
        )}
      </div>
    </Container>
  );
};

export default Product;
