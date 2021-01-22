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

// buttons
import ButtonOrderOneClick from "@atoms/Button/ButtonOrderOneClick";
import ButtonCredit from "@atoms/Button/ButtonCredit";

const BasketView = () => {
  // loading
  const [loading, setLoading] = useState(false);
  const [productsLoading, setProductsLoading] = useState(false);
  // set by fetching from backend
  const [products, setProducts] = useState(null);

  // refs
  const nameRef = useRef(null);
  const telRef = useRef(null);
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
    fetch("/api/product", {
      method: "POST",
      body: JSON.stringify(Object.keys(basketProducts)),
    })
      .then(response => response.json())
      .then(products => {
        const serializedProducts = {};

        for (const product of products) {
          const serializedProduct = serializeProductCardDataFromFullProduct(
            product
          );
          serializedProducts[serializedProduct.articule] = serializedProduct;
        }

        setProducts(serializedProducts);
        setProductsLoading(false);
      });
  }, []);

  // delete all basket info when close the alert modal
  const deleteBasket = () => {
    clearBasket();
    nameRef.current.value = "";
    telRef.current.value = "";
    emailRef.current.value = "";
    addressRef.current.value = "";
  };

  // show order busket success
  const showDone = () => {
    dispatch(
      showModal({
        modalType: "alert",
        modalProps: {
          heading: "Order have been Success",
          description: "Thanks sooo much",
          callBack: deleteBasket,
        },
      })
    );
  };

  /**
   * order busket
   */
  const handleOnSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    const products = Object.entries(basketProducts).reduce(
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
      products,
    };

    if (process.env.NODE_ENV === "production") {
      await fetch("/api/orderBasket", {
        method: "POST",
        body: JSON.stringify(orderData),
      });
    } else {
      await new Promise(res => {
        setTimeout(() => res(), 1000);
      }).then(console.log(products));
    }

    setLoading(false);
    setTimeout(showDone, 400);
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
      <Hgroup h1="КОРЗИНА" />
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
              title="Очистить КОРЗИНY"
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
  productImage,
  characteristic,
  articule,
  price,
  count,
}) => {
  const dispatch = useDispatch();

  const increment = () => dispatch(incrementProductCount(articule));
  const decrement = () => dispatch(decrementProductCount(articule));

  return (
    <section className="product">
      <section className="image">
        <Sale />
        <img src={productImage} alt={brand} />
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
          <ButtonCredit />
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
