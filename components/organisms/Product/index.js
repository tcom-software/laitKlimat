import ProductBoxView from "./BoxView";
import ProductHorizontalView from "./HorizontalView";

import { Image, Icon, Text, Button } from "@atoms";
import { ContainerSimilarProduct } from "./styles";

export const productData = [
  { title: "Обслуживаемая площадь до", value: "20 м2" },
  { title: "Стоимость установки", value: "14 900 ₽" },
  { title: "Доставка в пределах МКАД", value: "бесплатно" },
  { title: "В кредит от", value: "645 р./месяц" },
];

const Product = ({ view }) => {
  return view === "box" ? (
    <ProductBoxView data={productData} />
  ) : (
    <ProductHorizontalView data={productData} />
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
