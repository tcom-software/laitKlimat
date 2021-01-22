import { initializeStore } from "@redux/index";
import { Delivery } from "@screens";
import { initializeCategories } from "helper/initialReduxState";
import { compose } from "utils/compose";

export default Delivery;

export const getServerSideProps = async ctx => {
  const store = initializeStore();
  const { initialStore } = await compose(initializeCategories)({
    initialStore: {},
    store,
    ctx,
  });

  return {
    props: {
      initialStore,
      bannerVariant: "secondary",
    },
  };
};
