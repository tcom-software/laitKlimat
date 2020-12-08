import { Text } from "@atoms";
import { PreviousViews } from "@organisms";

import Info from "./Info";
import LeftBar from "./LeftBar";
import { Container } from "./styles";
import Characteristics from "./Characteristics";
import { serializeProductData } from "helper/serializeProduct";

const ProductView = ({ product }) => {
  if (!product) {
    return <p>loading</p>;
  }

  const {
    leftSide,
    infoTable,
    productName,
    characteristics,
  } = serializeProductData(product);

  return (
    <Container>
      <Text tag="h2" clr="secondary" sz="larg">
        {productName}
      </Text>
      <div className="product-info container">
        <LeftBar data={leftSide} />
        <Info data={infoTable} />
      </div>
      <Characteristics data={characteristics} />
      <PreviousViews className="container" title="Похожие товары" />
      <PreviousViews className="container" />
    </Container>
  );
};

export default ProductView;
