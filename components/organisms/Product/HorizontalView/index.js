import { Sale, BtnsGroup, Table, ProductLinkWrapper } from "../Components";

import { Image, Text } from "@atoms";
import { Container } from "../styles";

const ProductHorizontalView = ({ data, loading, addToBasket }) => {
  const {
    brand,
    brandLogo,
    productName,
    productImageX300,
    characteristics,
    articule,
    setupPrice,
    // price,
    formatedPrice,
    characteristic,
  } = data;

  return (
    <Container className="potoduct-line-view">
      <section className="product">
        <Sale />
        <ProductLinkWrapper articule={articule}>
          <a>
            <img src={productImageX300} alt={brand} width="180" height="140" />
          </a>
        </ProductLinkWrapper>
      </section>
      <section className="info">
        <div className="info-title">
          <ProductLinkWrapper articule={articule}>
            <a>
              <Text tag="span" sz="larg" clr="secondary" bold className="title">
                {productName}
              </Text>
            </a>
          </ProductLinkWrapper>
          <picture>
            <img src={brandLogo} alt={brand} />
          </picture>
        </div>
        <Table characteristic={characteristic} />
      </section>
      <section className="gift">
        <div className="articule">
          <span className="article">{`Артикул:\n${articule}`}</span>
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
            {formatedPrice}
          </Text>
        </div>
        <div className="btn-group">
          <BtnsGroup loading={loading} addToBasket={addToBasket} />
        </div>
      </section>
    </Container>
  );
};

export default ProductHorizontalView;
