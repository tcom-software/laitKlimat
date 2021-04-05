import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Hgroup } from "@molecules";
import { Button, Image, Text, Input, Textarea, Select, Loading } from "@atoms";
import { Sale, Table } from "@organisms/Product/Common";
import { makePriceView } from "utils/makePriceView";
import { serializeProductCardDataFromFullProduct } from "helper/serializeProduct";
import { Container } from "./styles";
import {
  basketAddProduct,
  basketClear,
  basketRemoveProduct,
  decrementProductCount,
  incrementProductCount,
} from "@redux/actions/basket";
import {
  getBasketCount,
  getBasketProducts,
  getBasketTotalPrice,
} from "@redux/selectors/basket";
import { showModal } from "@redux/actions/modal";

import PhoneInput from "react-phone-number-input/input";
import { isValidPhoneNumber } from "react-phone-number-input";

// buttons
import ButtonOrderOneClick from "@atoms/Button/ButtonOrderOneClick";
import ButtonCredit from "@atoms/Button/ButtonCredit";

import GTAG from "utils/gtag";
import YM from "utils/yandex";
import { BasketService } from "api/BasketService";
import { ProductService } from "api/ProductService";

const BasketView = () => {
  const [phone, setPhone] = useState("");
  // loadings
  const [loading, setLoading] = useState(false);
  const [productsLoading, setProductsLoading] = useState(false);
  // set by fetching from backend
  const [products, setProducts] = useState(null);

  const [paymentType, setPaymentType] = useState("");
  const [orderButtonText, setOrderButtonText] = useState("Оформить заказ");

  // refs
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const addressRef = useRef(null);
  const paymentTypeRef = useRef(null);
  const delivaryTypeRef = useRef(null);

  const dispatch = useDispatch();
  const productsCount = useSelector(getBasketCount);
  const totalPrice = useSelector(getBasketTotalPrice);
  const basketProducts = useSelector(getBasketProducts);

  const clearBasket = () => dispatch(basketClear());

  useEffect(() => {
    setProductsLoading(true);

    (async () => {
      const serializedProducts = {};
      for await (let id of Object.keys(basketProducts)) {
        const product = await ProductService.getProduct(id);
        const serializedProduct = serializeProductCardDataFromFullProduct(
          product
        );
        serializedProducts[id] = serializedProduct;
      }

      setProducts(serializedProducts);
      setProductsLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (phoneRef.current) {
      if (!isValidPhoneNumber(phone)) {
        phoneRef.current.setCustomValidity("Invalid phone format");
      } else {
        phoneRef.current.setCustomValidity("");
      }
    }
  }, [phone]);

  useEffect(() => {
    setOrderButtonText(() => {
      return paymentType === "Взять в кредит"
        ? "Оформить кредит"
        : "Оформить заказ";
    });
  }, [paymentType]);

  // --- delete all basket info when close the alert modal
  const deleteBasket = () => {
    clearBasket();
    nameRef.current.value = "";
    emailRef.current.value = "";
    addressRef.current.value = "";
    setPhone("");
  };

  // --- show order busket success
  const showDone = () => {
    dispatch(
      showModal({
        modalType: "alert",
        modalProps: {
          heading: "Ваш заказ успешно принят",
          callBack: deleteBasket,
        },
      })
    );
  };

  // --- order basket
  const handleOnSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    const products = Object.entries(basketProducts).reduce(
      (acc, [key, value]) => ({ ...acc, [key]: String(value.count) }),
      {}
    );

    const basketData = {
      delivery_address: addressRef.current.value,
      delivery_type: delivaryTypeRef.current.value,
      email: emailRef.current.value,
      name: nameRef.current.value,
      last_name: "not last name",
      payment_type: paymentTypeRef.current.value,
      phone_number: phone,
      comment: "",
      products,
    };

    if (process.env.NODE_ENV === "production") {
      BasketService.doOrder(basketData).finally(() => {
        YM.OformitZakaz();
        GTAG.OformitZakaz();
      });
    } else {
      await new Promise(res => {
        setTimeout(() => res(), 1000);
      }).then(() => console.log({ products, basketData }));
    }

    setLoading(false);
    setTimeout(showDone, 400);
  };

  const handleShowBankOrder = e => {
    e.preventDefault();

    const mergedProducts = Object.values(products).reduce(
      (acc, { articule: id, productName, price }) => [
        ...acc,
        { price, productName, count: basketProducts[id].count },
      ],
      []
    );

    const creditData = {
      totalPrice,
      products: mergedProducts,
    };

    dispatch(
      showModal({
        modalType: "bankOrder",
        modalProps: { ...creditData, callBack: showDone },
      })
    );
  };

  if (productsLoading) {
    return (
      <Container className="container">
        <Loading mode="dark" className="loader" />
      </Container>
    );
  }

  return (
    <Container className="container">
      <Hgroup h1="Корзина" />
      {products && (
        <div className="basket">
          {Object.values(basketProducts).map(({ count, id }) => (
            <Product {...products[id]} count={count} />
          ))}
        </div>
      )}
      <div className="basket__footer">
        {productsCount !== 0 ? (
          <>
            <Button
              variant="tercary"
              title="Очистить корзину"
              onClick={clearBasket}
            />
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
            Корзина пуста
          </Text>
        )}
      </div>
      {productsCount !== 0 && (
        <form
          onSubmit={
            orderButtonText === "Оформить кредит"
              ? handleShowBankOrder
              : handleOnSubmit
          }
        >
          <div className="inputs">
            <Input type="text" inputRef={nameRef} label={"Имя"} required />
            <Input label={"Номер телефона"}>
              <PhoneInput
                required
                international
                value={phone}
                ref={phoneRef}
                onChange={setPhone}
                placeholder="Номер телефона"
                name="customerPhone"
              />
            </Input>
            <Input type="email" inputRef={emailRef} label={"E-mail"} required />
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
              onChange={value => setPaymentType(value)}
              options={[
                { title: "Наличными курьеру" },
                { title: "Банковской картой курьеру" },
                // { title: "Взять в кредит" },
              ]}
            />
          </div>
          <Button
            type="submit"
            variant="primary"
            title={orderButtonText}
            loading={loading}
          />
        </form>
      )}
    </Container>
  );
};

const Product = ({
  count,
  brand,
  price,
  articule,
  brandLogo,
  productName,
  productImage,
  characteristic,

  // TODO::: add hasSale if you want display sale button
  // hasSale,
}) => {
  const dispatch = useDispatch();

  const increment = () => dispatch(incrementProductCount(articule));
  const decrement = () => dispatch(decrementProductCount(articule));

  return (
    <section className="product">
      <section className="image">
        <img src={productImage} alt={brand} />
      </section>
      <section className="info">
        <div className="info-title">
          <Text tag="span" sz="larg" clr="secondary" bold className="title">
            {productName}
          </Text>
          <img src={brandLogo} alt={brand} />
        </div>
        <Table characteristic={characteristic} productName={productName} />
      </section>
      <sections className="count">
        <Text tag="span" sz="normall" clr="primary">
          Количество
        </Text>
        <div>
          <Text tag="span" sz="normall" clr="secondary" bold>
            {count}
          </Text>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
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
          <ButtonOrderOneClick />
          {/* <ButtonCredit creditData={{ productName, count, price }} /> */}
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
