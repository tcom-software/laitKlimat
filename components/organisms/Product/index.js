import ProductBoxView from "./BoxView";
import ProductHorizontalView from "./HorizontalView";

import { Image, Icon, Text, Button } from "@atoms";
import { ContainerSimilarProduct } from "./styles";
import { serializeProductCardData } from "helper/serializeProduct";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { basketAddProduct } from "@redux/actions/basket";
import { getLoader } from "@redux/selectors/loader";

const Product = ({ view, data }) => {
  const dispatch = useDispatch();
  const loading = useSelector(getLoader);
  const serializedData = serializeProductCardData(data);
  const ProduvtView = view === "box" ? ProductBoxView : ProductHorizontalView;
  const [basketLoading, setBasketLoading] = useState(false);

  const addToBasket = useCallback(() => {
    setBasketLoading(true);
    setTimeout(() => {
      setBasketLoading(false);
      dispatch(basketAddProduct(serializedData));
    }, 300);
  });

  return (
    <ProduvtView
      basketLoading={basketLoading}
      addToBasket={addToBasket}
      data={serializedData}
      loading={loading}
    />
  );
};

export const SimilarProduct = ({ withHandleClose = () => null, ...rest }) => {
  return (
    <ContainerSimilarProduct {...rest}>
      {withHandleClose && (
        <Icon
          name="close"
          fill="secondary"
          width="1em"
          height="1em"
          onClick={withHandleClose}
        />
      )}
      <section className="product">
        <Image path="/images/product/product" type="png" className="product" />
      </section>

      <Text tag="span" sz="larg" clr="secondary" bold className="title">
        {"Besshof STARK-ZS/ZU-T07KC"}
      </Text>

      <section className="price row">
        <Image path="/images/product/logo" type="png" />
        <Text tag="span" sz="larg" clr="tercary" bold className="price">
          {"15 494 ₽"}
        </Text>
      </section>
      <span className="article">{`Артикул:\n${1464}`}</span>
      <section className="btn">
        <Button title="сделать заказ" />
      </section>
    </ContainerSimilarProduct>
  );
};

export default Product;
