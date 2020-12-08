import { initializeCategories } from "helper/initialReduxState";
import { initializeStore } from "@redux/index";
import { CertificatesView } from "@screens";
import { compose } from "utils/compose";

export default CertificatesView;

export const getServerSideProps = async ctx => {
  const store = initializeStore();
  const { initialStore } = await compose(initializeCategories)({
    store,
    ctx,
    initialStore: {},
  });

  return {
    props: {
      initialStore,
      bannerVariant: "primary",
    },
  };
};
