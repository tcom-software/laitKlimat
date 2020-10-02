import { initializeStore } from "@redux/index";
import { PlacingAndMontage } from "@screens";

export default PlacingAndMontage;

export const getServerSideProps = () => {
  const reduxStore = initializeStore();

  return {
    props: {
      bannerVariant: "tercary",
    },
  };
};
