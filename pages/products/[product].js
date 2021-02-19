import Product from "@screens/ProductView";

export default Product;

export const getServerSideProps = async () => {
  return {
    props: {
      bannerVariant: "secondary",
    },
  };
};
