import { initializeStore } from "@redux/index";
import { Gallery } from "@screens";

export default Gallery;

export const getServerSideProps = () => {
  const reduxStore = initializeStore();

  return {
    props: {
      bannerVariant: "tercary",
    },
  };
};
