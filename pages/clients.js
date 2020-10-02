import { initializeStore } from "@redux/index";
import { ClientsView } from "@screens";

export default ClientsView;

export const getServerSideProps = () => {
  const reduxStore = initializeStore();

  return {
    props: {
      bannerVariant: "tercary",
    },
  };
};
