import { Sale, BtnsGroup, Table } from "../Components";

import { Image, Text } from "@atoms";
import { Container } from "../styles";

const ProductHorizontalView = ({ data }) => {
  return (
    <Container className="potoduct-line-view">
      <section className="product">
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
        <Table value={data} />
      </section>
      <section className="gift">
        <div className="articule">
          <span className="article">{`Артикул:\n${1464}`}</span>
          <Image path="/images/product/market" type="png" />
        </div>
        <Image path="/images/product/gift-big" type="png" />
      </section>
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
    </Container>
  );
};

export default ProductHorizontalView;
