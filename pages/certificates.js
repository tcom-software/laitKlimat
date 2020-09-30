import { initializeStore } from "@redux/index";
import { CertificatesView } from "@screens";

export default CertificatesView;

export const getServerSideProps = () => {
  const reduxStore = initializeStore();

  return {
    props: {
      bannerVariant: "primary",
    },
  };
};
