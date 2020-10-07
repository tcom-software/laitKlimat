import { initializeStore } from "@redux/index";
import { Reviews } from "@screens";

export default Reviews;

export const getServerSideProps = () => {
  const reduxStore = initializeStore();

  return {
    props: {
      bannerVariant: "secondary",
    },
  };
};
