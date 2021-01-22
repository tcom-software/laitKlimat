import { initializeCategories } from "helper/initialReduxState";
import { initializeStore } from "@redux/index";
import { compose } from "utils/compose";
import BasketView from "@screens/BasketView";

export default BasketView;

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
      bannerVariant: "tercary",
    },
  };
};
