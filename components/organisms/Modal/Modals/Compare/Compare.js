import { useState, useRef } from "react";
import { Text, Checkbox, Icon } from "@atoms";
import { SimilarProduct } from "@organisms";
import { Container } from "./styles";

const filters = [
  "Обслуживаемая площадь",
  "Доставка в пределах МКАД",
  "В кредит от",
  "Стоимость установки",
  "Обслуживаемая площадь",
  "Доставка в пределах МКАД",
  "В кредит от",
  "Стоимость установки",
];

const values = [
  "20 м2",
  "14 900 ₽",
  "645 р./месяц",
  "бесплатно",
  "20 м2",
  "14 900 ₽",
  "645 р./месяц",
  "бесплатно",
];

const Compare = ({ modalRef, hideModal, modalProps }) => {
  const [selected, setSelected] = useState(1);
  const products = useRef([SimilarProduct]);

  return (
    <Container ref={modalRef}>
      <header>
        <div className="close" onClick={hideModal}>
          <Icon name="close" fill="secondary" />
        </div>
      </header>
      <div className="wrapper">
        <section className="top">
          <div className="selected-names">
            {products.current.map((Product, idx) => (
              <div className="item active">
                <Checkbox checked />
                <Text tag="span" clr="secondary" sz="normal">
                  Besshof STARK-ZS/ZU-T07KC
                </Text>
              </div>
            ))}
            {[...Array(4 - products.current.length)].map((_, i) => (
              <input
                className="item add-new"
                key={i + products.current.length}
              />
            ))}
          </div>

          {products.current.map((Product, idx) => (
            <SimilarProduct
              key={idx}
              withHandleClose={() =>
                setSelected(count => {
                  products.current = products.current.filter(
                    (_, i) => i !== idx
                  );
                  return count - 1;
                })
              }
              className="product selected"
            />
          ))}
          {selected !== 4 && (
            <div
              className="product add-new"
              onClick={() =>
                setSelected(count => {
                  products.current.push(SimilarProduct);
                  return count + 1;
                })
              }
            >
              <Icon name="close" fill="secondary" width="3em" height="3em" />
            </div>
          )}
        </section>
        <section className="bottom">
          <div className="row">
            <Text tag="h3" clr="white" sz="larg">
              характеристики
            </Text>
          </div>

          <div className="charasteristics">
            {filters.map((text, idx) => (
              <div className="table-row" key={idx}>
                <Text tag="span" clr="primary" sz="normal">
                  {text}
                </Text>
                {products.current.map((_, i) => (
                  <Text tag="span" clr="secondary" sz="normal" key={i}>
                    {values[idx]}
                  </Text>
                ))}
                {[...Array(4 - products.current.length)].map((_, i) => (
                  <Text
                    tag="span"
                    clr="secondary"
                    sz="normal"
                    key={i + products.current.length}
                  ></Text>
                ))}
              </div>
            ))}
          </div>
          <div className="row"></div>
        </section>
      </div>
    </Container>
  );
};

export default Compare;
