import { initializeCategories } from "helper/initialReduxState";
import { initializeStore } from "@redux/index";
import { compose } from "utils/compose";
import { Contacts } from "@screens";

export default Contacts;

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
