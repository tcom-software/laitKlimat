import { Text } from "@atoms";
import { PreviousViews } from "@organisms";

import Info from "./Info";
import LeftBar from "./LeftBar";
import { Container } from "./styles";
import Characteristics from "./Characteristics";
import { serializeProductData } from "helper/serializeProduct";
import { Hgroup } from "@molecules";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsCacheByKey } from "@redux/selectors/products";
import { initializeStore } from "@redux/index";
import { addProductsCache } from "@redux/actions/products";

const ProductView = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const product = useSelector(getProductsCacheByKey(router.query.product));

  useEffect(() => {
    const productId = router.query.product;
    if (!product) {
      fetchProduct(productId);
    }
  }, [router.query.product]);

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

  if (loading || !product) {
    return (
      <Container>
        {/* <Text tag="h2" clr="secondary" sz="larg" id="title">
        {productName}
      </Text> */}
        {/* <div className="product-info container">
        <LeftBar data={leftSide} />
        <Info data={infoTable} product={product.product} />
      </div> */}
        {/* <Characteristics data={characteristics} /> */}
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
        <LeftBar data={leftSide} />
        <Info data={infoTable} product={product.product} />
      </div>
      <Characteristics data={characteristics} />
      <PreviousViews className="container" title="Похожие товары" />
      <PreviousViews className="container previous-views" />
    </Container>
  );
};

export default ProductView;
