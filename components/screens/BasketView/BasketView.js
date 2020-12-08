import { useRef } from "react";
import { Hgroup } from "@molecules";
import { Button, Image, Text, Input, Textarea } from "@atoms";
import { Sale, BtnsGroup, Table } from "../../organisms/Product/Components";
import { Container } from "./styles";

export const productData = [
  { title: "Обслуживаемая площадь до", value: "20 м2" },
  { title: "Стоимость установки", value: "14 900 ₽" },
  { title: "Доставка в пределах МКАД", value: "бесплатно" },
  { title: "В кредит от", value: "645 р./месяц" },
  { title: "Страна производителя", value: "Китай" },
];

const BasketView = () => {
  const nameRef = useRef();
  const telRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const paymentTypeRef = useRef();
  const delivaryTypeRef = useRef();

  return (
    <Container className="container">
      <Hgroup h1="КОРЗИНА" />
      <div className="basket">
        <Product data={productData} />
      </div>
      <div className="basket__footer">
        <Button variant="tercary" title="Очистить КОРЗИНY"></Button>
        <div className="basket__footer__value">
          <Text tag="span" sz="normal" clr="primary">
            стоимость заказа:
          </Text>
          <Text tag="span" sz="larg" clr="tercary" bold>
            15 494 ₽
          </Text>
        </div>
      </div>
      <form>
        <div className="inputs">
          <Input type="text" inputRef={nameRef} label={"Имя"} />
          <Input type="text" inputRef={telRef} label={"Номер телефона"} />
          <Input type="text" inputRef={emailRef} label={"E-MAIL"} />
          <Input
            type="text"
            inputRef={delivaryTypeRef}
            label={"Тип доставки"}
            placeholder={"placeholder"}
          />
          <Input
            type="text"
            inputRef={addressRef}
            label={"Адрес:"}
            placeholder={"Адрес"}
          />
          <Input
            type="text"
            inputRef={paymentTypeRef}
            label={"Тип оплаты"}
            placeholder={"Наличными курьеру"}
          />
        </div>
        <Button variant="primary" title="Оформить заказ" type="submit"/>
      </form>
    </Container>
  );
};

const Product = ({ data }) => {
  return (
    <section className="product">
      <section className="image">
        <Sale />
        <Image path="/images/product/product" type="png" />
      </section>
      <section className="info">
        <div className="info-title">
          <Text tag="span" sz="larg" clr="secondary" bold className="title">
            {"Besshof STARK-ZS/ZU-T07KC"}
          </Text>
          <Image path="/images/product/logo" type="png" />
        </div>
        {/* <Table value={data} /> */}
      </section>
      <sections className="count">
        <Text tag="span" sz="normall" clr="primary">
          Количество
        </Text>
        <div>
          <Text tag="span" sz="normall" clr="secondary" bold>
            1
          </Text>
          <button>-</button>
          <button>+</button>
        </div>
      </sections>
      <section className="btns">
        <div className="price">
          <Text tag="span" sz="normall" clr="primary">
            цена
          </Text>
          <Text tag="span" sz="larg" clr="tercary" bold className="price">
            {"15 494 ₽"}
          </Text>
        </div>
        <div className="btn-group">
          <BtnsGroup />
        </div>
      </section>
    </section>
  );
};

export default BasketView;
