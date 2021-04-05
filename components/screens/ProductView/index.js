import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { Text } from "@atoms";
import { Hgroup } from "@molecules";
import { PreviousViews } from "@organisms";

import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { Container } from "./styles";
import Characteristics from "./Characteristics";
import { addProductsCache } from "@redux/actions/products";
import { serializeProductData } from "helper/serializeProduct";
import { getProductsCacheByKey } from "@redux/selectors/products";
import { ProductService } from "api/ProductService";

const ProductView = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const cachedProduct = useSelector(
    getProductsCacheByKey(router.query.product)
  );

  useEffect(() => {
    const productId = router.query.product;
    if (!cachedProduct) {
      setLoading(true);
      ProductService.getProduct(productId).then(product => {
        dispatch(addProductsCache(productId, product));
        setLoading(false);
      });
    }
  }, [router.query.product]);

  useEffect(() => {
    setProduct(product => cachedProduct ?? product);
  }, [cachedProduct]);

  const serializedProduct = useMemo(
    () => product && serializeProductData(product),
    [product]
  );

  if (!product) {
    return (
      <Container>
        <div id="title" />
        <PreviousViews className="container" title="Похожие товары" />
        <PreviousViews className="container previous-views" />
      </Container>
    );
  }

  const {
    leftSide,
    infoTable,
    productName,
    characteristics,
  } = serializedProduct;

  return (
    <Container>
      <div id="title" />
      <Text tag="h2" clr="secondary" sz="larg">
        {productName}
      </Text>
      <div className="product-info container">
        <LeftSide data={leftSide} />
        <RightSide
          data={{ productName, ...infoTable, ...(product.product || {}) }}
        />
      </div>
      <section className="container info">
        <Text tag="p" sz="smaller" clr="primary">
          {
            "* Производитель оставляет за собой право без уведомления менять характеристики, внешний вид, комплектацию товара и место его производства.\nУказанная информация не является публичной офертой"
          }
        </Text>
        {/* <Text tag="p" sz="smaller" clr="primary">
          {"Б/Н c НДС +10%"}
        </Text> */}
      </section>
      <Characteristics data={characteristics} />
      <PreviousViews className="container" title="Похожие товары" />
      <PreviousViews className="container previous-views" />
    </Container>
  );
};

export default ProductView;
