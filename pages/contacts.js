import { initializeStore } from "@redux/index";
import { Contacts } from "@screens";

export default Contacts;

export const getServerSideProps = () => {
  const reduxStore = initializeStore();

  return {
    props: {
      bannerVariant: "secondary",
    },
  };
};
