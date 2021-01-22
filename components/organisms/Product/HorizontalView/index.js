import { Sale, Table, ProductLinkWrapper } from "../Common";
import { Image, Text } from "@atoms";
import { Container } from "../styles";
import cn from "classnames";
// buttons
import ButtonOrderOneClick from "@atoms/Button/ButtonOrderOneClick";
import ButtonAddToBasket from "@atoms/Button/ButtonAddToBasket";
import ButtonCredit from "@atoms/Button/ButtonCredit";

const ProductHorizontalView = ({ data, loading }) => {
  const {
    brand,
    brandLogo,
    productName,
    productImageX300,
    characteristics,
    articule,
    setupPrice,
    price,
    formatedPrice,
    characteristic,

    hasSale,
    hasChat,
    priceWithSetup,
    priceWithoutSetup,
  } = data;

  return (
    <Container className={cn("potoduct-line-view", { "g-loading": loading })}>
      <section className="product">
        {hasSale && <Sale data={{ priceWithSetup, priceWithoutSetup }} />}
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
          <ButtonOrderOneClick />
          <ButtonAddToBasket product={{ id: articule, price }} />
          <ButtonCredit creditData={{ price, productName }} />
        </div>
      </section>
    </Container>
  );
};

export default ProductHorizontalView;
