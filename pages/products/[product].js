import { initializeStore } from "@redux/index";
import { ProductView } from "components/screens";

const Product = props => <ProductView {...props} />;

export const getServerSideProps = () => {
  const reduxStore = initializeStore();

  return {
    props: {
      bannerVariant: "secondary",
    },
  };
};

export default Product;
