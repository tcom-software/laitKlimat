import { useRef, useState } from "react";

import { Hgroup } from "@molecules";
import { Button, Image, Text, Input, Textarea, Select } from "@atoms";
import { Sale, BtnsGroup, Table } from "../../organisms/Product/Components";
import { Container } from "./styles";

import { makePriceView } from "utils/makePriceView";
import {
  basketClear,
  basketRemoveProduct,
  decrementProductCount,
  incrementProductCount,
} from "@redux/actions/basket";
import { useDispatch, useSelector } from "react-redux";
import {
  getBasketCount,
  getBasketProducts,
  getBasketTotalPrice,
} from "@redux/selectors/basket";
import { showModal } from "@redux/actions/modal";

export const productData = [
  { title: "Обслуживаемая площадь до", value: "20 м2" },
  { title: "Стоимость установки", value: "14 900 ₽" },
  { title: "Доставка в пределах МКАД", value: "бесплатно" },
  { title: "В кредит от", value: "645 р./месяц" },
  { title: "Страна производителя", value: "Китай" },
];

const BasketView = () => {
  const [loading, setLoading] = useState(false);

  const nameRef = useRef(null);
  const telRef = useRef(null);
  const emailRef = useRef(null);
  const addressRef = useRef(null);
  const paymentTypeRef = useRef(null);
  const delivaryTypeRef = useRef(null);

  const dispatch = useDispatch();
  const totalPrice = useSelector(getBasketTotalPrice);
  const productsCount = useSelector(getBasketCount);
  const products = useSelector(getBasketProducts);

  const clearBasket = () => dispatch(basketClear());

  // show order busket success
  const showDone = () => {
    dispatch(
      showModal({
        modalType: "alert",
        modalProps: {
          heading: "Order have been Success",
          description: "Thanks sooo much",
        },
      })
    );
  };

  // order busket
  const handleOnSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    const _products = Object.entries(products).reduce(
      (acc, [key, value]) => ({ ...acc, [key]: String(value.count) }),
      {}
    );
    const orderData = {
      delivery_address: addressRef.current.value,
      delivery_type: delivaryTypeRef.current.value,
      email: emailRef.current.value,
      name: nameRef.current.value,
      last_name: "not last name",
      payment_type: paymentTypeRef.current.value,
      phone_number: telRef.current.value,
      comment: "",
      products: _products,
    };

    await fetch("/api/orderBasket", {
      method: "POST",
      body: JSON.stringify(orderData),
    });

    setLoading(false);
    nameRef.current.value = "";
    telRef.current.value = "";
    emailRef.current.value = "";
    addressRef.current.value = "";
    setTimeout(showDone, 400);
  };

  return (
    <Container className="container">
      <Hgroup h1="КОРЗИНА" />
      <div className="basket">
        {Object.values(products).map(props => (
          <Product {...props} />
        ))}
      </div>
      <div className="basket__footer">
        {productsCount !== 0 ? (
          <>
            <Button
              variant="tercary"
              title="Очистить КОРЗИНY"
              onClick={clearBasket}
            ></Button>
            <div className="basket__footer__value">
              <Text tag="span" sz="normal" clr="primary">
                стоимость заказа:
              </Text>
              <Text tag="span" sz="larg" clr="tercary" bold>
                {makePriceView(totalPrice, { unit: "₽", split: " " })}
              </Text>
            </div>
          </>
        ) : (
          <Text tag="p" clr="tercary" sz="normal" className="basket-empty">
            КОРЗИНА пуста
          </Text>
        )}
      </div>
      {productsCount !== 0 && (
        <form onSubmit={handleOnSubmit}>
          <div className="inputs">
            <Input type="text" inputRef={nameRef} label={"Имя"} required />
            <Input
              type="text"
              inputRef={telRef}
              label={"Номер телефона"}
              required
            />
            <Input type="email" inputRef={emailRef} label={"E-MAIL"} required />
            <Input
              type="text"
              inputRef={addressRef}
              label={"Адрес:"}
              required
            />
            <Select
              type="text"
              label={"Тип доставки"}
              inputRef={delivaryTypeRef}
              options={[{ title: "С доставкой" }, { title: "Самовывоз" }]}
            />
            <Select
              type="text"
              label={"Тип оплаты"}
              inputRef={paymentTypeRef}
              options={[
                { title: "Наличными курьеру" },
                { title: "Банковской картой курьеру" },
                { title: "Взять в кредит" },
              ]}
            />
          </div>
          <Button
            type="submit"
            variant="primary"
            title="Оформить заказ"
            loading={loading}
          />
        </form>
      )}
    </Container>
  );
};

const Product = ({
  brand,
  brandLogo,
  productName,
  productImageX300,
  characteristic,
  articule,
  price,
  count,
}) => {
  const dispatch = useDispatch();

  return (
    <section className="product">
      <section className="image">
        <Sale />
        <img src={productImageX300} alt={brand} />
      </section>
      <section className="info">
        <div className="info-title">
          <Text tag="span" sz="larg" clr="secondary" bold className="title">
            {productName}
          </Text>
          <img src={brandLogo} alt={brand} />
        </div>
        <Table characteristic={characteristic} />
      </section>
      <sections className="count">
        <Text tag="span" sz="normall" clr="primary">
          Количество
        </Text>
        <div>
          <Text tag="span" sz="normall" clr="secondary" bold>
            {count}
          </Text>
          <button onClick={() => dispatch(decrementProductCount(articule))}>
            -
          </button>
          <button onClick={() => dispatch(incrementProductCount(articule))}>
            +
          </button>
        </div>
      </sections>
      <section className="btns">
        <div className="price">
          <Text tag="span" sz="normall" clr="primary">
            цена
          </Text>
          <Text tag="span" sz="larg" clr="tercary" bold className="price">
            {makePriceView(count * price, { unit: "₽", split: " " })}
          </Text>
        </div>
        <div className="btn-group">
          <BtnsGroup />
        </div>
      </section>
      <img
        alt="trash"
        className="trash"
        src="/images/trash.svg"
        onClick={() => dispatch(basketRemoveProduct(articule))}
      />
    </section>
  );
};

export default BasketView;
