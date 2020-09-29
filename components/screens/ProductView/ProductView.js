import { Text } from "@atoms";
import { PreviousViews } from "@organisms";

import Info from "./Info";
import LeftBar from "./LeftBar";
import { Container } from "./styles";
import Characteristics from "./Characteristics";

const ProductView = () => {
  return (
    <Container>
      <Text tag="h2" clr="secondary" sz="larg">
        Besshof STARK-ZS/ZU-T07KC
      </Text>
      <div className="product-info container">
        <LeftBar />
        <Info />
      </div>
      <Characteristics />
      <PreviousViews className="container" title="Похожие товары" />
      <PreviousViews className="container" />
    </Container>
  );
};

export default ProductView;
