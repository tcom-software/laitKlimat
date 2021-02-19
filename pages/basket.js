import Basket from "@screens/BasketView";

export default Basket;

export const getServerSideProps = async () => {
  return {
    props: {
      bannerVariant: "tercary",
    },
  };
};
