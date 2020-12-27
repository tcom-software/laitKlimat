import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsCacheByKey } from "@redux/selectors/products";
import { initializeStore } from "@redux/index";
import { ProductView } from "components/screens";
import { compose } from "utils/compose";
import {
  initializeCategories,
  initializeProduct,
} from "helper/initialReduxState";
import { addProductsCache } from "@redux/actions/products";
import { useRouter } from "next/router";

const Product = ({ initialStore }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const product = useSelector(
    getProductsCacheByKey(initialStore.product.productId)
  );

  useEffect(() => {
    const { hasCache, productId, payload } = initialStore.product;
    if (!hasCache) {
      dispatch(addProductsCache(productId, payload));
    }
  }, []);

  return <ProductView product={product} />;
};

export const getServerSideProps = async ctx => {
  const store = initializeStore();
  const { initialStore } = await compose(
    initializeCategories,
    initializeProduct
  )({
    store,
    ctx,
    initialStore: {},
  });

  return {
    props: {
      initialStore,
      bannerVariant: "secondary",
    },
  };
};

export default Product;
