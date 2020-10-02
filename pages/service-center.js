import { initializeStore } from "@redux/index";
import { ServiceCenter } from "@screens";

export default ServiceCenter;

export const getServerSideProps = () => {
  const reduxStore = initializeStore();

  return {
    props: {
      bannerVariant: "tercary",
    },
  };
};
