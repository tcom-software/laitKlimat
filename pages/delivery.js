import { initializeStore } from "@redux/index";
import { Delivery } from "@screens";

export default Delivery;

export const getServerSideProps = () => {
  const reduxStore = initializeStore();

  return {
    props: {
      bannerVariant: "secondary",
    },
  };
};
