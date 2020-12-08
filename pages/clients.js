import { initializeCategories } from "helper/initialReduxState";
import { initializeStore } from "@redux/index";
import { compose } from "utils/compose";
import { ClientsView } from "@screens";

export default ClientsView;

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
