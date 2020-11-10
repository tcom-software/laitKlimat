import { initializeStore } from "@redux/index";
import { BasketView } from "@screens";

export default BasketView;

export const getServerSideProps = () => {
  const reduxStore = initializeStore();

  return {
    props: {
      bannerVariant: "tercary",
    },
  };
};
