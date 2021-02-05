import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { Text } from "@atoms";
import { Hgroup } from "@molecules";
import { PreviousViews } from "@organisms";

import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { Container } from "./styles";
import { initializeStore } from "@redux/index";
import Characteristics from "./Characteristics";
import { addProductsCache } from "@redux/actions/products";
import { serializeProductData } from "helper/serializeProduct";
import { getProductsCacheByKey } from "@redux/selectors/products";

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
      fetchProduct(productId);
    }
  }, [router.query.product]);

  useEffect(() => {
    setProduct(product => cachedProduct ?? product);
  }, [cachedProduct]);

  const fetchProduct = async productId => {
    setLoading(true);
    const response = await fetch("/api/getProduct", {
      method: "POST",
      body: JSON.stringify({ productId }),
    });
    const product = await response.json();
    setLoading(false);
    dispatch(addProductsCache(productId, product));
  };

  const serializedProduct = useMemo(
    () => product && serializeProductData(product),
    [product]
  );

  if (!product) {
    return (
      <Container>
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
      <Text tag="h2" clr="secondary" sz="larg" id="title">
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
      </section>
      <Characteristics data={characteristics} />
      <PreviousViews className="container" title="Похожие товары" />
      <PreviousViews className="container previous-views" />
    </Container>
  );
};

export default ProductView;
