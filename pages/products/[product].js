import { initializeStore } from "@redux/index";
import { ProductView } from "components/screens";
import { compose } from "utils/compose";
import { initializeCategories } from "helper/initialReduxState";

const Product = ({ initialStore }) => {
  return <ProductView />;
};

export const getServerSideProps = async ctx => {
  const store = initializeStore();
  const { initialStore } = await compose(initializeCategories)({
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
